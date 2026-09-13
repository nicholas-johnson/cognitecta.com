export const callcenterPillars = [
  {
    id: '01',
    title: 'Universal Conversation',
    line: 'The channel changes. The conversation does not.',
    body: 'One customer interaction can move from email to WhatsApp to SMS to voice to a human adviser without losing shared state.',
  },
  {
    id: '02',
    title: 'Agentic Resolution',
    line: 'Answers are useful. Permitted actions finish the work.',
    body: 'Callcenter is designed to retrieve approved knowledge, consult connected systems and take permitted actions — not only to answer FAQs.',
  },
  {
    id: '03',
    title: 'Warm Handoff',
    line: 'The conversation transfers, and the context transfers with it.',
    body: 'When automation reaches a boundary, a person receives identity, history, summary, actions already attempted and a suggested next step.',
  },
] as const;

export const callcenterProblems = [
  'Repeated questions',
  'Lost context',
  'Unnecessary transfers',
  'Poor handoff',
  'Duplicate case work',
  'Frustrated customers',
  'Higher handling times',
  'Inconsistent service',
] as const;

export const callcenterChannelGroups = [
  {
    id: 'customer',
    title: 'Customer channels',
    body: 'The surfaces a customer already uses to ask for help.',
    items: [
      {
        title: 'Voice',
        body: 'Inbound calls for status, changes, triage and the work that still needs to be spoken.',
      },
      {
        title: 'WhatsApp',
        body: 'Messaging that can continue a case, carry a document, or resolve an exception without a queue.',
      },
      {
        title: 'SMS',
        body: 'Short, timely contact — updates, links, confirmations and callbacks.',
      },
      {
        title: 'Email',
        body: 'Longer written contact that should still join the same conversation, not open a disconnected ticket.',
      },
    ],
  },
  {
    id: 'collaboration',
    title: 'Human collaboration',
    body: 'Where service teams already work when a person needs to take over or approve.',
    items: [
      {
        title: 'Microsoft Teams',
        body: 'Escalation, specialist consultation, supervisor alerts and takeover from an internal collaboration interface.',
      },
      {
        title: 'Slack',
        body: 'The same collaboration pattern where Slack is the operational workspace.',
      },
    ],
  },
  {
    id: 'systems',
    title: 'Customer and case systems',
    body: 'The system of record for who the customer is and what has already been done.',
    items: [
      {
        title: 'Salesforce',
        body: 'Contacts, accounts, cases, notes and previous service history — retrieved and updated as part of the journey.',
      },
    ],
  },
] as const;

export const callcenterJourney = [
  {
    id: '01',
    channel: 'Email',
    time: '09:10',
    line: 'My delivery hasn’t arrived.',
  },
  {
    id: '02',
    channel: 'WhatsApp',
    time: '10:24',
    line: 'Any update?',
  },
  {
    id: '03',
    channel: 'Voice',
    time: '11:03',
    line: 'Customer calls',
  },
  {
    id: '04',
    channel: 'Human handoff',
    time: '11:07',
    line: 'Adviser receives the full context',
  },
] as const;

export const callcenterConversationState = [
  'Customer identity',
  'Intent',
  'Interaction history',
  'Retrieved knowledge',
  'CRM context',
  'Actions attempted',
  'Pending work',
  'Authentication state',
  'Escalation status',
] as const;

export const callcenterIdentity = [
  { id: '01', title: 'Phone number' },
  { id: '02', title: 'WhatsApp identity' },
  { id: '03', title: 'Email address' },
  { id: '04', title: 'Salesforce contact' },
] as const;

export const callcenterTrust = [
  {
    id: '01',
    title: 'Public information',
    body: 'Published status, store hours, and other material that does not identify a customer.',
  },
  {
    id: '02',
    title: 'Recognised customer',
    body: 'A contact identity has been reconciled. Recognition on its own is not authorisation.',
  },
  {
    id: '03',
    title: 'Authenticated customer',
    body: 'Your configured checks have been satisfied for ordinary account work.',
  },
  {
    id: '04',
    title: 'Step-up verification',
    body: 'A stronger check before exposing sensitive information or preparing a restricted action.',
  },
  {
    id: '05',
    title: 'Sensitive action',
    body: 'Work that policy treats as high-risk: a person, an extra check, or both.',
  },
] as const;

export const callcenterContext = [
  'Customer intent',
  'Previous interactions',
  'Product or account',
  'Urgency',
  'Issue complexity',
  'Salesforce data',
  'Business rules',
  'Customer status',
  'Preferred channel',
  'Model confidence',
  'Sentiment signals',
] as const;

export const callcenterVoiceSteps = [
  { id: '01', title: 'Answer immediately' },
  { id: '02', title: 'Determine intent' },
  { id: '03', title: 'Identify the customer' },
  { id: '04', title: 'Authenticate where appropriate' },
  { id: '05', title: 'Retrieve customer information' },
  { id: '06', title: 'Retrieve organisational knowledge' },
  { id: '07', title: 'Invoke tools' },
  { id: '08', title: 'Perform permitted actions' },
  { id: '09', title: 'Confirm the result' },
  { id: '10', title: 'Escalate when necessary' },
] as const;

export const callcenterVoiceExamples = [
  'Delivery status',
  'Booking changes',
  'Appointment management',
  'Account questions',
  'Service requests',
  'Support triage',
  'Order enquiries',
  'Basic troubleshooting',
  'Case creation',
] as const;

export const callcenterSwitching = [
  { from: 'Voice', to: 'SMS link' },
  { from: 'Voice', to: 'WhatsApp document' },
  { from: 'Email', to: 'Voice callback' },
  { from: 'WhatsApp', to: 'Human voice' },
  { from: 'SMS', to: 'Web workflow' },
] as const;

export const callcenterProactive = [
  'Delivery delay',
  'Appointment change',
  'Outage',
  'Failed payment',
  'Upcoming renewal',
  'Service interruption',
  'Missing information',
  'Order exception',
] as const;

export const callcenterActions = [
  'Check order',
  'Update case',
  'Create case',
  'Change booking',
  'Schedule appointment',
  'Send document',
  'Update details',
  'Trigger workflow',
  'Request approval',
  'Create follow-up',
] as const;

export const callcenterActionExamples = [
  'Checking an order',
  'Updating customer details',
  'Changing a booking',
  'Creating a support case',
  'Checking availability',
  'Retrieving account information',
  'Sending documents',
  'Scheduling appointments',
  'Logging faults',
  'Initiating permitted workflows',
  'Issuing routine service requests',
  'Triggering fulfilment actions',
] as const;

export const callcenterAutonomy = [
  {
    id: '01',
    title: 'Inform',
    body: 'AI may provide approved information.',
  },
  {
    id: '02',
    title: 'Recommend',
    body: 'AI may suggest an action but not perform it.',
  },
  {
    id: '03',
    title: 'Confirm',
    body: 'AI may perform the action after explicit customer confirmation.',
  },
  {
    id: '04',
    title: 'Approve',
    body: 'AI prepares the action but a person must authorise it.',
  },
  {
    id: '05',
    title: 'Human only',
    body: 'AI cannot perform the operation.',
  },
] as const;

export const callcenterRouting = [
  'Customer intent',
  'Product',
  'Issue type',
  'Urgency',
  'Account',
  'Language',
  'Customer status',
  'Skills required',
  'Previous contact',
  'Channel',
  'Escalation reason',
  'Team availability',
] as const;

export const callcenterAssist = [
  'Retrieve relevant knowledge',
  'Surface customer history',
  'Suggest responses',
  'Recommend next actions',
  'Summarise policies',
  'Find Salesforce context',
  'Suggest escalation',
  'Draft customer communications',
  'Provide an interaction summary',
  'Automate after-call notes',
] as const;

export const callcenterAfterCall = [
  'Summarise the interaction',
  'Update Salesforce',
  'Classify the contact reason',
  'Record resolution or disposition',
  'Generate follow-up tasks',
  'Draft confirmation messages',
  'Record actions taken',
  'Identify unresolved items',
  'Prepare handover notes',
] as const;

export const callcenterSalesforce = [
  'Retrieve customer and contact data',
  'Retrieve account information',
  'Open cases',
  'Update cases',
  'Create activities',
  'Attach summaries',
  'Update disposition',
  'Add notes',
  'Trigger workflows',
  'Retrieve previous service history',
  'Route using account context',
] as const;

export const callcenterCollaboration = [
  'Escalation notifications',
  'Human takeover',
  'Approval requests',
  'Specialist consultation',
  'Internal collaboration',
  'Conversation summaries',
  'Supervisor alerts',
] as const;

export const callcenterKnowledgeSources = [
  'Knowledge bases',
  'Help centres',
  'Product documentation',
  'Policy documents',
  'Service procedures',
  'Manuals',
  'Internal documentation',
  'Salesforce knowledge',
  'Authorised account data',
] as const;

export const callcenterKnowledgeProperties = [
  'Permissions',
  'Citations where appropriate',
  'Versioning',
  'Freshness',
  'Conflicting information',
  'Policy constraints',
] as const;

export const callcenterKnowledgeGaps = [
  'Customers repeatedly ask this question, but no approved knowledge source answers it.',
  'Two policy documents provide conflicting instructions.',
  'Escalations frequently occur after retrieval failure.',
] as const;

export const callcenterQa = [
  'Was intent understood correctly?',
  'Was the answer grounded in approved information?',
  'Was identity verified when required?',
  'Was policy followed?',
  'Did the requested action succeed?',
  'Was escalation appropriate?',
  'Did the customer have to repeat information?',
  'Was the issue actually resolved?',
  'Were unnecessary transfers introduced?',
  'Were sensitive data rules followed?',
] as const;

export const callcenterSupervisor = {
  label: 'Illustrative supervisor view — not live operational metrics',
  live: [
    'Active AI conversations',
    'Active human conversations',
    'Escalations',
    'Queues',
    'Handoffs',
    'Channel mix',
  ],
  emerging: [
    'Unusual contact volume',
    'New customer intents',
    'Repeated failures',
    'Knowledge gaps',
    'Negative sentiment trends',
    'Tool or integration errors',
  ],
  performance: [
    'Automated resolutions',
    'Human resolutions',
    'Handoff rate',
    'Repeat-contact indicators',
    'Unresolved conversations',
    'Common contact reasons',
  ],
} as const;

export const callcenterDrivers = [
  'Product defects',
  'Delivery problems',
  'Confusing billing',
  'Broken website journeys',
  'Failed internal processes',
  'Policy confusion',
  'Documentation gaps',
  'Recurring service issues',
  'Unexpected new topics',
] as const;

export const callcenterRootCauses = [
  'Contact volume regarding delivery delays increased significantly after the logistics change.',
  'Many calls classified as billing enquiries originate from one confusing line on the invoice.',
  'Customers are contacting support because the self-service workflow fails at step four.',
] as const;

export const callcenterAgents = [
  {
    title: 'Identity Agent',
    body: 'Resolves who the customer is and what authentication state applies.',
  },
  {
    title: 'Intent Agent',
    body: 'Determines what the customer is trying to achieve.',
  },
  {
    title: 'Conversation Agent',
    body: 'Maintains conversation state as the customer moves between channels.',
  },
  {
    title: 'Knowledge Agent',
    body: 'Retrieves relevant approved information from the sources you have authorised.',
  },
  {
    title: 'Customer Agent',
    body: 'Retrieves customer and account context from connected systems.',
  },
  {
    title: 'Action Agent',
    body: 'Executes permitted tool calls inside the autonomy limits you set.',
  },
  {
    title: 'Policy Agent',
    body: 'Checks organisational constraints before information is disclosed or an action is taken.',
  },
  {
    title: 'Routing Agent',
    body: 'Determines when and where to hand the conversation off.',
  },
  {
    title: 'Translation Agent',
    body: 'Supports multilingual service where that is enabled for a deployment.',
  },
  {
    title: 'Summary Agent',
    body: 'Creates structured summaries and handoffs for the next person in the path.',
  },
  {
    title: 'Quality Agent',
    body: 'Evaluates completed interactions against configured criteria.',
  },
] as const;

export const callcenterHandoff = {
  label: 'Illustrative handoff — not a live product screenshot',
  customer: 'John Smith',
  issue: 'Order #82381 has not arrived.',
  history: 'Email → WhatsApp → Voice',
  identity: 'Verified',
  summary:
    'Customer contacted support this morning regarding a failed delivery. Tracking indicates the parcel is likely lost.',
  actions: [
    'Tracking checked',
    'Delivery address verified',
    'Carrier status retrieved',
    'Replacement eligibility checked',
  ],
  reason: 'Replacement value exceeds automated approval threshold.',
  next: 'Approve replacement.',
  sentiment: 'Frustrated',
} as const;

export const callcenterApproval = {
  label: 'Illustrative collaboration card — interface concept, not a live control',
  customer: 'Jane Smith',
  request: 'Refund £420',
  reason: 'Confirmed failed delivery',
  recommendation: 'Approve',
} as const;

export const callcenterBenefits = [
  'Immediate response',
  'Reduced queue dependence',
  'Routine self-service',
  'Better context',
  'Faster resolution',
  'Fewer repeated explanations',
  'Better handover',
  'Reduced after-call administration',
  'Greater human capacity for difficult interactions',
  'More consistent service',
] as const;

export const callcenterEscalation = [
  'Vulnerable customers',
  'Serious complaints',
  'Emotionally sensitive issues',
  'Uncertain model confidence',
  'Exceptional circumstances',
  'High-value decisions',
  'High-risk actions',
  'Regulated activities',
  'Explicit requests for a human',
] as const;

export const callcenterGovernance = [
  'PII handling',
  'Masking',
  'Redaction',
  'Logs',
  'Transcripts',
  'Data retention',
  'Access permissions',
  'Tool permissions',
  'Customer authentication',
] as const;

export const callcenterArchitecture = {
  channels: ['Voice', 'WhatsApp', 'SMS', 'Email'],
  layer: 'Universal Conversation Layer',
  core: ['Identity', 'Intent', 'Orchestration'],
  team: 'Agent Team',
  systems: ['Knowledge / RAG', 'Salesforce', 'Tools / APIs', 'Customer data', 'Policies'],
  outcomes: ['Resolve', 'Handoff'],
  handoff: ['Teams', 'Slack', 'Salesforce', 'Human adviser'],
  surround: ['Identity', 'Permissions', 'Observability', 'Evaluation', 'Audit', 'Guardrails'],
} as const;
