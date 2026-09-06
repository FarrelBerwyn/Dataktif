import React from 'react';
import { ArrowRight, Tag, Calendar } from 'lucide-react';

interface LatestInsightsProps {
  onOpenMaintenance?: (feature?: string) => void;
}

export const LatestInsights: React.FC<LatestInsightsProps> = ({ onOpenMaintenance }) => {
  const articles = [
    {
      category: 'Product Announcement',
      title: 'The intelligence era is here: Proactive, governed AI powered by enterprise context.',
      excerpt: 'Announcing Dataktif 2.4 with autonomous agent workforces, multi-model cost routing, and deep Indonesian PDP compliance.',
      date: 'May 2026',
      readTime: '4 min read'
    },
    {
      category: 'Research Whitepaper',
      title: 'The Token Economy: How enterprise architecture impacts inference cost and utility at scale.',
      excerpt: 'Empirical data showing how semantic caching and multi-tier model routing saved $4.2M across Fortune 500 deployments.',
      date: 'April 2026',
      readTime: '8 min read'
    },
    {
      category: 'Analyst Evaluation',
      title: 'Gartner® Emerging Market Quadrant: Dataktif recognized as an Enterprise AI Leader.',
      excerpt: 'Evaluated on completeness of vision and ability to execute in sovereign enterprise AI search and agent orchestration.',
      date: 'March 2026',
      readTime: '6 min read'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
              News & Research
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a]">
              Latest and greatest from Dataktif.
            </h2>
          </div>

          <button 
            onClick={() => onOpenMaintenance?.('Articles & Research')}
            className="text-xs font-semibold text-neutral-800 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>View all articles & research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 News Cards (Glean Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onOpenMaintenance?.(item.title)}
              className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4 font-mono">
                  <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
                <span className="text-neutral-400 font-normal">{item.readTime}</span>
                <span className="group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                  Read article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
