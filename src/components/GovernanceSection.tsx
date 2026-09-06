import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Server,
  Activity,
  ShieldAlert
} from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

interface GovernanceSectionProps {
  onLearnMore?: () => void;
}

export const GovernanceSection: React.FC<GovernanceSectionProps> = ({ onLearnMore }) => {

  const auditEvents = [
    {
      id: 'AUDIT-8921',
      actor: 'agent:underwriting-eval-v2',
      action: 'Vector RAG Query: Loan_Agreement_2025.pdf',
      status: 'Allowed • RBAC Level 4',
      time: '12ms ago'
    },
    {
      id: 'AUDIT-8922',
      actor: 'user:risk_analyst_04',
      action: 'Data Intelligence SQL: SELECT * FROM churn_pnl',
      status: 'Anonymized (PII Redacted)',
      time: '184ms ago'
    },
    {
      id: 'AUDIT-8923',
      actor: 'agent:whatsapp-order-bot',
      action: 'Workflow Trigger: Mekari ERP Order Entry',
      status: 'Human-in-Loop Approved',
      time: '1.2s ago'
    }
  ];

  return (
    <motion.section 
      id="governance-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main Split: Left Visual + Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Full Observability Card with Activating Security Ring */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
            className="lg:col-span-6 relative"
          >
            {/* Activating Security Glow Ring around console */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-teal-500/20 blur-xl pointer-events-none opacity-70" />
            
            <div className="rounded-3xl border border-neutral-200/90 bg-neutral-50/90 p-6 sm:p-8 shadow-sm relative overflow-hidden backdrop-blur-xs">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Full Observability Console
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-500">Live Audit Stream</span>
              </div>

              <h4 className="text-lg font-bold text-neutral-900 mb-2">
                Track every query, answer, and action.
              </h4>
              <p className="text-xs text-neutral-600 mb-5 leading-relaxed">
                Immutable, cryptographic audit logs ensure full provenance: inspect the prompt, retrieved document chunks, LLM reasoning chain, and downstream system actions.
              </p>

              {/* Sample Live Audit Stream Items with Staggered Slide-in */}
              <div className="space-y-2.5">
                {auditEvents.map((evt, idx) => (
                  <motion.div 
                    key={evt.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.1, ease: ENTERPRISE_EASING }}
                    whileHover={{ scale: 1.01, backgroundColor: '#ffffff' }}
                    className="p-3 rounded-xl bg-white border border-neutral-200 text-xs flex flex-col gap-1 shadow-2xs transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono font-semibold text-neutral-900">{evt.actor}</span>
                      <span className="text-neutral-400 font-mono">{evt.time}</span>
                    </div>
                    <div className="text-neutral-700 font-medium">{evt.action}</div>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold pt-1 border-t border-neutral-100">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{evt.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative & Black Pill Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: ENTERPRISE_EASING }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4 border border-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Enterprise Zero-Trust AI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.15] mb-6">
              Built for enterprise from day one.
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed mb-6">
              AI only works in the enterprise when answers are secure, explainable, and permission-aware. Dataktif embeds role-based access control, automated PII scrubbing, and human-in-the-loop oversight directly into every model interaction.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-neutral-700">
                <Lock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 font-semibold">Zero Training on Customer Data:</strong> Your corporate data, IP, and conversation history are never used to train third-party base models.
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-700">
                <UserCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 font-semibold">Inherited Permission Graph:</strong> Dataktif honors ACLs from Google Workspace, Microsoft 365, Jira, and Slack in real-time.
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-700">
                <Server className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 font-semibold">Sovereign On-Premise & VPC:</strong> Deploy in your dedicated AWS, GCP, or on-premise Indonesian data centers for strict regulatory compliance.
                </div>
              </div>
            </div>

            <motion.button
              onClick={onLearnMore}
              whileHover={{ y: -2, boxShadow: '0 10px 24px -4px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>Explore Dataktif Governance & Protect</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

