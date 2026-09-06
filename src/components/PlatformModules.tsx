import React from 'react';
import { PLATFORM_MODULES } from '../data/mockData';
import { 
  Layers, 
  Bot, 
  Users, 
  Database, 
  LineChart, 
  GitFork, 
  Cpu, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface PlatformModulesProps {
  onSelectModule: (moduleId: string) => void;
  onBuildModule: (moduleId: string) => void;
}

export const PlatformModules: React.FC<PlatformModulesProps> = ({ 
  onSelectModule, 
  onBuildModule 
}) => {
  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Bot,
    Users,
    Database,
    LineChart,
    GitFork,
    Cpu,
    ShieldCheck,
  };

  return (
    <section id="platform-modules" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            Unified Enterprise Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            One AI Platform. <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Every Intelligence Layer.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            From raw structured data to autonomous operational execution, Dataktif provides every foundational building block required to deploy reliable, governed AI at scale.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORM_MODULES.map((module) => {
            const Icon = iconMap[module.icon] || Layers;
            return (
              <div
                key={module.id}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/80 p-6 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 glow-card"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    {module.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {module.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                    {module.title}
                  </h3>
                  <span className="text-xs text-cyan-400 font-medium block mb-3">
                    {module.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {module.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {module.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Metric & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  {module.metrics ? (
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase">{module.metrics.label}</span>
                      <span className="text-xs font-bold text-white font-mono">{module.metrics.value}</span>
                    </div>
                  ) : <div />}

                  <button
                    onClick={() => onBuildModule(module.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Configure</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
