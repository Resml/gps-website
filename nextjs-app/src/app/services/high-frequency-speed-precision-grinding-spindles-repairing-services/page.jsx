import PageHeader from '@/components/layout/PageHeader';
import HfServiceDetails from '@/components/services/high-frequency/HfServiceDetails';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'High-Frequency Speed Precision Grinding Spindles Repairing | GPS Spindles Pune',
  description: 'Expert repairing services for high-frequency and precision grinding spindles. Reduce downtime and maximize performance with GPS Spindles, Pune.',
};

export default function HfGrindingServicePage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader
        title="High-Frequency Grinding Spindles Repair"
        breadcrumb="High-Frequency Grinding Spindles"
      />
      <HfServiceDetails />
    </main>
  );
}
