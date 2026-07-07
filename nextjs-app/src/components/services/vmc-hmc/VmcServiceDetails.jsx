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
      <section style={{ background: 'var(--white)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(15,23,42,0.03) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.15)', color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>Reconditioning Workflow</span>
            <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>How We Restore <span style={{ color: 'var(--orange)' }}>Your Spindles</span></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '560px', margin: '0 auto' }}>A proven 4-step workflow honed over 15 years of spindle restoration excellence.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {steps.map((s, i) => (
              <button key={i} onClick={() => setActiveStep(i)}
                style={{
                  background: activeStep === i ? 'var(--orange)' : '#F1F5F9',
                  color: activeStep === i ? '#fff' : 'var(--muted)',
                  border: `1px solid ${activeStep === i ? 'var(--orange)' : 'var(--border)'}`,
                  borderRadius: '50px',
                  padding: '10px 22px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: 'inherit'
                }}>
                {s.num} {s.title}
              </button>
            ))}
          </div>

          <div className="reveal" style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderLeft: `5px solid ${steps[activeStep].color}`,
            borderRadius: '16px',
            padding: '48px',
            maxWidth: '700px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '56px', fontWeight: 800, color: steps[activeStep].color, marginBottom: '16px', opacity: 0.15 }}>{steps[activeStep].num}</div>
            <h3 style={{ color: 'var(--navy)', fontSize: '24px', marginBottom: '16px' }}>{steps[activeStep].title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8 }}>{steps[activeStep].desc}</p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US & INDUSTRIES (ORIGINAL) ── */}
      <section className="srv-why-section">
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
                  <a href="https://wa.me/919764032929?text=Hi%20GPS%20Spindles!%20I%20need%20urgent%20VMC%2FHMC%20spindle%20repair." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '12px', width: '100%', textAlign: 'center', justifyContent: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Message us on WhatsApp
                  </a>
                  <a href="tel:+919764252188" className="btn btn-outline-dark" style={{ marginTop: '10px', width: '100%', justifyContent: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 97642 52188
                  </a>
                  <a href="tel:+919764032929" className="btn btn-outline-dark" style={{ marginTop: '10px', width: '100%', justifyContent: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 97640 32929
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
