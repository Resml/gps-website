'use client';
import React, { useState } from 'react';

const steps = [
  { num: '01', title: 'Teardown & Diagnosis', desc: 'Comprehensive initial inspection and precision dismantling to identify the root causes of failure and wear.', color: '#60A5FA' },
  { num: '02', title: 'Component Restoration', desc: 'Precision regrinding, gear reconditioning, and bearing replacement utilizing certified OEM-grade components.', color: '#FDBA74' },
  { num: '03', title: 'Dynamic Balancing', desc: 'Rigorous balancing of all rotating assemblies to eliminate vibrations, ensuring stability at high RPMs.', color: '#34D399' },
  { num: '04', title: 'Testing & Calibration', desc: 'Extensive test runs monitoring temperature, vibration, and runout before final certification and dispatch.', color: '#A78BFA' },
];

const features = [
  'Spindle Regrinding & Tolerancing',
  'Angular Contact Bearing Replacement',
  'Gearbox Reconditioning & Repair',
  'Drive Motor Servicing & Cleaning',
  'Micron-Level Alignment & Calibration',
  'Internal Coolant System Overhaul',
  'Rotary Union Servicing',
  'Torque Consistency Restoration',
];

const whyUs = [
  { icon: '👨‍🔧', title: 'Highly Skilled Technicians', desc: 'Experienced professionals with deep expertise in milling machine mechanics and restorations.' },
  { icon: '🏭', title: 'State-of-the-Art Facilities', desc: 'Equipped with ultra-precision machinery for comprehensive testing, grinding, and repair.' },
  { icon: '✔️', title: 'OEM Standards', desc: 'All repairs and replacements are conducted to strictly meet or exceed original equipment specifications.' },
  { icon: '⏱️', title: 'Rapid Turnaround', desc: 'Streamlined repair processes ensuring your milling heads are back in production with minimal downtime.' },
  { icon: '🛡️', title: 'Quality Guarantee', desc: 'Backed by a 1-year warranty on all our milling head reconditioning services.' },
  { icon: '📈', title: 'Performance Boost', desc: 'Restoring optimal torque and precision to enhance your overall machining efficiency.' },
];

export default function MillingDetails() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* ── OVERVIEW SECTION ── */}
      <section className="srv-overview-section">
        <div className="container">
          <div className="ab-split reveal">
            <div className="ab-split-text">
              <span className="ab-tag">Expert Restoration</span>
              <h2 className="ab-headline">
                Milling Heads<br />
                <span className="ab-headline-accent">Repairing Services</span>
              </h2>
              <p className="ab-lead" style={{ textAlign: 'justify' }}>
                Milling heads are critical components responsible for ensuring precision and efficiency in machining operations. Over time, due to wear and tear, these components require professional maintenance to restore optimal performance.
              </p>
              <p className="ab-sub" style={{ textAlign: 'justify' }}>
                We specialize in comprehensive Milling Heads Repair, Angular Spindle Head Repair, and Rebuilding Services. Our specialized engineering team ensures the reliability, accuracy, and longevity of your critical equipment.
              </p>
              <div className="ab-stats-row">
                <div className="ab-stat">
                  <div className="ab-stat-num">Micron</div>
                  <div className="ab-stat-label">Precision</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">100%</div>
                  <div className="ab-stat-label">OEM Grade</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">1 Year</div>
                  <div className="ab-stat-label">Warranty</div>
                </div>
              </div>
            </div>

            <div className="ab-split-media reveal-right">
              <div className="ab-img-stack">
                <img className="ab-img-main" src="/images/milling-heads-repairing-and-services.jpg" alt="Milling Heads Repairing" />
                <img className="ab-img-thumb" src="/images/milling-heads-repairing-and-services-1.jpg" alt="Milling Head Reconditioning" />
                <div className="ab-float-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Advanced<br />Restoration</span>
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
            <span className="ab-tag">Repair & Restoration</span>
            <h2 style={{ color: 'var(--navy)', marginTop: '8px' }}>Our Capabilities</h2>
            <p style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--muted)' }}>
              We provide end-to-end reconditioning for all complex milling head assemblies to restore their original operational efficiency.
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

      {/* ── HOW WE SUPPLY — INTERACTIVE 4-STEP ── */}
      <section style={{ background: 'var(--navy)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>Meticulous Rebuilding</span>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>Our Restoration <span style={{ color: '#FDBA74' }}>Process</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto' }}>A structured, rigorous 4-step workflow designed to restore absolute precision and torque to worn milling heads.</p>
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
              <h2 className="srv-title-dark">Our Expertise</h2>
              <div className="srv-list-cards">
                {whyUs.map((item, i) => (
                  <div className="srv-list-card" key={i}>
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
                <p>Located in Pune, Maharashtra. We empower heavy machining and precision engineering across major industrial sectors.</p>
                <div className="srv-ind-tags">
                  <span className="srv-ind-tag">Automotive</span>
                  <span className="srv-ind-tag">Aerospace</span>
                  <span className="srv-ind-tag">Tool & Die Manufacturing</span>
                  <span className="srv-ind-tag">Heavy Machinery</span>
                  <span className="srv-ind-tag">Defense</span>
                  <span className="srv-ind-tag">Precision Engineering</span>
                </div>
                


                <div className="srv-cta-box">
                  <h4>Need Milling Head Repairs?</h4>
                  <a href="https://wa.me/918484898144?text=Hi%20GPS%20Spindles!%20I%20need%20Milling%20Head%20Repair%20Services." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '12px', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                    Send Enquiry on WhatsApp
                  </a>
                  <a href="tel:+918484898144" className="btn btn-dark" style={{ marginTop: '10px', width: '100%', justifyContent: 'center' }}>
                    📞 +91 8484898144 (Sachin)
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
