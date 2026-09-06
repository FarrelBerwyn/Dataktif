import React from 'react';
import { ArrowRight, Sparkles, Calendar, Play } from 'lucide-react';

interface EventBannerProps {
  onRegisterClick?: () => void;
  onReadBlogClick?: () => void;
}

export const EventBanner: React.FC<EventBannerProps> = ({
  onRegisterClick,
  onReadBlogClick
}) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden text-white shadow-xl"
             style={{
               background: 'linear-gradient(110deg, #be123c 0%, #7e22ce 38%, #3730a3 75%, #1d4ed8 100%)'
             }}>
          
          {/* Subtle silk glow accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-4 text-white border border-white/30">
              <Calendar className="w-3.5 h-3.5" />
              <span>DATAKTIF ELEVATE 2026 • NOW ON DEMAND</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Elevate your AI expertise.
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed mb-8 max-w-2xl">
              See how visionary engineering, finance, and operations leaders are deploying multi-agent autonomous workforces and sovereign enterprise RAG to run mission-critical workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onRegisterClick}
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#1a56db] hover:bg-[#1e429f] transition-all cursor-pointer shadow-md flex items-center gap-2"
              >
                <span>Register for Elevate replays</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onReadBlogClick}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Read the announcement blog</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
