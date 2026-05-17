export default function Process() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="text-center reveal" style={{ maxWidth: '560px', margin: '0 auto 0' }}>
          <div className="label" style={{ justifyContent: 'center' }}>How It Works</div>
          <h2>Our 5-Step <span style={{ color: 'var(--orange)' }}>Repair Process</span></h2>
          <p style={{ marginTop: '12px' }}>Transparent, documented, precision-driven — from pickup to delivery.</p>
        </div>
        <div className="process-timeline">
          <div className="process-step reveal">
            <div className="step-circle active">1</div>
            <h4>Pickup / Drop-In</h4>
            <p>Free pickup from your factory in Pune area or bring directly to our Nanded Phata workshop.</p>
          </div>
          <div className="process-step reveal delay-1">
            <div className="step-circle">2</div>
            <h4>Diagnosis & Report</h4>
            <p>Full inspection within 4–6 hours. Written root-cause analysis with photos shared on WhatsApp.</p>
          </div>
          <div className="process-step reveal delay-2">
            <div className="step-circle">3</div>
            <h4>Quotation Approval</h4>
            <p>Transparent cost breakdown. No hidden charges. Proceed only after your approval.</p>
          </div>
          <div className="process-step reveal delay-3">
            <div className="step-circle">4</div>
            <h4>Precision Repair</h4>
            <p>OEM-spec components, CNC grinding, dynamic balancing, encoder calibration, and run-in testing.</p>
          </div>
          <div className="process-step reveal delay-4">
            <div className="step-circle">5</div>
            <h4>Delivery + Warranty</h4>
            <p>Tested spindle with 1-year warranty certificate. Post-delivery support included.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
