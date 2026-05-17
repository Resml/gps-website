import PageHeader from '@/components/layout/PageHeader';
import VmcServiceDetails from '@/components/services/vmc-hmc/VmcServiceDetails';
import ScrollReveal from '@/components/layout/ScrollReveal';

export const metadata = {
  title: 'VMC, HMC & CNC Spindles Reconditioning | GPS Spindles Pune',
  description: 'Expert repairing, rebuilding, and reconditioning services for VMC, HMC, and CNC spindles in Pune. OEM-grade restoration with 1-year warranty.',
};

export default function VmcHmcServicePage() {
  return (
    <main>
      <ScrollReveal />
      <PageHeader 
        title="VMC / HMC / CNC Spindles Repair" 
        breadcrumb="VMC / HMC / CNC Spindles Repair"
      />
      <VmcServiceDetails />
    </main>
  );
}
