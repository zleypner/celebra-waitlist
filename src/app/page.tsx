'use client';

import { useState, useRef } from 'react';
import Hero from '@/components/Hero';
import ValueSection from '@/components/ValueSection';
import SocialProofSection from '@/components/SocialProofSection';
import ExclusivitySection from '@/components/ExclusivitySection';
import ScarcitySection from '@/components/ScarcitySection';
import FormSection from '@/components/FormSection';
import CTAsSection from '@/components/CTAsSection';
import EnhancedCTAsSection from '@/components/EnhancedCTAsSection';
import SuccessMessage from '@/components/SuccessMessage';

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleFormSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 5000);
  };

  return (
    <main className="min-h-screen">
      <Hero onCTAClick={scrollToForm} />
      <ValueSection />
      <SocialProofSection onCTAClick={scrollToForm} />
      <ExclusivitySection onCTAClick={scrollToForm} />
      <ScarcitySection onCTAClick={scrollToForm} />
      <div ref={formRef}>
        <FormSection onSuccess={handleFormSuccess} />
      </div>
      <CTAsSection onCTAClick={scrollToForm} />
      <EnhancedCTAsSection onCTAClick={scrollToForm} />
      <SuccessMessage show={showSuccess} onClose={() => setShowSuccess(false)} />
    </main>
  );
}
