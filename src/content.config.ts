import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { labProgrammeSlugs } from './data/labs';
import { labLoader } from './lib/labs/loader';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const labSourceFile = z.object({
  filename: z.string(),
  lang: z.string(),
  content: z.string(),
});

const labs = defineCollection({
  loader: labLoader(),
  schema: z.object({
    programme: z.enum(labProgrammeSlugs),
    kind: z.enum(['module', 'exercise']),
    moduleDir: z.string(),
    moduleSlug: z.string(),
    moduleId: z.string(),
    exerciseDir: z.string().optional(),
    exerciseSlug: z.string().optional(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
    githubUrl: z.string(),
    githubFolder: z.string(),
    sources: z.array(labSourceFile).optional(),
  }),
});

export const collections = { insights, labs };
