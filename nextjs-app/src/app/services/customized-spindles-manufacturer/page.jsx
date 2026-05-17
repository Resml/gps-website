import PageHeader from '@/components/layout/PageHeader';
import CustomDetails from '@/components/services/custom/CustomDetails';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'Customized Spindles Manufacturer | GPS Spindles',
  description: 'GPS Spindles is a leading manufacturer of customized spindles. We design and build high-precision, custom-engineered spindles for SPM, CNC, and unique industrial applications.',
};

export default function CustomizedSpindlesPage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader 
        title="Customized Spindles Manufacturing" 
        breadcrumb="Customized Spindles"
      />
      <CustomDetails />
      <FAQ />
      <CTASection />
    </main>
  );
}
