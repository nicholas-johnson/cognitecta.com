export interface CaseStudyCapability {
  id: string;
  title: string;
  body: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  fullName: string;
  sector: string;
  year: string;
  tagline: string;
  summary: string;
  disciplines: string[];
  problem: string;
  approach: string[];
  capabilities: CaseStudyCapability[];
  stack: string[];
  outcome: string;
  note?: string;
  gallery?: {
    caption: string;
    images: CaseStudyImage[];
  };
  seoTitle: string;
  seoDescription: string;
}

export const caseStudyIntro = {
  kicker: 'Selected work',
  headline: 'Client projects we designed and built.',
  support:
    'A selection of production systems delivered for clients. Some client details are confidential, so these focus on the problem, the approach and what was built rather than named organisations or figures.',
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: 'itad-assist',
    name: 'ITAD Assist',
    fullName: 'Linear Horizon ITAD Assist',
    sector: 'IT asset disposition',
    year: '2026',
    tagline: 'Find the best next life for every retired IT asset.',
    summary:
      'A decision-support tool that estimates reuse, refurbishment, component-harvest, material-recovery and disposal value for retired IT hardware — with a deterministic calculation engine an agent can consult but never overrule.',
    disciplines: ['Agentic system', 'Decision support', 'Deterministic engine', 'MCP tools'],
    problem:
      'When an organisation retires IT hardware, the value is spread across several possible fates — resale, refurbishment, harvesting components, recovering raw materials, or safe disposal — and the right choice differs for every asset. That decision is usually made on intuition or a spreadsheet, with no auditable basis and no consistent way to compare routes or recycler quotes.',
    approach: [
      'We separated judgement from arithmetic. A pure, decimal-only domain package holds the formulae; the calculations are deterministic and versioned, so every estimate freezes the assumption set and formula version it was produced under. Updating a commodity price later never rewrites a stored estimate.',
      'Around that engine we built a client-facing application backed by a Python service: batches, CSV import, per-asset estimates, scenario overrides, quote comparison and recorded outcomes — all scoped to the organisation rather than to a request, so tenants stay isolated.',
      'An agentic layer connects through MCP so an assistant can interpret messy asset descriptions, compare routes and explain an estimate in plain language — while the numbers stay owned by the deterministic engine, not the model.',
    ],
    capabilities: [
      {
        id: '01',
        title: 'Route estimation',
        body: 'Estimate value across reuse, refurbishment, component harvest, material recovery and disposal for each asset.',
      },
      {
        id: '02',
        title: 'Deterministic engine',
        body: 'Decimal-only formulae in a pure domain package — auditable calculations with no floating-point drift.',
      },
      {
        id: '03',
        title: 'Versioned assumptions',
        body: 'Every estimate freezes its assumption set and formula version, so a later price change cannot silently rewrite history.',
      },
      {
        id: '04',
        title: 'Batches and import',
        body: 'CSV upload and organisation-scoped asset records, with frozen estimate snapshots per batch.',
      },
      {
        id: '05',
        title: 'Scenarios and quotes',
        body: 'Compare route overrides and recycler quotes side by side without mutating the published assumption set.',
      },
      {
        id: '06',
        title: 'Agent access via MCP',
        body: 'An assistant can identify assets, compare routes and explain an estimate — without owning the maths.',
      },
    ],
    stack: [
      'SvelteKit BFF',
      'Python / FastAPI service',
      'MongoDB',
      'Decimal domain engine',
      'MCP (Streamable HTTP)',
      'Nx monorepo',
    ],
    outcome:
      'A working client product: an estimating workspace where an operator can import a batch of assets, produce auditable value estimates across every disposition route, compare quotes and record outcomes — with an agent able to assist through the same service.',
    note: 'Seeded prices, yields and material compositions in the build are illustrative, not live market data.',
    seoTitle: 'ITAD Assist | Client Project | Linear Horizon',
    seoDescription:
      'A client project by Linear Horizon: ITAD Assist estimates reuse, refurbishment, component-harvest, material-recovery and disposal value for retired IT hardware, backed by a deterministic, versioned calculation engine with agent access via MCP.',
  },
  {
    slug: 'roborigs',
    name: 'RoboRigs',
    fullName: 'RoboRigs',
    sector: 'Robotics & hardware design',
    year: '2026',
    tagline: 'From a sentence to a 3D-printable robot.',
    summary:
      'An agentic design workspace that turns a plain-language robot idea into concept art, CAD, printable parts and validated 3D meshes — driven by a chat that can operate the tools.',
    disciplines: ['Agentic workflow', 'Generative design', 'CAD & mesh', 'MCP tools'],
    problem:
      'Turning a rough hardware idea into something you can actually print involves a chain of specialist steps — concept design, CAD, part layout, printability checks, mesh export — each in a different tool. For a non-expert, the gap between “I want a boxy robot with an AI HAT” and a validated print plate is enormous.',
    approach: [
      'We built a single workspace where the whole pipeline is driven by conversation. Describe the robot; the system generates concept images, lets you breed and refine them, then hands a chosen concept to CAD.',
      'Behind the chat, a set of MCP tools do the specialist work: generate concepts, produce CAD and views, measure parts against the printer bed, run validation checks and export meshes. The agent orchestrates them, and the workspace visualises each stage — concepts, assembled and exploded views, print plate and mesh.',
      'Validation is explicit. Parts are checked for fit and interface tolerances, and findings come back as pass, warn or fail with fix hints — so a design converges on something printable rather than merely plausible.',
    ],
    capabilities: [
      {
        id: '01',
        title: 'Conversational design',
        body: 'Describe a robot in plain language and iterate on it through chat, with the agent driving the tools.',
      },
      {
        id: '02',
        title: 'Concept generation and breeding',
        body: 'Generate concept images, select the promising ones and refine them across generations.',
      },
      {
        id: '03',
        title: 'CAD handoff',
        body: 'Turn a chosen concept into parametric parts and rendered assembled and exploded views.',
      },
      {
        id: '04',
        title: 'Bed-fit checking',
        body: 'Measure every part against the printer build volume so the design stays printable.',
      },
      {
        id: '05',
        title: 'Validation findings',
        body: 'Interface and tolerance checks returned as pass, warn or fail — each with a fix hint.',
      },
      {
        id: '06',
        title: 'Mesh export',
        body: 'Generate and preview 3D meshes and a print plate, with artefacts kept in the project.',
      },
    ],
    stack: [
      'SvelteKit',
      'Shared chat client',
      'MCP tools (CAD, mesh-gen, concept-images, rig, parts)',
      'Python services',
      'Nx monorepo',
    ],
    outcome:
      'A design studio that takes a spoken idea through concepts, CAD, validation and mesh export — keeping every intermediate artefact, from concept images to meshes, in one project the agent and the user share.',
    seoTitle: 'RoboRigs | Client Project | Linear Horizon',
    seoDescription:
      'A client project by Linear Horizon: RoboRigs is an agentic design workspace that turns a plain-language robot idea into concepts, CAD, printability checks and validated 3D meshes, driven by a chat that operates MCP tools.',
  },
  {
    slug: 'tabbytutor',
    name: 'SukiTutor',
    fullName: 'SukiTutor',
    sector: 'Education & homeschooling',
    year: '2026',
    tagline: 'A homeschool tutor for curious minds.',
    summary:
      'An AI tutoring app for homeschooling families: specialist subject tutors teach curriculum-aligned lessons through conversation and voice, with gamified rewards for children and a progress view for parents.',
    disciplines: ['Consumer product', 'Conversational tutoring', 'Voice', 'Curriculum-aware'],
    problem:
      'Homeschooling parents have to be teacher, curriculum planner and progress tracker at once, across every subject. Generic chatbots are neither curriculum-aware nor designed for children, and they leave parents with no view of what has actually been covered.',
    approach: [
      'We built a family product with two audiences. Parents create an account, add each child with age, year group and interests, and get a dashboard of what is active, complete and recommended next. Children learn through conversation with a specialist tutor per subject — English, Maths, Science, History, Geography and Computing.',
      'Lessons are curriculum-aligned by key stage and unfold as a chat, with optional voice for hands-free learning at the table. A curriculum service and MCP tools keep each tutor grounded in the right topics rather than free-associating.',
      'Engagement is designed for children without being hollow. Filling a themed streak unlocks real-world “lore” — ghost legends, space missions, dinosaurs — delivered as a short factual chat with the matching tutor, so the reward is real stories and science.',
    ],
    capabilities: [
      {
        id: '01',
        title: 'Specialist subject tutors',
        body: 'A distinct tutor per subject and key stage, each with its own voice and examples.',
      },
      {
        id: '02',
        title: 'Curriculum-aligned lessons',
        body: 'Lessons grounded in key-stage topics through a curriculum service, not free-form chat.',
      },
      {
        id: '03',
        title: 'Conversational and voice',
        body: 'Lessons run as a chat, with optional hands-free voice for learning at the table.',
      },
      {
        id: '04',
        title: 'Child profiles',
        body: 'Age, year group and interests personalise how a tutor frames its examples.',
      },
      {
        id: '05',
        title: 'Themed rewards',
        body: 'Streaks unlock factual real-world lore rather than hollow gamification.',
      },
      {
        id: '06',
        title: 'Parent dashboard',
        body: 'Active, complete and recommended-next at a glance, to plan the week without a separate tracker.',
      },
    ],
    stack: [
      'SvelteKit',
      'Realtime voice',
      'Curriculum + tutor MCP servers',
      'Python services',
      'Themeable UI',
      'Nx monorepo',
    ],
    outcome:
      'A complete homeschooling product with a child learning experience and a parent planning view — themed, curriculum-aware tutoring a family can use as their weekly structure.',
    note: 'Delivered under the product brand SukiTutor (project codename TabbyTutor).',
    gallery: {
      caption: 'Lesson cover art from the product',
      images: [
        { src: '/images/work/tabbytutor/ks1-sci-animals-1.png', alt: 'SukiTutor lesson cover — Key Stage 1 science, animals' },
        { src: '/images/work/tabbytutor/ks2-art-painting-1-2.png', alt: 'SukiTutor lesson cover — Key Stage 2 art, painting' },
        { src: '/images/work/tabbytutor/ks3-hist-tudors-2-1.png', alt: 'SukiTutor lesson cover — Key Stage 3 history, the Tudors' },
        { src: '/images/work/tabbytutor/ks3-geo-tectonic-1-1.png', alt: 'SukiTutor lesson cover — Key Stage 3 geography, tectonics' },
        { src: '/images/work/tabbytutor/ks3-sci-genetics-1-1.png', alt: 'SukiTutor lesson cover — Key Stage 3 science, genetics' },
        { src: '/images/work/tabbytutor/ks2-hist-ancient-civ-1.png', alt: 'SukiTutor lesson cover — Key Stage 2 history, ancient civilisations' },
      ],
    },
    seoTitle: 'SukiTutor | Client Project | Linear Horizon',
    seoDescription:
      'A client project by Linear Horizon: SukiTutor is an AI homeschool tutoring app with specialist subject tutors, curriculum-aligned lessons, voice, themed rewards for children and a parent progress dashboard.',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function caseStudyHref(slug: string) {
  return `/work/${slug}`;
}
