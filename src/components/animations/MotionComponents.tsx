import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'motion/react';

// Enterprise Preferred Easing Curve (Linear / Stripe / Vercel style)
export const ENTERPRISE_EASING = [0.22, 1, 0.36, 1] as const;

// Global Section Reveal Component
export const SectionReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}> = ({ children, className = '', id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: ENTERPRISE_EASING
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Text Staggered Containers and Items
export const TextGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const HeadingReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}> = ({ children, className = '', as = 'h2' }) => {
  const Component = motion[as];
  return (
    <Component
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: ENTERPRISE_EASING }
        }
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export const ParagraphReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: ENTERPRISE_EASING }
        }
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

// Button Animated with Enterprise Physics
export const ButtonAnimated: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'dark';
  glow?: boolean;
}> = ({ children, className = '', onClick, glow = false }) => {
  return (
    <motion.button
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: ENTERPRISE_EASING }
        }
      }}
      whileHover={{
        y: -2,
        boxShadow: glow 
          ? '0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.3)' 
          : '0 8px 20px -4px rgba(0, 0, 0, 0.12)',
        transition: { duration: 0.2, ease: ENTERPRISE_EASING }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      className={`group cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.button>
  );
};

// Card Animated with Stagger & Hover States
export const CardAnimated: React.FC<{
  children: React.ReactNode;
  className?: string;
  delayIndex?: number;
  onClick?: () => void;
}> = ({ children, className = '', delayIndex = 0, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: delayIndex * 0.08,
        ease: ENTERPRISE_EASING
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: ENTERPRISE_EASING }
      }}
      className={`group ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Icon Animated with entrance and hover scale
export const IconAnimated: React.FC<{
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}> = ({ children, className = '', isActive = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: ENTERPRISE_EASING }}
      whileHover={{ scale: 1.05 }}
      className={`relative ${isActive ? 'animate-subtle-glow' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Number Counter with Viewport Trigger & Smooth Interpolation
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  formatNumber?: boolean;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.8,
  prefix = '',
  suffix = '',
  decimals = 0,
  formatNumber = true,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Enterprise ease out expo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue);

  const formattedString = formatNumber 
    ? Number(formatted).toLocaleString('id-ID')
    : formatted.toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedString}
      {suffix}
    </span>
  );
};
