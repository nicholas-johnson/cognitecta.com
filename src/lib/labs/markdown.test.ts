import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  parseDescription,
  parseTitle,
  rewriteHref,
  rewriteLabMarkdown,
  stripFirstH1,
  stripSlidesSection,
} from './markdown.ts';

const ctx = {
  programme: 'ai-engineering',
  kind: 'module' as const,
  moduleDir: 'module-05-rag-fundamentals',
  moduleSlug: '05-rag-fundamentals',
  githubUrl: 'https://github.com/nicholas-johnson/ai-with-python-course',
};

test('parses the first heading as the title', () => {
  assert.equal(parseTitle('# Module 5 — RAG Fundamentals\n\nHello'), 'Module 5 — RAG Fundamentals');
});

test('uses the opening blockquote as the description', () => {
  const markdown = `# Title

> Retrieval-Augmented Generation (RAG) bridges the gap.

## Next
`;
  assert.match(parseDescription(markdown), /Retrieval-Augmented Generation/);
});

test('strips the slides section and the first heading', () => {
  const markdown = `# Title

Body

## Slides

From repo root: \`pnpm slides:05\`.

## Reference

- A link
`;
  const stripped = stripFirstH1(stripSlidesSection(markdown));
  assert.equal(stripped.includes('## Slides'), false);
  assert.equal(stripped.startsWith('Body'), true);
  assert.equal(stripped.includes('## Reference'), true);
});

test('rewrites exercise folder links onto the site', () => {
  assert.equal(
    rewriteHref('exercises/01-build-index/', ctx),
    '/training/ai-engineering/labs/05-rag-fundamentals/01-build-index',
  );
});

test('rewrites sibling module links onto the site', () => {
  assert.equal(
    rewriteHref('../module-06-structured-facts/README.md', ctx),
    '/training/ai-engineering/labs/06-structured-facts',
  );
});

test('sends demo and other relative files to GitHub', () => {
  assert.equal(
    rewriteHref('demo/README.md', ctx),
    'https://github.com/nicholas-johnson/ai-with-python-course/blob/main/module-05-rag-fundamentals/demo/README.md',
  );
  assert.equal(
    rewriteHref('demo/', ctx),
    'https://github.com/nicholas-johnson/ai-with-python-course/tree/main/module-05-rag-fundamentals/demo',
  );
});

test('leaves external links alone', () => {
  assert.equal(rewriteHref('https://docs.trychroma.com/', ctx), 'https://docs.trychroma.com/');
  assert.equal(rewriteHref('#chunking', ctx), '#chunking');
});

test('rewrites markdown links in a module README', () => {
  const rewritten = rewriteLabMarkdown(
    `# Module

See [the exercise](exercises/01-build-index/) and [the demo](demo/README.md).
`,
    ctx,
  );
  assert.equal(rewritten.includes('# Module'), false);
  assert.equal(
    rewritten.includes('/training/ai-engineering/labs/05-rag-fundamentals/01-build-index'),
    true,
  );
  assert.equal(rewritten.includes('blob/main/module-05-rag-fundamentals/demo/README.md'), true);
});

test('drops the opening blockquote used as the page description', () => {
  const rewritten = rewriteLabMarkdown(
    `# Title

> A long framing paragraph.

## Learning goals

- One
`,
    ctx,
  );
  assert.equal(rewritten.includes('A long framing paragraph'), false);
  assert.equal(rewritten.includes('## Learning goals'), true);
});

test('rewrites sibling exercise links from an exercise README', () => {
  const href = rewriteHref('../02-rag-chat', {
    ...ctx,
    kind: 'exercise',
    exerciseDir: '01-build-index',
  });
  assert.equal(href, '/training/ai-engineering/labs/05-rag-fundamentals/02-rag-chat');
});
