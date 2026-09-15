import { existsSync } from 'node:fs';
import path from 'node:path';
import { labSources, type LabSource } from '../../data/labs.ts';

const MODULE_DIR = /^module-(\d+)-(.+)$/;
const EXERCISE_DIR = /^(\d+)-(.+)$/;

export function moduleSlugFromDir(dir: string): string | undefined {
  const match = dir.match(MODULE_DIR);
  if (!match) return undefined;
  return `${match[1]}-${match[2]}`;
}

export function moduleIdFromDir(dir: string): string | undefined {
  return dir.match(MODULE_DIR)?.[1];
}

export function exerciseSlugFromDir(dir: string): string | undefined {
  return EXERCISE_DIR.test(dir) ? dir : undefined;
}

export function labEntryId(programme: string, moduleSlug: string, exerciseSlug?: string) {
  return exerciseSlug ? `${programme}/${moduleSlug}/${exerciseSlug}` : `${programme}/${moduleSlug}`;
}

export function resolveLabRoot(source: LabSource, projectRoot = process.cwd()): string | undefined {
  const fromEnv = process.env[source.envVar];
  if (fromEnv) {
    const abs = path.resolve(fromEnv);
    if (hasModules(abs)) return abs;
  }

  for (const candidate of source.localCandidates) {
    const abs = path.resolve(projectRoot, candidate);
    if (hasModules(abs)) return abs;
  }

  return undefined;
}

export function resolveLabRoots(projectRoot = process.cwd()) {
  return labSources.map((source) => ({
    source,
    root: resolveLabRoot(source, projectRoot),
  }));
}

function hasModules(root: string) {
  if (!existsSync(root)) return false;
  return existsSync(path.join(root, 'module-00-python-fundamentals'))
    || existsSync(path.join(root, 'module-00-python-for-text'))
    || existsSync(path.join(root, 'README.md'));
}
