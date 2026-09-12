import type { Course } from './types';

export const engineeringCourses: Course[] = [
  {
    slug: 'ai-engineering-for-software-developers',
    title: 'AI Engineering for Software Developers',
    shortDescription:
      'A three-day programme for professional software engineers: how to build real applications with modern AI, from model APIs and RAG through agents, evaluation and production patterns.',
    overview:
      'Most software engineers are now expected to put large language models into applications. The gap is not access to an API. It is the engineering around it: structured outputs, retrieval, tools, evaluation, security, testing and the production behaviour of a non-deterministic component.\n\nThis course teaches those fundamentals before any particular framework. Participants call models, constrain outputs, build embeddings and retrieval, then add tool calling, agents and orchestration. Context engineering, evaluation and observability are treated as part of the design, not as later extras.\n\nThe labs are substantial. Delegates write working software, compare approaches, and learn to recognise when a framework is helping and when it is hiding a design they will have to own. The course is not bound to a single vendor SDK or agent library.\n\nAfter three days, engineers can design and implement AI-backed features with the same seriousness they would apply to any other production integration: interfaces, failure modes, tests, and an honest account of what the model is allowed to do.',
    audience:
      'Professional software developers with little or moderate AI experience. Suitable for senior developers and technical leads who will implement, review or own LLM-backed features.',
    audienceLabel: 'Software developers',
    prerequisites:
      'Professional software development experience and comfort writing backend or full-stack code. Familiarity with HTTP APIs and JSON is expected. Python or TypeScript is used in labs; the concepts are not language-specific. No machine-learning background is required.',
    duration: '3 days',
    durationNote: 'Can be condensed to two days for experienced teams, or extended with a fourth day on the organisation’s stack.',
    level: 'Intermediate',
    category: 'ai-engineering',
    outcomes: [
      'Implement LLM API calls with streaming, retries, structured outputs and explicit model selection.',
      'Design prompts and output schemas that can be tested rather than tuned by anecdote.',
      'Build embeddings, vector search and a retrieval pipeline that can be inspected and evaluated.',
      'Implement tool calling and a bounded agent loop, including failure handling and permissions.',
      'Apply context engineering: what to put in context, what to retrieve, and what to keep out.',
      'Evaluate quality with golden cases, semantic checks and traces, not only manual chat.',
      'Diagnose security, cost, latency and observability issues in an LLM-backed service.',
      'Deploy a production pattern: a service boundary, logging, and tests around a non-deterministic component.',
    ],
    outline: [
      {
        title: 'Model APIs as an engineering interface',
        points: [
          'Provider APIs, messages, system prompts, streaming and cancellation.',
          'Model selection: capability, context, cost, latency and lock-in.',
          'Structured outputs, JSON schemas and the difference between a request and a guarantee.',
          'Retries, timeouts and what “the model failed” should mean in application code.',
          'Lab: call, stream and constrain a model from application code.',
        ],
      },
      {
        title: 'Prompting, context and evaluation from the start',
        points: [
          'Prompt design as an interface: instructions, examples, constraints and untrusted input.',
          'Context windows, truncation and the cost of stuffing.',
          'Golden cases, assertions and why a chat transcript is not a test suite.',
          'Lab: write a prompt with tests, then break it with realistic inputs.',
        ],
      },
      {
        title: 'Embeddings, retrieval and RAG',
        points: [
          'Embeddings, similarity and the limits of vector search.',
          'Chunking, metadata, retrieval and assembling a grounded prompt.',
          'Citations, refusal and what to do when retrieval is empty or conflicting.',
          'Lab: build a small RAG path and measure a naive version against a better one.',
        ],
      },
      {
        title: 'Tools, agents and orchestration',
        points: [
          'Function calling, tool schemas and validating arguments before side effects.',
          'Agent loops versus explicit workflows; state, memory and stopping conditions.',
          'Orchestration without committing the design to a single framework.',
          'Lab: add tools to an application and keep the agent inside a permission boundary.',
        ],
      },
      {
        title: 'Production patterns',
        points: [
          'Observability: traces, prompt versions, token counts, retrieval records and user-visible errors.',
          'Security: prompt injection, data leakage, tool permissions and output handling.',
          'Testing, evaluation pipelines and regression when prompts or models change.',
          'Cost, caching, fallbacks and a deployable service boundary.',
          'Lab: take one of the week’s systems through tracing, tests and a production checklist.',
        ],
      },
    ],
    practicalWork:
      'The course is lab-heavy. Participants build against model APIs, add structured outputs and tests, implement retrieval, then introduce tools and a bounded agent. The final work is a small service with evaluation, tracing and explicit failure behaviour rather than a chat demo.',
    takeaways: [
      'Working code for API integration, RAG, tool calling and evaluation',
      'Reference implementations that are not tied to a single framework',
      'Prompt, schema and evaluation templates',
      'A production checklist for LLM-backed features',
    ],
  },
  {
    slug: 'building-applications-with-generative-ai',
    title: 'Building Applications with Generative AI',
    shortDescription:
      'A two-to-three-day build course for software engineers: take an AI-powered application from architecture through RAG, tools, evaluation and deployment, ending with an end-to-end system.',
    overview:
      'Isolated demos hide the parts of an AI application that determine whether it can be shipped: application structure, error handling, evaluation, cost, latency and the boundary between the model and the rest of the system. This course is organised around building one application, not around a sequence of disconnected labs.\n\nParticipants start with architecture and model APIs, then add prompt design, structured outputs, tools, context and retrieval. Memory, agents, guardrails and testing are introduced as the application becomes capable enough to need them. Cost, latency and deployment are treated as design constraints from the middle of the course, not as a closing discussion.\n\nThe course is practical and progressive. Each module extends the same system. The final project is an end-to-end application with a retrieval path, tools, evaluation and a deployment shape that could be handed to a team.\n\nEngineers leave with a working application and a clearer sense of which patterns belong in production and which only belong in a prototype.',
    audience:
      'Software engineers and technical teams who will implement AI-powered products or internal applications.',
    audienceLabel: 'Software engineers and technical teams',
    prerequisites:
      'Professional software development experience. Participants should be able to build and run a small web or backend application. Prior LLM experience is helpful but not required.',
    duration: '2–3 days',
    durationNote: 'Two days covers a complete application. Three days adds more depth on agents, evaluation and production hardening.',
    level: 'Intermediate',
    category: 'ai-engineering',
    outcomes: [
      'Design an application architecture that isolates model access, retrieval, tools and user-facing behaviour.',
      'Implement prompt design, structured outputs and tool use inside a real application rather than a notebook.',
      'Add retrieval and memory with explicit context construction and citations.',
      'Handle model, retrieval and tool failures without losing the user or the audit trail.',
      'Implement guardrails, evaluation and tests around the paths that matter.',
      'Measure and control cost and latency as part of the design.',
      'Deploy a working end-to-end application with a production-shaped boundary.',
    ],
    outline: [
      {
        title: 'Application architecture and model access',
        points: [
          'Separating UI, orchestration, model I/O, retrieval and tools.',
          'Model APIs, authentication, environment configuration and provider abstraction.',
          'Prompt design and structured outputs as application contracts.',
          'Build: stand up the application skeleton and a first constrained model call.',
        ],
      },
      {
        title: 'Context, retrieval and memory',
        points: [
          'What belongs in the prompt, what belongs in retrieval, and what belongs in application state.',
          'RAG: ingestion, retrieval, citations and refusal when evidence is missing.',
          'Conversational context and memory without pretending the model remembers.',
          'Build: add a knowledge path and inspect what was actually retrieved.',
        ],
      },
      {
        title: 'Tools, agents and error handling',
        points: [
          'Tools as application capabilities with schemas, permissions and timeouts.',
          'When an agent loop is justified, and when an explicit workflow is safer.',
          'Error handling: empty retrieval, invalid tool arguments, timeouts and partial success.',
          'Build: add a tool and a controlled agent or workflow path.',
        ],
      },
      {
        title: 'Evaluation, guardrails and deployment',
        points: [
          'Golden cases, output checks, groundedness and regression when prompts change.',
          'Guardrails: input handling, output handling, and blocking unsafe tool use.',
          'Cost, latency, caching and what to measure in production.',
          'Deployment: configuration, secrets, logging and a service that can be operated.',
          'Final project: complete the application and run it against an evaluation set.',
        ],
      },
    ],
    practicalWork:
      'Participants progressively build one application across the course. Typical shape: a domain assistant or workflow tool with retrieval, at least one tool, evaluation and a deployable service. The final session is an end-to-end project rather than a slide recap.',
    takeaways: [
      'A working end-to-end application',
      'Architecture patterns for model access, RAG, tools and guardrails',
      'Evaluation cases and a first regression set',
      'A deployment and operations checklist',
    ],
  },
  {
    slug: 'evaluating-and-testing-llm-applications',
    title: 'Evaluating and Testing LLM Applications',
    shortDescription:
      'A one-day course on evaluating non-deterministic systems: golden datasets, semantic checks, LLM-as-judge, retrieval and agent evaluation, and the pipeline that keeps quality from drifting.',
    overview:
      'Conventional software testing assumes that the same input should produce the same output. LLM applications violate that assumption while still needing regression control, release judgement and production monitoring. Teams that skip this work discover quality issues only through users.\n\nThis course teaches a practical evaluation discipline. Participants separate deterministic tests from semantic evaluation, build golden datasets, and use human review and LLM-as-judge where they are justified. Retrieval is evaluated separately from generation. Groundedness, hallucination, agent behaviour and prompt or model changes are treated as first-class concerns.\n\nThe day is a build. Participants construct an evaluation suite around a realistic application path, then look at how that suite becomes a pipeline: versioning, model comparison, regression gates and production monitoring.\n\nEngineers and technical leads leave able to say whether a change made the system better, worse, or merely different.',
    audience:
      'AI developers, QA engineers, ML engineers and technical leads responsible for quality, release and monitoring of LLM applications.',
    audienceLabel: 'AI developers, QA engineers and technical leads',
    prerequisites:
      'Experience building or testing software. Familiarity with LLM applications is expected. Participants do not need a research background in evaluation metrics.',
    duration: '1 day',
    durationNote: 'Can be extended with a second day to instrument a customer system or to deepen agent evaluation.',
    level: 'Intermediate',
    category: 'ai-engineering',
    outcomes: [
      'Explain why conventional tests are necessary but insufficient for LLM applications.',
      'Design golden datasets that cover the behaviours the organisation actually cares about.',
      'Implement deterministic checks, semantic evaluation and targeted human review.',
      'Evaluate retrieval, groundedness and hallucination separately from fluency.',
      'Compare prompts and models with a regression set rather than with anecdotes.',
      'Evaluate agent traces: tool choice, loops, permissions and stopping conditions.',
      'Design an evaluation pipeline that can run in development and in production monitoring.',
    ],
    outline: [
      {
        title: 'What “correct” means for a non-deterministic system',
        points: [
          'The failure of snapshot equality, and the remaining role of deterministic tests.',
          'Fluency versus usefulness, groundedness, safety and task completion.',
          'Choosing what to measure before choosing a scorer.',
          'Exercise: define pass/fail for a realistic assistant or extraction task.',
        ],
      },
      {
        title: 'Datasets and evaluators',
        points: [
          'Golden datasets: sources, coverage, versioning and the cost of poor labels.',
          'Deterministic tests: schemas, citations present, refusals, and forbidden content.',
          'Semantic evaluation, LLM-as-judge, and when human evaluation is still required.',
          'Lab: build a small suite with mixed deterministic and semantic checks.',
        ],
      },
      {
        title: 'Retrieval, agents and change',
        points: [
          'Retrieval evaluation: recall, ranking, and “did we fetch the right evidence?”',
          'Groundedness and hallucination detection on generated answers.',
          'Agent evaluation: tool selection, argument validity, loops and human handoff.',
          'Prompt versioning, model comparison and regression gates.',
          'Lab: add retrieval and agent traces to the suite and make a release judgement.',
        ],
      },
      {
        title: 'Pipelines and production monitoring',
        points: [
          'Online versus offline evaluation, sampling and review queues.',
          'Dashboards: quality, cost, latency, retrieval misses and user corrections.',
          'Where evaluation belongs in CI, release and operations.',
          'Lab: sketch the pipeline for the system the team will actually run.',
        ],
      },
    ],
    practicalWork:
      'Participants build an evaluation suite around a representative application: a golden set, mixed checkers, retrieval and generation scores, and a simple regression report. The closing work is a pipeline design that could be implemented on their own system.',
    takeaways: [
      'A working evaluation suite',
      'Templates for golden datasets and score definitions',
      'A regression report format for prompt and model changes',
      'A pipeline sketch for CI and production monitoring',
    ],
  },
  {
    slug: 'securing-generative-ai-applications',
    title: 'Securing Generative AI Applications',
    shortDescription:
      'A one-day security course for developers, security engineers and architects: the specific risks created by LLM applications, and the controls that actually reduce them.',
    overview:
      'LLM applications create attack surface that conventional application security only partly covers. Prompt injection, indirect injection through retrieved documents, tool misuse, data leakage and excessive agency are not theoretical. They appear as soon as a model can read untrusted text or call a tool.\n\nThis course treats those risks as engineering problems. Participants work through threat scenarios: injected instructions, poisoned knowledge bases, over-privileged tools, unsafe output handling and the supply chain of models, prompts and plugins. Identity, permissions, sandboxing, audit and logging are covered as controls, not as a policy appendix.\n\nThe teaching is concrete. Each major risk is paired with a mitigation that can be implemented in application and platform design: argument validation, allow-lists, output encoding, retrieval access control, human approval and least privilege.\n\nParticipants leave able to review an LLM application for the failures that matter, and to put proportionate controls in place before the system is exposed to untrusted input.',
    audience:
      'Developers, security engineers and architects responsible for designing, reviewing or operating LLM-powered applications.',
    audienceLabel: 'Developers, security engineers and architects',
    prerequisites:
      'Familiarity with web or API security concepts is expected. Direct LLM implementation experience is helpful. The course does not require cryptography or ML research background.',
    duration: '1 day',
    durationNote: 'Can be adapted to a threat-modelling workshop against a customer system.',
    level: 'Intermediate',
    category: 'ai-engineering',
    outcomes: [
      'Identify prompt injection, indirect injection and retrieval attacks in realistic application designs.',
      'Diagnose insecure tool use, excessive agency and secrets exposure in agentic systems.',
      'Design permission, identity and sandboxing controls around model-initiated actions.',
      'Handle model output as untrusted data in downstream systems and user interfaces.',
      'Evaluate model-provider, plugin and supply-chain risk as part of architecture review.',
      'Specify logging, audit and human-approval requirements that are actually operable.',
      'Apply a threat-modelling method to an LLM application and produce a mitigation list.',
    ],
    outline: [
      {
        title: 'The threat model is different',
        points: [
          'Where conventional OWASP thinking still applies, and where it does not.',
          'The model as an interpreter of untrusted natural language, including retrieved text.',
          'Data leakage through prompts, logs, providers and over-broad retrieval.',
          'Exercise: annotate a simple assistant architecture with trust boundaries.',
        ],
      },
      {
        title: 'Injection, retrieval and poisoned context',
        points: [
          'Direct prompt injection against system instructions.',
          'Indirect injection via documents, tickets, email and web content.',
          'Retrieval attacks, poisoned documents and citation spoofing.',
          'Mitigations: isolation of untrusted content, allow-lists, dual-channel control, and retrieval ACL.',
          'Lab: exploit a weak RAG or chat path, then apply a control and re-test.',
        ],
      },
      {
        title: 'Tools, agency and output',
        points: [
          'Insecure tool use: unconstrained arguments, SSRF-like patterns, and surprise side effects.',
          'Excessive agency: the model choosing actions the organisation did not intend.',
          'Secrets, identity, confused deputy problems and unsafe code execution.',
          'Output handling: XSS, markdown, generated links, and treating model text as data.',
          'Lab: constrain a tool-calling path with schemas, permissions and a human-in-the-loop step.',
        ],
      },
      {
        title: 'Platform, providers and operations',
        points: [
          'Model-provider risk: retention, training, residency and contractual control.',
          'Supply chain: prompts, plugins, datasets, weights and evaluation models.',
          'Sandboxing, network egress, identity and environment separation.',
          'Audit, logging, red-team cases and a review checklist for release.',
          'Exercise: produce a mitigation plan for a customer-shaped system.',
        ],
      },
    ],
    practicalWork:
      'Participants work through realistic threat scenarios on intentionally weak applications, then apply controls. The day includes at least one injection and one tool-permission exercise, plus a structured review of a more complete design. No “attack cookbook” for third-party systems: the work is on designs the room can change.',
    takeaways: [
      'A threat model template for LLM applications',
      'Mitigation patterns for injection, retrieval, tools and output handling',
      'A security review checklist',
      'Logging and approval requirements that can be implemented',
    ],
  },
];
