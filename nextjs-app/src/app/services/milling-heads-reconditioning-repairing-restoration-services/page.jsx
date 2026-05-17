import PageHeader from '@/components/layout/PageHeader';
import MillingDetails from '@/components/services/milling-heads/MillingDetails';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'Milling Heads Reconditioning & Repairing Services | GPS Spindles',
  description: 'Comprehensive milling heads repairing, reconditioning, and restoration services to ensure optimal precision and longevity for your machining centers.',
};

export default function MillingHeadsServicePage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader 
        title="Milling Heads Repairing & Restoration" 
        breadcrumb="Milling Heads Repair"
      />
      <MillingDetails />
      <FAQ />
      <CTASection />
    </main>
  );
}
