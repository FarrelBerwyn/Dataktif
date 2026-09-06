import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

interface EnterpriseCTAProps {
  onBookDemo: () => void;
  onExplorePlatform?: () => void;
}

export const EnterpriseCTA: React.FC<EnterpriseCTAProps> = ({ 
  onBookDemo,
  onExplorePlatform 
}) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden text-center"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.05, ease: ENTERPRISE_EASING }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0f172a] mb-6 leading-tight"
        >
          See Enterprise AI in action.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: ENTERPRISE_EASING }}
          className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Connect your business data, configure autonomous agents, and experience enterprise context synthesis built with zero-trust security.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease: ENTERPRISE_EASING }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Glean Signature Black Pill Button */}
          <motion.button
            onClick={onBookDemo}
            whileHover={{ y: -2, boxShadow: '0 10px 24px -4px rgba(0, 0, 0, 0.25)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-black hover:bg-neutral-800 shadow-md transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>Get a demo</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          {onExplorePlatform && (
            <motion.button
              onClick={onExplorePlatform}
              whileHover={{ y: -2, borderColor: '#0f172a' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 rounded-full text-sm font-semibold text-neutral-800 hover:text-black border border-neutral-300 transition-colors cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Explore AI Studio</span>
            </motion.button>
          )}
        </motion.div>

      </div>

      {/* Glean Bottom Fluid Silk Wave Band */}
      <motion.div 
        initial={{ scaleX: 0.95, opacity: 0.8 }}
        whileInView={{ scaleX: 1, opacity: 0.95 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: ENTERPRISE_EASING }}
        className="w-full h-12 sm:h-16 rounded-t-[40px] max-w-7xl mx-auto shadow-inner"
        style={{
          background: 'linear-gradient(90deg, #ec4899 0%, #a855f7 25%, #3b82f6 50%, #06b6d4 75%, #10b981 100%)'
        }}
      />
    </motion.section>
  );
};

