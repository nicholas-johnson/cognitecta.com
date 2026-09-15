import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Loader } from 'astro/loaders';
import type { LabSource } from '../../data/labs.ts';
import { parseDescription, parseTitle, rewriteLabMarkdown } from './markdown.ts';
import {
  exerciseSlugFromDir,
  labEntryId,
  moduleIdFromDir,
  moduleSlugFromDir,
  resolveLabRoots,
} from './paths.ts';

const SOURCE_FILES = ['start.py', 'test_start.py', 'solution.py'] as const;

export interface LabSourceFile {
  filename: string;
  lang: string;
  content: string;
}

export function labLoader(): Loader {
  return {
    name: 'lab-handbook',
    load: async ({ store, logger, parseData, generateDigest, watcher, renderMarkdown }) => {
      store.clear();
      const resolved = resolveLabRoots();
      const missing = resolved.filter((item) => !item.root);

      for (const item of missing) {
        logger.warn(
          `Lab source for ${item.source.programme} not found. Set ${item.source.envVar} or clone into ${item.source.localCandidates.join(' or ')}.`,
        );
      }

      for (const { source, root } of resolved) {
        if (!root) continue;
        watcher?.add(root);
        const entries = await collectLabs(source, root, (message) => logger.warn(message));
        for (const entry of entries) {
          const data = await parseData({ id: entry.id, data: entry.data });
          const rendered = await renderMarkdown(entry.body);
          store.set({
            id: entry.id,
            data,
            body: entry.body,
            rendered,
            digest: generateDigest(entry.body + JSON.stringify(entry.data.sources ?? [])),
          });
        }
        logger.info(`Loaded ${entries.length} lab pages from ${source.programme} (${root})`);
      }
    },
  };
}

async function collectLabs(
  source: LabSource,
  root: string,
  warn: (message: string) => void,
) {
  const modules = (await readdir(root, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && moduleSlugFromDir(entry.name))
    .map((entry) => entry.name)
    .sort();

  const collected: Array<{
    id: string;
    body: string;
    data: Record<string, unknown>;
  }> = [];

  for (const moduleDir of modules) {
    const moduleSlug = moduleSlugFromDir(moduleDir);
    const moduleId = moduleIdFromDir(moduleDir);
    if (!moduleSlug || !moduleId) continue;

    const moduleReadme = path.join(root, moduleDir, 'README.md');
    if (!existsSync(moduleReadme)) {
      warn(`Skipping ${moduleDir}: no README.md`);
      continue;
    }

    const raw = await readFile(moduleReadme, 'utf8');
    const rewriteCtx = {
      programme: source.programme,
      kind: 'module' as const,
      moduleDir,
      moduleSlug,
      githubUrl: source.githubUrl,
    };
    const body = rewriteLabMarkdown(raw, rewriteCtx);
    const order = Number(moduleId) * 100;
    const id = labEntryId(source.programme, moduleSlug);

    collected.push({
      id,
      body,
      data: {
        programme: source.programme,
        kind: 'module',
        moduleDir,
        moduleSlug,
        moduleId,
        title: parseTitle(raw),
        description: parseDescription(raw),
        order,
        githubUrl: `${source.githubUrl}/tree/main/${moduleDir}`,
        githubFolder: moduleDir,
      },
    });

    const exercisesRoot = path.join(root, moduleDir, 'exercises');
    if (!existsSync(exercisesRoot)) continue;

    const exerciseDirs = (await readdir(exercisesRoot, { withFileTypes: true }))
      .filter((entry) => entry.isDirectory() && exerciseSlugFromDir(entry.name))
      .map((entry) => entry.name)
      .sort();

    for (const exerciseDir of exerciseDirs) {
      const exerciseReadme = path.join(exercisesRoot, exerciseDir, 'README.md');
      if (!existsSync(exerciseReadme)) continue;

      const exerciseRaw = await readFile(exerciseReadme, 'utf8');
      const exerciseCtx = {
        programme: source.programme,
        kind: 'exercise' as const,
        moduleDir,
        moduleSlug,
        exerciseDir,
        githubUrl: source.githubUrl,
      };
      const exerciseBody = rewriteLabMarkdown(exerciseRaw, exerciseCtx);
      const exerciseOrder = Number(exerciseDir.match(/^(\d+)/)?.[1] ?? 0);
      const sources = await readSourceFiles(path.join(exercisesRoot, exerciseDir));

      collected.push({
        id: labEntryId(source.programme, moduleSlug, exerciseDir),
        body: exerciseBody,
        data: {
          programme: source.programme,
          kind: 'exercise',
          moduleDir,
          moduleSlug,
          moduleId,
          exerciseDir,
          exerciseSlug: exerciseDir,
          title: parseTitle(exerciseRaw),
          description: parseDescription(exerciseRaw),
          order: order + exerciseOrder,
          githubUrl: `${source.githubUrl}/tree/main/${moduleDir}/exercises/${exerciseDir}`,
          githubFolder: `${moduleDir}/exercises/${exerciseDir}`,
          sources,
        },
      });
    }
  }

  return collected;
}

async function readSourceFiles(dir: string): Promise<LabSourceFile[]> {
  const files: LabSourceFile[] = [];
  for (const filename of SOURCE_FILES) {
    const filePath = path.join(dir, filename);
    if (!existsSync(filePath)) continue;
    files.push({
      filename,
      lang: 'python',
      content: await readFile(filePath, 'utf8'),
    });
  }
  return files;
}
