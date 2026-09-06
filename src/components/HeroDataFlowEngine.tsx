import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  FileText, 
  Sparkles, 
  Cpu, 
  Bot, 
  GitFork, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Activity,
  ShieldAlert,
  Server
} from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

export const HeroDataFlowEngine: React.FC = () => {
  // Current active step in the particle cycle (0: Input Data, 1: Engine Core, 2: Agents/Workflows, 3: Outcome)
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simulationPaused, setSimulationPaused] = useState<boolean>(false);

  useEffect(() => {
    if (simulationPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(interval);
  }, [simulationPaused]);

  const stages = [
    {
      id: 'input',
      stepNum: 0,
      badge: 'Step 1: Input Data',
      title: 'Data & Knowledge',
      tagline: 'Raw enterprise context ingested in real-time',
      nodes: [
        { name: 'Databases & APIs', desc: 'PostgreSQL, Salesforce, SAP', icon: Database },
        { name: 'Company Knowledge', desc: 'PDFs, Notion, Confluence', icon: FileText },
        { name: 'Model Weights', desc: 'Claude 3.5, GPT-4o, Sovereign', icon: Sparkles }
      ]
    },
    {
      id: 'engine',
      stepNum: 1,
      badge: 'Step 2: Processing',
      title: 'Dataktif AI Engine',
      tagline: 'Semantic indexing, model routing & policy check',
      isCore: true,
      nodes: [
        { name: 'Context Graph RAG', desc: 'Vector embeddings with PDP filter', icon: Cpu },
        { name: 'Dynamic Model Router', desc: 'Cost/accuracy optimization', icon: Zap },
        { name: 'Enterprise Guardrails', desc: 'Zero data leakage guarantee', icon: ShieldAlert }
      ]
    },
    {
      id: 'action',
      stepNum: 2,
      badge: 'Step 3: Execution',
      title: 'Agents & Workflows',
      tagline: 'Autonomous orchestration across teams',
      nodes: [
        { name: 'Specialized Agents', desc: 'Financial Auditor, SQL Analyst', icon: Bot },
        { name: 'Deterministic Workflows', desc: 'DAG pipelines with human-in-loop', icon: GitFork },
        { name: 'Tool Connectors', desc: 'WhatsApp, ERP & email dispatch', icon: Server }
      ]
    },
    {
      id: 'outcome',
      stepNum: 3,
      badge: 'Step 4: Action',
      title: 'Business Outcomes',
      tagline: 'Verified resolution & business value delivered',
      nodes: [
        { name: '0% Hallucination', desc: 'Strict multi-citation proof', icon: CheckCircle2 },
        { name: 'Instant Resolution', desc: '0.42s mean latency at scale', icon: Activity },
        { name: 'Audit Certified', desc: 'Indonesian PDP & SOC2 Type II', icon: CheckCircle2 }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: ENTERPRISE_EASING }}
      className="mt-12 pt-8 border-t border-neutral-200/80"
    >
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-semibold text-blue-700 mb-1.5">
            <Activity className="w-3.5 h-3.5 animate-pulse text-blue-600" />
            <span>Live Flow: Data → Intelligence → Action</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
            How Context Travels Through Dataktif
          </h3>
        </div>

        {/* Step indicator badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => {
                setActiveStep(idx);
                setSimulationPaused(true);
              }}
              className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeStep === idx
                  ? 'bg-neutral-900 text-white shadow-sm ring-2 ring-blue-500/20'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70'
              }`}
            >
              0{idx + 1} {stage.title.split(' ')[0]}
            </button>
          ))}
          {simulationPaused && (
            <button
              onClick={() => setSimulationPaused(false)}
              className="px-2 py-1 text-[11px] font-mono text-blue-600 hover:underline cursor-pointer"
            >
              Resume ▶
            </button>
          )}
        </div>
      </div>

      {/* Interactive Pipeline Track with Animated Data Particles */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Animated Connecting Data Rail (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-neutral-200 pointer-events-none z-0">
          {/* Animated data packet traveling from left to right */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-md shadow-blue-500/60 flex items-center justify-center"
            animate={{
              left: `${(activeStep / 3) * 88 + 6}%`
            }}
            transition={{
              duration: 0.8,
              ease: ENTERPRISE_EASING
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            {/* Ping wave effect */}
            <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
          </motion.div>
        </div>

        {stages.map((stage, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <motion.div
              key={stage.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: ENTERPRISE_EASING }}
              onClick={() => {
                setActiveStep(idx);
                setSimulationPaused(true);
              }}
              className={`relative z-10 rounded-2xl p-4 transition-all cursor-pointer border ${
                isActive
                  ? 'bg-white border-blue-500/80 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/10'
                  : isPassed
                  ? 'bg-neutral-50/90 border-neutral-300/80 shadow-2xs'
                  : 'bg-white/80 border-neutral-200/70 shadow-2xs'
              }`}
            >
              {/* Top Tag & Active Status */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : isPassed
                    ? 'bg-neutral-200 text-neutral-700'
                    : 'bg-neutral-100 text-neutral-500'
                }`}>
                  {stage.badge}
                </span>

                <span className="flex items-center gap-1 text-[11px] font-mono">
                  {isActive ? (
                    <span className="flex items-center gap-1 text-blue-600 font-bold">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      Active
                    </span>
                  ) : isPassed ? (
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      Synced
                    </span>
                  ) : (
                    <span className="text-neutral-400">Waiting</span>
                  )}
                </span>
              </div>

              {/* Title & Tagline */}
              <h4 className="text-sm font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
                {stage.title}
                {stage.isCore && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-semibold">
                    Core
                  </span>
                )}
              </h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed mb-3 line-clamp-2">
                {stage.tagline}
              </p>

              {/* Node Items Stack */}
              <div className="space-y-1.5">
                {stage.nodes.map((node, nIdx) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={node.name}
                      initial={false}
                      animate={{
                        backgroundColor: isActive 
                          ? 'rgba(239, 246, 255, 0.9)' 
                          : 'rgba(248, 250, 252, 0.8)'
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-2 p-2 rounded-xl border transition-all ${
                        isActive 
                          ? 'border-blue-200 text-neutral-900' 
                          : 'border-neutral-200/50 text-neutral-700'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 transition-colors ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-2xs' 
                          : 'bg-neutral-200/70 text-neutral-600'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold truncate leading-tight">
                          {node.name}
                        </div>
                        <div className="text-[10px] text-neutral-500 truncate mt-0.5">
                          {node.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Bar Indicator at Card Bottom */}
              <div className="mt-3 w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600 rounded-full"
                  initial={false}
                  animate={{
                    width: isActive ? '100%' : isPassed ? '100%' : '0%'
                  }}
                  transition={{ duration: 0.6, ease: ENTERPRISE_EASING }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-4 p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-neutral-900">End-to-End Enterprise Flow:</span>
          <span className="hidden sm:inline text-neutral-500">
            Unstructured Data Ingested → Grounded Context Generated → Actions Executed Safely
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono font-medium">
          <span className="text-neutral-500">Latency: <strong>380ms</strong></span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500">Guardrails: <strong className="text-emerald-600">100% Active</strong></span>
        </div>
      </div>
    </motion.div>
  );
};
