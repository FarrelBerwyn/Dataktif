# DATAKTIF

<div align="center">
  <img src="public/assets/logo/dataktif-logo.png" alt="Dataktif Logo" width="96" height="96" />
  <h3>AI Infrastructure for Intelligent Business</h3>
  <p><em>From Data to Intelligence. From Intelligence to Action.</em></p>
  <p>
    <a href="https://farrelberwyn.github.io/Dataktif/">Live Demo & Platform</a> •
    <a href="https://github.com/FarrelBerwyn/Dataktif">GitHub Repository</a>
  </p>
</div>

---

**Dataktif** is an enterprise AIaaS (Artificial Intelligence as a Service) platform designed to transform business data, knowledge, AI models, and operational processes into intelligent AI systems.

Dataktif enables organizations to:
- **Connect business data** across fragmented tools and silos
- **Build enterprise knowledge** graphs with strict ACL permission inheritance
- **Create AI agents** specialized for departmental execution
- **Orchestrate AI workforces** collaborating on complex multi-stage tasks
- **Build intelligent workflows** bridging triggers to real-world actions
- **Connect business systems** (CRM, ERP, Messaging, Cloud APIs)
- **Route tasks across AI models** dynamically optimizing cost, latency, and quality
- **Monitor AI execution** with full cryptographic auditability
- **Evaluate AI quality** with regression suites and hallucination guardrails
- **Control AI through enterprise governance** complying with PDP, GDPR, SOC 2, and ISO standards

---

## Table of Contents

- [Overview](#overview)
- [Core Architecture](#core-architecture)
- [Platform Modules](#platform-modules)
- [AI Studio](#ai-studio)
- [AI Agent Builder](#ai-agent-builder)
- [AI Workforce](#ai-workforce)
- [Knowledge Engine](#knowledge-engine)
- [Data Intelligence](#data-intelligence)
- [Workflow Engine](#workflow-engine)
- [Model Hub](#model-hub)
- [Integration Hub](#integration-hub)
- [AI Observability](#ai-observability)
- [AI Evaluation](#ai-evaluation)
- [Governance & Security](#governance--security)
- [Human-in-the-Loop](#human-in-the-loop)
- [Marketplace](#marketplace)
- [Developer Platform](#developer-platform)
- [API Architecture](#api-architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Product Philosophy](#product-philosophy)
- [Product Roadmap](#product-roadmap)
- [Final Vision](#final-vision)

---

## Overview

Traditional business software stores and processes information. Dataktif adds an **intelligence operating layer** on top of those existing systems.

```text
Business Data
     ↓
 Knowledge
     ↓
 AI Models
     ↓
Dataktif Intelligence Layer
     ↓
 AI Agents
     ↓
AI Workforce
     ↓
 Workflows
     ↓
Business Systems
     ↓
Real-World Actions
     ↓
Business Outcomes
```

Dataktif is designed to become the central intelligence operating layer of modern organizations.

---

## Core Architecture

Dataktif is built around six major architectural layers:

```text
┌─────────────────────────────────────────────┐
│              BUSINESS OUTCOMES              │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│                   ACTIONS                   │
│    CRM • ERP • API • Email • WhatsApp       │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│                  WORKFLOWS                  │
│       Automation • Logic • Approvals        │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│                  AI AGENTS                  │
│       Agents • Workforce • Copilots         │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│                INTELLIGENCE                 │
│   Models • Reasoning • Prediction • Vision  │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│              DATA & KNOWLEDGE               │
│    Files • Databases • APIs • Documents     │
└─────────────────────────────────────────────┘
```

### Cross-Platform Services
- **Security & RBAC**: Tenant isolation, fine-grained access control, encryption.
- **Governance**: Policy validation, content filtering, compliance audit trails.
- **Observability**: Real-time token telemetry, latency tracking, cost tracking.
- **Evaluation**: Benchmarking, hallucination checks, test assertions.
- **Analytics**: Departmental ROI, usage volume, pipeline execution stats.
- **Identity**: Single Sign-On (SSO), OAuth2, API key management.
- **Billing**: Token quotas, budget caps, departmental attribution.

---

## Platform Modules

Dataktif consists of the following core modules:

| Module | Purpose |
| :--- | :--- |
| **AI Studio** | Visual canvas to build and test end-to-end enterprise AI apps |
| **Agent Builder** | Create autonomous, task-specific AI agents with custom tools |
| **AI Workforce** | Coordinate multi-agent swarms with manager-worker topologies |
| **Knowledge Engine** | Build enterprise context graphs from unstructured and structured sources |
| **Data Intelligence** | Natural language SQL, schema analysis, and automated insights |
| **Workflow Engine** | Orchestrate business workflows with events, triggers, and actions |
| **Model Hub** | Unified gateway and intelligent routing across premier LLMs |
| **Integration Hub** | Connect external CRM, ERP, messaging, and database infrastructure |
| **AI Observability** | Inspect real-time traces, token spend, latencies, and tool calls |
| **AI Evaluation** | Measure answer accuracy, regression drift, and hallucination rates |
| **Governance & Security** | Enforce RBAC, PII redaction, human-in-the-loop signoffs, and audit logs |
| **Marketplace** | Discover and deploy pre-built agent templates and industry workflows |
| **API** | Complete REST and SDK access for developers |

---

## AI Studio

AI Studio is the primary environment for building Dataktif-powered applications.

Users can create applications using:
- Natural language instructions
- Pre-configured AI agents
- Knowledge bases & vector collections
- Automated multi-step workflows
- Connected enterprise tools
- External APIs & webhooks
- Optimized model endpoints
- Structured business databases

```text
User: "Build an automated invoice auditor and payment approval flow."
                         ↓
               Dataktif AI Studio
                         ↓
  ┌──────────────────────┬──────────────────────┐
  │   Chat Interface     │    Knowledge Base    │
  │   AI Agent Builder   │    Workflow Engine   │
  │   Database Connect   │    Analytics & Trace │
  └──────────────────────┴──────────────────────┘
```

The goal is to eliminate technical friction when developing production-ready enterprise AI applications.

---

## AI Agent Builder

The Agent Builder allows organizations to create specialized, autonomous agents capable of executing complex domain tasks.

An agent can:
- Understand natural language instructions and system personas
- Reason over company documents and live database records
- Retrieve knowledge with strict permission awareness
- Use authenticated enterprise tools (APIs, scripts, search)
- Trigger automated downstream workflows
- Update external records (Salesforce, SAP, Mekari)
- Request human approval for high-risk operations
- Output deterministic, structured data (JSON, CSV, markdown)

```text
[Lead Qualification Agent Example]

Trigger
  ↓
Receive Inbound Lead
  ↓
Retrieve Customer Data
  ↓
Research Company via Web & CRM
  ↓
Analyze ICP & Revenue Fit
  ↓
Calculate Qualification Score
  ↓
Update CRM Record
  ↓
Notify Sales Lead via WhatsApp/Slack
```

---

## AI Workforce

A workforce is a coordinated collection of specialized AI agents working together as an autonomous department.

```text
                   Sales Manager Agent
                           │
       ┌───────────────────┼───────────────────┐
       ↓                   ↓                   ↓
 Research Agent       Lead Agent        Outreach Agent
       │                   │                   │
       └───────────────────┼───────────────────┘
                           ↓
                       CRM Agent
                           ↓
                    Reporting Agent
```

A workforce can coordinate:
- **Autonomous Research**: Web crawling, competitive intel, compliance checks
- **Analysis**: Cross-table data joining, KPI verification, risk scoring
- **Communication**: Generating personalized emails, WhatsApp dispatch
- **Decision-Making**: Rule-based routing, tiered escalation
- **Data Processing**: Extracting key terms from contracts and PDFs
- **CRM Operations**: Syncing contacts, deals, and pipeline statuses
- **Executive Reporting**: Daily digests, slide deck drafting, alert logs

---

## Knowledge Engine

Dataktif Knowledge transforms petabytes of fragmented enterprise information into real-time, AI-readable context.

### Supported Sources
- **Documents**: PDF, DOCX, XLSX, CSV, Markdown, TXT
- **Digital Workspaces**: Google Drive, Microsoft SharePoint, Notion, Confluence
- **Databases & Warehouses**: PostgreSQL, MySQL, BigQuery, Snowflake, MongoDB
- **Enterprise SaaS**: Salesforce, HubSpot, Jira, Zendesk, SAP
- **Internal SOPs**: Procurement guidelines, HR policies, compliance manuals

### Knowledge Pipeline

```text
Source Document / DB Record
           ↓
       Ingestion
           ↓
   Document Parsing
           ↓
 Semantic Chunking
           ↓
 Vector Embedding
           ↓
  Vector Storage (HNSW)
           ↓
  Hybrid Retrieval (Dense + BM25)
           ↓
 Re-ranking & ACL Verification
           ↓
   Grounded AI Context
           ↓
       AI Agent
```

Key features:
- Inherited permission graphs (Google Drive, SharePoint, Jira ACLs)
- Automatic source citation with paragraph-level precision
- Zero-hallucination verification gates
- Automated incremental sync and re-indexing

---

## Data Intelligence

Dataktif provides an intelligent analytics layer allowing non-technical leaders to interact directly with company data.

Capabilities:
- Data ingestion & schema inspection
- Automated data transformations
- Text-to-SQL generation with schema safety validation
- Anomaly detection & variance explanation
- Financial and sales forecasting
- Automated chart visualization and executive summaries

### "Ask Your Data" in Action

```text
User Prompt:
"Show customers with Revenue > Rp500M whose purchases declined >20% during the last 90 days."
                               ↓
Dataktif Data Intelligence Engine (Schema Context + Dialect Grounding)
                               ↓
[Generated SQL]
SELECT c.company_name, c.revenue, SUM(t.amount) AS q3_purchases, ...
FROM customers c JOIN transactions t ON c.id = t.customer_id
WHERE c.revenue > 500000000
GROUP BY c.id HAVING ...
                               ↓
Output: Interactive Table • Trend Chart • Root Cause Analysis • AI Action Recommendations
```

---

## Workflow Engine

The Workflow Engine orchestrates cross-system business logic, bridging AI decisions with operational execution.

```text
Trigger → Agent → Knowledge Retrieval → Conditional Logic → API Execution → Human Approval Gate → Final Action
```

### Supported Triggers
- **Schedules**: Cron schedules, recurring intervals
- **Webhooks**: Inbound HTTP webhooks from external software
- **APIs**: Direct programmatic dispatch
- **Events**: Email received, CRM deal moved, ticket created, DB row changed

### Supported Actions
- Dispatch emails (Gmail, Outlook, SendGrid)
- Send instant WhatsApp notifications (WhatsApp Business API)
- Create or update records in CRM / ERP (Salesforce, HubSpot, Mekari)
- Execute custom database queries and API calls
- Generate verified PDF reports and invoices
- Create customer support tickets (Zendesk, Jira)
- Trigger downstream child workflows
- Request human cryptographic authorization

---

## Model Hub

Model Hub provides a unified, vendor-agnostic abstraction layer across commercial and sovereign open-source AI models.

### Supported Providers
- **Commercial LLMs**: Anthropic (Claude 3.7 / 3.5 Sonnet), OpenAI (GPT-4o, o3-mini), Google Gemini (Gemini 2.5 / 2.0 Flash)
- **Open Weights**: Meta Llama 3.3, Mistral Large, DeepSeek V3 / R1, Qwen 2.5
- **Sovereign & Private**: Custom fine-tuned weights hosted in-country on private VPCs

### Intelligent Dynamic Router

```text
                       Incoming Task
                             ↓
               Dataktif Model Router
                             ↓
              Evaluate Requirements:
  [Accuracy • Cost • Latency • Data Sovereignty • Context Length]
                             ↓
       Select Best Cost/Performance Model:
  • Complex Reasoning → Claude 3.7 / o3-mini
  • High-Speed Extraction → Gemini 2.0 Flash / GPT-4o-mini
  • Regulated Financial Data → Sovereign Private Model
```

Eliminates vendor lock-in while cutting enterprise API token spend by up to 60%.

---

## Integration Hub

Dataktif natively integrates with modern enterprise software suites and regional Southeast Asian business platforms.

- **CRM**: Salesforce, HubSpot, Zoho CRM
- **Productivity & Docs**: Google Workspace (Drive, Docs, Sheets), Microsoft 365 (SharePoint, OneDrive, Excel), Notion
- **Communication**: Slack, WhatsApp Business API, Gmail, Outlook, Telegram
- **Project & Dev**: Jira, Confluence, GitHub, GitLab
- **Databases**: PostgreSQL, MySQL, Supabase, MongoDB, Snowflake, Google BigQuery
- **Cloud Infrastructure**: AWS, Google Cloud Platform, Microsoft Azure
- **Regional (Indonesia & SEA)**: Midtrans, Xendit, Mekari (Jurnal, Talenta), Accurate Online, Local Banking APIs

---

## AI Observability

Every agent execution and workflow run in Dataktif is fully observable in real-time.

```text
[Telemetry Overview]
Agent Runs: 1,284,921    |    Success Rate: 98.7%
Avg Latency: 1.82s       |    Avg Cost / Run: Rp 482
Tokens Processed: 8.4M   |    Human Escalations: 2.1%
```

### Full Execution Trace
```text
[EXECUTION #trace_99182]
[00:00.08] 🟢 Trigger Ingested: Webhook (Salesforce Deal Updated)
[00:00.22] 🔍 Knowledge Engine Query: "BCA Contract Addendum 2025"
[00:00.64] 📄 3 verified chunks retrieved (Relevance: 0.98)
[00:01.12] 🤖 Model Reasoning (Claude 3.5 Sonnet): Clause validated.
[00:01.55] ⚡ Tool Call: mekari_jurnal.createSalesInvoice(...)
[00:01.98] 💬 Tool Call: whatsapp_api.sendNotification(...)
[00:02.15] ✅ Execution Complete. Zero errors recorded.
```

---

## AI Evaluation

Dataktif includes automated evaluation suites to benchmark AI performance before and after updates:

- **Accuracy Score**: Task completion fidelity against golden benchmark datasets
- **Hallucination Rate**: Grounded citation verification
- **Latency & Token Efficiency**: Per-step duration and prompt compression analysis
- **Cost Metrics**: Real-time compute and API expenditure tracking
- **Model A/B Benchmarking**: Side-by-side prompt and model evaluation

---

## Governance & Security

Built from day one with enterprise security standards:
- **Role-Based Access Control (RBAC)**: Fine-grained permissions per agent, dataset, and workflow
- **Automated PII Redaction**: Dynamic masking of credit cards, national IDs, and sensitive customer data
- **Audit Trails**: Immutable, tamper-evident log records
- **Data Sovereignty**: Zero model training on enterprise corporate data
- **Compliance Standards**: Formatted to align with **PDP (Indonesian Privacy Law)**, **GDPR**, **ISO 27001**, and **SOC 2 Type II** controls

---

## Human-in-the-Loop

For high-stakes actions, Dataktif introduces configurable human authorization checkpoints:

```text
AI Agent
   ↓
Generates Transaction / PO ($50,000)
   ↓
Policy Gate: Amount > $10,000 threshold
   ↓
Dispatch Approval Request (Slack / WhatsApp / Email)
   ↓
Authorized Officer Signs Off
   ↓
ERP Execution Finalized
```

---

## Marketplace

Discover, customize, and deploy tested agent and workflow blueprints:
- **Sales**: Lead Qualifier, Deal Desk Auditor, Competitor Intelligence Crawler
- **Finance**: Automated Invoice Matcher, P&L Anomaly Detector, Expense Reconciliation
- **Operations**: Vendor SLA Monitor, Customer Ticket Auto-Responder, Contract Lifecycle Assistant
- **HR & Legal**: Candidate Resume Parser, Policy Q&A Assistant, NDA Reviewer

---

## Developer Platform

Access Dataktif programmatically using REST APIs and native SDKs:

### API Architecture
- `POST /v1/agents/run` — Execute autonomous agents synchronously or asynchronously
- `POST /v1/knowledge/query` — Query semantic knowledge graphs with ACL tokens
- `POST /v1/workflows/execute` — Trigger automated enterprise workflows
- `GET /v1/usage` — Fetch token and execution spend telemetry
- `GET /v1/observability/traces/{id}` — Retrieve full step-by-step trace logs

#### Example Agent Request
```bash
curl -X POST https://api.dataktif.com/v1/agents/run \
  -H "Authorization: Bearer dtk_live_99a81bc7e2" \
  -H "Content-Type: application/json" \
  -d '{
    "agent_id": "lead-qualification",
    "input": {
      "company": "Nusantara Logistics Inc.",
      "email": "contact@nusantaralogistics.com"
    }
  }'
```

#### Example Response
```json
{
  "status": "completed",
  "agent_id": "lead-qualification",
  "execution_id": "run_881293a",
  "result": {
    "score": 94,
    "tier": "enterprise",
    "recommendation": "immediate_vp_outreach",
    "crm_record_created": "OPP-99120"
  },
  "usage": {
    "tokens": 1420,
    "cost_idr": 412,
    "latency_ms": 1180
  }
}
```

---

## Project Structure

```text
dataktif/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD
├── public/
│   └── assets/
│       ├── logo/
│       │   └── dataktif-logo.png # Official Dataktif brand emblem
│       └── prof. onno.jpg        # Prof. Onno W. Purbo testimonial portrait
├── src/
│   ├── components/
│   │   ├── animations/           # Enterprise motion easing curves
│   │   ├── icons/                # Authentic SVG brand icons (Slack, Drive, Jira, etc.)
│   │   ├── showcase/             # Interactive platform visualizer cards
│   │   ├── AgentsSection.tsx     # Autonomous agent architecture showcase
│   │   ├── ArchitectureFlow.tsx  # Interactive pipeline data flow
│   │   ├── BentoValueSection.tsx # Key value propositions grid
│   │   ├── DemoModal.tsx         # Interactive demo video walkthrough modal
│   │   ├── DepartmentAccordion.tsx# Department solutions (Sales, Ops, Legal, HR)
│   │   ├── Footer.tsx            # Global enterprise footer
│   │   ├── GovernanceSection.tsx # Enterprise security and RBAC details
│   │   ├── Hero.tsx              # Hero with interactive enterprise search
│   │   ├── HeroDataFlowEngine.tsx# Live Flow real-time telemetry pipeline
│   │   ├── InteractiveStudio.tsx # Dataktif AI Studio console
│   │   ├── KnowledgeEngine.tsx   # Context graph & RAG section
│   │   ├── LeadershipQuotes.tsx  # Executive customer stories & testimonials
│   │   └── Navbar.tsx            # Clean glassmorphic navigation header
│   ├── data/
│   │   └── mockData.ts           # Enterprise mock datasets and templates
│   ├── App.tsx                   # Main application view router
│   ├── index.css                 # Tailwind CSS design system tokens
│   ├── main.tsx                  # React DOM mount point
│   ├── types.ts                  # TypeScript interface definitions
│   └── vite-env.d.ts             # Vite client environment types
├── index.html                    # Root HTML document with SEO meta
├── package.json                  # Dependencies & build scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build and deployment configuration
```

---

## Installation

### Prerequisites
- **Node.js**: v20.x or later
- **npm** (or **bun** / **pnpm**)
- **Git**

### Clone & Install
```bash
# Clone the repository
git clone https://github.com/FarrelBerwyn/Dataktif.git
cd Dataktif

# Install dependencies
npm install
```

---

## Environment Variables

Copy the example environment configuration:
```bash
cp .env.example .env.local
```

Configurable parameters:
```env
# Gemini AI API Key (Optional for AI-powered studio features)
GEMINI_API_KEY=""

# Public Application URL
APP_URL="http://localhost:3000"
```

> **Security Note**: Never commit `.env.local` containing private production API keys to public repositories.

---

## Development

Start the local development server:
```bash
npm run dev
```

The application will be available at:
```text
http://localhost:3000/
```

Run TypeScript validation:
```bash
npm run lint
```

---

## Production Build

Compile and optimize the bundle for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## Deployment

### Live GitHub Pages
This project is configured with automated GitHub Actions deployment. Every push to the `main` branch automatically triggers a build and publishes to GitHub Pages:
- **Live URL**: [https://farrelberwyn.github.io/Dataktif/](https://farrelberwyn.github.io/Dataktif/)

### Other Platforms
The build output (`dist/`) is purely static HTML, JavaScript, and CSS, and can be deployed to:
- **Vercel**: `vercel deploy`
- **Cloudflare Pages**: Link repo and select Vite preset
- **AWS S3 + CloudFront**
- **Docker / Nginx**: Serve `dist/` directly behind an Nginx reverse proxy

---

## Design System

Dataktif adheres to a high-end enterprise design language:
- **Color Palette**: Minimalist crisp white base (`#ffffff`), slate text (`#0f172a`), deep navy accents (`#1e293b`), and signature electric blue brand indicators (`#1a56db` / `#2563eb`).
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for headlines and body text, with [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for telemetry values and code snippets.
- **Motion & Physics**: Purpose-driven enterprise easing curves (`ENTERPRISE_EASING: [0.22, 1, 0.36, 1]`) ensuring responsive transitions without unnecessary visual clutter.
- **Accessibility & Contrast**: Conforms to WCAG AA guidelines with clear focus rings, semantic markup, and full keyboard navigation.

---

## Product Philosophy

Dataktif is fundamentally different from single-purpose tools:
- **Not just a chatbot**: Chatbots only talk; Dataktif agents execute real business work.
- **Not just basic automation**: Rule-based workflows break when schemas change; Dataktif reasons through ambiguities.
- **Not a closed walled garden**: Dataktif integrates with your existing models, databases, and enterprise systems.

```text
DATA → KNOWLEDGE → INTELLIGENCE → MODELS → AGENTS → WORKFORCE → WORKFLOWS → BUSINESS SYSTEMS → ACTION → BUSINESS OUTCOME
```

---

## Product Roadmap

### Phase 1 — AIaaS Core (Current)
- [x] AI Studio Interactive Prototype
- [x] Autonomous Agent Builder & Test Runner
- [x] Real-time Context Flow Telemetry Engine
- [x] Dynamic Model Routing abstractions
- [x] Authentic brand integration ecosystem
- [x] Customer voice showcase & video walkthroughs

### Phase 2 — AI Platform Scale
- [ ] Multi-Agent Swarm Orchestrator (Manager-Worker topologies)
- [ ] Enterprise Marketplace for verified departmental agents
- [ ] Automated regression testing and continuous evaluation suites
- [ ] Deep telemetry metrics (token spend attribution per department)

### Phase 3 — Enterprise Governance & Sovereign AI
- [ ] SSO / SAML 2.0 & SCIM directory synchronization
- [ ] Private VPC & air-gapped on-premise deployments
- [ ] Sovereign in-country fine-tuned model hosting (Indonesian PDP compliance)
- [ ] Cryptographic human-in-the-loop multi-sig approvals

### Phase 4 — Enterprise AI Operating System
- [ ] Unified Autonomous AI OS coordinating all enterprise knowledge, agents, copilots, and business systems end-to-end.

---

## Final Vision

> **Dataktif** combines:  
> **Data + Knowledge + AI Models + Agents + Workforce + Workflows + Integrations + Observability + Evaluation + Governance**  
> into **one unified enterprise intelligence operating layer**.

**From Data to Intelligence. From Intelligence to Action.**

---

<div align="center">
  <sub>Built with ❤️ for enterprise AI transformation by the Dataktif Engineering Team.</sub>
</div>
