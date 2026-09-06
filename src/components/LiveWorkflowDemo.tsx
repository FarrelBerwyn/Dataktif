import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  Coins, 
  Bot, 
  Database, 
  Cpu, 
  Send, 
  Sparkles, 
  Terminal, 
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  name: string;
  type: string;
  icon: React.ElementType;
  description: string;
  durationMs: number;
  costIdr: number;
  outputLog: string;
}

export const LiveWorkflowDemo: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'sales' | 'invoice' | 'support'>('sales');
  const [isRunning, setIsRunning] = useState(false);
  const [completedStepIndex, setCompletedStepIndex] = useState(-1);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Dataktif OS Runtime v2.4 initialized. Ready to trigger DAG execution.'
  ]);

  const salesSteps: WorkflowStep[] = [
    {
      id: 'step-1',
      name: 'Incoming Lead Webhook',
      type: 'Trigger Ingest',
      icon: Zap,
      description: 'Captures inbound form from PT Nusantara Maju (Annual Rev: Rp 120B)',
      durationMs: 280,
      costIdr: 0,
      outputLog: '[INGEST] Webhook validated. Payload signature: sha256:7f9a2b...'
    },
    {
      id: 'step-2',
      name: 'Knowledge & Firmographic Research',
      type: 'Data Agent',
      icon: Database,
      description: 'Cross-references company registry, LinkedIn, and past CRM interactions',
      durationMs: 440,
      costIdr: 85,
      outputLog: '[AGENT: RESEARCH] Company verified. 480 employees, 3 regional hubs located.'
    },
    {
      id: 'step-3',
      name: 'AI Risk & Opportunity Analysis',
      type: 'Reasoning Layer',
      icon: Cpu,
      description: 'Runs Claude 3.7 Sonnet on buying committee signals and tech stack fit',
      durationMs: 560,
      costIdr: 215,
      outputLog: '[MODEL: CLAUDE 3.7] Fit probability 94.2%. High urgency: cloud migration project.'
    },
    {
      id: 'step-4',
      name: 'Autonomous Lead Scoring',
      type: 'Decision Node',
      icon: Sparkles,
      description: 'Classified as Tier-1 Strategic Account with 95/100 score',
      durationMs: 190,
      costIdr: 42,
      outputLog: '[SCORING] Target assigned: TIER_1_STRATEGIC. SLA routing activated.'
    },
    {
      id: 'step-5',
      name: 'CRM Record Creation',
      type: 'API Sync',
      icon: Bot,
      description: 'Created Salesforce Deal #SF-90412 assigned to Enterprise AE Jakarta',
      durationMs: 210,
      costIdr: 60,
      outputLog: '[SALESFORCE] Opportunity record #SF-90412 created with auto-drafted briefing memo.'
    },
    {
      id: 'step-6',
      name: 'Sales Notification & Briefing',
      type: 'Action Dispatch',
      icon: Send,
      description: 'Dispatched meeting prep brief to Slack & WhatsApp Enterprise channel',
      durationMs: 140,
      costIdr: 80,
      outputLog: '[DISPATCH] Alert sent to #sales-enterprise. Meeting schedule calendar invite staged.'
    },
  ];

  const steps = salesSteps;

  const handleRunWorkflow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompletedStepIndex(-1);
    setCurrentStepIndex(0);
    setElapsedTime(0);
    setTotalCost(0);
    setLogs(['[START] Triggering autonomous multi-agent execution pipeline...']);

    let current = 0;
    let accumulatedTime = 0;
    let accumulatedCost = 0;

    const executeNext = () => {
      if (current >= steps.length) {
        setIsRunning(false);
        setCurrentStepIndex(-1);
        setCompletedStepIndex(steps.length - 1);
        setLogs((prev) => [
          ...prev,
          `[SUCCESS] Workflow completed in ${(accumulatedTime / 1000).toFixed(2)}s. Total compute cost: Rp ${accumulatedCost}.`,
          '[OUTCOME] Business outcome fulfilled without human bottleneck.'
        ]);
        return;
      }

      setCurrentStepIndex(current);
      const step = steps[current];
      accumulatedTime += step.durationMs;
      accumulatedCost += step.costIdr;

      setTimeout(() => {
        setCompletedStepIndex(current);
        setElapsedTime(accumulatedTime);
        setTotalCost(accumulatedCost);
        setLogs((prev) => [...prev, step.outputLog]);
        current++;
        executeNext();
      }, step.durationMs * 0.9);
    };

    executeNext();
  };

  const handleReset = () => {
    setIsRunning(false);
    setCompletedStepIndex(-1);
    setCurrentStepIndex(-1);
    setElapsedTime(0);
    setTotalCost(0);
    setLogs(['[RESET] Ready to execute workflow simulation.']);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070D] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
              Interactive Execution Sandbox
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              See Dataktif in Action.
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-xl">
              Simulate an end-to-end autonomous business workflow. Watch probabilistic LLM reasoning combine with deterministic enterprise APIs.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              id="live-demo-run-btn"
              onClick={handleRunWorkflow}
              disabled={isRunning}
              className={`px-6 py-3 rounded-xl font-bold text-sm text-white flex items-center gap-2.5 transition-all cursor-pointer shadow-lg ${
                isRunning 
                  ? 'bg-blue-800/50 cursor-not-allowed opacity-80' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-600/30 hover:scale-105'
              }`}
            >
              {isRunning ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>EXECUTING WORKFLOW...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>RUN WORKFLOW</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              disabled={isRunning}
              className="p-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              title="Reset state"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Execution Time</span>
              <span className="text-lg font-mono font-bold text-white">
                {elapsedTime > 0 ? `${(elapsedTime / 1000).toFixed(2)}s` : '1.82s (avg)'}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Estimated Cost</span>
              <span className="text-lg font-mono font-bold text-emerald-400">
                {totalCost > 0 ? `Rp ${totalCost}` : 'Rp 482 / run'}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Pipeline Status</span>
              <span className="text-lg font-bold text-white">
                {completedStepIndex === steps.length - 1 ? 'Completed' : isRunning ? 'In Progress' : 'Ready'}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Governance Gate</span>
              <span className="text-lg font-bold text-cyan-300">Zero-Trust Audited</span>
            </div>
          </div>
        </div>

        {/* Workflow Visual DAG + Terminal Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Node DAG (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCurrent = currentStepIndex === index;
              const isCompleted = completedStepIndex >= index;

              return (
                <div
                  key={step.id}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isCurrent
                      ? 'bg-blue-950/50 border-blue-400 shadow-lg shadow-blue-500/20 scale-[1.01]'
                      : isCompleted
                      ? 'bg-slate-900/80 border-emerald-500/40 text-slate-200'
                      : 'bg-slate-900/30 border-white/5 opacity-70'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Step Icon Badge */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isCurrent
                        ? 'bg-blue-600 text-white animate-pulse'
                        : isCompleted
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-white/5 text-slate-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{step.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                          {step.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{step.description}</p>
                    </div>
                  </div>

                  {/* Latency & Status Pill */}
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-slate-400 block">{step.durationMs}ms</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isCurrent
                        ? 'text-blue-400 animate-pulse'
                        : isCompleted
                        ? 'text-emerald-400'
                        : 'text-slate-500'
                    }`}>
                      {isCurrent ? 'Running...' : isCompleted ? 'Success' : 'Queued'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-time Log Stream Terminal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl border border-white/10 bg-[#070B14] overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-slate-900/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>dataktif-executor // stdout</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Stream: active</span>
            </div>

            <div className="p-4 flex-1 font-mono text-xs text-slate-300 space-y-2 overflow-y-auto max-h-[380px] bg-black/40">
              {logs.map((log, i) => (
                <div 
                  key={i} 
                  className={`leading-relaxed ${
                    log.includes('[SUCCESS]') 
                      ? 'text-emerald-400 font-semibold' 
                      : log.includes('[START]') || log.includes('[MODEL')
                      ? 'text-cyan-300'
                      : log.includes('[SALESFORCE')
                      ? 'text-indigo-300'
                      : 'text-slate-400'
                  }`}
                >
                  {log}
                </div>
              ))}
              {isRunning && (
                <div className="flex items-center gap-2 text-blue-400 animate-pulse text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Processing step {currentStepIndex + 1}...</span>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-900/60 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Exit Code: 0</span>
              <span className="text-emerald-400">Zero Errors</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
