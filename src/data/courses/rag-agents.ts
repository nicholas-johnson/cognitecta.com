import type { Course } from './types';

export const ragAgentCourses: Course[] = [
  {
    slug: 'rag-from-fundamentals-to-production',
    title: 'RAG: From Fundamentals to Production',
    shortDescription:
      'A two-day course on retrieval-augmented generation as an engineering discipline: why naive RAG fails, and how to design a system that can be evaluated, secured and operated.',
    overview:
      'Many RAG systems fail for ordinary reasons: poor parsing, arbitrary chunking, weak retrieval, no reranking, no evaluation, and a prompt that asks the model to sound certain. The result is fluent answers with weak grounding, which is worse than a search box.\n\nThis course teaches RAG properly. You start with architecture, embeddings and vector databases, then spend serious time on ingestion, parsing, chunking, metadata and retrieval strategy. Hybrid search, reranking, query rewriting, context construction, citations and access control are treated as the difference between a demo and a system.\n\nLabs compare a weak pipeline with an improved one on the same corpus. The second day moves into production architecture: evaluation, hallucination reduction, permissions, monitoring, performance and cost.\n\nYou build a production-style RAG system you can explain, measure and harden — not a notebook that only works on a handful of happy questions.',
    audience:
      'Developers, ML engineers and architects who will design, implement or review retrieval-augmented systems.',
    audienceLabel: 'Developers, ML engineers and architects',
    prerequisites:
      'Professional software development experience and familiarity with APIs. Some exposure to LLMs is expected. Vector-database experience is helpful but not required.',
    duration: '2 days',
    durationNote: 'Can be focused on a customer corpus and stack, or combined with the Agentic RAG course for teams building more complex systems.',
    level: 'Intermediate',
    category: 'rag-agents',
    outcomes: [
      'Design a RAG architecture with explicit stages for ingestion, retrieval, generation and evaluation.',
      'Implement parsing, chunking and metadata strategies that match the document types in play.',
      'Compare similarity search, hybrid search, reranking and query rewriting on the same questions.',
      'Construct prompts that use retrieved evidence, citations and refusal when evidence is missing.',
      'Evaluate retrieval and grounded generation separately, and reduce hallucination without hiding the problem.',
      'Apply access control so retrieval cannot leak documents the user is not allowed to see.',
      'Specify production monitoring, performance and cost controls for a RAG service.',
    ],
    outline: [
      {
        title: 'RAG as an architecture',
        points: [
          'The job of retrieval versus the job of generation.',
          'Embeddings, vector databases and what similarity does not capture.',
          'Where naive RAG fails: chunking, recall, ranking, context stuffing and over-confident generation.',
          'Lab: run a minimal RAG path and collect its failure modes.',
        ],
      },
      {
        title: 'Ingestion that can be defended',
        points: [
          'Document parsing: PDFs, HTML, tables, slides and the lossiness of extraction.',
          'Chunking: size, overlap, structure, late chunking and not treating all documents as prose.',
          'Metadata, document identity, versions and access-control attributes.',
          'Lab: ingest the same corpus two ways and compare retrieval quality.',
        ],
      },
      {
        title: 'Retrieval that can be measured',
        points: [
          'Similarity search versus hybrid search; filters and metadata.',
          'Query rewriting, expansion and decomposing multi-part questions.',
          'Reranking, diversity and selecting what actually enters the context window.',
          'Context construction, citations, grounding and refusal.',
          'Lab: improve the weak system and show the difference on a fixed question set.',
        ],
      },
      {
        title: 'Production RAG',
        points: [
          'Evaluation: retrieval metrics, groundedness, human review and regression sets.',
          'Hallucination reduction as a system property, not a prompt slogan.',
          'Access control, tenancy and permissions-aware retrieval.',
          'Monitoring, latency, caching, re-indexing and cost.',
          'Reference production architecture and operational checklist.',
          'Lab: add evaluation, citations and a permission constraint to the system.',
        ],
      },
    ],
    practicalWork:
      'You build a RAG system on a realistic corpus. The first pipeline is deliberately naive. Subsequent labs improve parsing, chunking, retrieval, reranking, citations and evaluation. The closing system is production-shaped: measurable, permission-aware and operable, not merely fluent.',
    takeaways: [
      'A working production-style RAG implementation',
      'Weak-versus-improved retrieval comparisons on a fixed question set',
      'Chunking, metadata and evaluation templates',
      'A production architecture and operations checklist',
    ],
  },
  {
    slug: 'building-ai-agents',
    title: 'Building AI Agents',
    shortDescription:
      'A two-day course for intermediate and advanced developers: design and build useful agents with tools, state, permissions and evaluation, rather than unsupervised demos.',
    overview:
      '“Agent” is used to mean anything from a single tool call to an unsupervised loop that books travel and writes to production systems. Most organisations need the former, with the discipline of the latter. This course teaches how to build agents that are useful, bounded and operable.\n\nYou start with a precise definition: an agent as software that can choose tools, maintain state and iterate toward a task, inside limits set by the application. The course covers function calling, planning, reasoning loops, memory, workflows, structured outputs, retries and failure handling. Human-in-the-loop, permissions, evaluation, observability and cost are treated as design requirements.\n\nThe labs are multiple and progressive. The course ends with a production-oriented agent: clear tools, explicit boundaries, traces, and a path for a human to approve or stop work.\n\nYou leave able to choose between a deterministic workflow and an agentic loop, and to implement the latter without giving the model more authority than your organisation intended.',
    audience:
      'Intermediate and advanced developers who will implement or review tool-using and agentic systems.',
    audienceLabel: 'Intermediate and advanced developers',
    prerequisites:
      'Solid software engineering and prior experience calling LLM APIs. The RAG fundamentals course, or equivalent experience, is helpful if the agent will retrieve documents.',
    duration: '2 days',
    durationNote: 'Can be focused on a particular domain or tool set, or reduced to the one-day workshop for teams that only need a first agent.',
    level: 'Advanced',
    category: 'rag-agents',
    outcomes: [
      'Define an agent in engineering terms: tools, state, loop, boundaries and stopping conditions.',
      'Implement function calling with schema validation, permissions and least privilege.',
      'Compare planning, ReAct-style loops and explicit workflows, and choose the simpler design that works.',
      'Add memory and state without confusing conversation history with durable application data.',
      'Handle retries, tool failure, timeouts and partial completion.',
      'Implement human-in-the-loop approval for consequential actions.',
      'Evaluate and observe agents using traces, task success and cost, not only the final message.',
    ],
    outline: [
      {
        title: 'What an agent is for',
        points: [
          'A strict definition: model, tools, state, objective and authority.',
          'Deterministic workflows versus agentic loops, and the cost of the latter.',
          'Structured outputs and tool schemas as the real interface.',
          'Lab: wrap existing capabilities as tools and call them from a model.',
        ],
      },
      {
        title: 'Loops, planning and state',
        points: [
          'Reasoning loops, planning, and why unconstrained iteration is an operations problem.',
          'State, memory, scratchpads and the difference between context and storage.',
          'Orchestration: sequential tools, fan-out, and when a graph is justified.',
          'Lab: implement a bounded loop with a clear stop condition.',
        ],
      },
      {
        title: 'Failure, permissions and humans',
        points: [
          'Retries, idempotency, timeouts and compensating actions.',
          'Permissions, identities and preventing the model from choosing forbidden tools.',
          'Human-in-the-loop: approval, clarification, and handing work back to a person.',
          'Security: injection via tool results, and treating tool output as untrusted.',
          'Lab: add an approval gate and a denied-tool path.',
        ],
      },
      {
        title: 'A production-oriented agent',
        points: [
          'Evaluation: task success, tool correctness, loops and human interventions.',
          'Observability: traces, token cost, wall-clock time and user-visible status.',
          'Cost controls, caching and knowing when to stop being agentic.',
          'Build: complete a useful agent against a realistic task, with traces and an evaluation set.',
        ],
      },
    ],
    practicalWork:
      'Multiple labs: tool calling, a bounded loop, failure handling, permissions and a human approval step. The final system is a useful agent — for example research, operations or internal workflow — with traces, limits and evaluation rather than an open-ended autonomous demo.',
    takeaways: [
      'Working agent implementations with tools, state and traces',
      'Patterns for permissions, retries and human approval',
      'An evaluation approach for agent traces',
      'A decision guide for workflow versus agent',
    ],
  },
  {
    slug: 'agentic-rag-systems',
    title: 'Agentic RAG Systems',
    shortDescription:
      'A two-day advanced course combining retrieval with agentic reasoning and tool use: multi-step retrieval, query planning, structured sources and a production architecture for complex knowledge work.',
    overview:
      'Static RAG answers a question with a single retrieve-then-generate pass. That is often enough. It fails when the question requires planning, multiple searches, comparison across sources, or a mix of documents and APIs. Agentic RAG is the attempt to do that work without turning the system into an unsupervised research assistant with no budget.\n\nThis course starts from the limits of static RAG, then builds the pieces of an agentic retrieval system: query planning, multi-step retrieval, tool-driven search, document selection, iterative retrieval and memory. Structured knowledge sources and APIs are combined with unstructured corpora. Planning, evaluation, security, latency and cost are treated as first-class design constraints.\n\nThe practical work is a complex system, not a toy. You implement a path that can plan, retrieve, call tools, keep intermediate state and produce a grounded answer with traces.\n\nYou leave able to design agentic retrieval where it is justified, and to keep static RAG where it is not.',
    audience:
      'Experienced AI engineers, developers and architects who already understand RAG and tool calling and need to compose them.',
    audienceLabel: 'Experienced AI engineers, developers and architects',
    prerequisites:
      'Experience implementing RAG and tool calling, or completion of the RAG and agents courses. You should be comfortable with production application structure.',
    duration: '2 days',
    durationNote: 'Best delivered against a customer corpus and internal APIs where those can be shared.',
    level: 'Advanced',
    category: 'rag-agents',
    outcomes: [
      'Diagnose when static RAG is the wrong architecture for a knowledge task.',
      'Design query planning and multi-step retrieval without unbounded loops.',
      'Combine unstructured retrieval with APIs and structured sources in one orchestration.',
      'Implement iterative retrieval, document selection and memory of intermediate findings.',
      'Evaluate agentic retrieval for completeness, groundedness, latency and cost.',
      'Apply security controls so retrieved content and tools cannot expand authority.',
      'Specify a production architecture with traces, budgets and fallback to simpler retrieval.',
    ],
    outline: [
      {
        title: 'Where static RAG stops',
        points: [
          'Multi-hop questions, comparisons, and tasks that need a plan before a search.',
          'The cost of stuffing more context instead of retrieving with intent.',
          'A reference architecture for agentic retrieval: planner, retrievers, tools, memory, generator.',
          'Exercise: take a failed static RAG question and write the retrieval plan a system would need.',
        ],
      },
      {
        title: 'Planning, tools and iterative retrieval',
        points: [
          'Query planning, decomposition and choosing among search tools.',
          'Multi-step retrieval, document selection and stopping when evidence is sufficient.',
          'Tool-driven search: catalogues, APIs, SQL, and not treating every source as a vector index.',
          'Memory of intermediate findings without leaking them as unearned certainty.',
          'Lab: implement a planner that can retrieve more than once.',
        ],
      },
      {
        title: 'Mixed sources and grounded answers',
        points: [
          'Combining unstructured documents with structured systems.',
          'Citations, conflict, and presenting uncertainty rather than averaging sources.',
          'Security: injection via retrieved text, tool results, and permissions on each source.',
          'Lab: add an API or structured lookup beside document retrieval.',
        ],
      },
      {
        title: 'Production architecture',
        points: [
          'Latency and cost budgets for multi-step systems.',
          'Evaluation of plans, retrieval coverage and final groundedness.',
          'Orchestration, fallbacks to static RAG, and human handoff.',
          'Operational traces and a deployment shape.',
          'Build: complete a complex practical system and evaluate it against multi-hop questions.',
        ],
      },
    ],
    practicalWork:
      'You build a multi-step retrieval system against a corpus that cannot be handled by a single search. The system plans queries, retrieves iteratively, can call at least one non-vector tool, and produces a grounded answer with traces and a cost/latency budget.',
    takeaways: [
      'A working agentic RAG system',
      'Planning and retrieval patterns for multi-hop questions',
      'Evaluation cases that static RAG fails and the agentic path should pass',
      'A production architecture with budgets, traces and fallbacks',
    ],
  },
];
