import type { Course } from './types';

export const cloudCourses: Course[] = [
  {
    slug: 'ai-systems-on-aws',
    title: 'AI Systems on AWS',
    shortDescription:
      'A two-day course for cloud engineers, developers and architects: design and build AI systems on AWS, with architecture first and managed services in their proper place.',
    overview:
      'AWS offers a dense set of managed AI services. Teams that start from the product list often produce designs that are hard to move, hard to evaluate and expensive to run. This course starts from the system: model access, identity, retrieval, orchestration, events, security and cost. AWS services are then used as implementations of those parts.\n\nParticipants cover managed foundation models, identity and IAM, storage, serverless patterns, RAG and vector search, agents, event-driven systems, observability, deployment, security and cost. Service names are taught as current implementations, not as the architecture itself, so the design still holds when the console labels change.\n\nThe course is practical. Participants design and build against AWS primitives for model access, retrieval and an application path, then review the security and cost of what they built.\n\nEngineers leave able to design an AI system that happens to run on AWS, rather than an AWS diagram that happens to mention a model.',
    audience:
      'Cloud engineers, developers and architects working on AWS who will design or implement AI systems.',
    audienceLabel: 'Cloud engineers, developers and architects',
    prerequisites:
      'Working knowledge of AWS identity, networking and at least one compute option (functions, containers or virtual machines). Familiarity with LLM applications is helpful.',
    duration: '2 days',
    durationNote: 'Can be aligned to the organisation’s AWS estate, landing zone and approved services.',
    level: 'Intermediate',
    category: 'cloud-platform',
    outcomes: [
      'Design an AI application architecture on AWS with explicit identity, data and model boundaries.',
      'Integrate managed foundation models through a controlled access path rather than scattered credentials.',
      'Implement RAG using storage, search and retrieval services appropriate to the corpus and tenancy model.',
      'Place agents and event-driven workloads on queues and workflows with IAM-scoped tools.',
      'Apply observability, security and cost controls that are native to the platform.',
      'Deploy a working path and know which parts are portable if the model provider changes.',
    ],
    outline: [
      {
        title: 'Architecture, then services',
        points: [
          'A portable AI architecture: gateway, orchestration, retrieval, tools, evaluation.',
          'Model access on AWS: managed foundation models, and when self-hosted inference is justified.',
          'IAM, secrets and the failure mode of long-lived keys in application code.',
          'Lab: a controlled model-access path with least privilege.',
        ],
      },
      {
        title: 'Data, RAG and application paths',
        points: [
          'Storage, document ingestion and vector search options.',
          'RAG on AWS without collapsing search, generation and permissions into one service.',
          'Serverless and container patterns for synchronous assistants.',
          'Lab: ingest, retrieve and generate with citations.',
        ],
      },
      {
        title: 'Agents, events and operations',
        points: [
          'Agents and tool calling with IAM-scoped actions.',
          'Event-driven generation, queues, retries and human review.',
          'Observability, security, networking and cost.',
          'Deployment and a review of lock-in versus speed.',
          'Lab: an event-driven or tool-using path with tracing and a cost estimate.',
        ],
      },
    ],
    practicalWork:
      'Participants build a small AWS-backed AI path: authenticated model access, a retrieval component, and either a synchronous application or an event-driven job. The closing review covers IAM, cost, observability and which interfaces should stay portable.',
    takeaways: [
      'A working AWS implementation of a small AI system',
      'Reference architectures mapped to current AWS services',
      'IAM, cost and observability checklists',
      'A portability note: which interfaces to keep stable',
    ],
  },
  {
    slug: 'ai-systems-on-azure',
    title: 'AI Systems on Azure',
    shortDescription:
      'A two-day course for cloud engineers, developers and architects: design enterprise AI systems on Azure, including identity, search, model APIs and the architecture those services should sit inside.',
    overview:
      'Azure is often chosen for enterprise AI because of identity, compliance and the Microsoft estate already in place. That is a reason to be more careful about architecture, not less. This course teaches how to design AI systems on Azure without treating a managed agent or a search resource as the whole design.\n\nThe course covers model APIs, Microsoft Entra integration, Azure AI services, RAG and search, storage, APIs, agents, security, observability, networking, deployment and cost. Identity is a thread through the two days: who the user is, what they may retrieve, and what a tool may do.\n\nAs with the AWS course, services are implementations. Participants design the system first, then map it onto current Azure AI, search and hosting capabilities.\n\nTeams leave able to build an enterprise-shaped assistant or application on Azure with identity, retrieval and operations that would survive a security review.',
    audience:
      'Cloud engineers, developers and architects working on Azure who will design or implement enterprise AI systems.',
    audienceLabel: 'Cloud engineers, developers and architects',
    prerequisites:
      'Working knowledge of Azure identity, resource organisation and a compute option. Familiarity with Entra ID and with LLM applications is helpful.',
    duration: '2 days',
    durationNote: 'Can be aligned to the organisation’s Azure landing zone, Entra configuration and approved AI services.',
    level: 'Intermediate',
    category: 'cloud-platform',
    outcomes: [
      'Design an Azure AI architecture with Entra identity, data boundaries and a model-access path.',
      'Implement model APIs and Azure AI services behind an application contract, not as the application itself.',
      'Build RAG using Azure storage and search with permissions that match enterprise identity.',
      'Integrate agents and tools with network, identity and API constraints.',
      'Apply security, observability, networking and cost controls appropriate to an enterprise estate.',
      'Deploy a working system and review it as a security and operations artefact.',
    ],
    outline: [
      {
        title: 'Enterprise shape on Azure',
        points: [
          'Architecture first: application, gateway, retrieval, tools, evaluation.',
          'Model APIs and Azure AI services as implementations of inference.',
          'Microsoft Entra: users, service principals, on-behalf-of, and assistant sessions.',
          'Lab: authenticated model access with Entra-backed identity.',
        ],
      },
      {
        title: 'Search, RAG and APIs',
        points: [
          'Storage, document intelligence and enterprise search.',
          'RAG with identity-aware retrieval.',
          'Application APIs, networking and private endpoints where they are required.',
          'Lab: a permissions-aware retrieval path.',
        ],
      },
      {
        title: 'Agents, security and operations',
        points: [
          'Agents and tool calling against internal APIs.',
          'Security, observability, networking and deployment.',
          'Cost, quotas and operational ownership.',
          'Lab: complete a small enterprise assistant path and review it.',
        ],
      },
    ],
    practicalWork:
      'Participants build an Azure-backed path: Entra-authenticated access, retrieval over a small corpus, and an application or agent that calls a constrained API. The review focuses on identity, network, cost and operations.',
    takeaways: [
      'A working Azure implementation of a small enterprise AI path',
      'Reference architectures mapped to current Azure AI and search services',
      'Identity, network and cost checklists',
      'A mapping from portable architecture to Azure resources',
    ],
  },
  {
    slug: 'ai-platform-engineering',
    title: 'AI Platform Engineering',
    shortDescription:
      'A two-day course for platform engineers, architects and senior developers: build the internal infrastructure that lets multiple product teams use AI safely and consistently.',
    overview:
      'If every product team integrates a model, a vector store and a logging story independently, the organisation gets duplicated cost, inconsistent security and no way to evaluate quality. Platform engineering for AI is the work of making a paved path: model access, policy, retrieval, observability and developer experience.\n\nThis course covers model gateways, routing, authentication, policy, rate limiting and model abstraction. Prompt management, evaluation, secrets, data controls, RAG services, vector infrastructure, cost allocation, caching, resilience and developer experience are designed as platform products.\n\nThe teaching is design-heavy, with enough implementation detail to be concrete. Participants work through the contracts a platform should offer a product team, and the ones it should refuse to hide.\n\nPlatform engineers leave with a service design, not a catalogue of tools to install.',
    audience:
      'Platform engineers, architects and senior developers responsible for shared AI infrastructure and developer enablement.',
    audienceLabel: 'Platform engineers, architects and senior developers',
    prerequisites:
      'Experience building internal platforms, APIs or shared infrastructure. Familiarity with LLM applications is expected. This is not a first course in generative AI.',
    duration: '2 days',
    durationNote: 'Often delivered around the organisation’s existing platform, identity and observability stack.',
    level: 'Advanced',
    category: 'cloud-platform',
    outcomes: [
      'Design a model gateway with authentication, routing, policy and rate limiting.',
      'Specify model abstraction and prompt management without hiding evaluation from product teams.',
      'Provide RAG and vector infrastructure as a service with tenancy and data controls.',
      'Implement observability, cost allocation and caching as platform features.',
      'Define secrets, resilience and fallback behaviour that product teams can rely on.',
      'Shape developer experience: SDKs, golden paths, documentation and a review process.',
      'Draw a responsibility boundary between platform and product that can be operated.',
    ],
    outline: [
      {
        title: 'The AI control plane',
        points: [
          'What product teams should not each build: keys, routing, policy, basic tracing.',
          'Model gateways: auth, routing, quotas, fallbacks and provider abstraction.',
          'Prompt management and versioning as a platform concern.',
          'Exercise: define the gateway API a product team would call.',
        ],
      },
      {
        title: 'Data, retrieval and policy',
        points: [
          'RAG services, vector infrastructure and tenancy.',
          'Data controls, secrets and the path untrusted content is allowed to take.',
          'Evaluation services: running suites, storing results, comparing models.',
          'Exercise: design a retrieval service contract with ACLs.',
        ],
      },
      {
        title: 'Operations and developer experience',
        points: [
          'Observability, cost allocation, caching and resilience.',
          'SDKs, templates, golden paths and self-service versus tickets.',
          'When the platform should refuse a request, and how that is explained.',
          'Exercise: a platform roadmap, SLOs and a responsibility matrix.',
        ],
      },
    ],
    practicalWork:
      'Design exercises throughout. Participants specify gateway, retrieval, evaluation and cost-allocation services, critique a weak platform proposal, and produce a paved-path design including developer experience. Implementation snippets are used where they clarify an interface; the deliverable is a platform design.',
    takeaways: [
      'A model-gateway and paved-path design',
      'Service contracts for retrieval, evaluation and cost allocation',
      'A platform versus product responsibility matrix',
      'Developer-experience and SLO notes',
    ],
  },
];
