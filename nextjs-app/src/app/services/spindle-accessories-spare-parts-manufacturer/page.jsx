import PageHeader from '@/components/layout/PageHeader';
import AccessoriesDetails from '@/components/services/accessories/AccessoriesDetails';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'Spindle Accessories & Spare Parts Manufacturer | GPS Spindles',
  description: 'Manufacturer and supplier of premium spindle accessories and spare parts including collets, drawbars, seal rings, and bearings in Pune, India.',
};

export default function AccessoriesServicePage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader 
        title="Spindle Accessories & Spare Parts" 
        breadcrumb="Accessories & Spare Parts"
      />
      <AccessoriesDetails />
      <FAQ />
      <CTASection />
    </main>
  );
}
