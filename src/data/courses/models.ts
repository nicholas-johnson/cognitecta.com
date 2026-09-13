import type { Course } from './types';

export const modelsCourses: Course[] = [
  {
    slug: 'transformers-from-first-principles',
    title: 'Transformers from First Principles',
    shortDescription:
      'A two-day course for technically strong practitioners: build a usable understanding of transformer models by implementing simplified components, without unnecessary mathematical formalism.',
    overview:
      'Transformer models sit under almost every production language system in current use. Many engineers can call an API without being able to reason about attention, context, or why scaling and quantisation behave as they do. This course closes that gap by building the mechanism from the pieces.\n\nThe course starts with vectors, embeddings and matrix operations at an intuitive level, then implements attention, self-attention, queries, keys and values. Positional information, transformer blocks, feed-forward layers and normalisation are assembled into a working picture of a model. Training, loss, token prediction and inference are connected to that implementation.\n\nThe mathematics is kept as light as the subject allows. You write code for simplified transformer components and inspect them, rather than being asked to reproduce a paper. Scaling and production implications are drawn out as the implementation grows.\n\nYou leave able to read a transformer architecture, discuss it with ML specialists, and make better choices about context, fine-tuning and local inference.',
    audience:
      'Developers, ML engineers and technically strong practitioners who want a deeper, implementation-level understanding of transformer models.',
    audienceLabel: 'Developers, ML engineers and strong practitioners',
    prerequisites:
      'Comfortable writing code and with high-school algebra. Some familiarity with arrays or tensors helps. No requirement for formal machine-learning theory or advanced calculus.',
    duration: '2 days',
    durationNote: 'Can be reduced to a dense one-day briefing without the full implementation labs, or extended with more training-loop work.',
    level: 'Advanced',
    category: 'models-ml',
    outcomes: [
      'Explain embeddings, attention and transformer blocks in implementation terms.',
      'Implement simplified self-attention, including queries, keys, values and positional information.',
      'Assemble a transformer block: attention, feed-forward layers, residual connections and normalisation.',
      'Connect training, loss and token prediction to the forward pass the class has built.',
      'Describe inference, scaling and the practical limits that follow from the architecture.',
      'Use the implementation as a basis for better decisions about context, fine-tuning and runtime.',
    ],
    outline: [
      {
        title: 'Representations',
        points: [
          'Vectors, embeddings and similarity as geometry rather than as mysticism.',
          'Matrix operations as the work the hardware is doing.',
          'Tokens in, vectors through, logits out.',
          'Lab: implement embeddings and a tiny prediction head.',
        ],
      },
      {
        title: 'Attention',
        points: [
          'Queries, keys and values; why attention is a routing mechanism.',
          'Self-attention on a short sequence, inspected step by step.',
          'Positional information and what breaks if it is omitted.',
          'Lab: implement scaled dot-product attention and visualise weights.',
        ],
      },
      {
        title: 'The transformer block',
        points: [
          'Multi-head attention, feed-forward layers, residual connections and normalisation.',
          'Stacking blocks; what depth changes and what it costs.',
          'Lab: assemble a small transformer and run a forward pass.',
        ],
      },
      {
        title: 'Training, inference and scale',
        points: [
          'Loss, token prediction and a minimal training step.',
          'Inference as a loop, and the difference between teacher-forced training and generation.',
          'Scaling, context length and why implementation details become product constraints.',
          'Lab: train a tiny model on a toy corpus and generate from it.',
        ],
      },
    ],
    practicalWork:
      'You implement simplified transformer components in code: embeddings, attention, a block, and a tiny training and generation loop. The objective is understanding, not reproducing a production-scale model.',
    takeaways: [
      'Working code for simplified transformer components',
      'Visualisations of attention and token prediction',
      'A compact architecture reference for production discussions',
      'A clearer map from internals to context, fine-tuning and inference choices',
    ],
  },
  {
    slug: 'fine-tuning-language-models',
    title: 'Fine-Tuning Language Models',
    shortDescription:
      'A two-day course for ML engineers and experienced AI developers: when to adapt a model, how to do it with parameter-efficient methods, and how to evaluate and deploy the result.',
    overview:
      'Fine-tuning is often proposed when the real problem is retrieval, prompting, or data that should never enter a model. It is also under-used where a model must acquire a style, a schema, or a behaviour that prompting cannot hold. This course teaches the distinction, then the practice.\n\nYou cover dataset construction, cleaning, supervised fine-tuning, LoRA, QLoRA and other parameter-efficient methods. Training configuration, GPUs, quantisation, evaluation, overfitting, safety and deployment are treated as operational work. RAG versus fine-tuning is kept in view throughout.\n\nThe course includes a practical fine-tuning exercise. You run a parameter-efficient adaptation, evaluate it against a held-out set, and discuss whether the result is worth the operational cost compared with retrieval or a better application design.\n\nThe aim is a team that can fine-tune when it is justified, and refuse it when it is not.',
    audience:
      'ML engineers and experienced AI developers responsible for model adaptation, evaluation and deployment.',
    audienceLabel: 'ML engineers and experienced AI developers',
    prerequisites:
      'Comfortable with Python, training loops at a basic level, and LLM application design. GPU access is required for the labs. The RAG course is useful context but not mandatory.',
    duration: '2 days',
    durationNote: 'Can be focused on your organisation’s base model and data, including safety and deployment constraints.',
    level: 'Advanced',
    category: 'models-ml',
    outcomes: [
      'Decide when fine-tuning is appropriate compared with prompting, RAG or conventional software.',
      'Construct and clean a dataset that matches the behaviour being trained.',
      'Implement supervised fine-tuning with LoRA or QLoRA and explain the trade-offs.',
      'Configure training, quantisation and GPU use with an eye on cost and overfitting.',
      'Evaluate adapted models against held-out tasks, safety cases and the base model.',
      'Plan deployment, versioning and rollback for an adapted model.',
      'Account for operational and safety implications of changing model behaviour.',
    ],
    outline: [
      {
        title: 'Whether to fine-tune',
        points: [
          'What fine-tuning can change: style, format, specialised language, and some behaviours.',
          'What it cannot replace: current facts, permissions, and tools.',
          'RAG versus fine-tuning versus both.',
          'Exercise: classify a set of requests as prompt, retrieve, fine-tune, or do not use a model.',
        ],
      },
      {
        title: 'Data and methods',
        points: [
          'Datasets, labelling, cleaning and the damage done by noisy instruction data.',
          'Supervised fine-tuning, preference methods at a practical level, and what the course will not over-claim.',
          'LoRA, QLoRA and parameter-efficient fine-tuning.',
          'Lab: prepare a small, honest dataset.',
        ],
      },
      {
        title: 'Training and evaluation',
        points: [
          'Training configuration, batching, learning rates and overfitting.',
          'GPUs, quantisation and what VRAM actually constrains.',
          'Evaluation against the base model: task, safety, and regressions.',
          'Lab: run a LoRA or QLoRA job and evaluate it.',
        ],
      },
      {
        title: 'Deployment and operations',
        points: [
          'Serving an adapted model, versioning, and not losing the base model as a fallback.',
          'Safety: new behaviours, prompt injection surface, and data that should not have been trained in.',
          'Operational cost versus API models and retrieval.',
          'Lab: package the adapter, record the evaluation, and write the go/no-go note.',
        ],
      },
    ],
    practicalWork:
      'You prepare a dataset, run a parameter-efficient fine-tune, evaluate against a held-out set and the base model, and produce a deployment note. The exercise is sized to finish during the course; it is not an attempt to beat a frontier model.',
    takeaways: [
      'A trained adapter and evaluation report',
      'Dataset and training configuration templates',
      'A RAG versus fine-tuning decision guide',
      'Deployment, versioning and safety notes',
    ],
  },
  {
    slug: 'training-your-own-language-model',
    title: 'Training Your Own Language Model',
    shortDescription:
      'A two-to-three-day course for advanced developers and ML engineers: build and train a small language model in order to understand the process, not to compete with frontier systems.',
    overview:
      'Training a language model looks opaque from the outside. This course demystifies it by having you construct a dataset, tokenise, implement a small transformer, and run a training loop you can inspect. The objective is understanding. Nobody leaves with a model that replaces a production API, and that is stated at the start.\n\nThe course covers dataset construction, tokenisation, embeddings, architecture, the training loop, loss, optimisation, batching, validation, checkpoints and inference. GPU constraints, scaling and evaluation are discussed as the reasons large training runs look the way they do.\n\nYou train a small working model. You watch loss move, inspect generations, and connect those observations to the production models you already call.\n\nThe value is a team that can talk to ML engineers, judge training proposals, and stop treating “we should train our own model” as either magic or a strategy.',
    audience:
      'Advanced developers and ML engineers who need a grounded understanding of language-model training.',
    audienceLabel: 'Advanced developers and ML engineers',
    prerequisites:
      'Strong Python, comfort with the transformer course or equivalent, and access to a GPU environment. This is not a first course in AI.',
    duration: '2–3 days',
    durationNote: 'Two days is sufficient for a small model and a complete loop. Three days allows more work on data, evaluation and scaling discussion.',
    level: 'Advanced',
    category: 'models-ml',
    outcomes: [
      'Construct a small training dataset and a tokeniser appropriate to the experiment.',
      'Implement or assemble a small transformer and explain each stage of the forward pass.',
      'Run a training loop with batching, loss, optimisation, validation and checkpoints.',
      'Generate from a checkpoint and evaluate it honestly against the training objective.',
      'Relate GPU memory, batch size and context length to what is feasible in the course and in a real cluster.',
      'Judge when training from scratch is the wrong proposal compared with adapting or calling an existing model.',
    ],
    outline: [
      {
        title: 'Data and representation',
        points: [
          'Dataset construction, licensing, quality and the limits of a teaching corpus.',
          'Tokenisation: what the model actually trains on.',
          'Embeddings and sequence preparation.',
          'Lab: build the dataset and tokeniser for the experiment.',
        ],
      },
      {
        title: 'Model and training loop',
        points: [
          'A small transformer: blocks, context, parameters.',
          'Loss, optimisation, batching and gradient steps.',
          'Validation, checkpoints and the difference between a falling loss and a useful model.',
          'Lab: train, watch the curves, and intervene when the run is unhealthy.',
        ],
      },
      {
        title: 'Inference, evaluation and scale',
        points: [
          'Inference from checkpoints; sampling versus the training objective.',
          'Evaluation that matches the claim being made for the model.',
          'GPU constraints, scaling laws at an intuitive level, and why frontier training is a different industry.',
          'Discussion: when an organisation should train, adapt, or simply call a model.',
          'Lab: generate, evaluate, and write an honest account of what the model can do.',
        ],
      },
    ],
    practicalWork:
      'You train a small working language model. You own the dataset, the loop, the checkpoints and the evaluation. The closing artefact is the model plus a short report that states what was learned and what would not transfer to a production training programme.',
    takeaways: [
      'A small trained model and checkpoints',
      'A training-loop implementation and run notes',
      'An evaluation report with an honest scope',
      'A framework for judging training proposals in an organisation',
    ],
  },
  {
    slug: 'running-llms-locally',
    title: 'Running LLMs Locally',
    shortDescription:
      'A one-day practical course on local and private inference: model formats, hardware, quantisation, engines, benchmarking and the privacy and cost reasons to run models yourself.',
    overview:
      'Local inference is no longer only a hobbyist concern. Teams run models on laptops, on-prem GPUs and private cloud for privacy, cost, latency or air-gapped work. The difficulty is operational: choosing a model size that fits VRAM, a format the engine can load, and a configuration that meets a latency target.\n\nThis course is practical. You work through model families, formats, sizes, quantisation, inference engines, CPU versus GPU, throughput, latency, context length and batching. You expose a local API, measure it, and discuss hardware selection and deployment.\n\nPrivacy and cost are treated as the usual reasons to do this work, not as slogans. The course is honest about quality loss from aggressive quantisation and about the gap between a laptop demo and a multi-user service.\n\nYou leave able to select, run, benchmark and expose a local model, and to decide when local inference is the right deployment rather than a preferred ideology.',
    audience:
      'Developers, infrastructure engineers and AI engineers who need to run or support local and private inference.',
    audienceLabel: 'Developers, infrastructure and AI engineers',
    prerequisites:
      'Comfortable with the command line and with installing local tooling. A machine with enough RAM, and a GPU if available, makes the labs more realistic. No ML research background is required.',
    duration: '1 day',
    durationNote: 'Can be extended with a day on serving at team scale, or focused on a particular engine and hardware estate.',
    level: 'Intermediate',
    category: 'models-ml',
    outcomes: [
      'Select a model family, size and quantisation that fit a given hardware envelope.',
      'Run local inference with a current engine and expose it behind a local API.',
      'Measure latency, throughput, context length and quality trade-offs.',
      'Compare CPU and GPU paths, including batching and concurrent users.',
      'Design a private deployment that matches privacy, cost and operational constraints.',
      'Choose hardware with a defensible view of VRAM, context and expected load.',
    ],
    outline: [
      {
        title: 'Models, formats and hardware',
        points: [
          'Model families and the practical differences that affect local use.',
          'Formats, quantisation and the quality/VRAM trade-off.',
          'VRAM, RAM, CPU and what “it will run” actually means.',
          'Lab: inventory the machine and choose a model that will fit.',
        ],
      },
      {
        title: 'Running and serving',
        points: [
          'Inference engines, configuration, context length and batching.',
          'Local APIs and making a model look like a service to application code.',
          'CPU versus GPU, throughput versus latency.',
          'Lab: run a model, expose an API, and send structured requests.',
        ],
      },
      {
        title: 'Benchmarking and deployment',
        points: [
          'Measuring tokens per second, time to first token, and quality regressions from quantisation.',
          'Privacy, cost and when local inference is cheaper than hosted APIs — including the cases where it is not.',
          'Deployment: desktop, on-prem, private cloud, and the jump to multi-user serving.',
          'Lab: benchmark two configurations and write a hardware recommendation.',
        ],
      },
    ],
    practicalWork:
      'You install or use a local inference engine, load a quantised model, expose an API, and benchmark latency and throughput. You compare configurations and produce a short hardware and deployment recommendation.',
    takeaways: [
      'A running local model and API',
      'Benchmark notes for latency, throughput and quantisation',
      'A hardware and model-selection checklist',
      'Deployment options for private inference',
    ],
  },
];
