import PageHeader from '@/components/layout/PageHeader';
import PremiumContactDetails from '@/components/contact/PremiumContactDetails';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'Contact Us | GPS Spindles Pune',
  description: 'Contact GPS Spindles in Pune for urgent spindle repair, rebuilding, or manufacturing inquiries. Call +91 8484898144 or +91 97642 52188.',
};

export default function ContactPage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader 
        title="Contact Us" 
        breadcrumb="Contact Us"
      />
      <PremiumContactDetails />
      <FAQ />
      <CTASection />
    </main>
  );
}
