import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Mic, 
  CornerDownLeft, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  Database, 
  Cpu, 
  Bot, 
  GitFork, 
  Layers, 
  FileText,
  MessageSquare,
  Building2,
  Lock,
  Zap,
  Check
} from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';
import { HeroDataFlowEngine } from './HeroDataFlowEngine';
import { 
  SlackIcon, 
  GoogleDriveIcon, 
  JiraIcon, 
  ConfluenceIcon, 
  SharePointIcon, 
  GitHubIcon, 
  SalesforceIcon, 
  WhatsAppIcon, 
  PostgreSQLIcon 
} from './icons/BrandIcons';

interface HeroProps {
  onBuildClick: () => void;
  onWatchDemo: () => void;
  onExploreArchitecture: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onBuildClick, 
  onWatchDemo,
  onExploreArchitecture
}) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [typedText, setTypedText] = useState('Where are we promising one-day SLA to enterprise banking clients?');

  const sampleQueries = [
    {
      query: 'Where are we promising one-day SLA to enterprise banking clients?',
      app: 'Confluence & Jira',
      answer: 'According to MSA Section 4.2 with Bank Central Asia, 24-hour turnaround is committed for high-severity core payment incidents. Legal review pending for revised tier-2 SLAs.',
      sources: ['MSA_BCA_2025_Final.pdf (p.18)', 'Jira-INCIDENT-4029', 'Slack #corp-legal-signoffs'],
      agentTrigger: 'Run SLA Breach Risk Check Agent'
    },
    {
      query: 'Generate Q3 revenue forecast by regional branch from PostgreSQL',
      app: 'PostgreSQL & Metabase',
      answer: 'Compiled aggregate pipeline across 4 regional clusters. Projected Q3 ARR: Rp 48.2B (+18.4% YoY). Jakarta & Surabaya branches account for 74% of closed-won ARR.',
      sources: ['public.transactions_q2_q3 (2.4M rows)', 'Mekari Jurnal Ledger 2025', 'Salesforce Deals FY25'],
      agentTrigger: 'Compile Board Slide Deck'
    },
    {
      query: 'Summarize customer feedback from WhatsApp Business & Zendesk this week',
      app: 'WhatsApp & Zendesk',
      answer: 'Processed 1,482 interactions. Top emerging sentiment: 91% positive on instant payment confirmations; 6% requesting bulk CSV export in admin portal.',
      sources: ['WhatsApp Webhook Feed (1,482 msgs)', 'Zendesk #CS-9182', 'Support CSAT Log'],
      agentTrigger: 'Dispatch WhatsApp Digest to VP Support'
    }
  ];

  const connectedApps = [
    { name: 'Slack', icon: SlackIcon, color: 'bg-emerald-50 text-emerald-700' },
    { name: 'Google Drive', icon: GoogleDriveIcon, color: 'bg-amber-50 text-amber-700' },
    { name: 'Jira', icon: JiraIcon, color: 'bg-blue-50 text-blue-700' },
    { name: 'Confluence', icon: ConfluenceIcon, color: 'bg-sky-50 text-sky-700' },
    { name: 'SharePoint', icon: SharePointIcon, color: 'bg-teal-50 text-teal-700' },
    { name: 'GitHub', icon: GitHubIcon, color: 'bg-neutral-100 text-neutral-800' },
    { name: 'Salesforce', icon: SalesforceIcon, color: 'bg-blue-50 text-blue-800' },
    { name: 'WhatsApp', icon: WhatsAppIcon, color: 'bg-emerald-50 text-emerald-800' },
    { name: 'PostgreSQL', icon: PostgreSQLIcon, color: 'bg-indigo-50 text-indigo-800' },
  ];

  const handleSelectQuery = (index: number) => {
    setActiveQueryIndex(index);
    setTypedText(sampleQueries[index].query);
    setIsExpanded(true);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Eyebrow Label (Glean Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: ENTERPRISE_EASING }}
          className="text-center mb-4"
        >
          <span className="text-xs sm:text-sm font-medium text-neutral-500 tracking-tight">
            Enterprise AI that understands your company
          </span>
        </motion.div>

        {/* Hero Main Headline (Glean Style Typography) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: ENTERPRISE_EASING }}
          className="text-center max-w-4xl mx-auto mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-[-0.03em] text-[#0f172a] leading-[1.08]">
            Complete context that makes AI work at enterprise scale.
          </h1>
        </motion.div>

        {/* CTA Button: Glean Signature Black Pill Button */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: ENTERPRISE_EASING }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.button 
            onClick={onWatchDemo}
            whileHover={{ scale: 1.05, y: -3, boxShadow: '0 16px 32px -4px rgba(0, 0, 0, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full text-sm font-semibold text-white bg-black hover:bg-neutral-800 shadow-md shadow-black/10 transition-all cursor-pointer flex items-center gap-2 select-none group btn-hover-shimmer relative"
          >
            <span>Get a demo</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
          </motion.button>

          <motion.button 
            onClick={onBuildClick}
            whileHover={{ scale: 1.04, y: -2, borderColor: 'rgba(0, 0, 0, 0.9)', boxShadow: '0 10px 24px -4px rgba(59, 130, 246, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full text-sm font-semibold text-neutral-800 hover:text-black border border-neutral-300 hover:border-neutral-900 transition-all cursor-pointer flex items-center gap-2 select-none group btn-hover-shimmer relative"
          >
            <Sparkles className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
            <span>Launch AI Studio</span>
          </motion.button>
        </motion.div>

        {/* SIGNATURE GLEAN HERO ARTWORK & SEARCH BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: ENTERPRISE_EASING }}
          className="relative max-w-5xl mx-auto"
        >
          
          {/* Vibrant Fluid Silk Ribbon Canvas */}
          <div className="relative rounded-3xl p-4 sm:p-10 md:p-12 shadow-2xl overflow-hidden"
               style={{
                 background: 'radial-gradient(ellipse at 30% 20%, #ff6b8b 0%, #a855f7 35%, #3b82f6 70%, #06b6d4 100%)',
                 boxShadow: '0 25px 60px -15px rgba(59, 130, 246, 0.35)'
               }}>
            
            {/* Iridescent silk wave shimmer overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/10 pointer-events-none" />
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-400/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl pointer-events-none" />

            {/* Central Floating Search & Action Bar */}
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/80 p-3 sm:p-5 shadow-2xl shadow-black/20">
                
                {/* Search Input Bar */}
                <div className="flex items-center gap-3 px-3 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-200/80 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <Search className="w-4 h-4" />
                  </div>
                  
                  <input
                    type="text"
                    value={typedText}
                    onChange={(e) => {
                      setTypedText(e.target.value);
                      setIsExpanded(true);
                    }}
                    placeholder="Where are we promising one thing to customers..."
                    className="w-full bg-transparent text-xs sm:text-sm md:text-base text-neutral-900 font-medium placeholder:text-neutral-400 outline-none border-none"
                  />

                  <div className="flex items-center gap-1.5 shrink-0 text-neutral-400">
                    <button 
                      onClick={() => setIsExpanded(true)}
                      className="p-1.5 hover:text-neutral-700 rounded-lg hover:bg-neutral-200/60 transition-colors"
                      title="Voice input"
                    >
                      <Mic className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="p-1.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="Run search"
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Connected Enterprise Tools Pills (Glean Hero Style) */}
                <div className="flex items-center gap-1.5 sm:gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar text-[11px] font-medium text-neutral-600">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider mr-1 hidden sm:inline">
                    Searching in:
                  </span>
                  {connectedApps.map((app) => {
                    const IconComponent = app.icon;
                    return (
                      <span 
                        key={app.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-neutral-200/90 bg-white text-neutral-800 text-[11px] font-medium shadow-2xs hover:shadow-xs hover:border-neutral-300 hover:-translate-y-0.5 transition-all cursor-default select-none shrink-0"
                      >
                        <IconComponent className="w-3.5 h-3.5 shrink-0" />
                        <span>{app.name}</span>
                      </span>
                    );
                  })}
                </div>

                {/* Interactive Results Drawer (Opens upon click/query) */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-neutral-200 animate-in fade-in slide-in-from-top-2 duration-200">
                    
                    {/* Active Answer Card */}
                    <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-xs font-bold text-neutral-900">Dataktif Context Synthesis</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">
                            Zero-Hallucination Verified
                          </span>
                        </div>
                        <span className="text-[11px] text-neutral-400 font-mono">0.42s latency</span>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal mb-3">
                        {activeQueryIndex !== null ? sampleQueries[activeQueryIndex].answer : sampleQueries[0].answer}
                      </p>

                      {/* Cited Sources */}
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500 font-mono pt-2 border-t border-neutral-200/60">
                        <span className="text-neutral-400 font-sans font-medium">Verified Sources:</span>
                        {(activeQueryIndex !== null ? sampleQueries[activeQueryIndex].sources : sampleQueries[0].sources).map((src, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-700 font-semibold shadow-2xs">
                            {src}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Trigger Preset Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                      <span className="text-neutral-400 text-[11px]">Sample prompts:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {sampleQueries.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSelectQuery(idx)}
                            className={`px-3 py-1 rounded-full border text-[11px] font-medium transition-all cursor-pointer ${
                              activeQueryIndex === idx
                                ? 'bg-neutral-900 text-white border-neutral-900'
                                : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                            }`}
                          >
                            Query 0{idx + 1}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={onBuildClick}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open in AI Studio</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>

        </motion.div>

        {/* DATKTIF STRONGEST HERO ANIMATION: Live Data -> Intelligence -> Action Pipeline */}
        <HeroDataFlowEngine />

      </div>
    </section>
  );
};
