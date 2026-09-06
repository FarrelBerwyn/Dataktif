import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight, CheckCircle2, TrendingUp, Building2, Users } from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

interface DepartmentAccordionProps {
  onSeeStories?: () => void;
}

export const DepartmentAccordion: React.FC<DepartmentAccordionProps> = ({ onSeeStories }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const departments = [
    {
      title: 'Sales & Customer Operations',
      company: 'Booking.com',
      quote: 'Scales AI across 14,000 employees with Dataktif.',
      description: 'Customer teams search past interactions across Zendesk, WhatsApp, and CRM to generate verified resolution briefs and execute refunds autonomously.',
      stats: [
        { label: 'Employees Empowered', value: '14,000' },
        { label: 'Adoption Benchmark', value: '1st AI Platform' },
        { label: 'Monthly Inquiries Handled', value: '500,000+' }
      ],
      tag: 'Customer Service & Sales'
    },
    {
      title: 'Corporate Finance & FP&A',
      company: 'Multi-National Retail Group',
      quote: 'Eliminates 320 monthly hours of manual bank reconciliation.',
      description: 'Agents ingest PDF bank statements, match line items with Mekari Jurnal and SAP ledgers, and flag reconciliation discrepancies with full audit trails.',
      stats: [
        { label: 'Monthly Hours Saved', value: '320 hrs' },
        { label: 'Reconciliation Accuracy', value: '99.7%' },
        { label: 'Closing Cycle Reduction', value: '4 Days' }
      ],
      tag: 'Finance & Accounting'
    },
    {
      title: 'Engineering & DevOps',
      company: 'Fintech Unicorn',
      quote: 'Reduces incident MTTR by 52% with codebase semantic search.',
      description: 'Engineers ask natural language questions across 200+ microservice repositories, generating instant incident root-cause hypotheses and runbook recommendations.',
      stats: [
        { label: 'MTTR Reduction', value: '-52%' },
        { label: 'Repositories Indexed', value: '240+' },
        { label: 'Daily Query Volume', value: '18,400' }
      ],
      tag: 'Product & Engineering'
    },
    {
      title: 'Legal, HR & Governance',
      company: 'Regional Telecommunications Leader',
      quote: 'Accelerates vendor contract review from 3 days to 14 minutes.',
      description: 'Scans non-disclosure agreements, master service contracts, and vendor terms against company playbook and Indonesian PDP statutory requirements.',
      stats: [
        { label: 'Review Time', value: '14 mins' },
        { label: 'Clause Risk Detection', value: '100% Flagged' },
        { label: 'PDP Compliance', value: 'Certified' }
      ],
      tag: 'Legal & Compliance'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Section narrative & See customer stories button */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-3"
              >
                One platform. Every team.
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.05, ease: ENTERPRISE_EASING }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.15] mb-6"
              >
                Transforming every department with Enterprise AI.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: ENTERPRISE_EASING }}
                className="text-base text-neutral-600 leading-relaxed mb-8"
              >
                From engineering to sales to support to HR — Dataktif helps every department move faster, surface verified context instantly, and automate repetitive workflows safely.
              </motion.p>
            </div>

            <div>
              <motion.button
                onClick={onSeeStories}
                whileHover={{ y: -2, boxShadow: '0 10px 24px -4px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <span>See customer stories</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Right: Expandable Accordion List (Glean Style) */}
          <div className="lg:col-span-7 space-y-4">
            {departments.map((dept, idx) => {
              const isOpen = activeTab === idx;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: ENTERPRISE_EASING }}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'border-neutral-300 bg-neutral-50/80 shadow-sm' 
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-neutral-400 font-semibold">0{idx + 1}</span>
                      <span className="text-base sm:text-lg font-bold text-neutral-900">{dept.title}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: ENTERPRISE_EASING }}
                        className="px-5 sm:px-6 pb-6 pt-1 overflow-hidden"
                      >
                        <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-4 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                              {dept.tag}
                            </span>
                            <span className="text-xs font-semibold text-neutral-500">
                              {dept.company}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-neutral-900 leading-snug">
                            "{dept.quote}"
                          </h4>

                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                            {dept.description}
                          </p>

                          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-100 text-center">
                            {dept.stats.map((s, i) => (
                              <div key={i} className="p-2 rounded-xl bg-neutral-50">
                                <div className="text-base sm:text-lg font-extrabold text-[#0f172a] font-mono">
                                  {s.value}
                                </div>
                                <div className="text-[10px] text-neutral-500 font-medium mt-0.5">
                                  {s.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

