import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  FileText, 
  Sparkles, 
  Cpu, 
  Bot, 
  Users, 
  GitFork, 
  Network, 
  Zap, 
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity
} from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

export const ArchitectureFlow: React.FC = () => {
  const steps = [
    { id: 'data', name: 'DATA', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Enterprise databases, data lakes, ERP, APIs, and real-time event streams' },
    { id: 'knowledge', name: 'KNOWLEDGE', icon: FileText, color: 'text-cyan-600', bg: 'bg-cyan-50', desc: 'Internal SOPs, PDF manuals, policies, and vectorized semantic context' },
    { id: 'intelligence', name: 'INTELLIGENCE', icon: Sparkles, color: 'text-indigo-600', bg: 'bg-indigo-50', desc: 'Continuous context graph grounding and semantic entity resolution' },
    { id: 'models', name: 'MODELS', icon: Cpu, color: 'text-purple-600', bg: 'bg-purple-50', desc: 'Dynamic router across frontier LLMs, private clusters, and custom weights' },
    { id: 'agents', name: 'AGENTS', icon: Bot, color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Autonomous reasoning units equipped with enterprise tools and stateful memory' },
    { id: 'workforce', name: 'WORKFORCE', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50', desc: 'Hierarchical multi-agent departments cooperating toward organizational goals' },
    { id: 'workflows', name: 'WORKFLOWS', icon: GitFork, color: 'text-amber-600', bg: 'bg-amber-50', desc: 'Deterministic orchestration DAGs with human-in-the-loop signoff gates' },
    { id: 'systems', name: 'BUSINESS SYSTEMS', icon: Network, color: 'text-cyan-600', bg: 'bg-cyan-50', desc: 'Live bi-directional synchronization with Salesforce, SAP, WhatsApp & banking APIs' },
    { id: 'action', name: 'ACTION', icon: Zap, color: 'text-rose-600', bg: 'bg-rose-50', desc: 'Direct transaction execution, CRM records creation, and automated notifications' },
    { id: 'outcome', name: 'OUTCOME', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50', desc: 'Measurable cost reduction, zero customer churn, and scalable operating leverage' }
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(4); // Default on AGENTS
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  const currentStep = steps[activeStepIndex];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3"
          >
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>Unified Enterprise Data Pipeline</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05, ease: ENTERPRISE_EASING }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight mb-4 leading-tight"
          >
            AI is not the product. <br />
            Intelligence in Action is.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: ENTERPRISE_EASING }}
            className="text-base text-neutral-600 font-normal"
          >
            Dataktif connects every layer of your enterprise stack into a single coherent intelligence pipeline—from raw databases to real-world operational execution.
          </motion.p>
        </div>

        {/* Horizontal Pipeline Visualizer with Connecting Data Particles */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2 no-scrollbar">
          <div className="flex items-center justify-between min-w-[960px] gap-1 px-2 relative">
            
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <div key={step.id} className="flex items-center flex-1 relative">
                  <button
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`flex flex-col items-center p-3 rounded-2xl border transition-all w-full cursor-pointer relative z-10 ${
                      isActive 
                        ? 'bg-white border-neutral-900 shadow-lg ring-4 ring-blue-500/20 transform -translate-y-1' 
                        : isPast
                        ? 'bg-white/80 border-neutral-300 hover:bg-white'
                        : 'bg-white/40 border-neutral-200 hover:bg-white hover:border-neutral-300'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                    )}
                    <div className={`w-8 h-8 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-1.5 transition-transform ${
                      isActive ? 'scale-110' : ''
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight text-neutral-800 text-center uppercase">
                      {step.name}
                    </span>
                    <span className={`text-[9px] font-mono ${isActive ? 'text-blue-600 font-bold' : 'text-neutral-400'}`}>
                      0{idx + 1}
                    </span>
                  </button>

                  {/* Connecting Line with Animated Flow Particle */}
                  {idx < steps.length - 1 && (
                    <div className="w-5 h-[2px] bg-neutral-200 mx-0.5 shrink-0 relative overflow-hidden">
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Card on Active Stage */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: ENTERPRISE_EASING }}
            className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-neutral-400 uppercase">
                    Stage 0{activeStepIndex + 1} of 10
                  </span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {currentStep.name} LAYER
                  </span>
                  {isAutoPlaying && (
                    <span className="text-[10px] font-mono text-neutral-400">
                      (Auto-cycling pipeline)
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {currentStep.desc}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Seamlessly integrated into Dataktif OS with real-time health checks, latency SLA verification, and full cryptographic audit logging.
                </p>
              </div>

              <div className="lg:col-span-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-2.5">
                <div className="flex items-center justify-between font-mono text-neutral-500">
                  <span>Security Level:</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Zero-Trust Verified
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-neutral-500">
                  <span>Telemetry:</span>
                  <span className="text-neutral-900 font-semibold">Active Ingest / 0.18ms</span>
                </div>
                <div className="flex items-center justify-between font-mono text-neutral-500">
                  <span>Data Residency:</span>
                  <span className="text-neutral-900 font-semibold">In-Country Sovereign</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </motion.section>
  );
};

