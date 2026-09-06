import React, { useState } from 'react';
import { 
  Bot, 
  Brain, 
  Wrench, 
  Database, 
  GitFork, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Sliders, 
  Check, 
  Play,
  Terminal,
  Settings2
} from 'lucide-react';

interface AgentsSectionProps {
  onBuildAgent: () => void;
}

export const AgentsSection: React.FC<AgentsSectionProps> = ({ onBuildAgent }) => {
  const [selectedAgentTab, setSelectedAgentTab] = useState<'architecture' | 'tools' | 'memory' | 'guardrails'>('architecture');

  const capabilities = [
    { title: 'Multi-Step Reasoning', desc: 'Breaks complex business directives into deterministic sub-tasks', icon: Brain },
    { title: 'Tool & API Invocations', desc: 'Calls internal microservices, REST endpoints, and DB queries', icon: Wrench },
    { title: 'Enterprise Knowledge', desc: 'Grounds every decision in verified company SOPs and documents', icon: Database },
    { title: 'Autonomous Workflows', desc: 'Executes chains of actions across disconnected business software', icon: GitFork },
    { title: 'Human-in-the-Loop', desc: 'Pauses automatically for human approval when risk limits are met', icon: ShieldCheck },
    { title: 'Self-Correction', desc: 'Catches execution anomalies, retries with fallback strategies', icon: Sparkles },
  ];

  return (
    <section id="agents-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            Autonomous Operational Units
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            AI Agents That <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Actually Get Work Done.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Unlike simple conversational chatbots, Dataktif agents are autonomous workers equipped with tool access, database context, and execution permissions to complete real business operations.
          </p>
        </div>

        {/* 6 Core Capabilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div 
                key={cap.title}
                className="p-4 rounded-xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/80 transition-all flex flex-col items-center text-center group"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{cap.title}</h4>
                <p className="text-[11px] text-slate-400 leading-snug">{cap.desc}</p>
              </div>
            );
          })}
        </div>

        {/* AGENT BUILDER STUDIO PREVIEW */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#090E1A] to-[#05070D] p-6 sm:p-8 shadow-2xl shadow-blue-950/30">
          
          {/* Top Bar of Studio */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-white">Lead Qualification Agent</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    STATUS: ACTIVE (PROD)
                  </span>
                </div>
                <span className="text-xs text-slate-400">Version 2.3.1 • Last deployed 14 mins ago</span>
              </div>
            </div>

            {/* Tab switcher inside Studio */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10 text-xs">
              {(['architecture', 'tools', 'memory', 'guardrails'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedAgentTab(tab)}
                  className={`px-3 py-1.5 rounded-lg font-medium capitalize transition-colors cursor-pointer ${
                    selectedAgentTab === tab
                      ? 'bg-blue-600 text-white font-semibold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="py-8">
            {selectedAgentTab === 'architecture' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  
                  {/* Step 1 */}
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                    <span className="text-[10px] font-mono text-blue-400 font-semibold block mb-1">01 • TRIGGER</span>
                    <h5 className="text-sm font-bold text-white mb-2">Inbound Lead Webhook</h5>
                    <p className="text-xs text-slate-400 mb-3">Listens for new form submissions or WhatsApp inbound messages.</p>
                    <div className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 text-slate-300">
                      POST /v1/webhooks/leads
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold block mb-1">02 • RESEARCH</span>
                    <h5 className="text-sm font-bold text-white mb-2">Company & CRM Lookup</h5>
                    <p className="text-xs text-slate-400 mb-3">Enriches lead domain via LinkedIn API & checks Salesforce for duplicate records.</p>
                    <div className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 text-slate-300">
                      tools.enrichCompany(domain)
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                    <span className="text-[10px] font-mono text-indigo-400 font-semibold block mb-1">03 • REASONING</span>
                    <h5 className="text-sm font-bold text-white mb-2">Fit Scoring Engine</h5>
                    <p className="text-xs text-slate-400 mb-3">Analyzes budget, urgency, company size, and enterprise tech stack.</p>
                    <div className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 text-slate-300">
                      claude-3.7-sonnet // temp 0.2
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">04 • SYNC & ACTION</span>
                    <h5 className="text-sm font-bold text-white mb-2">Salesforce & Slack Dispatch</h5>
                    <p className="text-xs text-slate-400 mb-3">Creates qualified deal record and pings account executive with strategy brief.</p>
                    <div className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 text-slate-300">
                      dispatch(crm.opportunity)
                    </div>
                  </div>

                </div>
              </div>
            )}

            {selectedAgentTab === 'tools' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                  <div className="text-blue-400 font-bold mb-1">tool_salesforce_api</div>
                  <p className="text-slate-400 font-sans mb-3 text-xs">Bi-directional CRM opportunities, contact records, and task creation.</p>
                  <span className="text-emerald-400 text-[11px]">Permission: Read/Write</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                  <div className="text-cyan-400 font-bold mb-1">tool_whatsapp_business</div>
                  <p className="text-slate-400 font-sans mb-3 text-xs">Dispatches templated qualification questionnaires and calendar links.</p>
                  <span className="text-emerald-400 text-[11px]">Permission: Send Message</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                  <div className="text-indigo-400 font-bold mb-1">tool_knowledge_retriever</div>
                  <p className="text-slate-400 font-sans mb-3 text-xs">Queries internal enterprise pricing tier tables and discount policies.</p>
                  <span className="text-emerald-400 text-[11px]">Permission: Vector Read</span>
                </div>
              </div>
            )}

            {selectedAgentTab === 'memory' && (
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-white">Episodic Session Memory</span>
                  <span className="text-cyan-400 font-mono">Active (128K context window)</span>
                </div>
                <p className="text-slate-400">Stores historical interaction threads per lead email to avoid asking redundant discovery questions.</p>
                <div className="p-3 rounded-xl bg-black/50 font-mono text-[11px] text-slate-400">
                  State Cache: {`{ leadId: "acme-corp-091", touches: 3, lastDecision: "MEETING_REQUESTED" }`}
                </div>
              </div>
            )}

            {selectedAgentTab === 'guardrails' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10">
                  <span className="font-bold text-white block mb-1">Discount Threshold Policy</span>
                  <p className="text-slate-400">Agent cannot promise discounts &gt; 15% without triggering human manager signoff gate.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10">
                  <span className="font-bold text-white block mb-1">PII Redaction Guard</span>
                  <p className="text-slate-400">Automatically masks credit card numbers and personal ID numbers before model reasoning.</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar: Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Agents run concurrently with automated fallback retries and sub-second cold starts.</span>
            </div>

            <button
              onClick={onBuildAgent}
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>BUILD AN AGENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
