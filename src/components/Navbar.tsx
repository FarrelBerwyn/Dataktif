import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Layers, 
  Database, 
  Cpu, 
  GitFork, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ArrowRight,
  Building2,
  ShoppingBag,
  LineChart,
  Users,
  FileText,
  Lock,
  Globe
} from 'lucide-react';

interface NavbarProps {
  currentRoute?: string;
  onNavigate: (route: string) => void;
  onLaunchStudio?: () => void;
  onBookDemo?: () => void;
  onOpenSearch?: () => void;
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigate, 
  onLaunchStudio, 
  onBookDemo,
  onOpenSearch,
  onOpenDemo
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    if (onBookDemo) onBookDemo();
    else if (onOpenDemo) onOpenDemo();
  };

  const handleStudioClick = () => {
    if (onLaunchStudio) onLaunchStudio();
    else onNavigate('studio');
  };

  const productDropdown = [
    { name: 'AI Studio', desc: 'Enterprise console to configure & deploy AI agents', icon: Layers, target: 'platform' },
    { name: 'Autonomous Agent Builder', desc: 'Multi-tool reasoning, memory & execution', icon: Bot, target: 'agents-section' },
    { name: 'AI Workforce Orchestration', desc: 'Multi-agent department coordination & delegation', icon: Users, target: 'workforce-section' },
    { name: 'Knowledge Engine (RAG)', desc: 'Enterprise semantic graph & private vector search', icon: Database, target: 'knowledge-section' },
    { name: 'Data Intelligence', desc: 'Conversational natural language to SQL & analytics', icon: LineChart, target: 'data-intelligence' },
    { name: 'Multi-Model Router Hub', desc: 'Dynamic routing across Claude, Gemini & private Llama', icon: Cpu, target: 'model-hub' },
    { name: 'Workflow Orchestrator', desc: 'Deterministic multi-step DAG process automation', icon: GitFork, target: 'workflows-section' },
    { name: 'Governance & Zero-Trust', desc: 'Fine-grained RBAC, Indonesian PDP & audit logs', icon: ShieldCheck, target: 'governance-section' },
  ];

  const solutionsDropdown = [
    { name: 'Banking & Financial Services', desc: 'Automated AML, underwriting & invoice auditing', icon: Building2, id: 'banking' },
    { name: 'Retail & E-Commerce', desc: 'WhatsApp commerce & multi-channel order fulfillment', icon: ShoppingBag, id: 'retail' },
    { name: 'Manufacturing & Logistics', desc: 'Procurement orchestration & supply telemetry', icon: Layers, id: 'manufacturing' },
    { name: 'Public Sector & Government', desc: 'Sovereign on-premise AI & policy search', icon: Globe, id: 'gov' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2.5 sm:py-3.5 px-3 sm:px-6 lg:px-8' 
          : 'py-0 px-0'
      }`}
    >
      <motion.nav 
        layout
        transition={{ type: "spring", stiffness: 240, damping: 26, mass: 0.8 }}
        className={`relative mx-auto ${
          isScrolled 
            ? `max-w-6xl ${
                mobileMenuOpen ? 'rounded-2xl' : 'rounded-2xl sm:rounded-full'
              } px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3` 
            : 'w-full px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4'
        }`}
      >
        {/* Animated Liquid Morphism Background Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
          <AnimatePresence mode="wait">
            {isScrolled ? (
              <motion.div
                key="scrolled-liquid"
                initial={{ scaleY: 0.5, scaleX: 0.85, opacity: 0, filter: 'blur(10px)' }}
                animate={{ scaleY: 1, scaleX: 1, opacity: 1, filter: 'blur(0px)' }}
                exit={{ scaleY: 0.5, scaleX: 0.85, opacity: 0, filter: 'blur(10px)' }}
                transition={{ 
                  type: "spring", 
                  stiffness: 280, 
                  damping: 22,
                  mass: 0.7
                }}
                className="absolute inset-0 rounded-[inherit] overflow-hidden"
              >
                {/* 1. Underlying Liquid Blobs (flowing morph effect) */}
                <div className="absolute -top-12 -left-12 w-64 h-36 bg-gradient-to-r from-blue-400/35 via-cyan-400/30 to-indigo-400/25 blur-2xl animate-liquid-1" />
                <div className="absolute -bottom-12 -right-12 w-72 h-40 bg-gradient-to-l from-indigo-400/30 via-purple-400/25 to-cyan-300/30 blur-2xl animate-liquid-2" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-20 bg-gradient-to-r from-cyan-400/20 via-blue-400/25 to-purple-400/20 blur-xl animate-liquid-1" />

                {/* 2. Frosted Glass Morphism Surface with Liquid Translucency */}
                <div className="absolute inset-0 bg-white/75 backdrop-blur-2xl backdrop-saturate-150" />

                {/* 3. Liquid Specular Highlights & Fluid Glaze Sweep */}
                <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
                  {/* Top liquid surface highlight */}
                  <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
                  
                  {/* Dynamic liquid shine beam sliding across the rim */}
                  <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-liquid-shine" />
                  
                  {/* Bottom delicate liquid refraction line */}
                  <div className="absolute bottom-0 inset-x-10 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                </div>

                {/* 4. External Crystal Liquid Droplet Rim & Soft Glow Shadow */}
                <div className="absolute inset-0 rounded-[inherit] border border-white/85 ring-1 ring-neutral-900/5 shadow-[0_14px_38px_-6px_rgba(15,23,42,0.09),0_2px_10px_-1px_rgba(59,130,246,0.06)]" />
              </motion.div>
            ) : (
              <motion.div
                key="default-flat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-white/85 backdrop-blur-md border-b border-neutral-200/70"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Brand & Main Nav */}
          <div className="flex items-center gap-8">
            {/* Dataktif Brand Logo */}
            <button 
              onClick={() => onNavigate('hero')} 
              className="flex items-center gap-2.5 cursor-pointer text-left group"
            >
              <img 
                src={`${import.meta.env.BASE_URL}assets/logo/dataktif-logo.png`} 
                alt="Dataktif Logo" 
                className="w-7 h-7 object-contain rounded-md" 
              />
              <span className="text-xl font-extrabold tracking-tight text-neutral-950 flex items-center gap-0.5">
                Dataktif
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-0.5" />
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-neutral-600">
              
              {/* Product Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('product')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-neutral-950 transition-colors cursor-pointer"
                  onClick={() => onNavigate('platform-modules')}
                >
                  Product
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180 text-blue-600' : 'text-neutral-400'}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'product' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 w-[620px] pt-2 pointer-events-auto"
                    >
                      <div className="bg-white border border-neutral-200/90 rounded-2xl p-4 shadow-xl ring-1 ring-neutral-900/5 grid grid-cols-2 gap-2">
                        {productDropdown.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.name}
                              onClick={() => {
                                onNavigate(item.target);
                                setActiveDropdown(null);
                              }}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-neutral-50 transition-all text-left cursor-pointer group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-105 shrink-0 mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Customers & Solutions */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-neutral-950 transition-colors cursor-pointer"
                  onClick={() => onNavigate('solutions-section')}
                >
                  Solutions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-blue-600' : 'text-neutral-400'}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 w-[420px] pt-2 pointer-events-auto"
                    >
                      <div className="bg-white border border-neutral-200/90 rounded-2xl p-3 shadow-xl ring-1 ring-neutral-900/5 space-y-1">
                        {solutionsDropdown.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.name}
                              onClick={() => {
                                onNavigate('solutions-section');
                                setActiveDropdown(null);
                              }}
                              className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-all text-left cursor-pointer group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-105 shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-neutral-500 line-clamp-1">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => onNavigate('architecture-section')}
                className="px-3 py-1.5 rounded-md hover:text-neutral-950 transition-colors cursor-pointer"
              >
                Architecture
              </button>

              <button 
                onClick={() => onNavigate('governance-section')}
                className="px-3 py-1.5 rounded-md hover:text-neutral-950 transition-colors cursor-pointer"
              >
                Governance & Trust
              </button>

              <button 
                onClick={() => onNavigate('integrations-section')}
                className="px-3 py-1.5 rounded-md hover:text-neutral-950 transition-colors cursor-pointer"
              >
                Integrations
              </button>
            </div>
          </div>

          {/* Center/Right: Glean-Style Search Bar & Actions */}
          <div className="flex items-center gap-3">
            
            {/* Header Search Box (Glean style) */}
            <div className="hidden md:flex items-center relative">
              <div className="flex items-center gap-2 pl-3 pr-2.5 py-1.5 rounded-full border border-neutral-200 bg-neutral-50/80 hover:bg-white hover:border-neutral-300 transition-all text-xs text-neutral-500 w-44 lg:w-56 focus-within:w-64 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                <Search className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <input 
                  type="text"
                  placeholder="Search Dataktif..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onNavigate('hero');
                    }
                  }}
                  className="w-full bg-transparent border-none outline-none text-xs text-neutral-900 placeholder:text-neutral-400"
                />
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white border border-neutral-200 text-[10px] font-mono text-neutral-400 shadow-2xs shrink-0">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Glean Signature Royal Blue Pill Button: Get a demo */}
            <motion.button 
              onClick={handleDemoClick}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 24px -4px rgba(26, 86, 219, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#1a56db] hover:bg-[#1e429f] shadow-sm shadow-blue-600/20 transition-all cursor-pointer flex items-center gap-1.5 select-none btn-hover-shimmer relative"
            >
              <span>Get a demo</span>
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.92 }}
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

        </div>

        {/* Mobile Dropdown Menu with Smooth Slide-in */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-3 pt-3 border-t border-neutral-200/90 pb-4 space-y-2 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 text-xs text-neutral-600 mb-2">
                <Search className="w-4 h-4 text-neutral-400" />
                <input 
                  type="text"
                  placeholder="Search platform..."
                  className="bg-transparent border-none outline-none w-full text-xs text-neutral-900"
                />
              </div>

              <button 
                onClick={() => { onNavigate('platform-modules'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                Platform
              </button>
              <button 
                onClick={() => { onNavigate('agents-section'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                Autonomous Agents
              </button>
              <button 
                onClick={() => { onNavigate('workforce-section'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                AI Workforce
              </button>
              <button 
                onClick={() => { onNavigate('solutions-section'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => { onNavigate('governance-section'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                Governance & Security
              </button>

              <div className="pt-2 flex flex-col gap-2">
                <motion.button 
                  onClick={() => { handleDemoClick(); setMobileMenuOpen(false); }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 rounded-full bg-[#1a56db] text-xs font-semibold text-white shadow-sm flex items-center justify-center gap-1.5 cursor-pointer btn-hover-shimmer"
                >
                  <span>Get a demo</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
