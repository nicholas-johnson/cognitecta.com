import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  exerciseSlugFromDir,
  labEntryId,
  moduleIdFromDir,
  moduleSlugFromDir,
} from './paths.ts';

test('derives module slugs and ids from folder names', () => {
  assert.equal(moduleSlugFromDir('module-05-rag-fundamentals'), '05-rag-fundamentals');
  assert.equal(moduleIdFromDir('module-05-rag-fundamentals'), '05');
  assert.equal(moduleSlugFromDir('slides'), undefined);
});

test('accepts numbered exercise folders only', () => {
  assert.equal(exerciseSlugFromDir('01-build-index'), '01-build-index');
  assert.equal(exerciseSlugFromDir('data'), undefined);
});

test('builds collection ids from programme and slugs', () => {
  assert.equal(labEntryId('ai-engineering', '05-rag-fundamentals'), 'ai-engineering/05-rag-fundamentals');
  assert.equal(
    labEntryId('ai-engineering', '05-rag-fundamentals', '01-build-index'),
    'ai-engineering/05-rag-fundamentals/01-build-index',
  );
});
