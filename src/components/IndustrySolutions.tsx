import React, { useState } from 'react';
import { INDUSTRY_SOLUTIONS } from '../data/mockData';
import { 
  Building2, 
  ShoppingBag, 
  HeartPulse, 
  Factory, 
  Radio, 
  Landmark, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck,
  Bot
} from 'lucide-react';

interface IndustrySolutionsProps {
  onSelectSolution: (solId: string) => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onSelectSolution }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('banking');

  const iconMap: Record<string, React.ElementType> = {
    Building2,
    ShoppingBag,
    HeartPulse,
    Factory,
    Radio,
    Landmark
  };

  const currentIndustry = INDUSTRY_SOLUTIONS.find((s) => s.id === selectedIndustryId) || INDUSTRY_SOLUTIONS[0];
  const MainIcon = iconMap[currentIndustry.icon] || Building2;

  return (
    <section id="solutions-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            Vertical Enterprise Blueprints
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tailored For <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Mission-Critical Industries.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Pre-trained industry agents, regulatory compliance boundaries, and verified workflow templates ready for deployment in your core sector.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {INDUSTRY_SOLUTIONS.map((industry) => {
            const Icon = iconMap[industry.icon] || Building2;
            const isSelected = industry.id === selectedIndustryId;
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustryId(industry.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{industry.industry}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Showcase */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0A1020] to-[#060912] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Overview (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MainIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{currentIndustry.industry}</h3>
                  <span className="text-xs text-cyan-400 font-medium">{currentIndustry.headline}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {currentIndustry.solution}
              </p>

              {/* Use Cases Grid */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Pre-Configured Autonomous Workflows:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentIndustry.useCases.map((uc, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-white/5 flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectSolution(currentIndustry.id)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>Deploy {currentIndustry.industry} Agents</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Metrics & Blueprint Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Metric Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-500/30 text-center">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-300 block mb-1">
                  Validated Impact Metric
                </span>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-white mb-2">
                  {currentIndustry.metrics}
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  Autonomous Operation Benchmark
                </p>
              </div>

              {/* Agent Blueprint Sample */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-white/10 text-[11px]">
                  <span>active_agent_pool.yaml</span>
                  <span className="text-emerald-400">VERIFIED SPEC</span>
                </div>
                <div className="space-y-1 text-slate-300 text-[11px]">
                  <p className="text-blue-400">industry_domain: "{currentIndustry.id}"</p>
                  <p className="text-slate-400">compliance_profile: "BANK_INDONESIA_REG_v2"</p>
                  <p className="text-cyan-400">max_escalation_latency: "250ms"</p>
                  <p className="text-slate-400">pii_sanitization_rules: ["NIK", "NPWP", "IBAN"]</p>
                  <p className="text-emerald-400">audit_retention: "7_YEARS_ENCRYPTED"</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
