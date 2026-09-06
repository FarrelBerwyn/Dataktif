import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Layers, 
  Database, 
  LineChart, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Terminal, 
  Users,
  GitFork,
  ArrowUpRight
} from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';
import {
  AgentLayersVisualizer,
  WorkforceVisualizer,
  KnowledgeRagVisualizer,
  DataIntelligenceVisualizer,
  ModelRouterVisualizer,
  WorkflowNodesVisualizer
} from './showcase/FeatureVisualizers';

interface PlatformShowcaseProps {
  onOpenStudio?: (tab?: string) => void;
}

export const PlatformShowcase: React.FC<PlatformShowcaseProps> = ({ onOpenStudio }) => {
  const [activeTab, setActiveTab] = useState<'agents' | 'workforce' | 'rag' | 'sql' | 'router' | 'workflows'>('agents');

  const tabs = [
    { id: 'agents' as const, label: 'Autonomous Agents', icon: Bot },
    { id: 'workforce' as const, label: 'AI Workforce', icon: Users },
    { id: 'rag' as const, label: 'Knowledge Engine (RAG)', icon: Database },
    { id: 'sql' as const, label: 'Data Intelligence', icon: LineChart },
    { id: 'router' as const, label: 'Model Hub', icon: Cpu },
    { id: 'workflows' as const, label: 'Deterministic Workflows', icon: GitFork },
  ];

  const contentMap = {
    agents: {
      title: 'Autonomous Agent Builder',
      desc: 'Build goal-directed agents that can browse enterprise data, run tools, verify intermediate outputs, and trigger downstream systems safely.',
      prompt: 'Review vendor invoice #INV-9281 against MSA payment clauses and draft approvals.',
      planSteps: [
        { text: 'Fetch INV-9281.pdf from Google Drive & Mekari ERP', done: true },
        { text: 'Parse line items and compare with negotiated tier-2 discount schedule', done: true },
        { text: 'Detect $4,200 discrepancy on cloud hosting unit cost', done: true },
        { text: 'Draft adjustment email and request human CFO sign-off via Slack', done: false }
      ],
      resultHeader: 'Agent Plan: 3 of 4 steps executed',
      metric: '99.4% tool execution fidelity'
    },
    workforce: {
      title: 'Hierarchical Multi-Agent Workforce',
      desc: 'Coordinate teams of specialized agents (Researcher, Critic, Auditor, Executor) to tackle complex, high-stakes enterprise projects.',
      prompt: 'Execute monthly financial closing audit across 4 regional entities.',
      planSteps: [
        { text: 'Lead Controller Agent spawns 4 Entity Ingestion sub-agents', done: true },
        { text: 'Discrepancy Auditor Agent detects unlinked tax vouchers in Surabaya ledger', done: true },
        { text: 'Compliance Critic Agent cross-references Indonesian Tax Law 2024', done: true },
        { text: 'Synthesizer Agent formats final board P&L deck with executive summary', done: true }
      ],
      resultHeader: 'Workforce Status: Coordinated Execution Complete',
      metric: '4 agents collaborated in 4.8s'
    },
    rag: {
      title: 'Knowledge Engine & Context Graph',
      desc: 'Connect petabytes of PDFs, Notion, Confluence, Slack, and Zendesk into an authoritative, permission-filtered vector knowledge base.',
      prompt: 'What are our standard payment terms for enterprise clients in Singapore vs Indonesia?',
      planSteps: [
        { text: 'Retrieve SG_Enterprise_Standard_TOS_2025.pdf (Section 3.1)', done: true },
        { text: 'Retrieve ID_Terms_Of_Service_Bilingual.pdf (Pasal 8)', done: true },
        { text: 'Synthesize jurisdiction comparison with tax withholding notes', done: true }
      ],
      resultHeader: 'Context Retrieval: 2 documents cited with 100% provenance',
      metric: 'Sub-400ms semantic search'
    },
    sql: {
      title: 'Data Intelligence & Conversational SQL',
      desc: 'Ask questions in plain English and automatically generate, validate, and execute secure read-only SQL queries over your data warehouse.',
      prompt: 'Show total transaction volume and average order value by regional store this quarter.',
      planSteps: [
        { text: 'Schema mapper identifies tables: orders, store_locations, payment_gateways', done: true },
        { text: 'Generate parameterized SQL query with indexed date partitions', done: true },
        { text: 'Execute query safely within read-only analytics replica', done: true },
        { text: 'Render interactive bar chart and highlight 22% spike in Bali branch', done: true }
      ],
      resultHeader: 'SQL Output: 14,280 rows aggregated in 380ms',
      metric: 'Zero hallucination on database schema'
    },
    router: {
      title: 'Intelligent Multi-Model Router Hub',
      desc: 'Dynamically route prompts to Gemini, Claude, OpenAI, or local private models to minimize latency, eliminate lock-in, and lower cost.',
      prompt: 'Route incoming prompt based on complexity and strict data residency constraints.',
      planSteps: [
        { text: 'Inspect input: Contains Indonesian citizen identification number (NIK)', done: true },
        { text: 'Enforce statutory data residency policy (PP 71/2019)', done: true },
        { text: 'Dispatch to private local Llama 3 on-premise GPU cluster in Jakarta', done: true }
      ],
      resultHeader: 'Router Decision: Routed to Sovereign In-Country Cluster',
      metric: 'Zero cross-border data egress'
    },
    workflows: {
      title: 'Deterministic DAG Workflows',
      desc: 'Chain complex logic with strict SLAs, conditional branching, rollback protection, and compliance gates.',
      prompt: 'Handle customer invoice dispute with automated CRM verification and refund gate.',
      planSteps: [
        { text: 'Listen for inbound dispute webhook', done: true },
        { text: 'Validate customer identity against statutory PDP registry', done: true },
        { text: 'Call Claude 3.5 to verify SLA warranty terms', done: true },
        { text: 'Trigger Midtrans refund API with CFO threshold sign-off', done: true }
      ],
      resultHeader: 'Workflow Execution: 4 nodes completed successfully',
      metric: '100% Guaranteed Determinism'
    }
  };

  const current = contentMap[activeTab];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: ENTERPRISE_EASING }}
              className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-2"
            >
              From knowledge to action
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: ENTERPRISE_EASING }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-tight"
            >
              One platform for Enterprise AI.
            </motion.h2>
          </div>

          <motion.button
            onClick={() => onOpenStudio && onOpenStudio(activeTab)}
            whileHover={{ y: -2, boxShadow: '0 10px 24px -4px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Explore the platform</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-500'}`} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Interactive Feature Visual Card with AnimatePresence */}
        <div className="rounded-3xl border border-neutral-300 bg-white p-6 sm:p-10 shadow-md">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: ENTERPRISE_EASING }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Left: Interactive Prompt & Description */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {current.metric}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                    {current.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {current.desc}
                  </p>
                </div>

                {/* Prompt box */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Enterprise Input / Trigger</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-neutral-800 font-mono">
                    "{current.prompt}"
                  </div>
                </div>

                {/* Checklist Steps */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-neutral-800 pb-1">
                    {current.resultHeader}
                  </div>
                  {current.planSteps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-700"
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        step.done ? 'bg-emerald-100 text-emerald-700' : 'bg-neutral-200 text-neutral-500'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{step.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenStudio && onOpenStudio(activeTab)}
                    className="px-5 py-2 rounded-full text-xs font-semibold text-neutral-900 border border-neutral-300 hover:border-neutral-900 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Test in AI Studio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right: Live Interactive Contextual Visualizer */}
              <div className="lg:col-span-6">
                {activeTab === 'agents' && <AgentLayersVisualizer />}
                {activeTab === 'workforce' && <WorkforceVisualizer />}
                {activeTab === 'rag' && <KnowledgeRagVisualizer />}
                {activeTab === 'sql' && <DataIntelligenceVisualizer />}
                {activeTab === 'router' && <ModelRouterVisualizer />}
                {activeTab === 'workflows' && <WorkflowNodesVisualizer />}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.section>
  );
};

