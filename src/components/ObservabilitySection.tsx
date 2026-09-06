import React, { useState } from 'react';
import { DEMO_TRACE_STEPS, ENTERPRISE_METRICS } from '../data/mockData';
import { 
  Activity, 
  CheckCircle2, 
  Clock, 
  Coins, 
  ShieldCheck, 
  Cpu, 
  AlertTriangle, 
  Sliders, 
  Layers, 
  BarChart2, 
  Terminal,
  Zap
} from 'lucide-react';

export const ObservabilitySection: React.FC = () => {
  const [selectedTraceId, setSelectedTraceId] = useState<string>('4');

  const selectedStep = DEMO_TRACE_STEPS.find((t) => t.id === selectedTraceId) || DEMO_TRACE_STEPS[3];

  return (
    <section id="observability-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            Full-Stack Telemetry & Benchmarking
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Know What Your AI Is Doing. <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Measure Like Production Software.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            No black-box hallucinations. Dataktif exposes sub-second execution traces, token consumption, cost accounting, and automated regression evaluations for every single agent step.
          </p>
        </div>

        {/* 6 Observability Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Agent Runs</span>
            <span className="text-xl font-bold font-mono text-white">1,284,921</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Success Rate</span>
            <span className="text-xl font-bold font-mono text-emerald-400">98.7%</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Avg Latency</span>
            <span className="text-xl font-bold font-mono text-cyan-400">1.82s</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Avg Cost/Task</span>
            <span className="text-xl font-bold font-mono text-indigo-400">Rp 482</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Hallucination</span>
            <span className="text-xl font-bold font-mono text-emerald-400">1.2%</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Human Gating</span>
            <span className="text-xl font-bold font-mono text-amber-400">2.1%</span>
          </div>
        </div>

        {/* CLICKABLE EXECUTION TRACE & DEEP INSPECTOR */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#090E1A] to-[#05070D] p-6 sm:p-8 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Interactive Execution Trace Inspector
                </span>
                <span className="text-sm font-semibold text-white">
                  Trace ID: #trc_98231_lead_qual_pipeline (Total: 1.82s)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>100% Deterministic Replay Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Trace Step Timeline (7 cols) */}
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Trace Timeline Steps (Click to inspect sub-task telemetry)
              </span>

              {DEMO_TRACE_STEPS.map((step) => {
                const isSelected = step.id === selectedTraceId;
                return (
                  <button
                    key={step.id}
                    onClick={() => setSelectedTraceId(step.id)}
                    className={`w-full p-3.5 rounded-2xl border transition-all text-left flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-950/60 border-blue-500 shadow-md shadow-blue-500/20 text-white'
                        : 'bg-slate-900/40 border-white/5 hover:border-white/15 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400'
                      }`}>
                        {step.id}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold">{step.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                            {step.type}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{step.details}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0 text-xs font-mono">
                      <span className="text-cyan-400 font-bold block">{step.durationMs}ms</span>
                      <span className="text-[10px] text-slate-500">{step.tokens} tokens</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Deep Dive (5 cols) */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between font-mono text-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 text-[11px] mb-4">
                  <span>STEP #{selectedStep.id} TELEMETRY</span>
                  <span className="text-emerald-400 font-bold">STATUS: 200 OK</span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1 font-sans">{selectedStep.name}</h4>
                <p className="text-xs text-slate-400 font-sans mb-4">{selectedStep.details}</p>

                <div className="space-y-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-400">Duration Latency:</span>
                    <span className="text-cyan-400 font-bold">{selectedStep.durationMs} ms</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-400">Tokens Ingested/Produced:</span>
                    <span className="text-indigo-300 font-bold">{selectedStep.tokens} tokens</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-400">Exact Marginal Cost:</span>
                    <span className="text-emerald-400 font-bold">Rp {selectedStep.costIdr}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#050811] border border-white/5 text-[11px] text-slate-400 space-y-1">
                  <div className="text-blue-400 font-semibold mb-1">// Cryptographic Verification</div>
                  <div>hash: sha256_918a209bcff8721</div>
                  <div>guardrail_check: [PASSED] (0 PII leaks)</div>
                  <div>eval_metric: Groundedness = 99.1%</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                <span>Reproducibility: <strong>Deterministic</strong></span>
                <span className="text-cyan-400 font-medium">Export Trace JSON</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
