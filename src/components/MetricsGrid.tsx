import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter, ENTERPRISE_EASING } from './animations/MotionComponents';

export const MetricsGrid: React.FC = () => {
  const metrics = [
    {
      value: 26,
      suffix: '+',
      decimals: 0,
      label: 'Unique LLMs & Embeddings',
      desc: 'Connect to proprietary, frontier, and sovereign local models.'
    },
    {
      value: 4.2,
      suffix: ' hrs',
      decimals: 1,
      label: 'Saved per employee / week',
      desc: 'Measured across tier-1 customer support and engineering teams.'
    },
    {
      value: 89,
      suffix: '%',
      decimals: 0,
      label: 'Enterprise adoption rate',
      desc: 'Average daily active user adoption achieved within 90 days.'
    },
    {
      value: 100,
      suffix: '+',
      decimals: 0,
      label: 'Work apps & databases connected',
      desc: 'Real-time two-way connectors with continuous permission sync.'
    },
    {
      value: 12,
      suffix: '+ billion',
      decimals: 0,
      label: 'Knowledge objects indexed',
      desc: 'Sub-second semantic search over petabytes of unstructured text.'
    },
    {
      value: 99.98,
      suffix: '%',
      decimals: 2,
      label: 'Enterprise production uptime',
      desc: 'Backed by enterprise financial SLA and multi-region failover.'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: ENTERPRISE_EASING }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-tight mb-4"
          >
            Enterprise AI people actually use.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: ENTERPRISE_EASING }}
            className="text-base text-neutral-600"
          >
            Flexible across models, trusted across the enterprise, and built to drive measurable operational outcomes.
          </motion.p>
        </div>

        {/* Glean 6-Box Hairline Grid with Staggered Entrance and Animated Counter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-300 rounded-3xl overflow-hidden bg-white shadow-sm">
          {metrics.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: ENTERPRISE_EASING }}
              whileHover={{ 
                backgroundColor: 'rgba(248, 250, 252, 0.9)',
                transition: { duration: 0.2 }
              }}
              className="p-8 sm:p-10 border-b md:border-b-0 border-r border-neutral-200 flex flex-col justify-between group cursor-default"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight font-mono mb-3 group-hover:text-blue-600 transition-colors">
                <AnimatedCounter 
                  value={item.value} 
                  suffix={item.suffix} 
                  decimals={item.decimals} 
                  duration={1.8}
                />
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900 mb-1.5">
                  {item.label}
                </div>
                <div className="text-xs text-neutral-500 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

