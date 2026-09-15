import type { Course } from './types';

export const workshopCourses: Course[] = [
  {
    slug: 'rag-in-a-day',
    title: 'RAG in a Day',
    shortDescription:
      'A focused workshop for developers: build a complete retrieval-augmented generation system in one day, from ingestion and chunking through citations and a first evaluation.',
    overview:
      'Some teams need RAG in their hands before they need the full production course. This workshop is that day. Theory is kept short. The spine of the day is a working system: ingest documents, chunk them, embed, retrieve, prompt, cite and evaluate.\n\nYou implement each stage, see what a weak default does, and improve the pieces that most often fail. The result is not a complete production platform. It is a complete path a developer can extend, measure and take back to a product.\n\nThe workshop assumes professional developers. It does not spend the morning on what a token is. It spends it on a corpus, a question set and a pipeline that can be shown to a colleague.\n\nBy the end of the day, you have a RAG system you built, a small evaluation set, and a clear view of what would still be required for production.',
    audience:
      'Developers who need to implement a first serious RAG path and prefer to learn by building.',
    audienceLabel: 'Developers',
    prerequisites:
      'Professional software development experience and the ability to run a small application locally. Prior LLM API experience is helpful.',
    duration: '1 day',
    durationNote: 'Can be run on a customer corpus. Teams that need production architecture, ACLs and monitoring should follow with the two-day RAG course.',
    level: 'Intermediate',
    category: 'workshops',
    outcomes: [
      'Implement document ingestion, parsing and chunking for a small corpus.',
      'Generate embeddings and run vector search against a realistic question set.',
      'Construct a grounded prompt with retrieved context and citations.',
      'Evaluate a first question set and name the main retrieval failures.',
      'Identify the production work still required after a working path exists.',
    ],
    outline: [
      {
        title: 'Ingestion and chunking',
        points: [
          'Corpus, document types and a question set for the day.',
          'Parsing and chunking that can be inspected.',
          'Build: ingest and chunk; look at the worst chunks.',
        ],
      },
      {
        title: 'Embeddings and retrieval',
        points: [
          'Embeddings, an index, and similarity search.',
          'Filters and the first retrieval failures.',
          'Build: retrieve for the question set and score recall by eye and by simple metrics.',
        ],
      },
      {
        title: 'Generation, citations and evaluation',
        points: [
          'Prompt construction, grounded answers and citations.',
          'Refusal when retrieval is empty.',
          'A first evaluation pass and a list of production gaps.',
          'Build: complete the path and demonstrate it on held-out questions.',
        ],
      },
    ],
    practicalWork:
      'The entire day is a build. You leave with a working RAG pipeline covering ingestion, chunking, embeddings, retrieval, prompting, citations and a small evaluation set.',
    takeaways: [
      'A working RAG system',
      'A small golden question set',
      'Notes on the production gaps still open',
      'A path into the two-day RAG course if the team needs to go further',
    ],
  },
  {
    slug: 'build-an-ai-agent-in-a-day',
    title: 'Build an AI Agent in a Day',
    shortDescription:
      'A hands-on workshop for developers: build a working agent with tool calling, state, structured outputs, error handling, permissions and a first evaluation.',
    overview:
      'This is a build day, not a survey of agent frameworks. You start with a task that actually needs tools, then implement function calling, state, planning, structured outputs, error handling and permissions. The day ends with a functioning agent and a short evaluation, not with a presentation about autonomy.\n\nThe course keeps the agent small enough to finish and strict enough to be worth finishing: validated tool arguments, a stop condition, and a permission boundary. Planning is introduced where it helps the task, not as a default.\n\nDevelopers who need the deeper two-day agents course still benefit from this workshop as a first implementation. Teams that only need one internal agent often stop here and take the code into their own repository.\n\nThe output is a practical agent you ran, with traces and a list of the safeguards still required for production.',
    audience:
      'Developers who need to implement a first agent and will learn faster from a complete path than from a lecture.',
    audienceLabel: 'Developers',
    prerequisites:
      'Professional software development and prior experience calling an LLM API. Teams new to LLMs should take the engineering or fundamentals course first.',
    duration: '1 day',
    durationNote: 'Can be scoped to a particular internal tool set. The two-day agents course is the follow-on for production depth.',
    level: 'Intermediate',
    category: 'workshops',
    outcomes: [
      'Implement tool calling with schemas and argument validation.',
      'Add state and a bounded planning or looping step.',
      'Handle tool errors, retries and invalid model output.',
      'Apply a permission boundary so the agent cannot call arbitrary tools.',
      'Evaluate the agent against a small task set and inspect traces.',
    ],
    outline: [
      {
        title: 'Tools and structured outputs',
        points: [
          'The task for the day and the tools it requires.',
          'Function calling, schemas and structured outputs.',
          'Build: a model that can call two or more tools correctly.',
        ],
      },
      {
        title: 'State, planning and errors',
        points: [
          'State, memory of intermediate results, and a stop condition.',
          'Planning where the task needs more than one step.',
          'Error handling and retries that do not loop forever.',
          'Build: a bounded loop that can complete the task.',
        ],
      },
      {
        title: 'Permissions, evaluation and a working agent',
        points: [
          'Permissions and denying out-of-scope tools.',
          'Traces and a small evaluation set.',
          'What would still be required in production.',
          'Build: finish the agent and run it end to end.',
        ],
      },
    ],
    practicalWork:
      'You build one agent through the day. Typical tasks are internal operations, research with tools, or a constrained workflow. The agent runs, has traces, and is evaluated on a handful of tasks including a failure case.',
    takeaways: [
      'A functioning practical agent',
      'Tool schemas and a permission map',
      'Traces and a small evaluation set',
      'A list of production safeguards still to add',
    ],
  },
  {
    slug: 'from-chatbot-to-agent',
    title: 'From Chatbot to Agent',
    shortDescription:
      'A one-day workshop that starts with a basic LLM chat application and evolves it, step by step, into a useful agentic system with retrieval, tools, state and production safeguards.',
    overview:
      'Many teams already have a chatbot. The question is how to grow it without rewriting it every time a new capability appears. This workshop uses that progression as the course: chat, structured output, retrieval, tool use, workflow state, agentic behaviour, evaluation and production safeguards.\n\nEach step is implemented on the same application. You see what breaks when structured output is added, what retrieval changes, and why an agent loop is a different system from a chat with extra prompts. The day is a sequence of working increments, not a set of optional extras.\n\nThe teaching is deliberately conservative. Not every chatbot should become an agent. The workshop makes the cost of each step visible so your team can stop at the right layer.\n\nYou leave with an evolved application and a map of the increments you would take on your own system.',
    audience:
      'Developers and technical teams who already have, or are about to build, a chat interface and need a controlled path toward retrieval and agents.',
    audienceLabel: 'Developers and technical teams',
    prerequisites:
      'Ability to work in an application codebase. Prior LLM API experience is expected. A simple chat starter is provided if teams do not bring their own.',
    duration: '1 day',
    durationNote: 'Can be delivered against your team’s existing chat application where that is practical.',
    level: 'Intermediate',
    category: 'workshops',
    outcomes: [
      'Implement structured outputs on top of a basic chat application.',
      'Add retrieval without turning the chat into an ungrounded knowledge claim.',
      'Introduce tool use and workflow state as explicit application capabilities.',
      'Add bounded agentic behaviour only where the task requires it.',
      'Evaluate the system at each increment and add production safeguards.',
      'Decide where your own product should stop on the path from chatbot to agent.',
    ],
    outline: [
      {
        title: 'Chat and structure',
        points: [
          'Basic LLM chat: messages, system prompts, and the limits of free text.',
          'Structured output as a contract with the rest of the application.',
          'Build: evolve the starter from chat to structured responses.',
        ],
      },
      {
        title: 'Retrieval and tools',
        points: [
          'Retrieval: grounding, citations and refusal.',
          'Tool use: schemas, side effects and displaying tool activity to the user.',
          'Build: add retrieval, then one tool, on the same application.',
        ],
      },
      {
        title: 'State, agency and safeguards',
        points: [
          'Workflow state versus a hidden agent loop.',
          'Agentic behaviour with a budget and a stop condition.',
          'Evaluation and production safeguards: logging, permissions, fallbacks.',
          'Build: complete the progression and compare each increment on the same tasks.',
        ],
      },
    ],
    practicalWork:
      'One application is evolved through the eight-step progression. You run the same tasks after each increment so the group can see what improved, what became slower, and which safeguards became mandatory.',
    takeaways: [
      'An evolved application from chat through retrieval and tools to a bounded agent',
      'A step-by-step increment map for the team’s own product',
      'Evaluation tasks reused across increments',
      'A production-safeguard checklist for the layer you choose to ship',
    ],
  },
  {
    slug: 'ai-architecture-workshop',
    title: 'AI Architecture Workshop',
    shortDescription:
      'A facilitated workshop for technical teams, architects and engineering leaders around a real customer problem. The output is an architecture and a next-step roadmap, not a training certificate.',
    overview:
      'This is consultancy delivered as a structured workshop. Your team brings a real problem. Linear Horizon facilitates a day that produces clarified requirements, an AI suitability assessment, architecture options, risks, a recommended approach, an initial technical architecture and a next-step roadmap.\n\nThe day is not a lecture with a case study bolted on. It uses a repeatable method: problem framing, constraints, data and systems, options, risks, and a recommendation that can be owned by the people who will deliver it. Training content is used only where it helps the decision.\n\nParticipants should include the people who will own the system. The workshop fails if the only output is a diagram nobody is accountable for.\n\nYour organisation leaves with artefacts it can put in front of delivery, security and budget, and a clear account of what would still need discovery or a proof of concept.',
    audience:
      'Technical teams, architects and engineering leaders with a live problem that might be an AI system — or might not.',
    audienceLabel: 'Technical teams, architects and engineering leaders',
    prerequisites:
      'A real problem, identified stakeholders, and access to people who know the current systems and constraints. No particular AI course is required, though a shared fundamentals session beforehand often improves the conversation.',
    duration: '1 day',
    durationNote: 'Can be run as a half-day framing session, or extended with a follow-on design day. Preparation with the customer before the workshop is part of the engagement.',
    level: 'Leadership',
    category: 'workshops',
    outcomes: [
      'Clarify requirements, constraints and what would constitute a successful outcome.',
      'Assess whether AI is a suitable approach, and what would remain conventional software.',
      'Compare architecture options with an honest view of data, identity, risk and operations.',
      'Identify the main risks and the work that would retire them.',
      'Recommend an approach and an initial technical architecture.',
      'Agree a next-step roadmap with owners.',
    ],
    outline: [
      {
        title: 'Frame the problem',
        points: [
          'Outcomes, users, constraints, and the current system of record.',
          'Data, identity and operational reality, not the hoped-for estate.',
          'Exercise: write the problem so that a delivery team could not misunderstand it.',
        ],
      },
      {
        title: 'Suitability and options',
        points: [
          'AI suitability: what the model would do, and what it must not do.',
          'Architecture options: retrieval, tools, workflows, batch, human review.',
          'Risks: security, quality, cost, vendor, and organisational ownership.',
          'Exercise: score options against constraints rather than preference.',
        ],
      },
      {
        title: 'Recommendation and roadmap',
        points: [
          'A recommended approach and an initial technical architecture.',
          'What to prove next, what to build, and what to refuse.',
          'Roadmap, owners and the decision points after the workshop.',
          'Playback: artefacts the organisation can take into delivery and security review.',
        ],
      },
    ],
    practicalWork:
      'Facilitated working session on your organisation’s problem. You produce written artefacts: problem statement, suitability assessment, options, risks, recommended architecture and a next-step roadmap. Linear Horizon facilitates and contributes architecture judgement; your organisation owns the decision.',
    takeaways: [
      'Clarified requirements and success criteria',
      'AI suitability assessment',
      'Architecture options and a recommended approach',
      'Risks, initial technical architecture and a next-step roadmap',
    ],
  },
  {
    slug: 'ai-use-case-discovery-workshop',
    title: 'AI Use-Case Discovery Workshop',
    shortDescription:
      'A discovery workshop for business and technical leaders: identify where AI can create meaningful value, score the opportunities, and leave with a ranked list and recommended next steps.',
    overview:
      'Organisations are not short of AI ideas. They are short of a way to compare them. This workshop is a structured discovery session: problem discovery, process mapping, automation versus augmentation, suitability, feasibility, data, value, risk, complexity and prioritisation.\n\nYou use a practical scoring framework rather than a brainstorm. Each candidate is examined for whether AI is actually required, whether the data exists, who would own the change, and what would constitute a good outcome. The output is a ranked list, not a longer backlog of slogans.\n\nThe session can be a half day or a full day depending on the number of processes in play and the depth of scoring required.\n\nYou leave with a shortlist you can commission, and an explicit list of ideas that should not be funded.',
    audience:
      'Business and technical leaders who need to choose where to invest, including product, operations, architecture and delivery stakeholders in the same session.',
    audienceLabel: 'Business and technical leaders',
    prerequisites:
      'A willingness to examine real processes, including the unglamorous ones. Pre-work to gather candidate processes and constraints improves the session. No technical implementation is required during the day.',
    duration: 'Half day or 1 day',
    durationNote: 'Half day for a focused shortlist. Full day when several functions are present or when scoring needs more evidence.',
    level: 'Leadership',
    category: 'workshops',
    outcomes: [
      'Discover candidate problems from processes rather than from technology.',
      'Map work well enough to see where automation or augmentation might apply.',
      'Assess AI suitability, technical feasibility and data availability.',
      'Score value, risk and complexity with a shared framework.',
      'Produce a ranked list of opportunities with recommended next steps.',
      'Agree which ideas should be declined, delayed or treated as conventional software.',
    ],
    outline: [
      {
        title: 'Discover the work',
        points: [
          'Problem discovery from processes, pain and existing measures.',
          'Process mapping at a level that is good enough to decide, not to implement.',
          'Automation versus augmentation, and the human work that remains.',
          'Exercise: capture candidate uses as operational problems, not as product names.',
        ],
      },
      {
        title: 'Score with a framework',
        points: [
          'Suitability: is this an AI problem, a search problem, or a process problem?',
          'Feasibility: data, systems, identity, and the team that would own it.',
          'Value, risk, complexity and reversibility.',
          'Exercise: score the candidates with the group using the same rubric.',
        ],
      },
      {
        title: 'Rank and commission',
        points: [
          'A ranked shortlist with owners.',
          'Next steps: discovery, architecture workshop, prototype, or decline.',
          'What not to do next, including vendor trials that would not answer the question.',
          'Playback of the ranked list and the recommended path for the top items.',
        ],
      },
    ],
    practicalWork:
      'Facilitated discovery using a scoring framework. You map processes, score candidates and produce a ranked list. The group includes both business and technical voices so feasibility and value are judged together.',
    takeaways: [
      'A practical scoring framework the organisation can reuse',
      'A ranked list of AI opportunities',
      'Explicit declines and deferrals',
      'Recommended next steps for the top items',
    ],
  },
];
