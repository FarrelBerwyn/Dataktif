import React from 'react';
import { Globe, ArrowRight, FileText, Headphones, Sparkles } from 'lucide-react';

interface WorkAIInstituteProps {
  onOpenMaintenance?: (feature?: string) => void;
}

export const WorkAIInstitute: React.FC<WorkAIInstituteProps> = ({ onOpenMaintenance }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Sleek Obsidian Dark Card (Glean Style) */}
        <div className="rounded-3xl bg-[#0f172a] text-white p-8 sm:p-12 border border-neutral-800 relative overflow-hidden shadow-xl">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Headline & Introduction */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold border border-white/20 text-neutral-200">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Dataktif Work AI Institute</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                We help you face the future of work.
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                Rigorous research, empirical benchmarks, and practical leadership guidance on enterprise AI adoption, workforce economics, and governance.
              </p>

              <div className="pt-2">
                <button 
                  onClick={() => onOpenMaintenance?.('Dataktif Work AI Institute')}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 btn-hover-shimmer group relative"
                >
                  <span>Discover Work AI Institute</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Right: Key publications (The Work AI Index & Podcast) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Publication 1: The Work AI Index */}
              <div 
                onClick={() => onOpenMaintenance?.('Enterprise AI Index Report')}
                className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    Annual Benchmark Report
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    The Enterprise AI Index: Measuring Actual Work Value
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    Analysis of 100M+ real enterprise AI prompts across 450 global organizations.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                  <span>View full report</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Publication 2: Podcast */}
              <div 
                onClick={() => onOpenMaintenance?.('Dataktif Executive Podcast')}
                className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    Executive Podcast
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Intelligence: Real & Imagined
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    In-depth conversations with CIOs, researchers, and enterprise AI practitioners.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center gap-1.5 text-xs font-semibold text-purple-400">
                  <span>Listen to episode</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
