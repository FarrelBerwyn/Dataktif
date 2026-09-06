import React, { useState } from 'react';
import { X, Play, Pause, CheckCircle2, Sparkles, Bot, Database, ArrowRight, ShieldCheck } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchStudio: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onLaunchStudio }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSegment, setActiveSegment] = useState<number>(0);

  if (!isOpen) return null;

  const demoSegments = [
    {
      title: '01. Ingestion & RAG Context Engine',
      duration: '0:45',
      desc: 'Watch Dataktif connect to PostgreSQL databases and 12,000+ enterprise SOP PDFs in 90 seconds without code.',
      previewText: 'Scanning enterprise tables: [24 schemas detected]. Vectorizing SOPs via text-embedding-3-large...'
    },
    {
      title: '02. Multi-Agent Lead Qualification Workflow',
      duration: '1:12',
      desc: 'See an autonomous agent parse an inbound lead, cross-reference CRM history, and dispatch a WhatsApp brief.',
      previewText: 'Agent [LeadQualifier] executed 3 tool calls. Score: 94/100. Deal staged in Salesforce #SF-90412.'
    },
    {
      title: '03. Multi-LLM Dynamic Cost & Latency Routing',
      duration: '0:58',
      desc: 'Observe real-time switching between Claude 3.7, Gemini 2.5, and private sovereign Llama 3.3 clusters.',
      previewText: 'Router selected Gemini 2.5 Pro for 400-page document parsing (saved 74% compute cost).'
    },
    {
      title: '04. Cryptographic Audit Trails & Human Gatekeeper',
      duration: '1:05',
      desc: 'Demonstration of automatic risk pauses triggering a Slack signoff gate for purchase orders > Rp 50M.',
      previewText: 'High-value transaction flagged. Slack approval request sent to VP Finance. Status: PENDING_SIGNOFF.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
          <div className="flex items-center gap-3">
            <img 
              src={`${import.meta.env.BASE_URL}assets/logo/dataktif-logo.png`} 
              alt="Dataktif Logo" 
              className="w-8 h-8 object-contain rounded-lg" 
            />
            <div>
              <h3 className="text-base font-bold text-neutral-900">Dataktif Enterprise Architecture Walkthrough</h3>
              <span className="text-xs text-neutral-500">Interactive walkthrough of the Enterprise AI Operating System</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative rounded-2xl border border-neutral-800 bg-[#0f172a] overflow-hidden aspect-video flex flex-col justify-between p-6 mb-6 text-white">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>LIVE REPLAY // {demoSegments[activeSegment].title}</span>
            </div>
            <span>Enterprise Telemetry</span>
          </div>

          {/* Center Graphic */}
          <div className="text-center my-auto max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-4 font-mono text-xs text-cyan-300">
              {demoSegments[activeSegment].previewText}
            </div>
            <p className="text-xs text-neutral-300">
              {demoSegments[activeSegment].desc}
            </p>
          </div>

          {/* Bottom Video Controls */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-[#1a56db] hover:bg-[#1e429f] flex items-center justify-center text-white cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
              </button>
              <span className="font-mono">{demoSegments[activeSegment].duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-neutral-400">Security Gate:</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono text-[10px]">
                RBAC Level 4 Passed
              </span>
            </div>
          </div>
        </div>

        {/* Segment Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {demoSegments.map((seg, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSegment(idx)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeSegment === idx
                  ? 'border-neutral-900 bg-neutral-50 text-neutral-900 font-semibold'
                  : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              <div className="text-[10px] font-mono text-neutral-400">Part 0{idx + 1}</div>
              <div className="text-xs line-clamp-1 mt-0.5">{seg.title.split('. ')[1]}</div>
            </button>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Fully compliant with ISO 27001, SOC 2, and Indonesian PDP</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onLaunchStudio();
              }}
              className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#1a56db] hover:bg-[#1e429f] text-xs font-semibold text-white shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Test in AI Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
