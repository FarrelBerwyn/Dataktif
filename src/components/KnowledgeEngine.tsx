import React, { useState } from 'react';
import { 
  Database, 
  FileText, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  RefreshCw, 
  ShieldAlert, 
  Layers, 
  ArrowRight,
  Share2,
  Table,
  Globe,
  Lock
} from 'lucide-react';
import { ENTERPRISE_METRICS } from '../data/mockData';

export const KnowledgeEngine: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('What is our credit refund policy for enterprise SLA breaches?');
  const [isSearching, setIsSearching] = useState(false);
  const [activeResult, setActiveResult] = useState<number>(0);

  const sampleQueries = [
    'What is our credit refund policy for enterprise SLA breaches?',
    'Where is the customer data residency requirement for Indonesian banks?',
    'What are the approved discount approval limits for Regional Sales Managers?'
  ];

  const mockRetrievalResults = [
    {
      source: 'Legal_Enterprise_Master_Services_Agreement_2026.pdf',
      chunkId: 'chunk-msa-8924',
      similarity: 0.942,
      page: 'Page 18, Section 9.3',
      text: 'In the event of an Unscheduled Downtime exceeding 99.95% monthly uptime SLA, Customer is entitled to a service credit equal to 15% of the monthly fee, or 30% if downtime exceeds 4 consecutive hours. Credits must be requested within 30 days.'
    },
    {
      source: 'SOP_Customer_Success_Escalations_v4.docx',
      chunkId: 'chunk-sop-1042',
      similarity: 0.887,
      page: 'Section 4.1.2',
      text: 'For Tier-1 enterprise accounts experiencing Sev-1 incidents, credit authorization requires joint approval from VP Customer Success and Finance Director. Account credit is automatically issued via Mekari Jurnal ledger connector.'
    },
    {
      source: 'Bank_Indonesia_PDP_Compliance_Guidelines.pdf',
      chunkId: 'chunk-reg-5512',
      similarity: 0.761,
      page: 'Clause 12.A',
      text: 'All financial transactional logs and associated customer identifiable data must be retained within sovereign territory and encrypted at rest with AES-256.'
    }
  ];

  const handleRunSearch = (q: string) => {
    setSearchQuery(q);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setActiveResult(0);
    }, 450);
  };

  return (
    <section id="knowledge-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            Enterprise Context & Semantic Graph
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Give AI Context. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              Eliminate Hallucinations.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Dataktif transforms disparate enterprise files, internal SOPs, ERP tables, and policies into verified semantic knowledge graphs that ground your AI agents with 100% source attribution.
          </p>
        </div>

        {/* Supported Sources Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {['PDF', 'DOCX', 'Excel / CSV', 'PostgreSQL', 'Google Drive', 'SharePoint', 'Notion', 'Internal SOPs', 'Banking Policies'].map((src) => (
            <span key={src} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-medium flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>{src}</span>
            </span>
          ))}
        </div>

        {/* Knowledge Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">Documents</span>
            <span className="text-2xl font-bold font-mono text-white">{ENTERPRISE_METRICS.documentsIndexed.toLocaleString()}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">Vector Chunks</span>
            <span className="text-2xl font-bold font-mono text-cyan-400">{ENTERPRISE_METRICS.knowledgeChunks.toLocaleString()}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">Indexed</span>
            <span className="text-2xl font-bold font-mono text-emerald-400">{ENTERPRISE_METRICS.indexedPercentage}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">Connected Sources</span>
            <span className="text-2xl font-bold font-mono text-blue-400">{ENTERPRISE_METRICS.connectedSources}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-center col-span-2 sm:col-span-1">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">Last Sync</span>
            <span className="text-sm font-semibold text-slate-300 flex items-center justify-center gap-1.5 mt-1">
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              2 min ago
            </span>
          </div>
        </div>

        {/* INTERACTIVE SEMANTIC SEARCH & CHUNK RETRIEVAL DEMO */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#090E1A] to-[#060910] p-6 sm:p-8 shadow-2xl">
          
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Interactive Context Query (Semantic Hybrid Retrieval)
            </label>
            
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-black/60 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-medium"
                placeholder="Ask any question grounded in your internal documents..."
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              
              <button
                onClick={() => handleRunSearch(searchQuery)}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all cursor-pointer"
              >
                Query RAG
              </button>
            </div>

            {/* Query Chips */}
            <div className="flex flex-wrap gap-2 mt-3 items-center">
              <span className="text-[11px] text-slate-500">Sample Queries:</span>
              {sampleQueries.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRunSearch(sample)}
                  className="px-2.5 py-1 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer text-left line-clamp-1"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

          {/* Retrieved Chunks Preview */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Retrieved Vector Chunks (Dense + BM25 Hybrid)
              </span>
              <span className="text-xs text-emerald-400 font-mono">
                {isSearching ? 'Reranking candidates...' : '3 Verified Matches Found'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {mockRetrievalResults.map((chunk, idx) => (
                <div
                  key={chunk.chunkId}
                  onClick={() => setActiveResult(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    activeResult === idx
                      ? 'bg-blue-950/40 border-blue-500/80 shadow-lg shadow-blue-500/15'
                      : 'bg-slate-900/40 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 line-clamp-1 max-w-[160px]">
                        {chunk.chunkId}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-cyan-400">
                        {(chunk.similarity * 100).toFixed(1)}% Match
                      </span>
                    </div>

                    <h5 className="text-xs font-bold text-white mb-1 line-clamp-1">
                      {chunk.source}
                    </h5>
                    <span className="text-[10px] text-slate-400 block mb-3 font-mono">
                      {chunk.page}
                    </span>

                    <p className="text-xs text-slate-300 line-clamp-4 leading-relaxed font-sans italic">
                      "{chunk.text}"
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Cryptographically Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
