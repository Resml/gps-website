'use client';
import React, { useState } from 'react';

const steps = [
  { num: '01', title: 'Dismantling & Diagnosis', desc: 'Complete disassembly and ultrasonic cleaning. Root-cause analysis of every worn component using precision instruments.', color: '#60A5FA' },
  { num: '02', title: 'OEM Parts Replacement', desc: 'Worn bearings, seals, and shafts replaced with certified OEM or superior equivalent components for maximum longevity.', color: '#FDBA74' },
  { num: '03', title: 'Factory-Spec Reassembly', desc: 'Precision reassembly using calibrated torque tools. Every tolerance brought back to manufacturer specifications.', color: '#34D399' },
  { num: '04', title: 'Testing & Certification', desc: 'Full run-in tests, vibration analysis, thermal imaging and dynamic balancing before delivery with a 1-year warranty.', color: '#A78BFA' },
];

const features = [
  'Cleaning, lubrication and fine-tuning of spindles',
  'Addressing wear and tear to restore full functionality',
  'Extending lifespan of existing spindle assemblies',
  'Comprehensive revival of worn or obsolete spindles',
  'Advanced restoration techniques for peak performance',
  'Complete inspection and analysis of all components',
  'Replacement of damaged parts with OEM/equivalent parts',
  'Reassembly to factory specifications for long-term use',
  'Diagnosis and correction of performance issues',
  'Precision repairs for VMC, HMC and CNC spindles',
  'Cost-effective alternative to purchasing new spindles',
  'Efficient service to minimize machine downtime',
];

export default function VmcServiceDetails() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* ── OVERVIEW SECTION (ORIGINAL) ── */}
      <section className="srv-overview-section">
        <div className="container">
          <div className="ab-split reveal">
            <div className="ab-split-text">
              <span className="ab-tag">VMC &amp; HMC Experts</span>
              <h2 className="ab-headline">
                Complete Restoration for<br />
                <span className="ab-headline-accent">CNC Machining Centers</span>
              </h2>
              <p className="ab-lead" style={{ textAlign: 'justify' }}>
                We Provide VMC (Vertical Machining Center), HMC (Horizontal Machining Center), CNC Spindle Repairing Services, VTL Spindles (Vertical Turret Lathe), and SPM (Special Purpose Machine) Spindle Reconditioning, Restoration, Testing, Balancing, and Rebuilding Services at our setup situated in Pune, Maharashtra, India.
              </p>
              <p className="ab-sub" style={{ textAlign: 'justify' }}>
                Our advanced facility is equipped to handle all types of machine tool spindles, including CNC, Grinding, Hydrodynamic, Hydrostatic, Dressers, and Testing spindles with ISO and HSK tapers. We bring worn-out spindles back to OEM specifications, offering a cost-effective alternative to purchasing new equipment.
              </p>
              <div className="ab-stats-row">
                <div className="ab-stat">
                  <div className="ab-stat-num">ISO / HSK</div>
                  <div className="ab-stat-label">Taper Support</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">VTL / SPM</div>
                  <div className="ab-stat-label">Specialist Repair</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">100%</div>
                  <div className="ab-stat-label">OEM Specs</div>
                </div>
              </div>
            </div>

            <div className="ab-split-media reveal-right">
              <div className="ab-img-stack">
                <img className="ab-img-main" src="/images/ws-h.jpg" alt="VMC Spindle Assembly" />
                <img className="ab-img-thumb" src="/images/ws-g.jpg" alt="Spindle Diagnosis" />
                <div className="ab-float-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Precision<br />Tested</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW: SPINDLE RECONDITIONING CHECKLIST ── */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="ab-tag">Comprehensive Care</span>
            <h2 style={{ color: 'var(--navy)', marginTop: '8px' }}>Spindle Reconditioning / Repairing</h2>
            <p style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--muted)' }}>
              End-to-end revival of worn-out or obsolete spindles — saving the cost of brand-new replacements while ensuring long-term reliability.
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

      {/* ── NEW: HOW WE RESTORE — INTERACTIVE 4-STEP ── */}
      <section style={{ background: 'var(--navy)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>Reconditioning Workflow</span>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>How We Restore <span style={{ color: '#FDBA74' }}>Your Spindles</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto' }}>A proven 4-step workflow honed over 15 years of spindle restoration excellence.</p>
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

      {/* ── WHY CHOOSE US & INDUSTRIES (ORIGINAL) ── */}
      <section className="srv-why-section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="srv-two-col">
            <div className="reveal">
              <span className="ab-tag">Our Strengths</span>
              <h2 className="srv-title-dark">Why Choose GPS?</h2>
              <div className="srv-list-cards">
                {[
                  { title: 'Specialized Expertise', desc: 'Decades of experience working with VMC, HMC, and CNC spindles.' },
                  { title: 'State-of-the-Art Facilities', desc: 'Equipped with advanced diagnostic and precision repair tools.' },
                  { title: 'Highly Skilled Technicians', desc: 'A dedicated team of engineers delivering pinpoint accuracy.' },
                  { title: 'Quick Turnaround', desc: 'Efficient service to minimize machine downtime and production loss.' },
                  { title: 'Tailored Solutions', desc: 'Custom repair and restoration plans based on specific client needs.' },
                ].map((item, i) => (
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
                <p>Located in Pune, Maharashtra, we are committed to providing reliable spindle services to keep your machinery running smoothly across India's largest manufacturing sectors.</p>
                <div className="srv-ind-tags">
                  <span className="srv-ind-tag">Automotive</span>
                  <span className="srv-ind-tag">Aerospace</span>
                  <span className="srv-ind-tag">Heavy Manufacturing</span>
                  <span className="srv-ind-tag">Tooling</span>
                  <span className="srv-ind-tag">Precision Engineering</span>
                  <span className="srv-ind-tag">Defense</span>
                </div>
                <div className="srv-cta-box">
                  <h4>Need Urgent Spindle Repair?</h4>
                  <a href="https://wa.me/919764032929?text=Hi%20GPS%20Spindles!%20I%20need%20urgent%20VMC%2FHMC%20spindle%20repair." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '12px', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                    Message us on WhatsApp
                  </a>
                  <a href="tel:+919764252188" className="btn btn-dark" style={{ marginTop: '10px', width: '100%', justifyContent: 'center' }}>
                    📞 +91 97642 52188
                  </a>
                  <a href="tel:+919764032929" className="btn btn-dark" style={{ marginTop: '10px', width: '100%', justifyContent: 'center' }}>
                    📞 +91 9764032929
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
