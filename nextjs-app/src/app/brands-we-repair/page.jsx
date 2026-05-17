import PageHeader from '@/components/layout/PageHeader';
import PremiumBrandsGrid from '@/components/resources/PremiumBrandsGrid';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'Brands We Repair | GPS Spindles Pune',
  description: 'We repair and recondition spindles from top global brands including DMG Mori, Haas, Makino, Mazak, Doosan, FANUC, and many more.',
};

export default function BrandsWeRepairPage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader 
        title="Brands We Repair" 
        breadcrumb="Brands We Repair"
      />
      <PremiumBrandsGrid />
      <FAQ />
      <CTASection />
    </main>
  );
}
