import React from 'react';
import { ArrowRight, Users, Handshake, BookOpen } from 'lucide-react';

interface CommunityResourcesProps {
  onOpenMaintenance?: (feature?: string) => void;
}

export const CommunityResources: React.FC<CommunityResourcesProps> = ({ onOpenMaintenance }) => {
  const cards = [
    {
      title: 'Learn from the Dataktif community',
      name: 'Dataktifverse',
      description: 'Connect with over 15,000 enterprise developers, AI engineers, and system architects sharing pre-built agent templates.',
      linkText: 'Learn from Dataktifverse',
      icon: Users,
      gradient: 'linear-gradient(135deg, #f43f5e 0%, #a855f7 50%, #3b82f6 100%)'
    },
    {
      title: 'Expert help, from strategy to rollout',
      name: 'Partners',
      description: 'Accelerate deployment with certified global systems integrators, cloud partners, and enterprise transformation consultants.',
      linkText: 'Explore partners',
      icon: Handshake,
      gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%)'
    },
    {
      title: 'Answers when you need them',
      name: 'Dataktif Docs & Guides',
      description: 'Comprehensive API specifications, zero-trust security architecture whitepapers, SDK references, and step-by-step tutorials.',
      linkText: 'View Dataktif Docs',
      icon: BookOpen,
      gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 50%, #10b981 100%)'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                onClick={() => onOpenMaintenance?.(c.name)}
                className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group cursor-pointer"
              >
                {/* Flowing Silk Ribbon Header (Glean Style) */}
                <div 
                  className="h-36 sm:h-44 w-full relative p-6 flex flex-col justify-between overflow-hidden"
                  style={{ background: c.gradient }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
                  <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/90">
                    {c.name}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {c.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    <span>{c.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
