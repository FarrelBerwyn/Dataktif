import {
  PlatformFeature,
  AgentTemplate,
  IntegrationItem,
  ModelProvider,
  TraceStep,
  IndustrySolution,
} from '../types';

export const ENTERPRISE_METRICS = {
  activeAgents: 24,
  tasksToday: 18492,
  successRate: 98.7,
  tokenSavingsYTD: '15,331,554,437',
  avgLatency: '1.82s',
  avgCostPerTask: 'Rp 482',
  documentsIndexed: 12842,
  knowledgeChunks: 84921,
  indexedPercentage: '99.8%',
  connectedSources: 34,
  humanEscalations: '2.1%',
  hallucinationRate: '1.2%',
  accuracyRate: '96.4%',
  taskSuccessRate: '94.8%',
};

export const TRUSTED_ENTERPRISES = [
  { name: 'Bank Mandiri', tag: 'Banking & Financial Infrastructure' },
  { name: 'BCA', tag: 'Omnichannel Payment & Retail' },
  { name: 'Telkom Indonesia', tag: 'Telecommunications & Cloud' },
  { name: 'Gojek / GoTo', tag: 'Hyperlocal Logistics & Commerce' },
  { name: 'Bank Syariah Indonesia (BSI)', tag: 'Sharia Financial Systems' },
  { name: 'Pertamina', tag: 'Energy & Supply Chain Operations' },
  { name: 'Bank Danamon', tag: 'Enterprise Commercial Credit' },
];

export const PLATFORM_MODULES: PlatformFeature[] = [
  {
    id: 'ai-studio',
    title: 'AI Studio',
    subtitle: 'Full-Stack Agent Prototyping',
    description: 'Build, evaluate, and test enterprise AI applications with natural language, visual canvases, and type-safe APIs.',
    icon: 'Layers',
    bullets: ['Visual agent canvas', 'Instant sandbox execution', 'Prompt version control', 'Deterministic guardrails'],
    metrics: { label: 'Time to Prototype', value: '< 10 mins' },
    badge: 'Core Engine'
  },
  {
    id: 'agent-builder',
    title: 'Agent Builder',
    subtitle: 'Autonomous Logic & Multi-Tool Execution',
    description: 'Configure autonomous AI agents that reason through multi-step workflows, call private enterprise APIs, and access internal state.',
    icon: 'Bot',
    bullets: ['Custom tool definitions', 'Contextual memory retention', 'Structured JSON schemas', 'Dynamic self-correction'],
    metrics: { label: 'Execution Accuracy', value: '98.7%' }
  },
  {
    id: 'ai-workforce',
    title: 'AI Workforce',
    subtitle: 'Multi-Agent Autonomous Departments',
    description: 'Coordinate multiple specialized agents that collaborate hierarchically under manager agents to execute high-stakes business operations.',
    icon: 'Users',
    bullets: ['Agent-to-agent protocol', 'Hierarchical manager delegation', 'Peer verification loops', 'Conflict resolution'],
    metrics: { label: 'Coordinated Agents', value: 'Up to 50' },
    badge: 'Enterprise Flagship'
  },
  {
    id: 'knowledge',
    title: 'Knowledge Engine',
    subtitle: 'Enterprise Semantic RAG & Context Graph',
    description: 'Turn company documents, SOPs, spreadsheets, databases, and policies into queryable, grounded vector knowledge graphs.',
    icon: 'Database',
    bullets: ['Hybrid dense + BM25 search', 'Automatic chunk deduplication', 'Source citation auditing', 'Incremental re-indexing'],
    metrics: { label: 'Index Freshness', value: 'Real-time' }
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence',
    subtitle: 'Conversational Enterprise Analytics',
    description: 'Connect enterprise data warehouses and operational databases to query, diagnose anomalies, and generate predictive SQL in seconds.',
    icon: 'LineChart',
    bullets: ['Text-to-SQL compiler', 'Automated anomaly diagnosis', 'Executive action recommendations', 'Direct ERP/BI sync'],
    metrics: { label: 'Query Speed', value: '1.1s avg' }
  },
  {
    id: 'workflow',
    title: 'Workflow Orchestrator',
    subtitle: 'Deterministic Business Process Automation',
    description: 'Bridge AI probabilistic reasoning with mission-critical deterministic triggers, human sign-offs, and fallback branches.',
    icon: 'GitFork',
    bullets: ['Low-code visual DAGs', 'Human-in-the-loop gates', 'Webhook & cron triggers', 'Dead-letter retry queues'],
    metrics: { label: 'SLA Reliability', value: '99.99%' }
  },
  {
    id: 'model-hub',
    title: 'Model Hub',
    subtitle: 'Intelligent Multi-LLM Router',
    description: 'Dynamically route inference across frontier foundation models, specialized open-weights, and private on-prem deployments.',
    icon: 'Cpu',
    bullets: ['Zero vendor lock-in', 'Latency/cost cost-optimized routing', 'Automatic failover switches', 'Custom private endpoints'],
    metrics: { label: 'Cost Reduction', value: 'Up to 64%' }
  },
  {
    id: 'governance',
    title: 'Enterprise Governance',
    subtitle: 'Zero-Trust Security & Compliance',
    description: 'Enforce strict RBAC, automated PII masking, immutable audit logging, data residency, and sovereign AI controls.',
    icon: 'ShieldCheck',
    bullets: ['PII/Sensitive data redactor', 'SOC 2 & ISO 27001 readiness', 'Complete execution tracing', 'Role-based access controls'],
    metrics: { label: 'Audit Coverage', value: '100% logs' },
    badge: 'Zero-Trust'
  },
];

export const MODEL_ROUTER_DATA: ModelProvider[] = [
  {
    id: 'claude-3-7-sonnet',
    name: 'Claude 3.7 Sonnet',
    family: 'Anthropic',
    latencyMs: 1450,
    costPer1kTokens: 0.003,
    reasoningScore: 98,
    contextWindow: '200K',
    bestFor: 'Complex contract reasoning, multi-step planning, coding',
    isRecommended: true
  },
  {
    id: 'gemini-2-5-pro',
    name: 'Gemini 2.5 Pro',
    family: 'Google DeepMind',
    latencyMs: 980,
    costPer1kTokens: 0.00125,
    reasoningScore: 96,
    contextWindow: '1M - 2M',
    bestFor: 'Massive document context, multimodal analysis, audio/video analysis',
    isRecommended: true
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    family: 'OpenAI',
    latencyMs: 1120,
    costPer1kTokens: 0.0025,
    reasoningScore: 95,
    contextWindow: '128K',
    bestFor: 'General conversational agents, structured function calling'
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek-R1 (Private Cluster)',
    family: 'DeepSeek',
    latencyMs: 1300,
    costPer1kTokens: 0.00055,
    reasoningScore: 94,
    contextWindow: '64K',
    bestFor: 'Mathematical validation, deep analytical breakdown, high efficiency'
  },
  {
    id: 'llama-3-3-70b-private',
    name: 'Llama 3.3 70B (Sovereign VPC)',
    family: 'Meta / Self-Hosted',
    latencyMs: 720,
    costPer1kTokens: 0.0003,
    reasoningScore: 89,
    contextWindow: '128K',
    bestFor: 'Air-gapped on-premise deployments, sensitive Indonesian PII'
  },
  {
    id: 'mistral-large-2',
    name: 'Mistral Large 2',
    family: 'Mistral AI',
    latencyMs: 890,
    costPer1kTokens: 0.002,
    reasoningScore: 91,
    contextWindow: '128K',
    bestFor: 'Multilingual European/Indonesian nuance, concise tool syntax'
  }
];

export const INTEGRATIONS_LIST: IntegrationItem[] = [
  { id: 'wa-biz', name: 'WhatsApp Business API', category: 'Indonesia/SEA', description: 'Enterprise messaging channel for customer support, lead capture & notifications.', iconName: 'MessageSquare', status: 'Connected', isRegional: true },
  { id: 'midtrans', name: 'Midtrans Payment Gateway', category: 'Indonesia/SEA', description: 'Query transactions, verify settlement, and detect payment fraud automatically.', iconName: 'CreditCard', status: 'Connected', isRegional: true },
  { id: 'xendit', name: 'Xendit Payments & Invoicing', category: 'Indonesia/SEA', description: 'Automate invoice generation, virtual accounts, and payment reconciliations.', iconName: 'Receipt', status: 'Connected', isRegional: true },
  { id: 'mekari-jurnal', name: 'Mekari Jurnal', category: 'Indonesia/SEA', description: 'Two-way integration for Indonesian financial ledgers, tax invoices, and reporting.', iconName: 'BookOpen', status: 'Connected', isRegional: true },
  { id: 'accurate-erp', name: 'Accurate Online ERP', category: 'Indonesia/SEA', description: 'Sync inventories, purchase orders, and multi-branch warehouse operations.', iconName: 'Boxes', status: 'Ready', isRegional: true },
  { id: 'salesforce', name: 'Salesforce CRM', category: 'CRM', description: 'Bidirectional record updates, lead enrichment, and opportunity pipelines.', iconName: 'Cloud', status: 'Connected' },
  { id: 'hubspot', name: 'HubSpot', category: 'CRM', description: 'Marketing contact syncing, lifecycle stage automation, and ticket logging.', iconName: 'Users', status: 'Connected' },
  { id: 'slack', name: 'Slack Enterprise', category: 'Communication', description: 'Real-time agent alerts, executive approval dialogs, and interactive threads.', iconName: 'Hash', status: 'Connected' },
  { id: 'gmail', name: 'Google Workspace / Gmail', category: 'Communication', description: 'Read incoming inquiries, draft replies, and parse invoice attachments.', iconName: 'Mail', status: 'Connected' },
  { id: 'postgres', name: 'PostgreSQL Database', category: 'Database', description: 'Natural-language analytics, transactional queries, and CDC streaming.', iconName: 'Database', status: 'Connected' },
  { id: 'supabase', name: 'Supabase Vector', category: 'Database', description: 'Store dense vector embeddings with pgvector and metadata filters.', iconName: 'Server', status: 'Connected' },
  { id: 'aws', name: 'Amazon Web Services (S3/Redshift)', category: 'Cloud', description: 'Ingest enterprise data lakes and automate batch document processing.', iconName: 'CloudRain', status: 'Connected' },
  { id: 'gcp', name: 'Google Cloud Platform (BigQuery)', category: 'Cloud', description: 'Direct petabyte-scale data warehouse queries via SQL translation.', iconName: 'Cpu', status: 'Connected' },
  { id: 'notion', name: 'Notion Workspace', category: 'Productivity', description: 'Index internal engineering wikis, product playbooks, and company specs.', iconName: 'FileText', status: 'Ready' },
  { id: 'sap', name: 'SAP S/4HANA', category: 'ERP', description: 'Enterprise resource planning connectors for procurement and manufacturing.', iconName: 'Network', status: 'Coming Soon' },
];

export const MARKETPLACE_TEMPLATES: AgentTemplate[] = [
  {
    id: 'tmpl-lead-qual',
    name: 'Lead Qualification & Enrichment Agent',
    category: 'Sales',
    description: 'Ingests inbound leads, verifies corporate domains, enriches via LinkedIn/registry, scores fit, and creates CRM opportunities.',
    rating: 4.9,
    usageCount: 14200,
    integrations: ['HubSpot', 'Salesforce', 'WhatsApp Business', 'Gmail'],
    capabilities: ['Domain research', 'Lead scoring (0-100)', 'Personalized outreach draft'],
    latency: '1.4s',
    costEstimate: 'Rp 340 / lead'
  },
  {
    id: 'tmpl-invoice-intel',
    name: 'Invoice Intelligence & Anti-Fraud Auditor',
    category: 'Finance',
    description: 'Extracts line items from scanned PDF/e-Faktur invoices, cross-references with ERP purchase orders, and flags duplicate or suspect accounts.',
    rating: 4.95,
    usageCount: 28900,
    integrations: ['Mekari Jurnal', 'Accurate ERP', 'Gmail', 'Xendit'],
    capabilities: ['OCR extraction', 'PO matching (3-way)', 'Tax ID validation', 'Human approval gating'],
    latency: '2.1s',
    costEstimate: 'Rp 620 / invoice'
  },
  {
    id: 'tmpl-customer-resolution',
    name: 'Omnichannel Customer Support Agent',
    category: 'Customer Service',
    description: 'Resolves technical and account queries over WhatsApp, Web, and Email using internal documentation with human escalation handoffs.',
    rating: 4.88,
    usageCount: 42100,
    integrations: ['WhatsApp Business', 'Slack', 'Zendesk', 'PostgreSQL'],
    capabilities: ['Grounded policy answers', 'Live ticket creation', 'Order status checking'],
    latency: '0.9s',
    costEstimate: 'Rp 190 / conversation'
  },
  {
    id: 'tmpl-financial-analyst',
    name: 'Executive Revenue & Churn Analyst',
    category: 'Analytics',
    description: 'Monitors transaction streams in PostgreSQL/BigQuery, detects regional sales dips, identifies root causes, and compiles briefing memos.',
    rating: 4.92,
    usageCount: 9400,
    integrations: ['BigQuery', 'PostgreSQL', 'Slack', 'Google Sheets'],
    capabilities: ['Automated cohort analysis', 'Anomaly detection', 'Executive slide generation'],
    latency: '3.2s',
    costEstimate: 'Rp 950 / report'
  },
  {
    id: 'tmpl-procurement-vetting',
    name: 'Vendor Procurement & Compliance Agent',
    category: 'Operations',
    description: 'Validates vendor compliance documentation, compares quote pricing against historic procurement records, and summarizes contracts.',
    rating: 4.85,
    usageCount: 6800,
    integrations: ['Google Drive', 'SAP ERP', 'DocuSign', 'Slack'],
    capabilities: ['Contract risk scoring', 'Price variance benchmarking', 'Approval escalation'],
    latency: '2.8s',
    costEstimate: 'Rp 810 / review'
  },
  {
    id: 'tmpl-hr-talent',
    name: 'Talent Screening & Interview Synthesizer',
    category: 'HR',
    description: 'Parses resumes against engineering competencies, blind-screens bias factors, and drafts candidate interview scorecards.',
    rating: 4.82,
    usageCount: 11200,
    integrations: ['Greenhouse', 'Google Drive', 'Slack'],
    capabilities: ['Objective skill extraction', 'Experience verification', 'Rubric alignment'],
    latency: '1.8s',
    costEstimate: 'Rp 450 / candidate'
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'banking',
    industry: 'Financial Services & Banking',
    icon: 'Building2',
    headline: 'Autonomous Credit Assessment & AML Compliance',
    challenge: 'Manual commercial credit dossier review requires 4–6 business days and carries high operational overhead with fragmented audit trails.',
    solution: 'Deploy Dataktif Finance Workforces that aggregate financial statements, check credit bureaus, detect transaction anomalies, and draft risk memos in 90 seconds.',
    useCases: [
      'Commercial credit risk scoring',
      'Transaction fraud & AML anomaly alert triage',
      'Automated wealth research briefings',
      'e-KYC document verification'
    ],
    metrics: '78% reduction in credit memo drafting turnaround'
  },
  {
    id: 'retail',
    industry: 'Retail & Multi-Channel Commerce',
    icon: 'ShoppingBag',
    headline: 'Localized WhatsApp Commerce & Intelligent Inventory Rebalancing',
    challenge: 'High customer churn from slow response times on WhatsApp, alongside stock-outs caused by delayed regional inventory demand signals.',
    solution: 'Connect Dataktif Customer Workforces to WhatsApp Business, ERP, and Midtrans to answer product specs, complete orders, and alert logistics on stock depletion.',
    useCases: [
      '24/7 AI conversational sales on WhatsApp',
      'Cross-warehouse inventory demand forecasting',
      'Automated return & dispute verification',
      'Personalized customer reactivation triggers'
    ],
    metrics: '4.2x increase in WhatsApp conversion rate'
  },
  {
    id: 'manufacturing',
    industry: 'Manufacturing & Heavy Industry',
    icon: 'Factory',
    headline: 'Predictive Maintenance & Supply Chain Orchestration',
    challenge: 'Unplanned downtime in plant machinery and brittle multi-tier supplier communications across email, PDF orders, and localized ERPs.',
    solution: 'Deploy operational agents that continuously ingest telemetry from IoT logs, cross-reference machine maintenance manuals, and trigger replacement POs.',
    useCases: [
      'Telemetry anomaly root-cause diagnosis',
      'Vendor quotation variance analysis',
      'Machine handbook semantic search for technicians',
      'Automated safety incident documentation'
    ],
    metrics: '34% decrease in unplanned assembly downtime'
  },
  {
    id: 'government',
    industry: 'Government & Public Sector',
    icon: 'Landmark',
    headline: 'Sovereign Document Intelligence & Citizen Service Portals',
    challenge: 'Overwhelming volume of citizen permits, tax declarations, and legal decrees requiring airtight data residency and auditable compliance.',
    solution: 'Air-gapped Dataktif Knowledge instances hosted on local sovereign VPC clusters, allowing civil servants to cross-reference multi-jurisdiction decrees instantly.',
    useCases: [
      'Regulatory compliance verification',
      'Public inquiry automated routing',
      'Bilingual archive digitization & indexing',
      'Air-gapped sovereign policy QA'
    ],
    metrics: '100% data residency compliance on local cloud'
  },
  {
    id: 'logistics',
    industry: 'Logistics & Fleet Operations',
    icon: 'Truck',
    headline: 'Dynamic Fleet Routing & Customs Documentation',
    challenge: 'Customs bottlenecks, complex shipping manifests, and manual proof-of-delivery reconciliation delaying inter-island transit.',
    solution: 'Dataktif Logistics Agents extract airway bills, check maritime customs tariff codes, and notify dispatch centers of port congestion anomalies.',
    useCases: [
      'Customs declaration compliance check',
      'Real-time transit exception management',
      'Automated proof-of-delivery auditing',
      'Fuel & route optimization briefings'
    ],
    metrics: '62% faster port customs document clearance'
  }
];

export const DEMO_TRACE_STEPS: TraceStep[] = [
  { id: '1', name: 'Trigger: Incoming Lead Webhook', type: 'System Ingest', durationMs: 42, status: 'success', tokens: 0, costIdr: 0, details: 'Payload received from web form: Acme Corp (Enterprise Plan)' },
  { id: '2', name: 'Enterprise Knowledge Lookup', type: 'Vector Search', durationMs: 180, status: 'success', tokens: 340, costIdr: 45, details: 'Retrieved internal target account tier list and historical deal sizing' },
  { id: '3', name: 'External Company Research', type: 'API Tool Call', durationMs: 480, status: 'success', tokens: 820, costIdr: 120, details: 'Fetched firmographic profile: 650 employees, $42M Series B funding' },
  { id: '4', name: 'LLM Multi-Criteria Fit Scoring', type: 'Model Inference', durationMs: 820, status: 'success', tokens: 2150, costIdr: 260, details: 'Model: Claude 3.7 Sonnet. Score: 94/100 (Tier 1 Enterprise VIP)' },
  { id: '5', name: 'CRM Opportunity Creation', type: 'Salesforce API', durationMs: 190, status: 'success', tokens: 120, costIdr: 25, details: 'Created Deal #SF-98241 assigned to Enterprise AE (Jakarta West)' },
  { id: '6', name: 'Executive Sales Notification', type: 'Slack & WhatsApp', durationMs: 110, status: 'success', tokens: 80, costIdr: 32, details: 'Dispatched alert with meeting brief to #sales-leads channel' },
];

export const DEMO_CASE_STUDIES = [
  {
    company: 'Leading National Retail Enterprise',
    industry: 'Omnichannel Retail & E-Commerce',
    flag: '🇮🇩 Indonesia',
    quote: 'Dataktif transformed how our 4,000 store managers interact with operational data. We went from waiting 3 days for business intelligence reports to asking questions in WhatsApp and getting verified insights in 5 seconds.',
    spokesperson: 'Chief Digital & Technology Officer',
    results: [
      { label: 'Workflows Automated', value: '74%' },
      { label: 'Annual Cost Saved', value: 'Rp 4.2 Billion' },
      { label: 'Avg Query Response', value: '1.4 seconds' }
    ]
  },
  {
    company: 'Commercial Banking & Corporate Credit Group',
    industry: 'Financial Services',
    flag: '🌏 Southeast Asia',
    quote: 'For us, the non-negotiables were zero-trust data residency, strict model evaluation, and immutable audit logs. Dataktif provided enterprise infrastructure that satisfied our risk committees on day one.',
    spokesperson: 'Head of Enterprise Architecture & AI Governance',
    results: [
      { label: 'Audit Compliance', value: '100% Passed' },
      { label: 'Dossier Review Speed', value: '5x Acceleration' },
      { label: 'False Positive Reduction', value: '38%' }
    ]
  },
  {
    company: 'Inter-Island Freight & Cold-Chain Logistics',
    industry: 'Supply Chain & Transportation',
    flag: '🇮🇩 Indonesia',
    quote: 'Managing thousands of customs manifests and e-Faktur invoices every day was our biggest bottleneck. Dataktif agents reconcile 98% of all shipping invoices without human intervention.',
    spokesperson: 'VP of Operations & Logistics',
    results: [
      { label: 'Invoices Processed/Mo', value: '120,000+' },
      { label: 'Reconciliation Error', value: '< 0.08%' },
      { label: 'Processing Cost Cut', value: '62%' }
    ]
  }
];

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'For experimentation & technical evaluation',
    priceMonthly: 'Rp 7,500,000',
    priceAnnual: 'Rp 6,000,000',
    period: '/ month',
    description: 'Designed for innovation labs and engineering teams validating autonomous agent workflows.',
    features: [
      'Up to 5 Active AI Agents',
      '50,000 Workflow Task Executions / mo',
      'Knowledge Engine with 500 documents',
      'Standard Model Routing (Gemini & OpenAI)',
      'Community Support & Documentation',
      'Standard Rest APIs & Webhooks',
      'Community Slack Access'
    ],
    highlight: false,
    ctaText: 'Start Free Trial',
    ctaAction: 'signup'
  },
  {
    id: 'business',
    name: 'Business',
    subtitle: 'For production departments & scale-ups',
    priceMonthly: 'Rp 28,000,000',
    priceAnnual: 'Rp 22,500,000',
    period: '/ month',
    description: 'The complete AI operating layer for fast-moving businesses automating core operational pipelines.',
    features: [
      'Up to 25 Active AI Agents & Workforces',
      '500,000 Workflow Task Executions / mo',
      'Knowledge Engine with 10,000 documents',
      'Multi-Model Intelligent Routing (All Foundation Models)',
      'Regional Integrations (WhatsApp, Midtrans, Mekari, Xendit)',
      'Human-in-the-Loop Gating Workflows',
      'Standard SLA (99.9% uptime)',
      'Priority Engineering Support (Email & Slack)'
    ],
    highlight: true,
    badge: 'Most Popular',
    ctaText: 'Deploy Business Tier',
    ctaAction: 'signup'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'For mission-critical corporate operations',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    period: '',
    description: 'Dedicated infrastructure, custom SLAs, sovereign VPC deployments, and bespoke agent architectures.',
    features: [
      'Unlimited AI Agents & Multi-Agent Workforces',
      'Dedicated High-Throughput Inference Clusters',
      'Air-Gapped Sovereign Cloud / On-Premise Support',
      'Fine-Tuning on Private Enterprise Data',
      'Full RBAC, SSO (Okta, Azure AD), & Immutable Audit Logs',
      'Enterprise SLA (99.99% Guaranteed)',
      'Dedicated Dataktif AI Systems Architect',
      '24/7 Phone & Incident Response Support'
    ],
    highlight: false,
    badge: 'Zero-Trust',
    ctaText: 'Talk to an AI Architect',
    ctaAction: 'contact'
  },
  {
    id: 'infrastructure',
    name: 'AI Infrastructure',
    subtitle: 'Bespoke AI Operating System for Conglomerates',
    priceMonthly: 'Custom Architecture',
    priceAnnual: 'Custom Architecture',
    period: '',
    description: 'Complete white-label, multi-tenant deployment across multiple corporate subsidiaries with custom hardware routing.',
    features: [
      'Multi-Organization Tenant Isolation',
      'Private Hardware Fleet (NVIDIA H100/L40S Clusters)',
      'Direct Database Streaming CDC Connectors',
      'Co-Developed Custom Fine-Tuned Domain Models',
      'Executive Security Committee Review',
      'Custom Regional Compliance Audits',
      'Dedicated Technical Account Manager'
    ],
    highlight: false,
    ctaText: 'Schedule Architecture Review',
    ctaAction: 'contact'
  }
];
