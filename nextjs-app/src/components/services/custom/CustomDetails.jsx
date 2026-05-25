'use client';
import React, { useState } from 'react';

const steps = [
  { num: '01', title: 'Consultation & Design', desc: 'In-depth consultation to understand your operational needs followed by precision CAD modeling and custom engineering.', color: '#60A5FA' },
  { num: '02', title: 'Material Selection', desc: 'Procuring high-grade, durable materials that guarantee long-lasting, reliable performance in demanding machining environments.', color: '#FDBA74' },
  { num: '03', title: 'Precision Manufacturing', desc: 'Utilizing state-of-the-art tooling and advanced CNC machining to create custom spindles that match exact specifications and exact tolerances.', color: '#34D399' },
  { num: '04', title: 'Testing & Delivery', desc: 'Rigorous run-in tests, vibration checks, and comprehensive quality assurance before final deployment and continued maintenance support.', color: '#A78BFA' },
];

const features = [
  'End-to-end solutions for spindle design and manufacturing',
  'Custom engineering for unique operational needs',
  'High-quality spindles built with exact tolerances',
  'Tailored directly to machinery specifications',
  'Suitable for SPM, CNC, VMC, and HMC machines',
  'Manufactured using durable, high-grade materials',
  'Advanced CAD modeling and precision engineering',
  'Rigorous run-in and performance checks',
  'Cost-effective manufacturing and repair options',
  'Continued maintenance and support services',
  'Focus on minimizing downtime for your operations',
  'Expertise in complex and customized spindle applications',
];

const whyUs = [
  { icon: '🏭', title: 'Decades of Experience', desc: 'Extensive background in the design and manufacturing of custom spindles.' },
  { icon: '⚙️', title: 'Advanced Tools', desc: 'Equipped with the latest, state-of-the-art tools for precise manufacturing.' },
  { icon: '💰', title: 'Cost-Effective', desc: 'Affordable options for both new custom manufacturing and spindle repairs.' },
  { icon: '⏱️', title: 'Efficient Processes', desc: 'Streamlined workflows designed to minimize downtime for your operations.' },
  { icon: '📐', title: 'Precision Engineering', desc: 'High-quality spindles built to exact tolerances for superior performance.' },
  { icon: '🛡️', title: 'Reliable Support', desc: 'Comprehensive delivery, deployment, and continued maintenance support.' },
];

export default function CustomDetails() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* ── OVERVIEW SECTION ── */}
      <section className="srv-overview-section">
        <div className="container">
          <div className="ab-split reveal">
            <div className="ab-split-text">
              <span className="ab-tag">Custom Engineering</span>
              <h2 className="ab-headline">
                Precision Customized<br />
                <span className="ab-headline-accent">Spindles</span>
              </h2>
              <p className="ab-lead" style={{ textAlign: 'justify' }}>
                We specialize in the manufacturing of customized spindles designed to perfectly match your unique operational needs. With a commitment to precision, durability, and performance, we provide end-to-end solutions for spindle design, manufacturing, and maintenance.
              </p>
              <p className="ab-sub" style={{ textAlign: 'justify' }}>
                From initial consultation and CAD modeling to final production and quality testing, our bespoke solutions cater to SPM, CNC machines, grinding machines, VMC, HMC, and other complex applications across diverse industries.
              </p>
              <div className="ab-stats-row">
                <div className="ab-stat">
                  <div className="ab-stat-num">100%</div>
                  <div className="ab-stat-label">Custom Fit</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">CAD</div>
                  <div className="ab-stat-label">Modeled</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">Tested</div>
                  <div className="ab-stat-label">Performance</div>
                </div>
              </div>
            </div>

            <div className="ab-split-media reveal-right">
              <div className="ab-img-stack">
                <img className="ab-img-main" src="/images/customized-spindles-3.jpg" alt="Customized Spindle Assembly" />
                <img className="ab-img-thumb" src="/images/customized-spindles-2.jpg" alt="Spindle Design" />
                <div className="ab-float-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                  <span>Precision<br />Engineered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES CHECKLIST ── */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="ab-tag">Comprehensive Solutions</span>
            <h2 style={{ color: 'var(--navy)', marginTop: '8px' }}>Features & Capabilities</h2>
            <p style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--muted)' }}>
              We build high-performance customized spindles using state-of-the-art processes tailored exactly to your unique manufacturing requirements.
            </p>
          </div>
          <div className="res-grid-2">
            {features.map((f, i) => (
              <div key={i} className={`reveal delay-${(i % 3) + 1}`}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#fff', borderRadius: '12px', padding: '16px 20px', border: '1px solid var(--border)', transition: 'all 0.3s', boxShadow: 'var(--shadow-sm)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(234,88,12,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <span style={{ width: '22px', height: '22px', background: 'var(--gradient-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" width="12" height="12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE MANUFACTURE — INTERACTIVE 4-STEP ── */}
      <section style={{ background: 'var(--navy)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>Manufacturing Process</span>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>How We Build <span style={{ color: '#FDBA74' }}>Your Spindles</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto' }}>A meticulous 4-step workflow designed to deliver unparalleled precision and durability for your unique applications.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {steps.map((s, i) => (
              <button key={i} onClick={() => setActiveStep(i)}
                style={{ background: activeStep === i ? s.color : 'rgba(255,255,255,0.07)', color: activeStep === i ? '#0F172A' : 'rgba(255,255,255,0.6)', border: `1px solid ${activeStep === i ? s.color : 'rgba(255,255,255,0.12)'}`, borderRadius: '50px', padding: '10px 22px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'inherit' }}>
                {s.num} {s.title}
              </button>
            ))}
          </div>

          <div className="reveal" style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${steps[activeStep].color}55`, borderRadius: '24px', padding: '48px', maxWidth: '700px', margin: '0 auto', backdropFilter: 'blur(10px)', textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontWeight: 800, color: steps[activeStep].color, marginBottom: '16px', opacity: 0.35 }}>{steps[activeStep].num}</div>
            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '16px' }}>{steps[activeStep].title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.8 }}>{steps[activeStep].desc}</p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US & CTA ── */}
      <section className="srv-why-section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="srv-two-col">
            <div className="reveal">
              <span className="ab-tag">Our Strengths</span>
              <h2 className="srv-title-dark">Why Choose GPS?</h2>
              <div className="srv-list-cards">
                {whyUs.map((item, i) => (
                  <div key={i} className="srv-list-card">
                    <div className="srv-list-check">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal delay-2">
              <div className="srv-industries-box">
                <span className="ab-tag ab-tag-light" style={{ marginBottom: '16px' }}>Industries We Serve</span>
                <h3>Trusted Across Key Sectors</h3>
                <p>Located in Pune, Maharashtra. We empower precision machining across major industries with our highly specialized, bespoke spindle manufacturing.</p>
                <div className="srv-ind-tags">
                  <span className="srv-ind-tag">Automotive</span>
                  <span className="srv-ind-tag">Aerospace</span>
                  <span className="srv-ind-tag">Heavy Manufacturing</span>
                  <span className="srv-ind-tag">Tooling</span>
                  <span className="srv-ind-tag">Precision Engineering</span>
                  <span className="srv-ind-tag">Defense</span>
                </div>
                <div className="srv-cta-box">
                  <h4>Need a Custom Spindle?</h4>
                  <a href="https://wa.me/919764032929?text=Hi%20GPS%20Spindles!%20I%20need%20a%20consultation%20for%20Customized%20Spindles." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '12px', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                    Consult Our Engineers
                  </a>
                  <a href="tel:+919764252188" className="btn btn-dark" style={{ marginTop: '10px', width: '100%', justifyContent: 'center' }}>
                    📞 +91 97642 52188
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

