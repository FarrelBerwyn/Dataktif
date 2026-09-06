import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INTEGRATIONS_LIST } from '../data/mockData';
import { 
  Search, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  MessageSquare, 
  CreditCard, 
  Receipt, 
  BookOpen, 
  Boxes, 
  Cloud, 
  Users, 
  Hash, 
  Mail, 
  Database, 
  Server, 
  CloudRain, 
  Cpu, 
  FileText, 
  Network 
} from 'lucide-react';
import { ENTERPRISE_EASING } from './animations/MotionComponents';

export const IntegrationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconComponents: Record<string, React.ElementType> = {
    MessageSquare,
    CreditCard,
    Receipt,
    BookOpen,
    Boxes,
    Cloud,
    Users,
    Hash,
    Mail,
    Database,
    Server,
    CloudRain,
    Cpu,
    FileText,
    Network
  };

  const categories = [
    'All',
    'Indonesia/SEA',
    'CRM',
    'Communication',
    'Database',
    'Cloud',
    'Productivity',
    'ERP'
  ];

  const filteredIntegrations = INTEGRATIONS_LIST.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.section 
      id="integrations-section" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: ENTERPRISE_EASING }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070D] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4"
          >
            Ecosystem & Enterprise Connectors
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05, ease: ENTERPRISE_EASING }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Connect Your Business. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              Global Standards + Regional Depth.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: ENTERPRISE_EASING }}
            className="text-base sm:text-lg text-slate-300 font-normal"
          >
            Dataktif integrates natively with mission-critical global software (Salesforce, PostgreSQL, Slack, AWS) alongside regional Southeast Asian infrastructure (WhatsApp Business, Midtrans, Mekari, Accurate).
          </motion.p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 50+ integrations..."
              className="w-full px-3.5 py-2 pl-9 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Integration Cards Grid with Staggered Reveal and scale: 1.03 hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredIntegrations.map((item, idx) => {
              const Icon = iconComponents[item.iconName] || Layers;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.3), ease: ENTERPRISE_EASING }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -2,
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    backgroundColor: 'rgba(15, 23, 42, 0.9)'
                  }}
                  className="p-5 rounded-2xl border border-white/10 bg-slate-900/40 transition-colors flex flex-col justify-between group cursor-default shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        {item.isRegional && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            🇮🇩 Regional
                          </span>
                        )}
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          item.status === 'Connected' 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : item.status === 'Ready'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-white/5 text-slate-500'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Category: <strong>{item.category}</strong></span>
                    <span className="text-blue-400 group-hover:underline cursor-pointer flex items-center gap-1">
                      Docs <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Connector Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Need a custom internal API or legacy on-premise ERP connector?</span>
          </div>
          <button className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer shrink-0">
            Request Custom Integration →
          </button>
        </div>

      </div>
    </motion.section>
  );
};

