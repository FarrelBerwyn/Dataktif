import React, { useState } from 'react';
import { MODEL_ROUTER_DATA } from '../data/mockData';
import { 
  Cpu, 
  Sparkles, 
  Zap, 
  Coins, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Server
} from 'lucide-react';

export const ModelHubSection: React.FC = () => {
  const [selectedTaskScenario, setSelectedTaskScenario] = useState<number>(0);

  const taskScenarios = [
    {
      title: 'Massive 400-Page Credit Indenture Analysis',
      type: 'Long Context & Document Extraction',
      selectedModelId: 'gemini-2-5-pro',
      routingReason: 'Leverages Gemini 2M context window with sub-dollar cost per document.',
      tokens: '380,000 tokens',
      costEstimate: 'Rp 640'
    },
    {
      title: 'High-Stakes Contract Risk & Multi-Tool Reasoning',
      type: 'Complex Strategic Logic',
      selectedModelId: 'claude-3-7-sonnet',
      routingReason: 'Top reasoning benchmark score (98) ensures zero hallucination on clauses.',
      tokens: '8,400 tokens',
      costEstimate: 'Rp 420'
    },
    {
      title: 'Sovereign Indonesian PII & High-Volume WhatsApp Ingest',
      type: 'Air-gapped Data Residency',
      selectedModelId: 'llama-3-3-70b-private',
      routingReason: 'Routes to self-hosted private VPC in Jakarta; zero third-party transmission.',
      tokens: '1,200 tokens',
      costEstimate: 'Rp 48'
    },
    {
      title: 'Deep Multi-Variable Financial Ratio Auditing',
      type: 'Mathematical Proof & Deterministic Audit',
      selectedModelId: 'deepseek-r1',
      routingReason: 'Deep analytical chain-of-thought verification minimizes audit discrepancies.',
      tokens: '4,500 tokens',
      costEstimate: 'Rp 115'
    }
  ];

  const currentScenario = taskScenarios[selectedTaskScenario];
  const routedModel = MODEL_ROUTER_DATA.find((m) => m.id === currentScenario.selectedModelId) || MODEL_ROUTER_DATA[0];

  return (
    <section id="model-hub" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-4">
            Unified Foundation Model Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Every Model. <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              One Intelligent Layer.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Never lock your enterprise into a single LLM vendor. Dataktif dynamically evaluates latency, context, pricing, and sovereignty to dispatch every prompt to the optimal model.
          </p>
        </div>

        {/* Interactive Model Router Canvas */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0B0F1C] to-[#070A12] p-6 sm:p-8 shadow-2xl mb-12">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Dynamic Inference Dispatcher Simulator
              </span>
              <h3 className="text-xl font-bold text-white">Select a Business Task to Route:</h3>
            </div>

            {/* Scenario pills */}
            <div className="flex flex-wrap gap-2">
              {taskScenarios.map((scenario, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTaskScenario(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    selectedTaskScenario === idx
                      ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/30'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                  }`}
                >
                  Task 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Router Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Input Task */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                INCOMING ENTERPRISE TASK
              </span>
              <h4 className="text-sm font-bold text-white mb-2">{currentScenario.title}</h4>
              <p className="text-xs text-slate-400 mb-3">{currentScenario.type}</p>
              
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Payload:</span>
                <span className="text-cyan-400 font-semibold">{currentScenario.tokens}</span>
              </div>
            </div>

            {/* Dataktif Router Engine */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/40 to-blue-950/40 border border-purple-500/40 text-center relative shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300 mx-auto mb-2">
                <Cpu className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-white">DATKTIF ROUTER</h5>
              <span className="text-[10px] text-cyan-400 font-mono block mb-3">Multi-Objective Optimization</span>

              <div className="grid grid-cols-3 gap-1 text-[10px] font-mono text-slate-300">
                <span className="p-1 rounded bg-black/40">Latency</span>
                <span className="p-1 rounded bg-black/40">Cost</span>
                <span className="p-1 rounded bg-black/40">Sovereignty</span>
              </div>
            </div>

            {/* Selected Model Destination */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/50 shadow-lg shadow-emerald-500/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  OPTIMAL MODEL CHOSEN
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <h4 className="text-base font-bold text-white">{routedModel.name}</h4>
              <span className="text-xs text-slate-400 block mb-3 font-mono">{routedModel.family}</span>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {currentScenario.routingReason}
              </p>

              <div className="pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div>
                  <span className="text-slate-500 block">Est. Cost:</span>
                  <span className="text-emerald-400 font-bold">{currentScenario.costEstimate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Latency:</span>
                  <span className="text-blue-400 font-bold">{routedModel.latencyMs}ms</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Model Catalog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODEL_ROUTER_DATA.map((model) => (
            <div
              key={model.id}
              className={`p-5 rounded-2xl border transition-all ${
                model.isRecommended 
                  ? 'bg-slate-900/70 border-blue-500/40 shadow-md' 
                  : 'bg-slate-900/30 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">{model.family}</span>
                {model.isRecommended && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Recommended
                  </span>
                )}
              </div>

              <h4 className="text-base font-bold text-white mb-2">{model.name}</h4>
              <p className="text-xs text-slate-400 mb-4 line-clamp-2">{model.bestFor}</p>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-center text-xs font-mono">
                <div className="p-2 rounded bg-black/40">
                  <span className="text-[10px] text-slate-500 block">Context</span>
                  <span className="text-white font-bold">{model.contextWindow}</span>
                </div>
                <div className="p-2 rounded bg-black/40">
                  <span className="text-[10px] text-slate-500 block">Latency</span>
                  <span className="text-cyan-400 font-bold">{model.latencyMs}ms</span>
                </div>
                <div className="p-2 rounded bg-black/40">
                  <span className="text-[10px] text-slate-500 block">Score</span>
                  <span className="text-emerald-400 font-bold">{model.reasoningScore}/100</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
