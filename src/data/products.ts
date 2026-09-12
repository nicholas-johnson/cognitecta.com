export type ProductSlug = 'platform' | 'stack' | 'wargame';

export interface ProductLink {
  label: string;
  href: string;
}

export interface ProductCapability {
  id: string;
  title: string;
  body: string;
}

export interface ProductUseCase {
  id: string;
  title: string;
  problem: string;
  approach: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  body?: string;
}

export interface Product {
  slug: ProductSlug;
  name: string;
  fullName: string;
  category: string;
  verb: string;
  intelligence: string;
  framing: string;
  shortDescription: string;
  landingLine: string;
  headline: string;
  support: string;
  overview: string[];
  seoTitle: string;
  seoDescription: string;
  primaryCta: ProductLink;
  secondaryCta: ProductLink;
  closingQuestion: string;
  capabilities: ProductCapability[];
  useCases: ProductUseCase[];
  process: ProcessStep[];
  limits: string[];
}

export const productFamily = {
  kicker: 'Cognitecta Products',
  headline: 'Agentic systems for operations, analysis and strategy.',
  support:
    'Cognitecta products apply autonomous and semi-autonomous AI to three different classes of organisational problem: doing work, understanding evidence and reasoning about what happens next.',
  model: 'Act. Understand. Decide.',
} as const;

export const comparison = [
  {
    id: 'purpose',
    label: 'Primary purpose',
    platform: 'Execute work',
    stack: 'Investigate data',
    wargame: 'Explore strategy',
  },
  {
    id: 'input',
    label: 'Input',
    platform: 'Requests, events, workflows',
    stack: 'Open-ended analytical questions and data',
    wargame: 'Strategic problem and actor model',
  },
  {
    id: 'process',
    label: 'Core process',
    platform: 'Agents, tools and knowledge',
    stack: 'Hypothesis generation and testing',
    wargame: 'Actor simulation and Monte Carlo',
  },
  {
    id: 'output',
    label: 'Output',
    platform: 'Actions, answers, completed workflows',
    stack: 'Findings, visualisations, presentations',
    wargame: 'Scenario probabilities, risks, action options',
  },
  {
    id: 'users',
    label: 'Typical users',
    platform: 'Operations, support, internal teams',
    stack: 'Analysts, leaders, strategy and data teams',
    wargame: 'Leadership, strategy, policy and planning teams',
  },
] as const;

export const products: Product[] = [
  {
    slug: 'platform',
    name: 'Platform',
    fullName: 'Cognitecta Platform',
    category: 'Agentic Operations',
    verb: 'Act',
    intelligence: 'Operational intelligence',
    framing: 'Agents that act',
    shortDescription:
      'An agent harness and runtime for deploying teams of AI agents around organisational work.',
    landingLine:
      'Agent infrastructure for customer support, knowledge systems and operational workflows.',
    headline: 'Agents that can actually do the work.',
    support:
      'Cognitecta Platform orchestrates teams of agents, tools, RAG pipelines and workflows around real business processes — with permission boundaries, escalation and production controls.',
    overview: [
      'Platform is an agent harness and runtime. It provides the reusable infrastructure needed to put specialist agent teams into organisational work: orchestration, tools, workflows, retrieval, memory, routing, integration and the operational controls that decide whether a system can leave a prototype.',
      'A chatbot can be one interface to Platform. The product is broader than that. Its function is to let agents operate inside an organisation with access to the appropriate tools, knowledge and workflows — and to stop, ask or escalate when the work exceeds a defined boundary.',
      'Build customer support, knowledge assistants and operational agents on a common production-ready foundation, adapted to existing systems rather than replacing them.',
    ],
    seoTitle: 'Platform | Agentic AI Operations | Cognitecta',
    seoDescription:
      'Cognitecta Platform is an agent harness and runtime for deploying teams of AI agents around organisational work — with tools, RAG, workflows, escalation and production controls.',
    primaryCta: { label: 'Discuss a deployment', href: '/contact?interest=platform' },
    secondaryCta: { label: 'Explore capabilities', href: '#capabilities' },
    closingQuestion: 'Have a workflow that could benefit from agentic automation?',
    capabilities: [
      {
        id: '01',
        title: 'Multi-agent orchestration',
        body: 'Route work across specialist agents that share context, hand off tasks and remain inside defined roles.',
      },
      {
        id: '02',
        title: 'RAG pipelines',
        body: 'Retrieve from approved knowledge sources, construct grounded context, and cite what was used.',
      },
      {
        id: '03',
        title: 'Tool integration',
        body: 'Give agents constrained access to the tools required to inspect state and take authorised actions.',
      },
      {
        id: '04',
        title: 'Workflow execution',
        body: 'Run multi-step processes rather than isolated replies — classify, retrieve, act, record, escalate.',
      },
      {
        id: '05',
        title: 'Memory and context',
        body: 'Retain the context that a task actually needs, without treating every conversation as a blank page.',
      },
      {
        id: '06',
        title: 'Human-in-the-loop',
        body: 'Escalate complex, ambiguous or high-risk cases to people, with a summary of what the system already did.',
      },
      {
        id: '07',
        title: 'Permission-aware access',
        body: 'Respect the identity and access model of the organisation. Agents see what the user is allowed to see.',
      },
      {
        id: '08',
        title: 'System integrations',
        body: 'Connect to line-of-business systems, APIs and knowledge bases already in use.',
      },
      {
        id: '09',
        title: 'Evaluation',
        body: 'Measure whether the system is doing the job — groundedness, routing quality, task completion, refusal.',
      },
      {
        id: '10',
        title: 'Observability',
        body: 'Trace what an agent retrieved, which tools it called, and why a case was escalated.',
      },
      {
        id: '11',
        title: 'Guardrails',
        body: 'Constrain tools, topics and actions. The system should refuse when the request is outside policy.',
      },
      {
        id: '12',
        title: 'Deployment controls',
        body: 'Promote agent systems into production with the same seriousness as any other operational service.',
      },
    ],
    useCases: [
      {
        id: '01',
        title: 'Customer support',
        problem:
          'Support desks accumulate the same questions, the same account lookups and the same routing decisions. Knowledge is scattered, context is lost between channels, and experienced agents spend time on work that is repetitive rather than judgement-heavy.',
        approach:
          'Platform can operate a support desk as a governed agent system: answer from approved knowledge, inspect account information through authorised tools, classify issues, route work, recommend or execute defined actions, retain relevant context, and produce summaries for human agents. Complex or high-risk cases escalate. Completely unsupervised operation is not the point; controlled autonomy is.',
      },
      {
        id: '02',
        title: 'Enterprise assistants',
        problem:
          'Internal and external conversational interfaces often stop at a fluent answer. They cannot retrieve the right document, call the right system, or respect who is asking.',
        approach:
          'Platform can power an internal or external assistant that answers from approved sources, retrieves and cites documentation, accesses tools, performs authorised actions, and orchestrates specialist agents behind a single interface. The conversation is the visible layer. The agent system behind it is the product.',
      },
      {
        id: '03',
        title: 'Investor intelligence',
        problem:
          'Investor relations and internal performance questions require documents, metrics and narrative to be held together. The work is slow when every question starts a new search across filings, packs and systems.',
        approach:
          'Platform can retrieve company information, analyse documents, compare reported metrics, interpret filings and internal data, and surface supporting evidence in a context-aware response. This is investor information and analytical support — not automated financial advice.',
      },
      {
        id: '04',
        title: 'Operational automation',
        problem:
          'Many internal processes are already structured — a request arrives, information is gathered, a decision is prepared, a system is updated — but the work still sits in inboxes.',
        approach:
          'Platform can take those multi-step processes and execute the parts that are well-defined: gather context, call tools, advance a workflow, and stop for a person when the next action needs judgement or authority.',
      },
      {
        id: '05',
        title: 'Internal knowledge systems',
        problem:
          'IT, HR, procurement, compliance and research teams maintain large bodies of policy and precedent that people cannot search well, and that a generic chatbot will flatten.',
        approach:
          'Platform can sit in front of those corpora as a permission-aware knowledge system: retrieve the relevant material, keep the answer inside policy, and hand the case to a specialist when retrieval is not enough.',
      },
    ],
    process: [
      { id: '01', title: 'User / Event / System' },
      { id: '02', title: 'Agent Router' },
      { id: '03', title: 'Agent Team' },
      { id: '04', title: 'Tools / Workflows / RAG / Memory' },
      { id: '05', title: 'Enterprise Systems + Knowledge' },
      { id: '06', title: 'Escalation / Observability / Governance' },
    ],
    limits: [
      'Permission boundaries matter. Agents operate inside the organisation’s identity and access model.',
      'Human escalation matters. Ambiguous, high-risk or out-of-policy work should reach a person.',
      'Operational controls matter. Retrieval, tools, evaluation and monitoring are part of the system, not later extras.',
    ],
  },
  {
    slug: 'stack',
    name: 'Stack',
    fullName: 'Cognitecta Stack',
    category: 'Agentic Data Analysis',
    verb: 'Understand',
    intelligence: 'Analytical intelligence',
    framing: 'Agents that analyse',
    shortDescription:
      'An agentic data analysis system that investigates open-ended questions, tests hypotheses and produces a structured analytical deliverable.',
    landingLine:
      'An analytical workflow that investigates open-ended questions, tests hypotheses and produces decision-ready analysis.',
    headline: 'Ask the question. Let Stack investigate.',
    support:
      'Stack connects to your analytical data, forms hypotheses, tests them against the evidence and turns its findings into a structured analysis — including charts, narrative and a finished presentation.',
    overview: [
      'Stack is an agentic data analysis system. A user points it at organisational data — a data lake, warehouse or analytical environment — and asks an open-ended question.',
      'It does not simply translate that question into one SQL query. It behaves more like an analytical team: interpret the question, inspect the available data, form hypotheses, test those that can be tested, compare evidence, reject weak explanations, refine the analysis, and decide how the findings should be communicated.',
      'Traditional BI asks what the dashboard shows. Stack asks what might be happening, and what evidence supports that reading. The result is an investigative workflow, not a guaranteed account of the truth.',
    ],
    seoTitle: 'Stack | Agentic Data Analysis | Cognitecta',
    seoDescription:
      'Cognitecta Stack is an agentic data analysis system. Ask an open-ended question; Stack investigates hypotheses, tests them against the evidence and produces structured analysis and presentations.',
    primaryCta: { label: 'Discuss your data', href: '/contact?interest=stack' },
    secondaryCta: { label: 'See how it works', href: '#how-it-works' },
    closingQuestion: 'Bring Stack an open-ended question.',
    capabilities: [
      {
        id: '01',
        title: 'Hypothesis generation',
        body: 'Turn an open-ended question into a set of candidate explanations that can be investigated.',
      },
      {
        id: '02',
        title: 'Hypothesis testing',
        body: 'Run analyses that strengthen or weaken those explanations against the available data.',
      },
      {
        id: '03',
        title: 'Follow-up analysis',
        body: 'Pursue the lines of enquiry that survive the first pass, and drop those that do not.',
      },
      {
        id: '04',
        title: 'Comparison',
        body: 'Place segments, periods, regions and products next to each other so differences are visible.',
      },
      {
        id: '05',
        title: 'Statistical evidence',
        body: 'Use quantitative support where the data and the question justify it — without dressing noise as proof.',
      },
      {
        id: '06',
        title: 'Anomalies and trends',
        body: 'Surface breaks, outliers and movements that a fixed dashboard may never be asked to show.',
      },
      {
        id: '07',
        title: 'Segmentation',
        body: 'Separate the averages that hide the work from the groups that actually moved.',
      },
      {
        id: '08',
        title: 'Presentation intelligence',
        body: 'Choose findings, charts and sequence so the output is an argument, not a pile of slides.',
      },
    ],
    useCases: [
      {
        id: '01',
        title: 'Commercial performance',
        problem:
          'Revenue, margin and mix questions are rarely answered by a single chart. The useful question is what changed, where, and what else moved with it.',
        approach:
          'Stack can investigate performance across products, regions, channels and time, then assemble the evidence into a narrative a commercial team can review.',
      },
      {
        id: '02',
        title: 'Customer behaviour',
        problem:
          'Retention, churn and conversion shifts often have several plausible causes. Dashboards show the metric; they do not run the investigation.',
        approach:
          'Point Stack at the relevant customer and event data and ask what appears to have changed — then review the hypotheses it tested and the ones it discarded.',
      },
      {
        id: '03',
        title: 'Operational analysis',
        problem:
          'Inefficiency is easy to feel and hard to locate. The work is finding where time, cost or failure actually concentrates.',
        approach:
          'Stack can look across operational measures, compare units and time periods, and surface the patterns that deserve a closer human look.',
      },
      {
        id: '04',
        title: 'Marketing effectiveness',
        problem:
          'Campaign, channel and creative questions are usually asked after the fact, against incomplete attribution and too many cuts of the data.',
        approach:
          'Stack investigates the cuts that the question implies, reports what the data can support, and stays silent where the evidence is too thin.',
      },
      {
        id: '05',
        title: 'Financial analysis',
        problem:
          'A movement in profitability has a list of usual suspects — price, mix, cost, volume — and the work is deciding which of them the data actually supports.',
        approach:
          'Stack can walk that list as an investigation, then produce a reviewable pack rather than a single unexplained variance line.',
      },
      {
        id: '06',
        title: 'Product analytics',
        problem:
          'Product teams need to know which behaviours changed, not only which dashboard tile went red.',
        approach:
          'Ask what changed before a drop in activation, engagement or conversion, and review the evidence Stack assembled.',
      },
      {
        id: '07',
        title: 'Executive reporting',
        problem:
          'Leadership packs take time because someone has to decide what matters, what to show, and in what order.',
        approach:
          'Stack can draft that argument from the data — findings, charts, sequence — for a human to accept, edit or reject.',
      },
      {
        id: '08',
        title: 'Investor reporting',
        problem:
          'Explaining a period to investors or a board requires a coherent account, not a warehouse of charts.',
        approach:
          'Stack can assemble a structured reading of the period. The reading remains a draft for professional review, not a statement of record on its own.',
      },
    ],
    process: [
      { id: '01', title: 'Question' },
      { id: '02', title: 'Understand data' },
      { id: '03', title: 'Form hypotheses' },
      { id: '04', title: 'Test hypotheses' },
      { id: '05', title: 'Refine analysis' },
      { id: '06', title: 'Select evidence' },
      { id: '07', title: 'Visualise' },
      { id: '08', title: 'Build narrative' },
      { id: '09', title: 'Generate presentation' },
    ],
    limits: [
      'Hypotheses can be wrong. The system is designed to test them, not to declare them true.',
      'Data quality matters. Missing fields, biased samples and broken joins will shape the result.',
      'Findings require evidence. Where the data cannot support a claim, the analysis should say so.',
      'Human review remains valuable. Generated analyses are drafts for professional judgement.',
    ],
  },
  {
    slug: 'wargame',
    name: 'Wargame',
    fullName: 'Cognitecta Wargame',
    category: 'Agentic Strategy',
    verb: 'Decide',
    intelligence: 'Strategic intelligence',
    framing: 'Agents that simulate strategy',
    shortDescription:
      'An agentic strategy and scenario simulation system that models actors, incentives and possible responses under uncertainty.',
    landingLine:
      'Actor modelling and Monte Carlo simulation for complex strategic environments.',
    headline: 'Model the actors. Simulate the outcomes. Improve the strategy.',
    support:
      'Wargame builds an explicit model of a strategic environment, simulates possible interactions and helps identify actions that may improve the likelihood of the outcome you want.',
    overview: [
      'Wargame is an agentic strategy and scenario simulation system. It creates a model of the relevant actors in a strategic environment — competitors, customers, regulators, partners, political actors, market participants, internal stakeholders — and the incentives, goals, constraints and relationships that shape what they may do.',
      'Strategy is a system of interacting actors. Wargame attempts to model those actors and explore how their decisions may interact. It can then run large numbers of possible scenarios, using Monte Carlo simulation where appropriate, to estimate a distribution of outcomes rather than a single forecast.',
      'The point is not to predict the future with certainty. It is to make assumptions explicit, explore their consequences at scale, and help a decision-maker see risks, opportunities, influential variables and actions that may shift the distribution.',
    ],
    seoTitle: 'Wargame | Agentic Strategy & Simulation | Cognitecta',
    seoDescription:
      'Cognitecta Wargame models actors, incentives and possible responses, then runs repeated simulations to explore how different strategies may change the distribution of outcomes.',
    primaryCta: { label: 'Discuss a scenario', href: '/contact?interest=wargame' },
    secondaryCta: { label: 'See the methodology', href: '#methodology' },
    closingQuestion:
      'Have a strategic problem with multiple actors and uncertain outcomes?',
    capabilities: [
      {
        id: '01',
        title: 'Actor modelling',
        body: 'Make objectives, incentives, capabilities, constraints and relationships explicit enough to inspect.',
      },
      {
        id: '02',
        title: 'Assumption review',
        body: 'Let human experts examine and refine the model before it is used to explore decisions.',
      },
      {
        id: '03',
        title: 'Scenario generation',
        body: 'Explore possible actions and responses across the actor model, not a single planned path.',
      },
      {
        id: '04',
        title: 'Monte Carlo simulation',
        body: 'Run many simulations with variation in uncertain assumptions, and read a distribution rather than a point.',
      },
      {
        id: '05',
        title: 'Outcome analysis',
        body: 'Estimate which classes of outcome appear more or less often under a given strategy.',
      },
      {
        id: '06',
        title: 'Intervention search',
        body: 'Ask which actions appear to increase the chance of a desired outcome, or reduce a particular risk.',
      },
      {
        id: '07',
        title: 'Sensitivity',
        body: 'Show which assumptions and actors drive the result, and where better evidence would matter most.',
      },
      {
        id: '08',
        title: 'Decision support',
        body: 'Return recommended actions with likely consequences, alternatives, uncertainty and the assumptions they rest on.',
      },
    ],
    useCases: [
      {
        id: '01',
        title: 'Competitive response',
        problem:
          'A price, product or channel move is rarely answered by the market as a static equation. Competitors react. Customers migrate. Margins move twice.',
        approach:
          'Model the relevant competitors and customers, then simulate responses to a proposed action — for example a price reduction — including follow-on pricing behaviour and share effects. The output is a distribution of outcomes, not a promise.',
      },
      {
        id: '02',
        title: 'Market entry',
        problem:
          'Entering a market is a decision under interaction: incumbents, customers, regulators and partners all have a move.',
        approach:
          'Build the actor model for that market, explore alternative entry strategies, and inspect which assumptions most affect the result.',
      },
      {
        id: '03',
        title: 'Negotiation',
        problem:
          'Negotiations fail when fallback positions, concessions and reactions stay implicit until they are tested in the room.',
        approach:
          'Represent the stakeholders, their incentives and their likely responses, then explore negotiation paths and the conditions under which an acceptable agreement appears more often.',
      },
      {
        id: '04',
        title: 'Strategic policy',
        problem:
          'Programmes that depend on several organisations rarely fail for one reason. They fail because the actors do not move together.',
        approach:
          'Model the organisations and stakeholder responses around a programme, then ask which actions appear to increase the probability that it succeeds — and which assumptions that reading depends on.',
      },
    ],
    process: [
      { id: '01', title: 'Environment' },
      { id: '02', title: 'Actors' },
      { id: '03', title: 'Incentives + constraints' },
      { id: '04', title: 'Possible actions' },
      { id: '05', title: 'Responses' },
      { id: '06', title: 'Scenarios' },
      { id: '07', title: 'Simulation' },
      { id: '08', title: 'Outcome distribution' },
    ],
    limits: [
      'Simulations depend on model assumptions. A refined actor model is more useful than a precise-looking number.',
      'Probabilities are conditional estimates, not forecasts of what will happen.',
      'Actor models need review. Human experts should be able to inspect and correct the incentives and constraints.',
      'Uncertainty should be visible. Sensitivity is part of the result, not a footnote.',
    ],
  },
];

export const stackQuestions = [
  'Why has customer retention fallen this quarter?',
  'What is driving margin erosion?',
  'Which factors appear to predict churn?',
  'Why is one region outperforming another?',
  'Where are the biggest operational inefficiencies?',
  'What explains the change in conversion rate?',
  'Which customer segments are behaving differently?',
  'What changed before the decline in support satisfaction?',
  'What are the most important patterns in this data that management should know about?',
] as const;

export const stackExample = {
  label: 'Illustrative example — not a customer result',
  question: 'Why did profitability fall in Q2?',
  investigated: [
    'Revenue',
    'Customer mix',
    'Region',
    'Product mix',
    'Acquisition costs',
    'Discounts',
    'Operational expenditure',
    'Retention',
    'Pricing',
    'Seasonality',
  ],
  narrative:
    'Profitability declined primarily due to margin compression in two product segments, compounded by increased acquisition costs in one region.',
} as const;

export const wargameExamples = [
  {
    id: '01',
    title: 'Competitive response',
    question: 'What happens if we reduce our price by 10%?',
    model: [
      'Competitor response',
      'Customer migration',
      'Margin impact',
      'Market share',
      'Possible follow-on pricing behaviour',
    ],
  },
  {
    id: '02',
    title: 'Market entry',
    question: 'What is likely to happen if we enter this market?',
    model: [
      'Incumbent reaction',
      'Customer response',
      'Regulatory conditions',
      'Partner incentives',
      'Alternative strategies',
    ],
  },
  {
    id: '03',
    title: 'Negotiation',
    question: 'What strategy is most likely to produce an acceptable agreement?',
    model: [
      'Stakeholder incentives',
      'Fallback positions',
      'Concessions',
      'Reactions',
      'Negotiation paths',
    ],
  },
  {
    id: '04',
    title: 'Strategic policy',
    question: 'What actions increase the probability that this programme succeeds?',
    model: [
      'Multiple organisations',
      'Stakeholder responses',
      'Incentives and constraints',
      'Coordinating actions',
      'Points of failure',
    ],
  },
] as const;

export const wargameDistribution = {
  label: 'Illustrative distribution — not a real simulation',
  outcomes: [
    { id: 'A', title: 'Scenario A', share: 52 },
    { id: 'B', title: 'Scenario B', share: 31 },
    { id: 'C', title: 'Scenario C', share: 17 },
  ],
} as const;

export const chatToAction = [
  { id: '01', title: 'Chat' },
  { id: '02', title: 'Knowledge' },
  { id: '03', title: 'Tools' },
  { id: '04', title: 'Workflows' },
  { id: '05', title: 'Agent teams' },
  { id: '06', title: 'Operational system' },
] as const;

export const platformLayers = [
  {
    id: '01',
    title: 'User / Event / System',
    items: ['Requests', 'Events', 'Upstream systems'],
  },
  {
    id: '02',
    title: 'Agent Router',
    items: ['Classify', 'Route', 'Apply policy'],
  },
  {
    id: '03',
    title: 'Agent Team',
    items: ['Specialists', 'Handoffs', 'Shared context'],
  },
  {
    id: '04',
    title: 'Tools / Workflows / RAG / Memory',
    items: ['Tools', 'Workflows', 'RAG', 'Memory'],
  },
  {
    id: '05',
    title: 'Enterprise Systems + Knowledge Sources',
    items: ['APIs', 'Line-of-business systems', 'Approved corpora'],
  },
  {
    id: '06',
    title: 'Human Escalation / Observability / Governance',
    items: ['Escalation', 'Traces', 'Controls'],
  },
] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productHref(slug: ProductSlug) {
  return `/products/${slug}`;
}

export function productContactHref(slug: ProductSlug) {
  return `/contact?interest=${slug}`;
}
