import type { Course } from './types';

export const architectureCourses: Course[] = [
  {
    slug: 'production-ai-architecture',
    title: 'Production AI Architecture',
    shortDescription:
      'A two-day architecture course for senior engineers and technical leaders: reference architectures, model gateways, RAG, agents, security, evaluation and the operational concerns that decide whether a system can leave the lab.',
    overview:
      'Production AI systems fail less often because the model is weak, and more often because the surrounding architecture was never designed: no gateway, no evaluation, no identity story, no cost control, and no owner for failure. This course is for people who have to draw that architecture and defend it.\n\nThe course works through reference architectures for hosted and self-hosted models, model abstraction, RAG, agents, event-driven and asynchronous workloads. Data boundaries, identity, permissions, secrets and governance are treated as structural, not as a later security review. Observability, prompt versioning, evaluation, rate limits, fallbacks and resilience are part of the same design.\n\nThe work is architectural. Participants complete design exercises and design reviews, including multi-model systems and the latency, scaling and deployment choices those systems force.\n\nArchitects leave with a production-shaped reference they can take back to a real programme, and a review method for designs that still look like a demo.',
    audience:
      'Software architects, senior engineers, platform engineers and technical leaders responsible for production shape, not only for a prototype.',
    audienceLabel: 'Architects, senior engineers and platform engineers',
    prerequisites:
      'Experience designing or delivering production software. Familiarity with LLMs is expected. Participants do not need to implement models, but they should be able to read an architecture and argue about interfaces, failure and operations.',
    duration: '2 days',
    durationNote: 'Can be combined with the enterprise platform course, or focused on a live customer architecture.',
    level: 'Advanced',
    category: 'architecture',
    outcomes: [
      'Design a reference architecture with a model gateway, clear data boundaries and an application-facing interface.',
      'Compare hosted, self-hosted and multi-model inference against latency, cost, control and failure domains.',
      'Place RAG, agents and event-driven workloads in an architecture without collapsing them into a single chat service.',
      'Specify identity, permissions, secrets and governance for model access and retrieved data.',
      'Define observability, evaluation and prompt-version management as platform concerns.',
      'Design for resilience: rate limits, fallbacks, timeouts and degraded operation.',
      'Review a proposed AI system and identify the production gaps that would block release.',
    ],
    outline: [
      {
        title: 'Reference architectures',
        points: [
          'The components that recur: gateway, orchestration, retrieval, tools, evaluation, observability.',
          'Model abstraction and why applications should not own provider details.',
          'Hosted versus self-hosted inference, and when both exist in one estate.',
          'Exercise: sketch a target architecture for a product team that currently calls a model directly.',
        ],
      },
      {
        title: 'Workloads: RAG, agents and events',
        points: [
          'Synchronous assistants versus asynchronous generation and evaluation jobs.',
          'RAG as a service: indexes, tenancy, and the application’s contract with retrieval.',
          'Agents as software with tools, budgets and an authority boundary.',
          'Event-driven AI: queues, retries, idempotency and human review queues.',
          'Exercise: place three workloads on the same platform without sharing the wrong state.',
        ],
      },
      {
        title: 'Security, identity and governance',
        points: [
          'Identity for users, services and tools; permissions on retrieval and actions.',
          'Secrets, provider keys, and isolating untrusted content from privileged tools.',
          'Data boundaries, tenancy, residency and logging that does not become a leak.',
          'Governance: who can change prompts, models, tools and evaluation criteria.',
          'Exercise: threat-model a gateway-plus-RAG design.',
        ],
      },
      {
        title: 'Operations: cost, latency, scale and release',
        points: [
          'Observability: traces, token economics, retrieval records and user-visible errors.',
          'Evaluation, prompt versions and model comparison as release machinery.',
          'Cost controls, caching, rate limits and quotas per team or product.',
          'Fallbacks, resilience, scalability, deployment and multi-model routing.',
          'Design review: a complete production architecture against a realistic brief.',
        ],
      },
    ],
    practicalWork:
      'Architecture exercises and design reviews, not coding labs. Participants produce architecture options, review a weak design, and complete a production architecture for a realistic system including gateway, RAG or agents, security and operations. Reviews are run as they would be in an engineering organisation.',
    takeaways: [
      'Reference architecture diagrams and component checklists',
      'A production-readiness review method',
      'Decision notes for hosted versus self-hosted and multi-model routing',
      'An observability, evaluation and cost-control baseline',
    ],
  },
  {
    slug: 'building-enterprise-ai-assistants',
    title: 'Building Enterprise AI Assistants',
    shortDescription:
      'A two-day course for developers and platform teams: build a secure internal assistant that can use organisational knowledge and systems, with identity, permissions, citations and evaluation.',
    overview:
      'Internal assistants fail when they are treated as a chatbot with a company PDF attached. Enterprises need identity, permissions-aware retrieval, tool access to internal APIs, citations, logging and a deployment path that security will accept. This course is about that system.\n\nParticipants design and build an assistant architecture: enterprise search and RAG, identity and SSO, data access, tool use, workflows, conversational context and memory. Security, privacy, logging, evaluation and deployment are part of the same build, not a later hardening pass.\n\nThe practical work is an internal knowledge assistant that can answer from permitted documents, call a constrained internal tool, cite sources, and refuse when it should.\n\nTeams leave with a working assistant and a clear list of the platform pieces — identity, retrieval ACLs, audit — that a product team should not have to reinvent.',
    audience:
      'Developers and enterprise platform teams building internal assistants, copilots or knowledge systems.',
    audienceLabel: 'Developers and enterprise platform teams',
    prerequisites:
      'Professional software development experience and familiarity with authentication concepts. RAG experience is helpful. Access to a representative document set improves the labs.',
    duration: '2 days',
    durationNote: 'Can be delivered against the organisation’s identity provider, document stores and internal APIs.',
    level: 'Intermediate',
    category: 'architecture',
    outcomes: [
      'Design an assistant architecture that separates conversation, retrieval, tools and identity.',
      'Implement permissions-aware retrieval so answers cannot cite documents the user cannot access.',
      'Integrate identity and SSO into assistant sessions, tools and audit logs.',
      'Connect constrained internal APIs as tools with validation and least privilege.',
      'Provide citations, conversational context and memory without leaking across users or tenants.',
      'Evaluate assistant quality, groundedness and unsafe behaviour before deployment.',
      'Deploy an internal assistant with logging, privacy controls and an operational boundary.',
    ],
    outline: [
      {
        title: 'Assistant architecture',
        points: [
          'Conversation, orchestration, retrieval, tools and policy as separate concerns.',
          'Enterprise search versus RAG, and when both are required.',
          'Identity, SSO and the assistant as a system acting on behalf of a user.',
          'Build: session-aware assistant skeleton with authenticated access.',
        ],
      },
      {
        title: 'Knowledge with permissions',
        points: [
          'Ingestion, ACL metadata and retrieval that honours document permissions.',
          'Citations, refusal and the behaviour when search returns nothing the user may see.',
          'Conversational context versus durable memory; isolation between users.',
          'Build: permissions-aware retrieval over an internal corpus.',
        ],
      },
      {
        title: 'Tools, workflows and internal systems',
        points: [
          'Internal APIs as tools: schemas, scopes, and not granting the model the user’s full rights by accident.',
          'Workflows that need confirmation: tickets, messages, records.',
          'Privacy, logging and the data that must not enter a model provider.',
          'Build: add a constrained internal tool with an approval path.',
        ],
      },
      {
        title: 'Evaluation and deployment',
        points: [
          'Evaluation sets drawn from real internal questions.',
          'Security review: injection, logging, identity and tool scope.',
          'Deployment: environments, configuration, monitoring and support.',
          'Build: complete the internal knowledge assistant and run it against an evaluation set.',
        ],
      },
    ],
    practicalWork:
      'Participants build an internal knowledge assistant over a representative corpus. The system authenticates, retrieves only permitted material, cites sources, can call one internal tool, and is evaluated against realistic internal questions.',
    takeaways: [
      'A working internal knowledge assistant',
      'Patterns for SSO, retrieval ACLs and tool scopes',
      'Citation, logging and evaluation templates',
      'A deployment and security checklist for internal assistants',
    ],
  },
  {
    slug: 'architecting-enterprise-generative-ai',
    title: 'Architecting Enterprise Generative AI',
    shortDescription:
      'A two-day course for architects and senior technical leaders: design enterprise-scale AI capability as a platform, not as a sequence of isolated projects.',
    overview:
      'Organisations that succeed with generative AI rarely do it as a pile of unrelated copilots. They build a small number of shared capabilities — identity, model access, retrieval, evaluation, cost control — and let product teams consume them. This course is about that enterprise shape.\n\nParticipants work through enterprise AI platforms, shared services, model gateways, identity, security, governance and data access. RAG platforms, observability, evaluation and cost management are designed as multi-team services. Vendor abstraction, deployment patterns and the split between platform and product responsibilities are made explicit.\n\nThe teaching uses architecture case studies. Participants design a platform that several product teams could use without each team negotiating a model vendor, a vector database and a logging story from scratch.\n\nThe result is an enterprise architecture and an operating model, not a project plan for a single assistant.',
    audience:
      'Architects and senior technical leaders responsible for enterprise AI capability, platform strategy or multi-team enablement.',
    audienceLabel: 'Architects and senior technical leaders',
    prerequisites:
      'Experience with enterprise architecture, platform engineering or large-scale delivery. Familiarity with generative AI is expected. This is not an introductory course.',
    duration: '2 days',
    durationNote: 'Often delivered as a private session around the organisation’s current estate and constraints.',
    level: 'Advanced',
    category: 'architecture',
    outcomes: [
      'Design an enterprise AI platform with shared services for models, retrieval, identity and evaluation.',
      'Define platform versus product responsibilities so teams are neither blocked nor unsupervised.',
      'Specify identity, security, governance and data-access patterns that multiple products can share.',
      'Plan vendor abstraction and model-gateway policy without pretending lock-in is free to avoid.',
      'Design RAG and evaluation as platforms rather than as features inside one application.',
      'Establish cost management, observability and enablement for several teams.',
      'Produce a target architecture and a sequenced path from current isolated projects.',
    ],
    outline: [
      {
        title: 'From projects to a platform',
        points: [
          'Why isolated copilots recreate the same security, cost and quality problems.',
          'Shared services: gateway, policy, retrieval, evaluation, observability.',
          'Platform versus product: APIs, paved paths and the work that must stay in teams.',
          'Case study: an organisation with five assistants and no shared control plane.',
        ],
      },
      {
        title: 'Shared control: identity, security, data and vendors',
        points: [
          'Identity, entitlements and acting on behalf of a user across assistants.',
          'Data access, tenancy and a RAG platform with permissions.',
          'Governance: model and prompt change, approval, and audit.',
          'Vendor abstraction, dual-sourcing and the cost of a gateway.',
          'Exercise: define the shared services and the product-team contract.',
        ],
      },
      {
        title: 'Enablement and operations',
        points: [
          'Observability, evaluation and cost allocation across teams.',
          'Deployment patterns: central platform, federated delivery, and hybrid.',
          'Multi-team enablement: documentation, golden paths and review.',
          'Exercise: sequence a 12-month platform roadmap from current projects.',
        ],
      },
      {
        title: 'Target architecture',
        points: [
          'A complete enterprise architecture: control plane, data, runtime and delivery.',
          'Risks: central bottleneck, shadow AI, and platform that is only a procurement wrapper.',
          'Case study review and critique.',
          'Produce a target diagram, responsibility matrix and next-step programme.',
        ],
      },
    ],
    practicalWork:
      'Architecture case studies and design work. Participants critique an estate of isolated AI projects, define shared services, and produce a target architecture, responsibility split and sequenced roadmap. Where possible, the case is the customer’s.',
    takeaways: [
      'A target enterprise AI architecture',
      'A platform versus product responsibility matrix',
      'Gateway, RAG, evaluation and cost-control service definitions',
      'A sequenced enablement roadmap',
    ],
  },
];
