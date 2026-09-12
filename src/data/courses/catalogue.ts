import type { CourseCategory, CoursePathway } from './types';

export const catalogueIntro =
  'Cognitecta training is designed and delivered by experienced practitioners. Courses combine technical depth, clear explanation and hands-on work, with content that can be adapted to your organisation, technology stack and objectives.';

export const courseCategories: CourseCategory[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    summary: 'Accurate models of how generative AI works, and how to use it with judgement.',
  },
  {
    id: 'leadership',
    title: 'Leadership',
    summary: 'Architectural, commercial and organisational decisions about AI.',
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    summary: 'Building, testing, securing and operating applications that use large language models.',
  },
  {
    id: 'rag-agents',
    title: 'RAG & Agents',
    summary: 'Retrieval systems, tool-using agents, and the combination of the two.',
  },
  {
    id: 'architecture',
    title: 'Architecture',
    summary: 'Enterprise shape: platforms, assistants, security boundaries and production concerns.',
  },
  {
    id: 'models-ml',
    title: 'Models & Machine Learning',
    summary: 'How models work, how they are adapted, and how they are run.',
  },
  {
    id: 'cloud-platform',
    title: 'Cloud & Platform',
    summary: 'Cloud implementations and the internal platforms that make AI usable across teams.',
  },
  {
    id: 'workshops',
    title: 'Workshops',
    summary: 'Focused build days and facilitated working sessions around a real problem.',
  },
];

export const coursePathways: CoursePathway[] = [
  {
    id: 'developer',
    title: 'Developer pathway',
    summary:
      'For software engineers who need to move from a working understanding of generative AI to production systems.',
    slugs: [
      'generative-ai-fundamentals',
      'ai-engineering-for-software-developers',
      'rag-from-fundamentals-to-production',
      'building-ai-agents',
      'production-ai-architecture',
    ],
  },
  {
    id: 'architect',
    title: 'Architect pathway',
    summary:
      'For architects and senior technical leaders who have to set the shape of AI systems and the platform around them.',
    slugs: [
      'generative-ai-fundamentals',
      'ai-for-technical-leaders',
      'production-ai-architecture',
      'architecting-enterprise-generative-ai',
      'ai-platform-engineering',
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership pathway',
    summary:
      'For business and technical leaders who need to judge where AI is useful, and how to take a first serious step.',
    slugs: [
      'generative-ai-fundamentals',
      'ai-for-business-leaders',
      'ai-use-case-discovery-workshop',
      'ai-architecture-workshop',
    ],
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI pathway',
    summary:
      'For practitioners who need a deeper model of how language models work, and how they are trained and adapted.',
    slugs: [
      'how-large-language-models-work',
      'transformers-from-first-principles',
      'fine-tuning-language-models',
      'training-your-own-language-model',
    ],
  },
];

export const deliveryOptions = {
  title: 'Delivery',
  body: 'Cognitecta delivers private corporate training, on-site or as remote live training. Courses can be run as published, or adapted to the organisation’s stack, domain and experience level.',
};

export const bespokeTraining = {
  title: 'Bespoke training',
  lede: 'Most engagements are shaped to the organisation. The published catalogue is a starting point, not a constraint.',
  points: [
    'Tailor an existing course to a particular stack, domain or experience level.',
    'Combine modules from several courses into a single programme.',
    'Build a programme around the organisation’s architecture, data and constraints.',
    'Use customer-specific case studies, systems and design problems.',
    'Create multi-day or multi-week learning programmes for engineering teams.',
    'Deliver technical enablement alongside consultancy or implementation, so the people who will own the system stay in the work.',
  ],
};
