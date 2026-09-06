import React, { useState } from 'react';
import { 
  Bot, 
  Database, 
  GitFork, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  ArrowLeft, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Plus, 
  Terminal, 
  UploadCloud, 
  Search,
  Settings2,
  Lock,
  Layers,
  ArrowRight
} from 'lucide-react';
import { MARKETPLACE_TEMPLATES, MODEL_ROUTER_DATA } from '../data/mockData';

interface InteractiveStudioProps {
  onBackToLanding: () => void;
  initialTab?: 'agents' | 'workflows' | 'knowledge' | 'models' | 'logs';
}

export const InteractiveStudio: React.FC<InteractiveStudioProps> = ({ 
  onBackToLanding,
  initialTab = 'agents'
}) => {
  const [activeTab, setActiveTab] = useState<'agents' | 'workflows' | 'knowledge' | 'models' | 'logs'>(initialTab);
  
  // Agent Builder State
  const [agentName, setAgentName] = useState('Enterprise Lead Qualifier');
  const [selectedModel, setSelectedModel] = useState('claude-3-7-sonnet');
  const [systemPrompt, setSystemPrompt] = useState(
    'You are an autonomous enterprise lead qualification agent for Dataktif. When an inbound lead is received, analyze company revenue, tech stack, and ICP alignment. If qualified, create a deal in Salesforce and alert the regional account executive.'
  );
  const [enabledTools, setEnabledTools] = useState<string[]>(['salesforce_api', 'whatsapp_api', 'knowledge_rag']);
  const [testAgentOutput, setTestAgentOutput] = useState<string | null>(null);
  const [isTestingAgent, setIsTestingAgent] = useState(false);

  // Knowledge RAG State
  const [docName, setDocName] = useState('SOP_Enterprise_Procurement_2026.pdf');
  const [ragQuery, setRagQuery] = useState('What are the discount approval limits for Regional VP?');
  const [ragResponse, setRagResponse] = useState<string | null>(null);
  const [isQueryingRag, setIsQueryingRag] = useState(false);

  // Model Router State
  const [routerGoal, setRouterGoal] = useState<'balanced' | 'latency' | 'cost' | 'reasoning'>('reasoning');

  const handleTestAgent = () => {
    setIsTestingAgent(true);
    setTestAgentOutput(null);

    setTimeout(() => {
      setIsTestingAgent(false);
      setTestAgentOutput(
        `[EXECUTION TRACE #run_8812]\n` +
        `[00:00.12] 🟢 Agent Initialized: ${agentName}\n` +
        `[00:00.34] 🔍 Querying Context Graph for: "Nusantara Logistics Inc."\n` +
        `[00:00.82] 📄 Retrieved 3 documents from Knowledge Engine (Relevance Score: 0.96)\n` +
        `[00:01.15] 🤖 Model Reasoning (${selectedModel}): Revenue $48M exceeds tier-1 threshold ($20M). Fit: 94%.\n` +
        `[00:01.60] ⚡ Tool Call: salesforce_api.createOpportunity({\n` +
        `  "account": "Nusantara Logistics",\n` +
        `  "stage": "Qualified Lead",\n` +
        `  "arr_estimate": "$120,000"\n` +
        `})\n` +
        `[00:02.10] 💬 Tool Call: whatsapp_api.sendDispatchNotification({\n` +
        `  "recipient": "+628123456789 (VP Sales)",\n` +
        `  "summary": "High-priority inbound lead qualified. Deal record created."\n` +
        `})\n` +
        `[00:02.45] ✅ Execution Complete. Cryptographic audit receipt #rec_9942a written to immutable log.`
      );
    }, 1400);
  };

  const handleTestRag = () => {
    setIsQueryingRag(true);
    setRagResponse(null);

    setTimeout(() => {
      setIsQueryingRag(false);
      setRagResponse(
        `Based on ${docName} (Section 4.3 "Delegation of Financial Authority"):\n\n` +
        `1. Regional Vice Presidents are authorized to approve commercial discounts up to 15% on standard enterprise multi-year contracts.\n` +
        `2. Discounts between 15.1% and 25% require dual sign-off from the Chief Commercial Officer (CCO) and VP Finance.\n` +
        `3. Any non-standard SLA concessions require explicit sign-off from Legal & Compliance.\n\n` +
        `[Citation]: Page 14, Paragraph 2 • Confidence: 99.8% (Zero Hallucination Verified)`
      );
    }, 900);
  };

  const toggleTool = (toolId: string) => {
    setEnabledTools((prev) => 
      prev.includes(toolId) ? prev.filter((t) => t !== toolId) : [...prev, toolId]
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Studio Top Navigation Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-neutral-200 gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToLanding}
              className="p-2.5 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-700 hover:text-black transition-colors cursor-pointer flex items-center gap-2 text-xs font-semibold shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-neutral-950">Dataktif AI Studio</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-100 text-blue-700 font-bold border border-blue-200">
                  LIVE CONSOLE
                </span>
              </div>
              <span className="text-xs text-neutral-500">Environment: Production Workspace (Jakarta Hub)</span>
            </div>
          </div>

          {/* Module Switcher Tabs (Glean Style Pills) */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-neutral-200 shadow-2xs overflow-x-auto no-scrollbar">
            {[
              { id: 'agents', label: 'Agent Builder', icon: Bot },
              { id: 'workflows', label: 'Workforce DAG', icon: GitFork },
              { id: 'knowledge', label: 'Knowledge RAG', icon: Database },
              { id: 'models', label: 'Model Router', icon: Cpu },
              { id: 'logs', label: 'Audit Logs', icon: Activity },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: AGENT BUILDER STUDIO */}
        {activeTab === 'agents' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Configuration (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <h3 className="text-base font-bold text-neutral-950 mb-4 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  <span>Configure Autonomous Agent</span>
                </h3>

                {/* Agent Name */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                </div>

                {/* LLM Model Selection */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Core Reasoning Engine (Model)
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  >
                    {MODEL_ROUTER_DATA.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name} ({m.family}) — {m.bestFor}
                      </option>
                    ))}
                  </select>
                </div>

                {/* System Prompt / Directive */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Autonomous Directive & Guardrails
                  </label>
                  <textarea
                    rows={4}
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-blue-600 focus:bg-white font-mono leading-relaxed transition-all"
                  />
                </div>

                {/* Tool Permissions */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Attached Enterprise Tools & APIs
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'salesforce_api', label: 'Salesforce CRM' },
                      { id: 'whatsapp_api', label: 'WhatsApp Business' },
                      { id: 'knowledge_rag', label: 'Knowledge Graph RAG' },
                      { id: 'midtrans_api', label: 'Midtrans Payments' },
                      { id: 'mekari_api', label: 'Mekari Jurnal Ledger' },
                      { id: 'slack_dispatch', label: 'Slack Executive Ping' },
                    ].map((tool) => {
                      const active = enabledTools.includes(tool.id);
                      return (
                        <button
                          key={tool.id}
                          onClick={() => toggleTool(tool.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                            active
                              ? 'bg-blue-50 border-blue-500 text-blue-900 font-semibold'
                              : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                          }`}
                        >
                          <span className="text-[11px] truncate">{tool.label}</span>
                          {active && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Ready to simulate agent execution loop.</span>
                  <button
                    onClick={handleTestAgent}
                    disabled={isTestingAgent}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-black hover:bg-neutral-800 shadow-md flex items-center gap-2 cursor-pointer transition-all"
                  >
                    {isTestingAgent ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Running Agent...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>TEST RUN AGENT</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

            {/* Right: Live Execution Trace Window (5 cols) */}
            <div className="lg:col-span-5 flex flex-col rounded-3xl border border-neutral-800 bg-[#0f172a] text-white overflow-hidden shadow-xl">
              <div className="px-5 py-4 bg-black/40 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Agent Sandbox Output</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Status: Connected</span>
              </div>

              <div className="p-5 flex-1 font-mono text-xs text-neutral-300 overflow-y-auto space-y-3 min-h-[360px]">
                {testAgentOutput ? (
                  <pre className="whitespace-pre-wrap leading-relaxed text-cyan-300">
                    {testAgentOutput}
                  </pre>
                ) : (
                  <div className="text-neutral-500 italic py-16 text-center">
                    Click "TEST RUN AGENT" to simulate autonomous execution, tool invocations, and CRM synchronization.
                  </div>
                )}
              </div>

              <div className="p-4 bg-black/40 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Guardrails: <strong className="text-emerald-400">Enforced</strong></span>
                <span>Audit Signature: <strong className="text-blue-400">Valid</strong></span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: MULTI-AGENT WORKFORCE DAG */}
        {activeTab === 'workflows' && (
          <div className="p-8 rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Hierarchical Workforce Orchestration</h3>
            <p className="text-xs text-neutral-600 mb-8">
              Link multiple specialized agents into deterministic Directed Acyclic Graphs (DAGs) with automated handoffs and conditional logic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900">Supervisor Agent</h4>
                <p className="text-xs text-neutral-600 mt-1">Delegates sub-tasks and evaluates results.</p>
              </div>

              <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-3">
                  <GitFork className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900">Execution Workers (x4)</h4>
                <p className="text-xs text-neutral-600 mt-1">Research, Scoring, Messaging, and CRM Sync.</p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-neutral-900">Human Gatekeeper</h4>
                <p className="text-xs text-neutral-600 mt-1">Escalation path for deals &gt; Rp 1B.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: KNOWLEDGE RAG INGEST */}
        {activeTab === 'knowledge' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <h3 className="text-base font-bold text-neutral-900 mb-3 flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-blue-600" />
                <span>Connected Enterprise Document Index</span>
              </h3>
              
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 mb-4">
                <span className="text-xs font-bold text-neutral-900 block">{docName}</span>
                <span className="text-[11px] text-neutral-500">Indexed 128 vector chunks • Model: text-embedding-3-large</span>
              </div>

              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Test Semantic Query Against Document:
              </label>
              <input
                type="text"
                value={ragQuery}
                onChange={(e) => setRagQuery(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-blue-600 focus:bg-white mb-4"
              />

              <button
                onClick={handleTestRag}
                disabled={isQueryingRag}
                className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-black hover:bg-neutral-800 cursor-pointer transition-all shadow-sm"
              >
                {isQueryingRag ? 'Retrieving Chunks...' : 'Query Knowledge Base'}
              </button>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl border border-neutral-800 bg-[#0f172a] text-white font-mono text-xs flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-neutral-400 text-[11px] uppercase tracking-wider block mb-3">
                  Retrieved Context & Synthesized Answer:
                </span>
                {ragResponse ? (
                  <p className="text-cyan-300 leading-relaxed font-sans whitespace-pre-wrap">
                    {ragResponse}
                  </p>
                ) : (
                  <span className="text-neutral-500 italic font-sans">
                    Submit a query to test zero-hallucination semantic context retrieval.
                  </span>
                )}
              </div>
              <div className="pt-4 border-t border-neutral-800 text-emerald-400 text-[11px]">
                Attribution Accuracy: 99.8%
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MODEL ROUTER */}
        {activeTab === 'models' && (
          <div className="p-8 rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Multi-LLM Dispatch & Routing Policy</h3>
            <p className="text-xs text-neutral-600 mb-6">
              Configure automated fallback and optimization objectives across 6 connected foundation models.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { id: 'reasoning', label: 'Maximum Reasoning (Claude 3.7 / R1)' },
                { id: 'cost', label: 'Cost-Optimized (Gemini / Llama 3.3)' },
                { id: 'latency', label: 'Sub-Second Latency (GPT-4o Mini / Haiku)' },
                { id: 'balanced', label: 'Enterprise Balanced (Auto)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setRouterGoal(opt.id as any)}
                  className={`p-3 rounded-2xl border text-xs text-left transition-all cursor-pointer ${
                    routerGoal === opt.id
                      ? 'bg-neutral-900 border-neutral-900 text-white font-bold shadow-xs'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-700">
              Active Strategy: <strong className="text-blue-700 uppercase font-bold">{routerGoal}</strong> • Redundancy: Auto-Failover to backup endpoint enabled.
            </div>
          </div>
        )}

        {/* TAB 5: AUDIT LOGS */}
        {activeTab === 'logs' && (
          <div className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <h3 className="text-base font-bold text-neutral-900 mb-4">Immutable Enterprise Audit Ledger</h3>
            <div className="space-y-2 font-mono text-xs text-neutral-700">
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                <span>[2026-09-06 16:42:10] AGENT: Lead Qualification triggered for user 'budi@nusantara.id'</span>
                <span className="text-emerald-700 font-bold">PASSED</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                <span>[2026-09-06 16:42:11] RAG: Retrieved 3 chunks from 'MSA_Enterprise_2026.pdf' (0.94 score)</span>
                <span className="text-blue-700 font-bold">200 OK</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                <span>[2026-09-06 16:42:12] CRM: Updated Salesforce Opportunity #SF-90412</span>
                <span className="text-indigo-700 font-bold">SYNCED</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
