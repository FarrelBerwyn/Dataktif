import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoValueSection } from './components/BentoValueSection';
import { KnowledgeSpendSection } from './components/KnowledgeSpendSection';
import { GovernanceSection } from './components/GovernanceSection';
import { MetricsGrid } from './components/MetricsGrid';
import { DepartmentAccordion } from './components/DepartmentAccordion';
import { LeadershipQuotes } from './components/LeadershipQuotes';
import { PlatformShowcase } from './components/PlatformShowcase';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { WorkAIInstitute } from './components/WorkAIInstitute';
import { CommunityResources } from './components/CommunityResources';
import { LatestInsights } from './components/LatestInsights';
import { EnterpriseCTA } from './components/EnterpriseCTA';
import { Footer } from './components/Footer';
import { InteractiveStudio } from './components/InteractiveStudio';
import { DemoModal } from './components/DemoModal';
import { MaintenanceModal } from './components/MaintenanceModal';
import { ComingSoonModal } from './components/ComingSoonModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'studio'>('landing');
  const [studioInitialTab, setStudioInitialTab] = useState<'agents' | 'workflows' | 'knowledge' | 'models' | 'logs'>('agents');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [maintenanceFeature, setMaintenanceFeature] = useState<string | undefined>(undefined);

  const handleOpenMaintenance = (feature?: string) => {
    setMaintenanceFeature(feature);
    setIsMaintenanceOpen(true);
  };

  const handleOpenComingSoon = () => {
    setIsComingSoonOpen(true);
  };

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    if (currentView === 'studio') {
      setCurrentView('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenStudio = (tab: 'agents' | 'workflows' | 'knowledge' | 'models' | 'logs' = 'agents') => {
    setStudioInitialTab(tab);
    setCurrentView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] selection:bg-blue-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Glean-Style Navigation Bar */}
      <Navbar 
        onNavigate={handleNavigate}
        onLaunchStudio={() => handleOpenStudio('agents')}
        onBookDemo={handleOpenComingSoon}
        onOpenDemo={handleOpenComingSoon}
      />

      {/* Main View Router */}
      {currentView === 'studio' ? (
        <InteractiveStudio
          initialTab={studioInitialTab}
          onBackToLanding={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <main>
          {/* 1. Hero Section with Signature Silk Wave Artwork & Search Box */}
          <div id="hero">
            <Hero 
              onBuildClick={() => handleOpenMaintenance('AI Studio')}
              onWatchDemo={handleOpenComingSoon}
              onExploreArchitecture={() => handleNavigate('architecture-section')}
            />
          </div>

          {/* Bento Value Section: AI adoption accelerating, 15B+ tokens saved, Context / Intelligence / Permissions */}
          <BentoValueSection 
            onLearnMore={() => handleNavigate('knowledge-spend')}
          />

          {/* 5. Cost & Model Router Narrative: Dataktif turns company knowledge into action without runaway spend */}
          <div id="knowledge-spend">
            <KnowledgeSpendSection 
              onExploreRouter={() => handleOpenMaintenance('Model Hub')}
            />
          </div>

          {/* 6. Built for Enterprise from Day One: Observability + Certifications */}
          <div id="governance-section">
            <GovernanceSection 
              onLearnMore={() => handleOpenMaintenance('Enterprise Governance & Audit')}
            />
          </div>

          {/* 7. Glean 6-Box Metrics Grid */}
          <MetricsGrid />

          {/* 8. Department Transformation Accordion (Sales, Finance, Engineering, Legal) */}
          <div id="solutions-section">
            <DepartmentAccordion 
              onSeeStories={() => handleNavigate('customer-voices')}
            />
          </div>

          {/* 9. Leadership Quotes & Video Testimonials (Customer Voices) */}
          <div id="customer-voices" className="scroll-mt-20">
            <LeadershipQuotes />
          </div>

          {/* 10. Platform Showcase: From Knowledge to Action (Agents, Workforce, RAG, SQL, Router) */}
          <div id="platform-modules">
            <PlatformShowcase 
              onOpenStudio={(tab) => {
                if (tab === 'workforce') handleOpenStudio('workflows');
                else if (tab === 'rag') handleOpenStudio('knowledge');
                else if (tab === 'sql') handleOpenStudio('logs');
                else if (tab === 'router') handleOpenStudio('models');
                else handleOpenStudio('agents');
              }}
            />
          </div>

          {/* 11. Architecture Flow Pipeline */}
          <div id="architecture-section">
            <ArchitectureFlow />
          </div>

          {/* 12. Work AI Institute: Thought Leadership & Podcast */}
          <WorkAIInstitute onOpenMaintenance={handleOpenMaintenance} />

          {/* 13. 3-Column Resource Cards with Flowing Silk Ribbon Headers */}
          <CommunityResources onOpenMaintenance={handleOpenMaintenance} />

          {/* 14. Latest and Greatest News & Research Grid */}
          <div id="insights-section">
            <LatestInsights onOpenMaintenance={handleOpenMaintenance} />
          </div>

          {/* 15. Bottom Call To Action: "See Enterprise AI in action" with Black Pill Button */}
          <EnterpriseCTA 
            onBookDemo={handleOpenComingSoon}
            onExplorePlatform={() => handleOpenMaintenance('AI Studio')}
          />
        </main>
      )}

      {/* Global Clean Enterprise Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onBookDemo={handleOpenComingSoon}
      />

      {/* Interactive Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onLaunchStudio={() => handleOpenStudio('agents')}
      />

      {/* Maintenance Notification Modal */}
      <MaintenanceModal 
        isOpen={isMaintenanceOpen}
        onClose={() => setIsMaintenanceOpen(false)}
        featureName={maintenanceFeature}
      />

      {/* Coming Soon & Waitlist Modal for 'Get a demo' */}
      <ComingSoonModal 
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
      />

    </div>
  );
}
