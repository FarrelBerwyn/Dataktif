import React from 'react';
import { motion } from 'motion/react';
import { Layers, Cpu, ShieldCheck, TrendingDown, ArrowUpRight } from 'lucide-react';
import { AnimatedCounter, CardAnimated, ENTERPRISE_EASING } from './animations/MotionComponents';

interface BentoValueSectionProps {
  onLearnMore?: () => void;
}

export const BentoValueSection: React.FC<BentoValueSectionProps> = ({ onLearnMore }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split: Big statement + Token savings card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Bold typographic statement with stagger */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: ENTERPRISE_EASING }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.15]">
              AI adoption is accelerating. <br />
              <span className="text-neutral-500">AI costs are accelerating faster.</span> <br />
              Dataktif is built for enterprise scale.
            </h2>
          </motion.div>

          {/* Right: Glean-Style Metric Card with Dotted Mesh & Animated Counter */}
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: ENTERPRISE_EASING }}
            whileHover={{ y: -4, boxShadow: '0 16px 32px -8px rgba(0, 0, 0, 0.08)' }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-neutral-200/90 p-7 bg-neutral-50/80 relative overflow-hidden shadow-sm transition-colors hover:border-blue-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Enterprise Token Optimization
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  <TrendingDown className="w-3 h-3" />
                  -<AnimatedCounter value={74.2} decimals={1} suffix="% Spend" duration={1.5} />
                </span>
              </div>

              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-mono">
                  <AnimatedCounter value={15331554437} duration={2} />
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">
                  Average token savings YTD across enterprise customers
                </div>
              </div>

              {/* Progressive SVG chart line */}
              <div className="py-2 mb-2">
                <svg className="w-full h-8 overflow-visible" viewBox="0 0 300 30">
                  <motion.path
                    d="M 0,25 Q 50,20 100,12 T 200,8 T 300,3"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: ENTERPRISE_EASING }}
                  />
                  <motion.path
                    d="M 0,25 Q 50,20 100,12 T 200,8 T 300,3 L 300,30 L 0,30 Z"
                    fill="url(#gradient-tokens)"
                    opacity="0.15"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                  />
                  <defs>
                    <linearGradient id="gradient-tokens" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
                <span>Dynamic Router Efficiency</span>
                <span className="font-semibold text-neutral-900">99.98% SLA Guaranteed</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3 Pillars Grid: Context, Intelligence, Permissions (Glean Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Context */}
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: ENTERPRISE_EASING }}
            whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)' }}
            className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-2xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              Context
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Integrated across the 100+ enterprise tools and private data stores your business already runs on.
            </p>
          </motion.div>

          {/* Pillar 2: Intelligence */}
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: ENTERPRISE_EASING }}
            whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.4)' }}
            className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-2xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              Intelligence
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              The right model and level of reasoning for every task, dynamically routed to balance latency, cost, and depth.
            </p>
          </motion.div>

          {/* Pillar 3: Permissions */}
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: ENTERPRISE_EASING }}
            whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.4)' }}
            className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-2xs hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              Permissions
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Secure, permission-aware access built in from day one. Users only see what they have verified rights to view.
            </p>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};
