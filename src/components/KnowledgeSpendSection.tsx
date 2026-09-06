import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, ArrowRight, Zap, CheckCircle2, Sliders, DollarSign } from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

interface KnowledgeSpendSectionProps {
  onExploreRouter?: () => void;
}

export const KnowledgeSpendSection: React.FC<KnowledgeSpendSectionProps> = ({ onExploreRouter }) => {
  const [taskComplexity, setTaskComplexity] = useState<'simple' | 'medium' | 'deep'>('medium');

  const complexityData = {
    simple: {
      task: 'Fact retrieval & FAQ lookup',
      routedModel: 'Dataktif Sovereign Mini / Flash',
      latency: '240ms',
      cost: '$0.00015 / query',
      savings: '92% cost saved vs GPT-4o frontier'
    },
    medium: {
      task: 'Multi-document synthesis & SQL generation',
      routedModel: 'Gemini 2.5 Flash / Claude Sonnet',
      latency: '820ms',
      cost: '$0.0018 / query',
      savings: '74% cost saved via prompt caching'
    },
    deep: {
      task: 'Multi-agent legal audit & financial reconciliation',
      routedModel: 'Gemini 2.5 Pro / Claude 3.7 Thinking',
      latency: '2.4s',
      cost: '$0.0085 / query',
      savings: '48% cost saved via verified agent delegation'
    }
  };

  const current = complexityData[taskComplexity];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and explanation */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4 border border-blue-100"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Intelligent Cost Routing</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.05, ease: ENTERPRISE_EASING }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.15] mb-6"
            >
              Dataktif turns company knowledge into action without runaway model spend.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: ENTERPRISE_EASING }}
              className="text-base text-neutral-600 leading-relaxed mb-8"
            >
              Frontier models are overkill for 80% of enterprise requests. Dataktif's semantic router analyzes complexity in real-time to dispatch each query to the most cost-effective model, cutting inference budgets by up to 74% while maintaining 99.8% factual accuracy.
            </motion.p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-neutral-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-vendor lock-in: Switch seamlessly between Google, Anthropic, and open-weights</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Enterprise semantic cache eliminates duplicate inference costs</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real-time budget guardrails and cost-per-department allocation</span>
              </div>
            </div>

            <motion.button
              onClick={onExploreRouter}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 24px -4px rgba(0, 0, 0, 0.2)', borderColor: '#0f172a' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-neutral-900 border border-neutral-300 hover:border-neutral-900 transition-all cursor-pointer flex items-center gap-2 btn-hover-shimmer group relative"
            >
              <span>Explore Model Hub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </motion.button>
          </div>

          {/* Right Column: Visual card with Silk Blue wave background */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: ENTERPRISE_EASING }}
            className="lg:col-span-6"
          >
            <div 
              className="relative rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden text-white"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #06b6d4 100%)'
              }}
            >
              
              {/* Background silk ribbon ambient shine */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-cyan-200" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Dynamic Model Router</span>
                  </div>
                  <span className="text-xs font-mono bg-white/20 px-2.5 py-0.5 rounded-full text-white">
                    Live Simulator
                  </span>
                </div>

                {/* Complexity Selector Pills */}
                <div className="mb-6">
                  <span className="text-xs text-blue-100 block mb-2 font-medium">Select Task Complexity:</span>
                  <div className="grid grid-cols-3 gap-2 p-1 bg-black/20 rounded-xl">
                    {(['simple', 'medium', 'deep'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setTaskComplexity(lvl)}
                        className={`py-1.5 text-xs font-semibold rounded-lg capitalize transition-all cursor-pointer ${
                          taskComplexity === lvl 
                            ? 'bg-white text-blue-900 shadow-sm' 
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Router Output Card with Smooth Transition */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={taskComplexity}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: ENTERPRISE_EASING }}
                    className="bg-white/95 text-neutral-900 rounded-2xl p-5 shadow-lg space-y-3"
                  >
                    <div>
                      <span className="text-[11px] text-neutral-500 font-semibold uppercase tracking-wider block">
                        Enterprise Task
                      </span>
                      <span className="text-sm font-bold text-neutral-900">
                        {current.task}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100">
                      <div>
                        <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Routed Engine</span>
                        <span className="text-xs font-bold text-blue-700">{current.routedModel}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Avg Latency</span>
                        <span className="text-xs font-mono font-bold text-neutral-800">{current.latency}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <span className="text-neutral-500">Unit Cost: <strong className="text-neutral-900">{current.cost}</strong></span>
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {current.savings}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

