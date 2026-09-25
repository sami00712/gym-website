/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyEleven } from './components/WhyEleven';
import { Facilities } from './components/Facilities';
import { Memberships } from './components/Memberships';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Transformation } from './components/Transformation';
import { Gallery } from './components/Gallery';
import { CtaSection } from './components/CtaSection';
import { LocationSection } from './components/LocationSection';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MembershipModal } from './components/MembershipModal';
import { ExperienceVideoModal } from './components/ExperienceVideoModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>('Premium Member');
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);

  const handleOpenMembership = (planName?: string) => {
    if (planName) {
      setSelectedPlanForModal(planName);
    }
    setMembershipModalOpen(true);
  };

  const handleCloseMembership = () => {
    setMembershipModalOpen(false);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-lime-400 selection:text-zinc-950">
      {/* Sticky Luxury Navbar */}
      <Navbar onOpenMembership={handleOpenMembership} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Full-screen Hero */}
        <Hero
          onOpenMembership={handleOpenMembership}
          onExploreGym={() => setExperienceModalOpen(true)}
        />

        {/* About Section */}
        <About onOpenMembership={() => handleOpenMembership('Club Induction')} />

        {/* Why Eleven */}
        <WhyEleven onOpenMembership={() => handleOpenMembership('Day Pass & Tour')} />

        {/* Facilities Showcase */}
        <Facilities onOpenMembership={handleOpenMembership} />

        {/* Memberships */}
        <Memberships onSelectPlan={handleOpenMembership} />

        {/* Training Programs */}
        <Programs onOpenMembership={handleOpenMembership} />

        {/* Trainers */}
        <Trainers onOpenMembership={handleOpenMembership} />

        {/* Transformation & Motivation */}
        <Transformation onOpenMembership={() => handleOpenMembership('Body Transformation Protocol')} />

        {/* Photo Gallery & Lightbox */}
        <Gallery />

        {/* Dramatic CTA */}
        <CtaSection
          onOpenMembership={() => handleOpenMembership('VIP Membership')}
          onScrollToContact={handleScrollToContact}
        />

        {/* Location & Google Maps */}
        <LocationSection />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact Form & Concierge */}
        <ContactSection initialPlan={selectedPlanForModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Membership Modal */}
      <MembershipModal
        isOpen={membershipModalOpen}
        onClose={handleCloseMembership}
        initialPlan={selectedPlanForModal}
      />

      {/* Virtual Experience Tour Modal */}
      <ExperienceVideoModal
        isOpen={experienceModalOpen}
        onClose={() => setExperienceModalOpen(false)}
        onOpenMembership={() => handleOpenMembership('Virtual Tour Follow-up')}
      />

      {/* Mobile Sticky Quick Bar (Under 15% height cap) */}
      <MobileStickyBar onOpenMembership={() => handleOpenMembership('Mobile Quick Inquiry')} />
    </div>
  );
}
