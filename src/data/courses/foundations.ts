import type { Course } from './types';

export const foundationsCourses: Course[] = [
  {
    slug: 'generative-ai-fundamentals',
    title: 'Generative AI Fundamentals',
    shortDescription:
      'A technically accurate, practical introduction to modern generative AI for mixed rooms. Enough depth to make sound decisions; no requirement to write code.',
    overview:
      'Most introductions to generative AI either stay at the level of product demonstrations or assume a software engineering background. This course sits between those two. It explains what large language models actually do, where they are reliable, and where they fail, in language that holds up in a technical conversation without turning the day into a coding class.\n\nParticipants work through tokens, context, generation, prompting, retrieval, tools and agents as a coherent model rather than a list of features. The aim is not familiarity with a particular product. It is a working picture of the technology: how output is produced, why hallucination occurs, what retrieval actually changes, and what “an agent” means in practice.\n\nThe course is hands-on. Participants use current AI systems to test prompting, structured requests, retrieval and multimodal inputs, then examine the results with enough scepticism to be useful at work. Privacy, security and responsible use are treated as operating constraints, not as a closing slide.\n\nBy the end of the day, participants can talk about generative AI with precision, choose appropriate uses, and recognise designs that will not survive contact with real data, real users or organisational risk.',
    audience:
      'Mixed technical and non-technical professionals: product managers, analysts, knowledge workers, business stakeholders, and engineers who want a shared, accurate foundation before more specialised work.',
    audienceLabel: 'Mixed technical and non-technical professionals',
    prerequisites:
      'No programming experience is required. Participants should be comfortable using a computer and working with documents, and should have access to a current generative AI system during the course.',
    duration: '1 day',
    durationNote: 'Can be adapted to a half-day briefing, or extended with additional exercises for a particular domain.',
    level: 'Foundation',
    category: 'foundations',
    outcomes: [
      'Explain how large language models generate output, including tokens, context and sampling, without relying on marketing language.',
      'Diagnose common failure modes, including hallucination, stale knowledge and over-confident answers.',
      'Design prompts and structured requests that produce more reliable, inspectable results.',
      'Compare prompting, retrieval-augmented generation, tool use and agents, and say when each is justified.',
      'Evaluate open and closed model choices against privacy, cost, capability and control.',
      'Identify practical business uses that fit current capabilities, and reject uses that do not.',
      'Apply responsible-use constraints around confidential information, verification and human accountability.',
    ],
    outline: [
      {
        title: 'What generative AI is — and is not',
        points: [
          'A precise model of generative systems versus classical software and predictive ML.',
          'Large language models as next-token predictors, not knowledge bases or reasoning engines.',
          'Strengths: drafting, transformation, synthesis, coding assistance, interface generation.',
          'Limits: truth, currency, counting, long-horizon planning, and tasks that require authority.',
          'Exercise: inspect strong and weak outputs from the same task and name the failure mode.',
        ],
      },
      {
        title: 'How models produce output',
        points: [
          'Tokens, context windows and why “the model read the document” is often the wrong description.',
          'Sampling, temperature and the difference between variation and correctness.',
          'Instruction following, system prompts and the gap between requested behaviour and guaranteed behaviour.',
          'Multimodal inputs: images, documents and the additional failure modes they introduce.',
          'Exercise: change context and sampling and observe how answers shift.',
        ],
      },
      {
        title: 'Prompting that can be inspected',
        points: [
          'Role, task, constraints, examples and output shape as a practical prompting model.',
          'Structured prompting: lists, schemas, rubrics and checklists rather than open-ended chat.',
          'Iteration: testing a prompt against several inputs instead of polishing a single lucky answer.',
          'When better prompting is enough, and when the problem is missing information or missing tools.',
          'Exercise: rewrite a vague request into a structured prompt and compare the results.',
        ],
      },
      {
        title: 'Retrieval, tools and agents',
        points: [
          'Why models cannot be assumed to know your documents, policies or systems.',
          'Retrieval-augmented generation: what is retrieved, what is generated, and what still has to be checked.',
          'Tools and function calling: giving a model access to search, calculators, tickets or APIs.',
          'Agents: loops over tools and state, including the difference between a useful workflow and an unsupervised one.',
          'Exercise: compare an ungrounded answer, a retrieved answer and a tool-using answer to the same question.',
        ],
      },
      {
        title: 'Models, risk and use in organisations',
        points: [
          'Model families and the practical differences between hosted and self-hosted, open and closed.',
          'Privacy, data handling, retention and the difference between a consumer tool and an organisational deployment.',
          'Security and responsible use: confidential information, verification, provenance and human sign-off.',
          'Business use cases that hold up: drafting, knowledge access, analysis support, software assistance.',
          'Where the technology is heading, without treating research demos as production capability.',
          'Exercise: assess three proposed uses for value, risk and fitness to current systems.',
        ],
      },
    ],
    practicalWork:
      'Participants work throughout the day in a current generative AI system. Exercises include inspecting failure modes, rewriting prompts, comparing ungrounded and retrieved answers, and assessing proposed workplace uses against capability, risk and data sensitivity.',
    takeaways: [
      'A shared, technically accurate vocabulary for models, context, retrieval, tools and agents',
      'Prompt patterns that can be reused and inspected at work',
      'A simple framework for judging whether a use case belongs to prompting, retrieval, tools or a conventional system',
      'A checklist for privacy, verification and responsible use',
    ],
  },
  {
    slug: 'practical-generative-ai-at-work',
    title: 'Practical Generative AI at Work',
    shortDescription:
      'A working day for knowledge workers and business teams: using generative AI for research, writing, analysis and document work, with enough discipline to trust the output.',
    overview:
      'Generative AI is already in daily work, often without a shared method. People paste confidential text into consumer tools, accept fluent answers as evidence, or abandon the technology after a few disappointing attempts. This course is for the people who have to use it on real documents, real numbers and real decisions.\n\nThe day is organised around work, not around a catalogue of tips. Participants practise research, summarisation, writing, analysis, brainstorming and structured extraction, then spend as much time on verification as on generation. Hallucination is treated as an expected property of the system, not as a rare defect. Privacy and confidential information are handled as operating rules.\n\nThe course is deliberately not a tour of a single product’s interface. Participants learn a method they can take back to whatever approved tools the organisation uses: how to specify the task, constrain the output, check the result, and decide when not to use a model at all.\n\nBy the end of the day, participants can use generative AI as a serious work tool — faster on the tasks it is good at, slower and more careful where the cost of a fluent error is high.',
    audience:
      'Knowledge workers and business teams: analysts, operations, research, communications, programme managers and specialists who work with documents, data and decisions.',
    audienceLabel: 'Knowledge workers and business teams',
    prerequisites:
      'No technical background is required. Participants should bring typical work examples where possible, and should use an approved organisational AI tool rather than an unmanaged consumer account if one is available.',
    duration: '1 day',
    durationNote: 'Can be delivered as a half-day for a single function, or extended with domain-specific exercises.',
    level: 'Foundation',
    category: 'foundations',
    outcomes: [
      'Design prompts for research, writing, summarisation and analysis that specify task, audience, constraints and output shape.',
      'Extract structured information from documents and meetings into tables, checklists and action lists.',
      'Verify generated output against sources, and identify claims that need evidence before they can be used.',
      'Handle confidential and personal information according to organisational rules rather than convenience.',
      'Use generative AI on spreadsheets and data with enough scepticism to catch invented figures and false structure.',
      'Decide when not to use a model, including legal, numerical, personal and high-stakes work.',
      'Build a small set of reusable work patterns for recurring tasks in their role.',
    ],
    outline: [
      {
        title: 'A working method, not a set of tricks',
        points: [
          'What current systems do well in knowledge work, and where fluency is a liability.',
          'A repeatable pattern: purpose, source, constraints, output, verification.',
          'The difference between drafting support and an authoritative answer.',
          'Exercise: take a real request from the room and make the task spec explicit.',
        ],
      },
      {
        title: 'Research, reading and summarisation',
        points: [
          'Briefing, comparison and synthesis from source material rather than from the model’s prior.',
          'Summaries for different audiences: executives, specialists, and people who were not in the room.',
          'Citations, quotations and the habit of sending the reader back to the source.',
          'Exercise: summarise a long document, then mark every claim that is not grounded in the text.',
        ],
      },
      {
        title: 'Writing, analysis and structured output',
        points: [
          'Drafting emails, papers, plans and options without handing over the decision.',
          'Brainstorming that produces alternatives rather than a single polished paragraph.',
          'Structured outputs: tables, scores, risks, options and action lists.',
          'Spreadsheets and data: useful transformation versus invented numbers.',
          'Exercise: turn unstructured notes into a structured brief, then check it against the original.',
        ],
      },
      {
        title: 'Verification, privacy and when not to use AI',
        points: [
          'Hallucination, omission and confident error as expected behaviours.',
          'Checking facts, figures, names, dates and legal or policy statements.',
          'Confidential information, personal data and the difference between approved and unmanaged tools.',
          'Work that should stay human: high-stakes decisions, original judgement, and anything requiring authority.',
          'Exercise: review a fluent but unsafe output and write the rule that would have stopped it.',
        ],
      },
    ],
    practicalWork:
      'The day is a sequence of workplace exercises on participants’ own material where possible: research and briefing, document summarisation, writing, structured extraction, and a verification pass. Each exercise ends with a judgement about whether the output is usable as-is, usable after checking, or not to be used.',
    takeaways: [
      'Reusable prompt patterns for briefing, writing, extraction and analysis',
      'A verification checklist for generated work',
      'Rules of thumb for confidential information and approved tools',
      'A short set of role-specific work patterns drafted during the day',
    ],
  },
  {
    slug: 'how-large-language-models-work',
    title: 'How Large Language Models Work',
    shortDescription:
      'A one-day explanation of LLM internals for developers, architects and technically curious professionals. Enough mechanism to improve engineering decisions, without a research-paper prerequisite.',
    overview:
      'Many teams are building on large language models without a usable picture of the mechanism. That leads to poor assumptions about memory, truth, context, fine-tuning and cost. This course explains how current models actually work, at a depth that changes how participants design systems.\n\nThe day covers tokenisation, embeddings, attention, the transformer stack, training, inference and sampling. Pretraining, instruction tuning, alignment and fine-tuning are separated carefully, because they answer different problems. Quantisation, model size and scaling are discussed as engineering constraints rather than as a race.\n\nThe explanations are visual and concrete. Small demonstrations show what tokens look like, how sampling changes output, and why a longer context is not the same thing as understanding. Mathematics is used where it clarifies; it is not the point of the course.\n\nParticipants leave able to reason about context windows, latency, model choice and the limits of prompting, retrieval and fine-tuning with more than folklore.',
    audience:
      'Developers, architects, technical product leaders and technically curious professionals who will make or influence engineering decisions about LLMs.',
    audienceLabel: 'Developers, architects and technical professionals',
    prerequisites:
      'Comfort with software concepts is expected. No specialist mathematics is required. Programming is helpful for the demonstrations but not mandatory.',
    duration: '1 day',
    durationNote: 'Can be expanded with additional implementation labs, or compressed into a technical briefing for architecture teams.',
    level: 'Intermediate',
    category: 'foundations',
    outcomes: [
      'Explain tokenisation, embeddings and next-token prediction in enough detail to reason about prompts and context.',
      'Describe attention and the transformer block as an engineering architecture, not as a metaphor.',
      'Compare pretraining, instruction tuning, alignment and fine-tuning, and say which problem each addresses.',
      'Predict how temperature, sampling, context length and model size affect output, cost and latency.',
      'Diagnose common misconceptions about memory, truth, citations and “the model knows X”.',
      'Use a clearer model of inference, quantisation and scaling when choosing between hosted and local models.',
      'Connect internals to practical choices: prompting, RAG, fine-tuning and evaluation.',
    ],
    outline: [
      {
        title: 'Tokens, embeddings and prediction',
        points: [
          'Text as tokens: why models do not see words, and why tokenisation affects cost and behaviour.',
          'Embeddings as geometry: similarity, clustering and the limits of “meaning”.',
          'Next-token prediction as the core objective, and what that implies for truth.',
          'Demonstration: inspect tokens, counts and a next-token distribution.',
        ],
      },
      {
        title: 'Attention and the transformer',
        points: [
          'Queries, keys and values as a routing mechanism over context.',
          'Self-attention, layers, feed-forward networks and residual structure.',
          'Positional information and why order is not free.',
          'Context windows: what is in scope, what is lost, and why “the whole document” is often a hope.',
          'Visual walkthrough of a forward pass on a short sequence.',
        ],
      },
      {
        title: 'Training, alignment and adaptation',
        points: [
          'Pretraining on large corpora: what is learned, and what is not.',
          'Instruction tuning and alignment: why chat models behave differently from base models.',
          'Fine-tuning and when it is the wrong lever compared with retrieval or better data at inference.',
          'Demonstration: compare a base completion with an instruction-tuned response on the same prompt.',
        ],
      },
      {
        title: 'Inference, sampling and practical limits',
        points: [
          'Inference as a loop: cache, latency, batching and why long outputs cost more than long prompts in different ways.',
          'Temperature, top-k, top-p and the difference between diversity and reliability.',
          'Model size, quantisation and the engineering trade-off between quality, VRAM and throughput.',
          'Strengths and limits that follow from the architecture, not from the product sheet.',
          'Discussion: which production problems are model problems, and which are system problems.',
        ],
      },
    ],
    practicalWork:
      'The course uses visual explanations and small demonstrations rather than a full implementation lab. Participants inspect tokenisation, sampling behaviour, context effects and the difference between base and instruction-tuned models, then apply that model to design questions brought from their own systems.',
    takeaways: [
      'A working mental model of tokens, attention, training and inference',
      'A vocabulary that holds up in architecture discussions',
      'A short decision map connecting internals to prompting, RAG, fine-tuning and model choice',
      'Reference notes and diagrams from the day',
    ],
  },
];
