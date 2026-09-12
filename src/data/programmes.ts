export const programmes = [
  {
    slug: 'ai-engineering',
    title: 'AI Engineering with Python',
    kicker: '02 / Programme',
    seoTitle: 'AI Engineering with Python',
    description:
      'A three-day, practitioner-led programme for engineering teams: agents, tool calling, MCP, RAG, multi-agent systems and production AI in Python. From £10,000 for up to 12 participants, on-site or remote.',
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
      'Call, stream and constrain an LLM from Python, with prompts and structured outputs that can be tested.',
      'Build a tool-calling agent with a registry, allowlists, rate limits, audit logs and an evaluation harness.',
      'Stand up MCP servers and wire them into an agent over stdio, including live tools and structured data.',
      'Index a corpus, retrieve with citations, and compare dense, sparse, hybrid and reranked search.',
      'Extract facts into a graph, add memory with decay, and run ReAct and plan-and-execute loops.',
      'Take a system toward production: tracing, retries, cost controls, guardrails, and a deployable FastAPI service.',
    ],
    days: [
      {
        id: '01',
        title: 'Build a working agent',
        modules: [
          {
            id: '00',
            title: 'Python fundamentals',
            body: 'The engineering substrate the rest of the week sits on: dataclasses and Protocols, CLI and logging, asyncio (tasks, queues, timeouts, cancellation), then HTTP with FastAPI and httpx.',
          },
          {
            id: '01',
            title: 'Working with the LLM',
            body: 'Chat completions, message roles and parameters; token streaming; prompting for structured outputs, grounding and tool calling; a console chat with session storage.',
          },
          {
            id: '02',
            title: 'Tool calling',
            body: 'Tool-call message format and agent state. A decorator-based registry (schema, validation, routing, errors). Safety rails: allowlists, rate limits, redaction, audit logs. An evaluation harness with golden tests, replay and deterministic mocks.',
          },
          {
            id: '03',
            title: 'MCP servers',
            body: 'MCP as a protocol: tool discovery, schemas, calling conventions. FastMCP servers over stdio, dynamic discovery, and practical tools — structured data, web fetch, file I/O — connected to a live agent.',
          },
          {
            id: '04',
            title: 'A research assistant',
            body: 'Day 1 closer. Model selection, structured outputs, multimodal (vision and transcription), FastAPI with SSE streaming, and MCP tools inside a web API. The agent leaves the console.',
          },
        ],
      },
      {
        id: '02',
        title: 'Knowledge and retrieval',
        modules: [
          {
            id: '05',
            title: 'RAG fundamentals',
            body: 'Chunking (size, overlap, structure-aware), embeddings, vector stores. Dense, sparse, hybrid retrieval and reranking. Grounded prompting with citations, a comparison with and without retrieval, RAG evaluation, then the same index exposed as an MCP server.',
          },
          {
            id: '06',
            title: 'Structured facts',
            body: 'Pydantic and JSON Schema structured outputs. Fact extraction with provenance and confidence. Knowledge graphs: entities, relations, path queries. Grounded QA that must cite [Fact N] or refuse.',
          },
          {
            id: '07',
            title: 'Agent memory',
            body: 'Short-term session buffer versus long-term profile. Summarisation against a token budget. Decay and “do not remember”. Memory exposed as an MCP server so the agent can read and write it as a tool.',
          },
          {
            id: '08',
            title: 'Structured workflows',
            body: 'Day 2 closer. ReAct (reason, act, observe), plan-and-execute with replanning, tool routing, and structured execution traces — workflows as software, not a prompt that hopes.',
          },
        ],
      },
      {
        id: '03',
        title: 'Ship it',
        modules: [
          {
            id: '09',
            title: 'Multi-agent systems',
            body: 'When multiple agents help, and when they add failure modes. Roles (router, specialist, critic). Coordination: supervisor, swarm, debate, blackboard. Shared context, scoped tools, peer handoffs, consensus and conflict.',
          },
          {
            id: '10',
            title: 'LangChain, as a choice',
            body: 'LCEL, prompt templates, output parsers, AgentExecutor, RetrievalQA, LangServe. The same loops already written by hand, now in a framework — so the room can judge the abstraction rather than start inside it.',
          },
          {
            id: '11',
            title: 'Edge topics',
            body: 'Pick-and-choose, according to the room: hybrid search, reranking, HyDE, agentic RAG, citation verification, web-search backends, text-to-SQL, LLM evaluation, fine-tuning datasets, guardrails, semantic caching, multimodal RAG, contextual chunking.',
          },
          {
            id: '12',
            title: 'Productionisation',
            body: 'Tracing, retries, circuit breakers, cost controls, deployment. Capstone: a production FastAPI backend for a real interface — RAG with hybrid search and reranking, agentic RAG with tools, or chat + MCP with cost controls.',
          },
        ],
      },
    ],
    taught:
      'Live engineering education. Delegates work in a Python lab with pytest on every exercise. Demos are run, not slid through. The programme can be tailored to the organisation’s stack; the spine stays the same.',
  },
  {
    slug: 'applied-nlp',
    title: 'Applied NLP with Python',
    kicker: '02 / Programme',
    seoTitle: 'Applied NLP with Python',
    description:
      'A two-day, practitioner-led programme: classical NLP through transformers, in Python — preprocessing, TF-IDF, classification, topic models, embeddings, spaCy and Hugging Face. From £7,000 for up to 12 participants, on-site or remote.',
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
      'Build a preprocessing pipeline you can defend: tokenisation, Unicode normalisation, stemming, lemmatisation.',
      'Vectorise a corpus with bag-of-words, n-grams and TF-IDF, and retrieve with cosine similarity.',
      'Train and compare Naive Bayes, logistic regression and SVM with precision, recall, F1 and cross-validation.',
      'Fit LDA and NMF, and interpret topics against a corpus that has known labels.',
      'Train Word2Vec, use GloVe, and see where static embeddings beat TF-IDF — and where they do not.',
      'Extract structure with spaCy (POS, dependencies, NER, EntityRuler), run transformer pipelines, and deploy a FastAPI service.',
    ],
    days: [
      {
        id: '01',
        title: 'Classical NLP foundations',
        modules: [
          {
            id: '00',
            title: 'Python for text',
            body: 'The analyst’s toolkit: strings and f-strings, regular expressions, pathlib and encoding, Counter and defaultdict, type hints, argparse. Load a corpus, extract structure, compute frequencies.',
          },
          {
            id: '01',
            title: 'Text preprocessing',
            body: 'Tokenisation (NLTK Punkt and spaCy), case folding, regex cleaning, Unicode normalisation, stopwords, Porter stemming, WordNet lemmatisation. A pipeline you can run over a batch and audit.',
          },
          {
            id: '02',
            title: 'Feature extraction',
            body: 'The vector space model. Bag-of-words, n-grams, TF-IDF (weighting, variants, smoothing), cosine similarity, sparsity. scikit-learn vectorisers. Fingerprint documents and rank nearest neighbours.',
          },
          {
            id: '03',
            title: 'Text classification',
            body: 'Train/test splits and sklearn pipelines. Naive Bayes, logistic regression, SVM. Precision, recall, F1, confusion matrices, cross-validation. A classifier shootout on the same split — including a real public corpus, not only course data.',
          },
          {
            id: '04',
            title: 'Topic modelling',
            body: 'Day 1 closer. Unsupervised discovery: LDA (the generative story, Dirichlet priors), NMF, perplexity and coherence, labelling topics. Compare models and topic counts against a corpus with known categories, so the topics cannot hide.',
          },
        ],
      },
      {
        id: '02',
        title: 'Meaning, structure, and models',
        modules: [
          {
            id: '05',
            title: 'Word embeddings',
            body: 'Distributional semantics. Word2Vec (CBOW, skip-gram, negative sampling), GloVe, document vectors. Similarity, analogies, odd-one-out. Static versus contextual embeddings. Optional API embeddings for the pairs TF-IDF misses.',
          },
          {
            id: '06',
            title: 'Linguistic structure',
            body: 'The spaCy pipeline. UPOS tagging, dependency parsing and SVO extraction, NER (BIO scheme, span-level precision and recall), EntityRuler for domain IDs and other custom entities.',
          },
          {
            id: '07',
            title: 'Transformers',
            body: 'Self-attention (Q/K/V), multi-head attention, positional encodings. BERT (MLM, NSP), DistilBERT, BPE and WordPiece. Hugging Face pipelines: sentiment, NER, zero-shot, summarisation. Generation temperature. Optional DistilBERT fine-tuning.',
          },
          {
            id: '08',
            title: 'Capstone pipeline',
            body: 'End to end on a real public corpus: choose data, train a baseline, compare a transformer, persist with joblib, error analysis, deploy as a FastAPI service.',
          },
        ],
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
