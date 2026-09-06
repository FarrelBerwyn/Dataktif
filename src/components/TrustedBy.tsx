import React from 'react';

export const TrustedBy: React.FC = () => {
  const logos = [
    { name: 'SAMSUNG', desc: 'Global Technology' },
    { name: 'BOOKING.COM', desc: 'Online Travel' },
    { name: 'VANTA', desc: 'Automated Security' },
    { name: 'WEALTHSIMPLE', desc: 'Financial Tech' },
    { name: 'INTERCOM', desc: 'AI Customer Service' },
    { name: 'WEBFLOW', desc: 'Visual Development' },
    { name: 'TELKOM', desc: 'Enterprise Telecom' },
    { name: 'BANK CENTRAL ASIA', desc: 'Tier-1 Banking' },
  ];

  return (
    <section className="py-14 border-y border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs sm:text-sm font-medium text-neutral-500 mb-8 tracking-tight">
          The world's leading enterprises put AI to work with Dataktif.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-80">
          {logos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center hover:opacity-100 transition-opacity"
            >
              <span className="font-extrabold text-neutral-900 text-sm sm:text-base tracking-tighter">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
