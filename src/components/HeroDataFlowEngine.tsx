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
      className="mt-14 pt-10 border-t border-neutral-200/90"
    >
      {/* Visual Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
        <div>
          {/* Dimensional Live Flow Badge (Non-flat, elevated with glowing radar) */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-cyan-50/80 border border-blue-200/90 shadow-sm shadow-blue-500/10 backdrop-blur-md mb-2.5">
            <div className="relative flex items-center justify-center w-2.5 h-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-xs shadow-blue-500" />
            </div>
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full border border-blue-200/80 shadow-2xs">
              LIVE FLOW
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-neutral-800">Data</span>
              <span className="text-blue-500 font-bold">→</span>
              <span className="text-indigo-600 font-bold">Intelligence</span>
              <span className="text-blue-500 font-bold">→</span>
              <span className="text-cyan-600 font-bold">Action</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 tracking-tight flex items-center gap-2.5">
            <span>How Context Travels Through Dataktif</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              REAL-TIME
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-xl">
            Continuous context grounding and telemetry orchestration across 4 intelligent enterprise layers.
          </p>
        </div>

        {/* Step indicator badges */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-100/90 border border-neutral-200/80 shadow-2xs overflow-x-auto pb-1 sm:pb-1">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => {
                setActiveStep(idx);
                setSimulationPaused(true);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeStep === idx
                  ? 'bg-neutral-900 text-white shadow-md shadow-neutral-900/20 ring-2 ring-blue-500/40'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/80'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeStep === idx ? 'bg-blue-400 animate-pulse' : 'bg-neutral-400'}`} />
              <span>0{idx + 1}</span>
              <span className="font-sans font-medium">{stage.title.split(' ')[0]}</span>
            </button>
          ))}
          {simulationPaused && (
            <button
              onClick={() => setSimulationPaused(false)}
              className="px-2.5 py-1 text-[11px] font-mono font-bold text-blue-600 hover:text-blue-700 bg-blue-50 rounded-full border border-blue-200 hover:bg-blue-100/70 transition-all cursor-pointer flex items-center gap-1 shrink-0 ml-1 shadow-2xs"
            >
              <span>Resume</span>
              <span>▶</span>
            </button>
          )}
        </div>
      </div>

      {/* Pipeline Container with Dimensional Depth */}
      <div className="relative rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-neutral-50/90 via-white to-neutral-50/50 border border-neutral-200/90 shadow-xl shadow-neutral-950/5 backdrop-blur-xs">
        
        {/* Animated Connecting Data Rail (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[3px] bg-gradient-to-r from-neutral-200 via-blue-200 to-neutral-200 rounded-full pointer-events-none z-0">
          {/* Animated data packet traveling from left to right */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/60 flex items-center justify-center"
            animate={{
              left: `${(activeStep / 3) * 88 + 4}%`
            }}
            transition={{
              duration: 0.8,
              ease: ENTERPRISE_EASING
            }}
          >
            <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stages.map((stage, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;

            return (
              <motion.div
                key={stage.id}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25, ease: ENTERPRISE_EASING }}
                onClick={() => {
                  setActiveStep(idx);
                  setSimulationPaused(true);
                }}
                className={`relative z-10 rounded-2xl p-4.5 transition-all cursor-pointer border overflow-hidden ${
                  isActive
                    ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/15 ring-2 ring-blue-500/20'
                    : isPassed
                    ? 'bg-white/90 border-neutral-300/80 shadow-sm hover:border-neutral-400'
                    : 'bg-white/70 border-neutral-200/70 shadow-2xs hover:border-neutral-300 opacity-90 hover:opacity-100'
                }`}
              >
                {/* Active Card Top Gradient Accent Line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
                )}

                {/* Top Tag & Active Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-2xs' 
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
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-semibold border border-amber-200/60">
                      Core
                    </span>
                  )}
                </h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed mb-3 line-clamp-2">
                  {stage.tagline}
                </p>

                {/* Node Items Stack */}
                <div className="space-y-1.5">
                  {stage.nodes.map((node) => {
                    const Icon = node.icon;
                    return (
                      <motion.div
                        key={node.name}
                        initial={false}
                        animate={{
                          backgroundColor: isActive 
                            ? 'rgba(239, 246, 255, 0.95)' 
                            : 'rgba(248, 250, 252, 0.85)'
                        }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-start gap-2 p-2 rounded-xl border transition-all ${
                          isActive 
                            ? 'border-blue-200/90 text-neutral-900 shadow-2xs' 
                            : 'border-neutral-200/60 text-neutral-700'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 transition-colors ${
                          isActive 
                            ? 'bg-blue-600 text-white shadow-2xs' 
                            : 'bg-neutral-200/80 text-neutral-600'
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
                <div className="mt-3.5 w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
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

        {/* Bottom Summary Telemetry Bar */}
        <div className="mt-5 px-4 py-3 rounded-2xl bg-white/90 border border-neutral-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-700 backdrop-blur-xs">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-2.5 h-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-xs shadow-emerald-500" />
            </div>
            <span className="font-bold text-neutral-900">End-to-End Flow Pipeline:</span>
            <span className="hidden sm:inline text-neutral-500">
              Unstructured Data Ingested <span className="text-blue-500 font-bold">→</span> Grounded Context Generated <span className="text-blue-500 font-bold">→</span> Actions Executed Safely
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono font-medium shrink-0">
            <span className="text-neutral-500">Latency: <strong className="text-neutral-900 font-bold">380ms</strong></span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-500">Guardrails: <strong className="text-emerald-600 font-bold">100% Active</strong></span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
