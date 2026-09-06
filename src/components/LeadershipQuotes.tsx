import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  company: string;
  quote: string;
  author: string;
  role: string;
  metric?: string;
  image?: string;
  videoUrl?: string;
}

export const LeadershipQuotes: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      company: 'TOKOH TEKNOLOGI INFORMASI',
      quote: 'Luar biasa sekali karya bangsa Indonesia menjadi sedemikian user friendly.',
      author: 'Prof. Onno W. Purbo',
      role: 'Pakar Teknologi Informasi & Tokoh Internet Indonesia',
      image: `${import.meta.env.BASE_URL}assets/prof. onno.jpg`,
      videoUrl: 'https://www.instagram.com/reel/C-KM17kp6lq/'
    },
    {
      company: 'TELKOM INDONESIA',
      quote: 'Deploying autonomous multi-agent workflows with Dataktif gave our regional branches a 4x boost in contract auditing and customer ticket turnaround, fully compliant with Indonesian PDP.',
      author: 'Ahmad Setyawan',
      role: 'VP of Enterprise Digital Platforms',
      metric: '78% autonomous tier-1 query resolution'
    },
    {
      company: 'BANK CENTRAL ASIA (BCA)',
      quote: 'The security and permission boundaries are what sold our compliance committee. Dataktif never trained on our financial data, yet surfaces verified audit trails in milliseconds.',
      author: 'Rina Wijaya',
      role: 'Head of Enterprise Architecture & Governance',
      metric: 'Zero data leakage across 12M transactions'
    }
  ];

  const current = testimonials[activeIdx];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800">
          <div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
              Customer Voices
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Trusted by today's leaders.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full border border-neutral-700 hover:border-neutral-500 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-full border border-neutral-700 hover:border-neutral-500 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Feature Card (Glean Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-neutral-950 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Subtle silk glow background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs font-extrabold tracking-widest text-neutral-400 font-mono">
              {current.company}
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-100 leading-relaxed tracking-tight">
              "{current.quote}"
            </p>

            <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-3">
                {current.image && (
                  <img 
                    src={current.image} 
                    alt={current.author} 
                    className="w-10 h-10 rounded-full object-cover border border-neutral-700 shrink-0" 
                  />
                )}
                <div>
                  <span className="font-bold text-white block">{current.author}</span>
                  <span className="text-xs text-neutral-400">{current.role}</span>
                </div>
              </div>
              {current.metric && (
                <div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40 w-fit">
                  {current.metric}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <a 
              href={current.videoUrl || '#'}
              target={current.videoUrl ? '_blank' : undefined}
              rel={current.videoUrl ? 'noopener noreferrer' : undefined}
              className={`relative w-full aspect-square max-w-[280px] rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden group transition-all shadow-xl block ${
                current.videoUrl ? 'cursor-pointer hover:border-blue-500' : 'cursor-default'
              }`}
              title={current.videoUrl ? `Buka video ${current.author}` : undefined}
            >
              {current.image ? (
                <img 
                  src={current.image} 
                  alt={current.author} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center">
                  <span className="text-neutral-600 text-xs font-mono">{current.company}</span>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Play Button in Bottom Right without text */}
              <div className="absolute bottom-3.5 right-3.5 w-12 h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
