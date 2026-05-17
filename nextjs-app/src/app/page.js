'use client';
import { useEffect } from 'react';

import Hero from '@/components/home/Hero';
import ProblemSection from '@/components/home/ProblemSection';
import Metrics from '@/components/home/Metrics';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import WhyGPS from '@/components/home/WhyGPS';
import Gallery from '@/components/home/Gallery';
import Brands from '@/components/home/Brands';
import Clients from '@/components/home/Clients';
import Industries from '@/components/home/Industries';
import BeforeAfter from '@/components/home/BeforeAfter';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  // Scroll reveal observer
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <Metrics />
      <Services />
      <Process />
      <WhyGPS />
      <Gallery />
      <Brands />
      <Clients />
      <Industries />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
