import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Wrench, 
  Database, 
  Brain, 
  CheckCircle2, 
  Users, 
  Layers, 
  FileText, 
  Sparkles, 
  LineChart, 
  Cpu, 
  GitFork, 
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  Zap,
  Check
} from 'lucide-react';
import { ENTERPRISE_EASING } from '../animations/MotionComponents';

// 1. AI Agent Builder Visualizer (Agent -> Tools -> Knowledge -> Reasoning -> Action)
export const AgentLayersVisualizer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const layers = [
    { step: '01', name: 'Autonomous Agent', desc: 'Core objective & memory initialized', icon: Bot, tag: 'Controller' },
    { step: '02', name: 'Tool Integration', desc: 'Mekari ERP, Google Drive, Slack', icon: Wrench, tag: 'Tools' },
    { step: '03', name: 'Grounding Knowledge', desc: 'Context Graph & PDF vector search', icon: Database, tag: 'Context' },
    { step: '04', name: 'Chain-of-Thought', desc: 'Deterministic validation & self-critique', icon: Brain, tag: 'Reasoning' },
    { step: '05', name: 'Verified Action', desc: 'Execution sign-off dispatched safely', icon: CheckCircle2, tag: 'Success' }
  ];

  return (
    <div className="p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl overflow-hidden relative">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-neutral-200">Execution Stack</span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">Layer 0{activeLayer + 1} of 05 Active</span>
      </div>

      <div className="space-y-2 relative">
        {layers.map((layer, idx) => {
          const isActive = activeLayer === idx;
          const isPassed = activeLayer > idx;
          const Icon = layer.icon;

          return (
            <motion.div
              key={layer.name}
              initial={false}
              animate={{
                scale: isActive ? 1.02 : 1,
                opacity: isPassed || isActive ? 1 : 0.45
              }}
              transition={{ duration: 0.35, ease: ENTERPRISE_EASING }}
              className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                isActive
                  ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/10'
                  : isPassed
                  ? 'bg-white/5 border-white/10'
                  : 'bg-transparent border-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isActive 
                    ? 'bg-blue-500 text-white' 
                    : isPassed
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-white/10 text-neutral-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>{layer.step}. {layer.name}</span>
                    {isActive && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500 text-white font-mono">
                        Executing
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {layer.desc}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                {isPassed ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                    <Check className="w-3 h-3" /> Done
                  </span>
                ) : isActive ? (
                  <span className="text-[11px] font-mono text-blue-400 font-semibold animate-pulse">
                    Running...
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-neutral-500">
                    Queued
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>Target: <strong>Invoice Discrepancy Reconciliation</strong></span>
        <span className="text-emerald-400 font-bold">100% Deterministic</span>
      </div>
    </div>
  );
};

// 2. AI Workforce Visualizer (Manager Agent connected to 4 sub-agents)
export const WorkforceVisualizer: React.FC = () => {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const subAgents = [
    { title: 'Ingestion Agent', role: 'Fetches Surabaya & Jakarta PDF ledgers', status: 'Syncing' },
    { title: 'Tax Auditor Agent', role: 'Cross-checks with Indonesian Tax Code', status: 'Auditing' },
    { title: 'Critic Agent', role: 'Detects $4,200 discount discrepancy', status: 'Verifying' },
    { title: 'Synthesizer Agent', role: 'Prepares board summary slide deck', status: 'Synthesizing' }
  ];

  return (
    <div className="p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl">
      <div className="text-center mb-6">
        <div className="inline-flex flex-col items-center">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 shadow-lg shadow-purple-500/20 text-white mb-1.5 ring-4 ring-purple-500/20">
            <Users className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-white">Lead Controller Agent</div>
          <div className="text-[10px] text-purple-300 font-mono">Hierarchical Orchestrator</div>
        </div>
      </div>

      {/* Sub-agents Grid with Dynamic Signal Lines */}
      <div className="grid grid-cols-2 gap-3 relative">
        {subAgents.map((agent, i) => {
          const isPulsing = pulseIndex === i;
          return (
            <motion.div
              key={agent.title}
              animate={{
                borderColor: isPulsing ? 'rgba(168, 85, 247, 0.8)' : 'rgba(255, 255, 255, 0.1)',
                backgroundColor: isPulsing ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.03)'
              }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-xl border text-left transition-all relative overflow-hidden"
            >
              {isPulsing && (
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-purple-400 animate-ping m-2" />
              )}
              <div className="text-xs font-bold text-white mb-0.5 truncate">
                {agent.title}
              </div>
              <div className="text-[10px] text-neutral-400 line-clamp-2 leading-relaxed mb-2">
                {agent.role}
              </div>
              <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                isPulsing ? 'bg-purple-500 text-white' : 'bg-white/10 text-neutral-400'
              }`}>
                {agent.status}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>Latency: <strong>4.8s (Parallelized)</strong></span>
        <span className="text-purple-400 font-semibold">Consensus Achieved</span>
      </div>
    </div>
  );
};

// 3. Knowledge Engine (RAG) Visualizer: Documents -> Parsing -> Embedding -> Knowledge -> AI Agent
export const KnowledgeRagVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const flowSteps = [
    { title: 'Documents', desc: 'Raw PDFs, Notion, Confluence', icon: FileText },
    { title: 'Parsing', desc: 'OCR & chunk segmentation', icon: Layers },
    { title: 'Embedding', desc: '1,536-dim semantic vectors', icon: Sparkles },
    { title: 'Knowledge', desc: 'Permission-aware Context Graph', icon: Database },
    { title: 'AI Agent', desc: 'Grounded prompt injection', icon: Bot }
  ];

  return (
    <div className="p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
        <span className="text-xs font-mono font-bold text-neutral-300">
          Unstructured Data → Structured Knowledge → AI Context
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
          Sub-400ms Retrieval
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {flowSteps.map((item, idx) => {
          const isActive = step === idx;
          const isPassed = step > idx;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              animate={{
                scale: isActive ? 1.01 : 1,
                opacity: isPassed || isActive ? 1 : 0.4
              }}
              transition={{ duration: 0.3 }}
              className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                isActive
                  ? 'bg-blue-600/25 border-blue-400 shadow-md shadow-blue-500/10'
                  : isPassed
                  ? 'bg-white/5 border-white/10'
                  : 'border-white/5 bg-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg ${
                  isActive ? 'bg-blue-600 text-white' : 'bg-white/10 text-neutral-400'
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>{idx + 1}. {item.title}</span>
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {item.desc}
                  </div>
                </div>
              </div>

              <div>
                {isActive ? (
                  <span className="text-[10px] font-mono text-blue-400 font-bold animate-pulse">
                    Processing...
                  </span>
                ) : isPassed ? (
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3" /> Indexed
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-neutral-500">Wait</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>Zero Data Leakage: <strong>RBAC Synced</strong></span>
        <span className="text-blue-400">100% Provenance</span>
      </div>
    </div>
  );
};

// 4. Data Intelligence Visualizer: Progressive bar chart + Scanning beam + Insight popup
export const DataIntelligenceVisualizer: React.FC = () => {
  const [insightVisible, setInsightVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInsightVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const barData = [
    { label: 'Jakarta', height: '65%', val: 'Rp 18.2B' },
    { label: 'Surabaya', height: '48%', val: 'Rp 12.4B' },
    { label: 'Bandung', height: '52%', val: 'Rp 14.1B' },
    { label: 'Bali', height: '88%', val: 'Rp 22.8B', isHighlighted: true },
    { label: 'Medan', height: '40%', val: 'Rp 9.5B' }
  ];

  return (
    <div className="p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <LineChart className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-white">PostgreSQL Read-Only Analytics Replica</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
          380ms Latency
        </span>
      </div>

      {/* Bar Chart Container with progressive draw and scanning beam */}
      <div className="relative h-44 flex items-end justify-between gap-3 px-2 pt-6 pb-2 border-b border-white/10">
        {/* Scanning beam animation */}
        <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none animate-scan-beam" />

        {barData.map((bar) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <span className="text-[10px] font-mono text-neutral-400 group-hover:text-white transition-colors">
              {bar.val}
            </span>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: bar.height }}
              transition={{ duration: 0.9, ease: ENTERPRISE_EASING }}
              className={`w-full rounded-t-lg transition-colors ${
                bar.isHighlighted 
                  ? 'bg-gradient-to-t from-cyan-600 to-cyan-400 shadow-lg shadow-cyan-500/30' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            />
            <span className={`text-[10px] font-mono truncate ${
              bar.isHighlighted ? 'text-cyan-300 font-bold' : 'text-neutral-500'
            }`}>
              {bar.label}
            </span>
          </div>
        ))}
      </div>

      {/* Dynamic Insight Banner popup */}
      <AnimatePresence>
        {insightVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: ENTERPRISE_EASING }}
            className="mt-3 p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-cyan-200">
                <strong>Insight:</strong> +22% spike detected in Bali branch transactions.
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-300 font-semibold shrink-0">
              Verified (p &lt; 0.01)
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 5. Model Hub Router Visualizer: User Task -> Router -> Multiple Models -> Best Selected
export const ModelRouterVisualizer: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'sovereign' | 'claude' | 'gpt' | 'gemini'>('sovereign');

  useEffect(() => {
    const cycle = ['sovereign', 'claude', 'gpt', 'gemini'] as const;
    let idx = 0;
    const timer = setInterval(() => {
      idx = (idx + 1) % cycle.length;
      setSelectedModel(cycle[idx]);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const models = [
    { id: 'sovereign', name: 'Sovereign Llama 3 (Jakarta Cluster)', type: 'Local On-Premise', cost: '$0.00 / PP 71 Ready', latency: '24ms', highlight: 'PDP Compliant Winner' },
    { id: 'claude', name: 'Claude 3.5 Sonnet', type: 'Frontier Cloud', cost: '$0.003 / 1k', latency: '420ms', highlight: 'Complex Reasoning' },
    { id: 'gpt', name: 'OpenAI GPT-4o', type: 'Frontier Cloud', cost: '$0.0025 / 1k', latency: '380ms', highlight: 'Multimodal' },
    { id: 'gemini', name: 'Google Gemini 1.5 Pro', type: 'Frontier Cloud', cost: '$0.0012 / 1k', latency: '310ms', highlight: '2M Token Context' }
  ];

  return (
    <div className="p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-bold text-white">Dynamic AI Model Router</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
          Smart Routing Active
        </span>
      </div>

      <div className="space-y-2">
        {models.map((m) => {
          const isSelected = selectedModel === m.id;
          return (
            <motion.div
              key={m.id}
              animate={{
                scale: isSelected ? 1.02 : 1,
                borderColor: isSelected ? 'rgba(251, 191, 36, 0.8)' : 'rgba(255, 255, 255, 0.08)',
                backgroundColor: isSelected ? 'rgba(251, 191, 36, 0.12)' : 'rgba(255, 255, 255, 0.02)'
              }}
              transition={{ duration: 0.3, ease: ENTERPRISE_EASING }}
              className="p-3 rounded-xl border flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                  isSelected ? 'bg-amber-400 ring-4 ring-amber-400/20' : 'bg-white/20'
                }`} />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>{m.name}</span>
                    {isSelected && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-400 text-neutral-950 font-bold">
                        SELECTED
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {m.type} • {m.cost}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className={`text-[10px] font-mono font-semibold block ${
                  isSelected ? 'text-amber-300' : 'text-neutral-500'
                }`}>
                  {m.latency}
                </span>
                <span className="text-[9px] text-neutral-500">
                  {m.highlight}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>Policy: <strong>Strict Indonesian Data Residency</strong></span>
        <span className="text-amber-400 font-bold">Cost: -64% Saved</span>
      </div>
    </div>
  );
};

// 6. Workflow Nodes Visualizer (Pending -> Running -> Completed with glowing data packet)
export const WorkflowNodesVisualizer: React.FC = () => {
  const [currentNode, setCurrentNode] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNode((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { title: 'Trigger Event', desc: 'WhatsApp Webhook received', icon: Zap },
    { title: 'Input Validation', desc: 'Indonesian PDP compliance filter', icon: ShieldAlert },
    { title: 'Model Reasoning', desc: 'Claude 3.5 SLA extraction', icon: Brain },
    { title: 'Action Dispatch', desc: 'Refund executed via Midtrans', icon: CheckCircle2 }
  ];

  return (
    <div className="p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <GitFork className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-white">DAG Workflow Orchestration</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
          Live Execution
        </span>
      </div>

      <div className="space-y-2 relative">
        {nodes.map((node, idx) => {
          const isRunning = currentNode === idx;
          const isDone = currentNode > idx;
          const isPending = currentNode < idx;
          const Icon = node.icon;

          return (
            <motion.div
              key={node.title}
              animate={{
                scale: isRunning ? 1.02 : 1,
                borderColor: isRunning 
                  ? 'rgba(16, 185, 129, 0.8)' 
                  : isDone 
                  ? 'rgba(255, 255, 255, 0.15)' 
                  : 'rgba(255, 255, 255, 0.05)',
                backgroundColor: isRunning 
                  ? 'rgba(16, 185, 129, 0.15)' 
                  : isDone 
                  ? 'rgba(255, 255, 255, 0.04)' 
                  : 'transparent'
              }}
              transition={{ duration: 0.3, ease: ENTERPRISE_EASING }}
              className="p-3 rounded-xl border flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg ${
                  isRunning 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-white/10 text-neutral-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>Node 0{idx + 1}: {node.title}</span>
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {node.desc}
                  </div>
                </div>
              </div>

              <div>
                {isRunning ? (
                  <span className="text-[10px] font-mono text-emerald-400 font-bold animate-pulse">
                    Running...
                  </span>
                ) : isDone ? (
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Completed
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-neutral-500">
                    Pending
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>Execution Mode: <strong>Deterministic DAG</strong></span>
        <span className="text-emerald-400 font-bold">100% Guaranteed SLA</span>
      </div>
    </div>
  );
};
