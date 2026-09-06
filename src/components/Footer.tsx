import React from 'react';
import { Sparkles, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate?: (route: string) => void;
  onBookDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookDemo }) => {
  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Columns Grid (Glean Style) */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 pb-14 border-b border-neutral-200">
          
          {/* Col 1 & 2: Brand & Ask AI */}
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <img 
                src={`${import.meta.env.BASE_URL}assets/logo/dataktif-logo.png`} 
                alt="Dataktif Logo" 
                className="w-7 h-7 object-contain rounded-md" 
              />
              <span className="text-xl font-extrabold tracking-tight text-neutral-950">
                Dataktif
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block ml-0.5" />
              </span>
            </div>

            <p className="text-neutral-500 leading-relaxed max-w-xs text-xs">
              The Enterprise AI Operating System connecting company data, knowledge, models, and workflows into one governed layer.
            </p>

            {/* Quick Ask AI Prompt (Glean Footer Feature) */}
            <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 max-w-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                <span>Ask AI about Dataktif</span>
                <Sparkles className="w-3 h-3 text-blue-600" />
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-neutral-200 text-neutral-700 text-xs">
                <span className="text-neutral-400">Summarize Dataktif RAG architecture...</span>
              </div>
            </div>

            {/* Office Locations */}
            <div className="text-[11px] text-neutral-400 space-y-1">
              <div><strong>Jakarta HQ:</strong> SCBD Lot 28, South Jakarta 12190</div>
              <div><strong>Singapore:</strong> Marina Bay Financial Centre Tower 1</div>
            </div>
          </div>

          {/* Col 3: Product */}
          <div className="space-y-3">
            <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Product</h5>
            <ul className="space-y-2 text-neutral-500">
              <li><a href="#product" className="hover:text-neutral-900 transition-colors">AI Studio Console</a></li>
              <li><a href="#agents" className="hover:text-neutral-900 transition-colors">Autonomous Agents</a></li>
              <li><a href="#workforce" className="hover:text-neutral-900 transition-colors">Multi-Agent Workforce</a></li>
              <li><a href="#knowledge" className="hover:text-neutral-900 transition-colors">Knowledge Engine (RAG)</a></li>
              <li><a href="#data" className="hover:text-neutral-900 transition-colors">Data Intelligence & SQL</a></li>
              <li><a href="#models" className="hover:text-neutral-900 transition-colors">Multi-Model Router</a></li>
              <li><a href="#governance" className="hover:text-neutral-900 transition-colors">Zero-Trust Governance</a></li>
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div className="space-y-3">
            <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Solutions</h5>
            <ul className="space-y-2 text-neutral-500">
              <li><a href="#banking" className="hover:text-neutral-900 transition-colors">Financial Services</a></li>
              <li><a href="#retail" className="hover:text-neutral-900 transition-colors">Retail & WhatsApp Commerce</a></li>
              <li><a href="#manufacturing" className="hover:text-neutral-900 transition-colors">Manufacturing & Supply</a></li>
              <li><a href="#telecom" className="hover:text-neutral-900 transition-colors">Telecommunications</a></li>
              <li><a href="#public-sector" className="hover:text-neutral-900 transition-colors">Public Sector & Sovereign</a></li>
              <li><a href="#customers" className="hover:text-neutral-900 transition-colors">Customer Case Studies</a></li>
            </ul>
          </div>

          {/* Col 5: Resources */}
          <div className="space-y-3">
            <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Resources</h5>
            <ul className="space-y-2 text-neutral-500">
              <li><a href="#institute" className="hover:text-neutral-900 transition-colors">Work AI Institute</a></li>
              <li><a href="#community" className="hover:text-neutral-900 transition-colors">Dataktifverse Community</a></li>
              <li><a href="#docs" className="hover:text-neutral-900 transition-colors">Documentation & APIs</a></li>
              <li><a href="#whitepapers" className="hover:text-neutral-900 transition-colors">Token Economics Whitepaper</a></li>
              <li><a href="#podcast" className="hover:text-neutral-900 transition-colors">Executive Podcast</a></li>
              <li><a href="#security" className="hover:text-neutral-900 transition-colors">Security & Certifications</a></li>
            </ul>
          </div>

          {/* Col 6: Company */}
          <div className="space-y-3">
            <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Company</h5>
            <ul className="space-y-2 text-neutral-500">
              <li><a href="#about" className="hover:text-neutral-900 transition-colors">About Dataktif</a></li>
              <li><a href="#careers" className="hover:text-neutral-900 transition-colors">Careers (Hiring!)</a></li>
              <li><a href="#leadership" className="hover:text-neutral-900 transition-colors">Leadership</a></li>
              <li><a href="#news" className="hover:text-neutral-900 transition-colors">Newsroom & Press</a></li>
              <li><a href="#partners" className="hover:text-neutral-900 transition-colors">Partner Ecosystem</a></li>
              <li><a href="#contact" className="hover:text-neutral-900 transition-colors">Contact Sales</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Legal Bar (Glean Style) */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-neutral-400 leading-relaxed">
            Gartner® is a registered trademark of Gartner, Inc. and/or its affiliates. Gartner does not endorse any vendor, product, or service depicted in its research publications. All research represents the opinions of Gartner’s research organization and should not be construed as statements of fact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-100 text-[11px] text-neutral-500">
            <div>
              © 2026 Dataktif Technologies, Inc. All rights reserved. Built with SOC 2 Type II & Indonesian PDP compliance.
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#privacy" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-neutral-900 transition-colors">Terms of Service</a>
              <a href="#security" className="hover:text-neutral-900 transition-colors">Security & Trust</a>
              <a href="#cookies" className="hover:text-neutral-900 transition-colors">Cookie Preferences</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
