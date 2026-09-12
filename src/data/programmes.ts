export const programmes = [
  {
    slug: 'ai-engineering',
    title: 'AI Engineering with Python',
    kicker: '02 / Programme',
    seoTitle: 'AI Engineering with Python',
    description:
      'A three-day, practitioner-led programme for engineering teams: agents, tool calling, RAG and production AI systems in Python. From £10,000 for up to 12 participants, on-site or remote.',
    summary: 'Working agents, retrieval and production systems in Python.',
    lede: 'Build working AI systems in Python — agents, retrieval, and the production concerns that decide whether a prototype can leave the lab.',
    duration: '3 days',
    format: 'On-site or remote',
    capacity: 'Up to 12 participants',
    priceFrom: 10000,
    currency: 'GBP',
    who: 'Software engineers and technical leads who will design, integrate and own LLM systems — not a room being shown a chatbot.',
    whoNot: 'It is not an executive overview, and it is not a survey of products. Delegates write, test and run code.',
    outcomes: [
      'Call, stream and constrain an LLM from Python, with prompts that can be tested.',
      'Build a tool-calling agent with a registry, safety rails and an evaluation harness.',
      'Stand up RAG: chunking, embeddings, retrieval, grounded answers with citations.',
      'Reason about memory, multi-agent patterns and when they are worth the complexity.',
      'Take a system toward production: tracing, cost, guardrails, and a deployable service.',
    ],
    days: [
      {
        id: '01',
        title: 'A working agent',
        body: 'Python for the job, then LLM APIs, streaming, tool calling, MCP, and a research-assistant application that closes the day.',
      },
      {
        id: '02',
        title: 'Knowledge and retrieval',
        body: 'RAG fundamentals, structured facts and knowledge graphs, agent memory, then ReAct and plan-and-execute workflows.',
      },
      {
        id: '03',
        title: 'Ship it',
        body: 'Multi-agent coordination, framework-powered loops where they help, evaluation and guardrails, then production hardening and a capstone service.',
      },
    ],
    taught:
      'Live engineering education. Delegates work in a Python lab with tests. Demos are run, not slid through. The programme can be tailored to the organisation’s stack; the spine stays the same.',
  },
  {
    slug: 'applied-nlp',
    title: 'Applied NLP with Python',
    kicker: '02 / Programme',
    seoTitle: 'Applied NLP with Python',
    description:
      'A two-day, practitioner-led programme: classical NLP through transformers, in Python. From £7,000 for up to 12 participants, on-site or remote.',
    summary: 'Classical NLP through transformers, in Python.',
    lede: 'Turn unstructured text into systems you can evaluate — from preprocessing and classification to embeddings, NER and transformers.',
    duration: '2 days',
    format: 'On-site or remote',
    capacity: 'Up to 12 participants',
    priceFrom: 7000,
    currency: 'GBP',
    who: 'Engineers and analysts who need to build text pipelines in Python: search, classification, extraction, or a path into modern models.',
    whoNot: 'It is not a linguistics seminar, and it is not a one-hour tour of a hosted API. Delegates implement, measure and compare.',
    outcomes: [
      'Build a preprocessing and feature pipeline you can defend: tokens, TF-IDF, similarity.',
      'Train and evaluate classical classifiers with honest metrics.',
      'Use topic models and embeddings to explore a corpus without pretending the topics are truth.',
      'Extract structure with spaCy: POS, dependencies, named entities.',
      'Run transformer pipelines, understand tokenisation, and take a model to a small deployed service.',
    ],
    days: [
      {
        id: '01',
        title: 'Classical stack',
        body: 'Python for text, preprocessing, bag-of-words and TF-IDF, classification, then topic modelling as the closer.',
      },
      {
        id: '02',
        title: 'Meaning and models',
        body: 'Word embeddings and semantic search, linguistic structure with spaCy, transformers, then an end-to-end pipeline and a FastAPI service.',
      },
    ],
    taught:
      'Labs with pytest, live coding, and comparison against real public corpora as well as course data. Slides support the room; they are not the course.',
  },
] as const;

export type Programme = (typeof programmes)[number];

export function getProgramme(slug: string) {
  return programmes.find((item) => item.slug === slug);
}

export function programmeHref(slug: string) {
  return `/training/${slug}`;
}

export function programmeContactHref(slug: string) {
  return `/contact?programme=${slug}`;
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(amount);
}
