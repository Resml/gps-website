import PageHeader from '@/components/layout/PageHeader';
import PremiumIndustriesGrid from '@/components/resources/PremiumIndustriesGrid';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'Industries We Serve | GPS Spindles Pune',
  description: 'GPS Spindles serves diverse industries including Automotive, Aerospace, Medical, and Heavy Engineering with top-tier spindle repair and manufacturing.',
};

export default function IndustriesWeServePage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader 
        title="Industries We Serve" 
        breadcrumb="Industries We Serve"
      />
      <PremiumIndustriesGrid />
      <FAQ />
      <CTASection />
    </main>
  );
}
