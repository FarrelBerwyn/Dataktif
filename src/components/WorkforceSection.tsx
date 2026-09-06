import React, { useState } from 'react';
import { 
  Users, 
  Bot, 
  Network, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Activity,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

export const WorkforceSection: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<'sales' | 'finance'>('sales');

  const salesWorkforce = {
    manager: {
      name: 'Sales Director Agent',
      role: 'Goal Orchestration & Capacity Allocation',
      status: 'Supervising 5 Agents',
      model: 'Claude 3.7 Sonnet'
    },
    agents: [
      { name: 'Research Agent', role: 'Firmographics, Tech Stack & News Ingestion', load: '84% active', color: 'border-blue-500/40 text-blue-400' },
      { name: 'Lead Qualification Agent', role: 'Multi-Factor ICP Scoring & Routing', load: '92% active', color: 'border-cyan-500/40 text-cyan-400' },
      { name: 'Outreach Agent', role: 'Personalized Email & WhatsApp Messaging', load: '76% active', color: 'border-indigo-500/40 text-indigo-400' },
      { name: 'CRM Sync Agent', role: 'Opportunity Records & Contact Lifecycles', load: '68% active', color: 'border-emerald-500/40 text-emerald-400' },
      { name: 'Executive Reporting Agent', role: 'Pipeline Velocity & Forecast Summaries', load: '99% active', color: 'border-purple-500/40 text-purple-400' }
    ]
  };

  const financeWorkforce = {
    manager: {
      name: 'Finance Controller Agent',
      role: 'Treasury, Invoicing & Fraud Control',
      status: 'Supervising 5 Agents',
      model: 'Gemini 2.5 Pro'
    },
    agents: [
      { name: 'Invoice OCR Agent', role: 'Line Item & Tax Extraction from PDFs', load: '89% active', color: 'border-cyan-500/40 text-cyan-400' },
      { name: '3-Way PO Matching Agent', role: 'Cross-checks with ERP purchase orders', load: '95% active', color: 'border-blue-500/40 text-blue-400' },
      { name: 'Fraud & Anomaly Agent', role: 'Flags duplicate accounts & unusual spikes', load: '99% active', color: 'border-rose-500/40 text-rose-400' },
      { name: 'Ledger Reconciliation Agent', role: 'Mekari Jurnal & SAP general ledger posting', load: '72% active', color: 'border-emerald-500/40 text-emerald-400' },
      { name: 'Cash Flow Forecasting Agent', role: '30-day operational liquidity simulations', load: '81% active', color: 'border-indigo-500/40 text-indigo-400' }
    ]
  };

  const current = activeDepartment === 'sales' ? salesWorkforce : financeWorkforce;

  return (
    <section id="workforce-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070D] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            Multi-Agent Department Orchestration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            One Agent Is Good. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              An AI Workforce Is Better.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Real enterprise work requires specialization. Dataktif enables organizations to deploy coordinated fleets of specialized agents collaborating hierarchically under manager agents.
          </p>

          {/* Department Switcher */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveDepartment('sales')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeDepartment === 'sales'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              Enterprise Sales Workforce
            </button>
            <button
              onClick={() => setActiveDepartment('finance')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeDepartment === 'finance'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              Corporate Finance Workforce
            </button>
          </div>
        </div>

        {/* Coordinated Hierarchy Canvas */}
        <div className="p-6 sm:p-10 rounded-3xl border border-white/15 bg-[#070B14]/90 shadow-2xl relative overflow-hidden">
          
          {/* Top Level: Manager Agent */}
          <div className="flex justify-center mb-8">
            <div className="max-w-md w-full p-5 rounded-2xl border border-blue-500/40 bg-gradient-to-b from-blue-950/60 to-slate-900 shadow-xl shadow-blue-600/10 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500 text-white shadow">
                SUPERVISORY MANAGER AGENT
              </span>
              <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 mx-auto mt-2 mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">{current.manager.name}</h4>
              <p className="text-xs text-slate-300 mt-1">{current.manager.role}</p>
              <div className="flex items-center justify-center gap-3 mt-3 text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400">{current.manager.status}</span>
                <span>•</span>
                <span className="text-slate-400">{current.manager.model}</span>
              </div>
            </div>
          </div>

          {/* Animated Connecting Tree Lines */}
          <div className="hidden lg:flex flex-col items-center justify-center mb-8">
            <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 animate-pulse" />
            <div className="w-4/5 h-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500 to-blue-500/20" />
            <div className="w-4/5 flex justify-between">
              <div className="w-0.5 h-6 bg-indigo-500/60" />
              <div className="w-0.5 h-6 bg-indigo-500/60" />
              <div className="w-0.5 h-6 bg-indigo-500/60" />
              <div className="w-0.5 h-6 bg-indigo-500/60" />
              <div className="w-0.5 h-6 bg-indigo-500/60" />
            </div>
          </div>

          {/* Subordinate Specialized Agents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {current.agents.map((agent, index) => (
              <div
                key={agent.name}
                className={`p-4 rounded-2xl border bg-slate-900/60 hover:bg-slate-900/90 transition-all flex flex-col justify-between ${agent.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                      AGENT 0{index + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1">{agent.name}</h5>
                  <p className="text-xs text-slate-400 leading-snug">{agent.role}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Capacity:</span>
                  <span className="text-slate-200 font-semibold">{agent.load}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Explanatory Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Agents resolve inter-departmental dependencies with automatic peer-review verification.</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300 font-medium">
              <span>Peer Verification: <strong className="text-emerald-400">Active</strong></span>
              <span>Deadlock Recovery: <strong className="text-cyan-400">Enabled</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
