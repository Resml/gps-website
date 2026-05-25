import PageHeader from '@/components/layout/PageHeader';
import AboutCompany from '@/components/about/AboutCompany';
import OurSetup from '@/components/about/OurSetup';
import CoreValues from '@/components/about/CoreValues';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'About Us | General Precision Spindles Pune',
  description:
    "Learn about General Precision Spindles — Pune's leading experts in CNC, VMC, and HMC spindle repair, reconditioning, and customized manufacturing since 2017.",
  alternates: {
    canonical: 'https://www.gpsspindles.net/about-gps.html',
  },
};

export default function AboutPage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader
        title="About Us"
        subtitle="Pune's most trusted CNC, VMC &amp; HMC spindle repair specialists since 2017 — 3000+ clients, 5000+ completed projects, 1-year warranty, 24×7 emergency support."
        breadcrumb="About Us"
      />
      <AboutCompany />
      <CoreValues />
      <OurSetup />
      <CTASection />
    </main>
  );
}
