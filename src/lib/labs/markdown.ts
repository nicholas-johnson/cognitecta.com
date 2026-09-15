import path from 'node:path';
import { labExerciseHref, labModuleHref } from '../../data/labs';

export interface RewriteContext {
  programme: string;
  kind: 'module' | 'exercise';
  moduleDir: string;
  moduleSlug: string;
  exerciseDir?: string;
  githubUrl: string;
}

const LINK = /(!?\[)([^\]]*)\]\(([^)]+)\)/g;

export function stripSlidesSection(markdown: string): string {
  return markdown
    .replace(/^## Slides[^\n]*\n(?:(?!^## ).*\n?)*/gm, '')
    .replace(/\n{3,}/g, '\n\n');
}

export function stripFirstH1(markdown: string): string {
  return markdown.replace(/^#\s+.+\n+/, '');
}

export function parseTitle(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? cleanInline(match[1]) : 'Untitled';
}

export function parseDescription(markdown: string, limit = 220): string {
  const withoutTitle = stripFirstH1(markdown).trim();
  const quote = takeBlockquote(withoutTitle);
  if (quote) return truncate(quote, limit);
  const paragraph = takeParagraph(withoutTitle);
  return truncate(paragraph || 'Lab notes from the Linear Horizon training programme.', limit);
}

export function rewriteLabMarkdown(markdown: string, ctx: RewriteContext): string {
  const prepared = stripFirstH1(stripSlidesSection(markdown));
  return prepared.replace(LINK, (full, open: string, text: string, href: string) => {
    const rewritten = rewriteHref(href.trim(), ctx);
    return `${open}${text}](${rewritten})`;
  });
}

export function rewriteHref(href: string, ctx: RewriteContext): string {
  const trimmed = href.trim();
  if (!trimmed || isExternalOrAbsolute(trimmed)) return trimmed;

  const [rawPath, hash = ''] = splitHash(trimmed);
  const cleaned = rawPath.replace(/\\/g, '/').replace(/\/$/, '');

  const exerciseMatch = cleaned.match(/(?:^|\/)exercises\/(\d+-[^/]+)/);
  if (exerciseMatch) {
    return `${labExerciseHref(ctx.programme, ctx.moduleSlug, exerciseMatch[1])}${hash}`;
  }

  const moduleMatch = cleaned.match(/(?:^|\/)module-(\d+-[^/]+)/);
  if (moduleMatch) {
    const rest = cleaned.split(`module-${moduleMatch[1]}`)[1] ?? '';
    const nestedExercise = rest.match(/^\/exercises\/(\d+-[^/]+)/);
    if (nestedExercise) {
      return `${labExerciseHref(ctx.programme, moduleMatch[1], nestedExercise[1])}${hash}`;
    }
    return `${labModuleHref(ctx.programme, moduleMatch[1])}${hash}`;
  }

  if (ctx.kind === 'exercise' && cleaned.startsWith('../')) {
    const sibling = cleaned.replace(/^\.\.\//, '').replace(/\/README\.md$/, '');
    if (/^\d+-/.test(sibling) && !sibling.includes('/')) {
      return `${labExerciseHref(ctx.programme, ctx.moduleSlug, sibling)}${hash}`;
    }
  }

  return githubUrlFor(cleaned, ctx, hash);
}

function githubUrlFor(relative: string, ctx: RewriteContext, hash: string): string {
  const from = ctx.kind === 'exercise' && ctx.exerciseDir
    ? `${ctx.moduleDir}/exercises/${ctx.exerciseDir}/${relative}`
    : `${ctx.moduleDir}/${relative}`;
  const normalised = path.posix.normalize(from).replace(/^\.\.(\/|$)/g, '');
  const kind = looksLikeFile(normalised) ? 'blob' : 'tree';
  return `${ctx.githubUrl}/${kind}/main/${normalised}${hash}`;
}

function looksLikeFile(value: string) {
  return /\.[a-z0-9]+$/i.test(value);
}

function isExternalOrAbsolute(href: string) {
  return /^(https?:|mailto:|tel:|#|\/)/i.test(href);
}

function splitHash(href: string): [string, string] {
  const index = href.indexOf('#');
  if (index === -1) return [href, ''];
  return [href.slice(0, index), href.slice(index)];
}

function takeBlockquote(markdown: string): string | undefined {
  const lines: string[] = [];
  for (const line of markdown.split('\n')) {
    if (line.startsWith('>')) {
      lines.push(line.replace(/^>\s?/, ''));
      continue;
    }
    if (lines.length) break;
    if (line.trim() === '') continue;
    break;
  }
  const text = cleanInline(lines.join(' '));
  return text || undefined;
}

function takeParagraph(markdown: string): string | undefined {
  const lines: string[] = [];
  for (const line of markdown.split('\n')) {
    if (/^(\s*$|#|\||```|>|- |\* |\d+\.\s|<!--)/.test(line)) {
      if (lines.length) break;
      continue;
    }
    lines.push(line);
  }
  const text = cleanInline(lines.join(' '));
  return text || undefined;
}

function cleanInline(value: string) {
  return value.replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
}

function truncate(value: string, limit: number) {
  if (value.length <= limit) return value;
  return `${value.slice(0, limit - 1).trimEnd()}…`;
}
