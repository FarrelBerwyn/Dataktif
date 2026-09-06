import React, { useState } from 'react';
import { 
  LineChart, 
  Search, 
  Terminal, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  FileSpreadsheet,
  Layers,
  Sparkles
} from 'lucide-react';

export const DataIntelligence: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string>('Why did revenue decline last month?');
  const [isQuerying, setIsQuerying] = useState(false);

  const queryPresets = [
    'Why did revenue decline last month?',
    'Show me customers with revenue > Rp500M whose purchases declined > 20% in 90 days',
    'Forecast Q3 default risk for commercial credit accounts in West Java'
  ];

  const handleSelectPreset = (p: string) => {
    setSelectedPrompt(p);
    setIsQuerying(true);
    setTimeout(() => {
      setIsQuerying(false);
    }, 400);
  };

  return (
    <section id="data-intelligence" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070D] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            Autonomous Business Analytics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ask Your Data Anything. <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Receive Actionable Answers.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Dataktif's Data Intelligence Layer translates plain natural language into optimized SQL, analyzes millions of transactional rows across your data warehouse, and prescribes high-impact operational moves.
          </p>

          {/* Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs text-slate-500">Ask:</span>
            {queryPresets.map((preset) => (
              <button
                key={preset}
                onClick={() => handleSelectPreset(preset)}
                className={`px-3 py-1.5 rounded-xl text-xs transition-colors cursor-pointer text-left line-clamp-1 ${
                  selectedPrompt === preset
                    ? 'bg-indigo-600 text-white font-semibold shadow'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                "{preset}"
              </button>
            ))}
          </div>
        </div>

        {/* INTERACTIVE DATA INTELLIGENCE DASHBOARD PREVIEW */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#090E1A] to-[#060910] p-6 sm:p-8 shadow-2xl">
          
          {/* Top Bar: Prompt & Compiler */}
          <div className="p-4 rounded-2xl bg-black/50 border border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Natural Language Prompt</span>
                <span className="text-sm font-semibold text-white">"{selectedPrompt}"</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Analyzed 4.8M transactions in 1.1s</span>
            </div>
          </div>

          {/* Generated SQL Compiler Accordion */}
          <div className="mb-6 p-4 rounded-2xl bg-[#050811] border border-white/10 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Terminal className="w-4 h-4" />
                Auto-Generated PostgreSQL / BigQuery Query
              </span>
              <span className="text-[10px] text-emerald-400">Validated against database schema</span>
            </div>
            <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`SELECT 
  t.region, 
  p.product_line, 
  SUM(t.amount_idr) AS total_revenue,
  (SUM(t.amount_idr) - LAG(SUM(t.amount_idr)) OVER (ORDER BY t.month)) / LAG(SUM(t.amount_idr)) OVER () AS variance_pct
FROM enterprise_transactions t
JOIN catalog_products p ON t.product_id = p.id
WHERE t.transaction_date >= DATEADD(month, -2, CURRENT_DATE)
GROUP BY t.region, p.product_line
HAVING variance_pct < -0.05
ORDER BY variance_pct ASC LIMIT 10;`}
            </pre>
          </div>

          {/* Analysis & Factors (Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Primary Finding (5 cols) */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Automated Diagnosis</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Revenue -8.4% MoM
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Total revenue declined from Rp 48.2B to Rp 44.1B last month. Deconstructed across regional segments, 3 key root causes explain 92% of the variance:
                </p>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300">1. Jakarta Commercial Hub</span>
                    <span className="font-mono font-bold text-rose-400">-12.3% (Rp 2.4B dip)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300">2. Product Line "Enterprise X"</span>
                    <span className="font-mono font-bold text-rose-400">-18.4% (3 delayed renewals)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300">3. Mid-Market Churn Velocity</span>
                    <span className="font-mono font-bold text-amber-400">+7.2% attrition rate</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Confidence Score: 98.4%</span>
                <span className="text-blue-400 font-medium">Anomaly Detected</span>
              </div>
            </div>

            {/* Prescribed Operational Actions (7 cols) */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-slate-900/60 border border-indigo-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    AI-Prescribed Autonomous Actions
                  </span>
                </div>

                <div className="space-y-3">
                  
                  {/* Action 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Investigate Product Line X Delayed Renewals</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300">High Priority</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Triggered account discovery agent on 3 overdue enterprise renewal tickets in Salesforce.
                      </p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shrink-0 cursor-pointer">
                      Dispatch
                    </button>
                  </div>

                  {/* Action 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Contact 143 At-Risk High-Value Accounts</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300">Retention</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Drafted personalized WhatsApp and executive check-in notes for Account Executives.
                      </p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white shrink-0 cursor-pointer">
                      Review List
                    </button>
                  </div>

                  {/* Action 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Launch Regional Incentive Campaign</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300">Commercial</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Synthesized special promotion for Jakarta West hub with 8% discount ceiling.
                      </p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white shrink-0 cursor-pointer">
                      Stage Campaign
                    </button>
                  </div>

                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Estimated recovery impact: <strong className="text-emerald-400">+Rp 3.8B next 30 days</strong></span>
                <span className="text-cyan-400 flex items-center gap-1 font-semibold">
                  Zero manual data analyst lag <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
