import type { ProductSlug } from './products';

export const labProgrammeSlugs = ['ai-engineering', 'applied-nlp'] as const;

export type LabProgrammeSlug = (typeof labProgrammeSlugs)[number];

export interface LabRelatedProduct {
  slug: ProductSlug;
  label: string;
}

export interface LabSource {
  programme: LabProgrammeSlug;
  title: string;
  theme: string;
  githubRepo: string;
  githubUrl: string;
  clone: string;
  envVar: 'AI_COURSE_ROOT' | 'NLP_COURSE_ROOT';
  localCandidates: string[];
  relatedProducts: LabRelatedProduct[];
}

export const labSources: LabSource[] = [
  {
    programme: 'ai-engineering',
    title: 'AI Engineering with Python',
    theme: 'Deep Space Ops',
    githubRepo: 'nicholas-johnson/ai-with-python-course',
    githubUrl: 'https://github.com/nicholas-johnson/ai-with-python-course',
    clone: 'git clone https://github.com/nicholas-johnson/ai-with-python-course.git',
    envVar: 'AI_COURSE_ROOT',
    localCandidates: ['../ai-python-course', 'vendor/ai-with-python-course'],
    relatedProducts: [
      { slug: 'platform', label: 'Platform' },
      { slug: 'chat', label: 'Chat' },
    ],
  },
  {
    programme: 'applied-nlp',
    title: 'Applied NLP with Python',
    theme: 'Inkwell Investigations',
    githubRepo: 'nicholas-johnson/nlp-detective-agency',
    githubUrl: 'https://github.com/nicholas-johnson/nlp-detective-agency',
    clone: 'git clone https://github.com/nicholas-johnson/nlp-detective-agency.git',
    envVar: 'NLP_COURSE_ROOT',
    localCandidates: ['../nlp-python-course', 'vendor/nlp-python-course'],
    relatedProducts: [],
  },
];

export function getLabSource(programme: string) {
  return labSources.find((source) => source.programme === programme);
}

export function isLabProgramme(slug: string): slug is LabProgrammeSlug {
  return labProgrammeSlugs.includes(slug as LabProgrammeSlug);
}

export function labIndexHref(programme: string) {
  return `/training/${programme}/labs`;
}

export function labModuleHref(programme: string, moduleSlug: string) {
  return `/training/${programme}/labs/${moduleSlug}`;
}

export function labExerciseHref(programme: string, moduleSlug: string, exerciseSlug: string) {
  return `/training/${programme}/labs/${moduleSlug}/${exerciseSlug}`;
}
