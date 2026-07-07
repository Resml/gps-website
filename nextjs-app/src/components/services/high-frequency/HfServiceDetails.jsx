'use client';
import React, { useState } from 'react';

const steps = [
  { num: '01', title: 'Deep Cleaning & Analysis', desc: 'Full disassembly, ultrasonic cleaning and precision measurement of all spindle components. Root-cause fault diagnosis using advanced instruments.', color: '#60A5FA' },
  { num: '02', title: 'Component Replacement', desc: 'Precision replacement of worn bearings, seals and damaged parts with high-quality materials rated for high-frequency, high-speed operation.', color: '#FDBA74' },
  { num: '03', title: 'Balancing & Assembly', desc: 'Fine-tuning and dynamic balancing for high-speed operations. Meticulous reassembly to factory specifications for vibration-free running.', color: '#34D399' },
  { num: '04', title: 'Performance Testing', desc: 'Comprehensive testing under various load conditions, thermal monitoring and final certification. Delivered with full performance guarantee.', color: '#A78BFA' },
];

const services = [
  'Comprehensive analysis of spindle performance issues',
  'Identification of mechanical, electrical and operational faults',
  'Precision repair of worn or damaged components',
  'Replacement of defective parts with high-quality materials',
  'Balancing and fine-tuning for high-speed operations',
  'Cleaning and reassembly to restore factory specifications',
  'Performance testing under various load conditions',
  'Custom upgrades to enhance durability and efficiency',
  'Thermal analysis and vibration diagnostics',
  'Spindle run-out correction and precision alignment',
  'Lubrication system inspection and restoration',
  'Post-repair quality certification and documentation',
];

const applications = [
  {
    label: 'Precision Grinding Machines',
    desc: 'High-frequency spindle repair for internal, external, and centerless grinding systems requiring sub-micron runout accuracy.',
  },
  {
    label: 'Tool & Cutter Grinding',
    desc: 'Restoring spindles for 5-axis CNC tool grinders to ensure perfect tool geometries and sharp cutting edges.',
  },
  {
    label: 'High-Speed Machining',
    desc: 'Optimizing spindles running at 40,000+ RPM for high-speed milling, routing, and complex 3D profile engraving.',
  },
  {
    label: 'Surface Grinding',
    desc: 'Repairing precision surface grinder spindles to achieve ultra-flat surfaces and flawless optical finishes.',
  },
  {
    label: 'Cylindrical Grinding',
    desc: 'Reconditioning spindles for external cylindrical grinders, maintaining roundness and dimensional control.',
  },
  {
    label: 'Internal Grinding',
    desc: 'Specialized repairs for high-RPM internal spindles to ensure precise bore sizing and mirror-smooth internal finishes.',
  },
];

const whyUs = [
  { title: 'Technical Expertise', desc: 'Specialized knowledge in repairing high-frequency spindles running up to 80,000 RPM and beyond.' },
  { title: 'Advanced Tools', desc: 'Equipped with state-of-the-art diagnostic equipment — vibration analyzers, dynamic balancers, and precision gauges.' },
  { title: 'Cost-Effective', desc: 'Save 60–70% compared to spindle replacement costs. Affordable repair services with no compromise on quality.' },
  { title: 'Quick Turnaround', desc: 'Minimizing downtime to keep your grinding operations running smoothly with fast repair cycles.' },
  { title: 'Quality Guarantee', desc: 'Every repaired spindle is tested and certified before delivery. Backed by our documented 1-year service warranty.' },
  { title: '3000+ Clients Served', desc: 'Trusted by leading manufacturers across Pune and Maharashtra for over 15 years of spindle excellence.' },
];

export default function HfServiceDetails() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredApp, setHoveredApp] = useState(null);

  return (
    <>
      {/* ── OVERVIEW SECTION ── */}
      <section className="srv-overview-section">
        <div className="container">
          <div className="ab-split reveal">
            <div className="ab-split-text">
              <span className="ab-tag">High-Frequency Specialists</span>
              <h2 className="ab-headline">
                Precision Repair for<br />
                <span className="ab-headline-accent">Grinding Spindles</span>
              </h2>
              <p className="ab-lead" style={{ textAlign: 'justify' }}>
                We provide specialized High-Frequency Grinding Spindle Repairing Services to ensure your spindles deliver precision, reliability, and efficiency. With expertise in handling high-speed and high-precision spindles, we restore their performance to meet the demanding requirements of your grinding applications.
              </p>
              <p className="ab-sub" style={{ textAlign: 'justify' }}>
                Our experienced technicians diagnose and repair spindles of all types including CNC, high-speed and precision grinding spindles. We specialize in high-quality spindle repair, ensuring your machinery runs at peak efficiency and reducing costly machine downtime.
              </p>
              <div className="ab-stats-row">
                <div className="ab-stat">
                  <div className="ab-stat-num">80K+</div>
                  <div className="ab-stat-label">RPM Capable</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">±1μm</div>
                  <div className="ab-stat-label">Precision</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">100%</div>
                  <div className="ab-stat-label">Tested</div>
                </div>
              </div>
            </div>
            <div className="ab-split-media reveal-right">
              <div className="ab-img-stack">
                <img className="ab-img-main" src="/images/hf-main.jpg" alt="High-Frequency Grinding Spindle" />
                <img className="ab-img-thumb" src="/images/hf-thumb.jpg" alt="Precision Grinding" />
                <div className="ab-float-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>High<br />Frequency</span>
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
            <span className="ab-tag">Our Services Include</span>
            <h2 style={{ color: 'var(--navy)', marginTop: '8px' }}>What We Do For Your Spindles</h2>
            <p style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--muted)' }}>
              Complete high-frequency spindle restoration — from precision diagnostics to certified delivery, every step engineered for peak performance.
            </p>
          </div>
          <div className="res-grid-2">
            {services.map((s, i) => (
              <div key={i} className={`reveal delay-${(i % 3) + 1}`}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#fff', borderRadius: '12px', padding: '16px 20px', border: '1px solid var(--border)', transition: 'all 0.3s', boxShadow: 'var(--shadow-sm)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(234,88,12,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <span style={{ width: '22px', height: '22px', background: 'var(--gradient-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" width="12" height="12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE RESTORE — INTERACTIVE 4-STEP ── */}
      <section style={{ background: 'var(--white)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(15,23,42,0.03) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.15)', color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>Our Repair Process</span>
            <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>How We Restore <span style={{ color: 'var(--orange)' }}>Your Spindles</span></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '560px', margin: '0 auto' }}>A precision-engineered 4-step process to bring your high-frequency grinding spindles back to factory peak performance.</p>
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

      {/* ── INDUSTRIES & APPLICATIONS — THEME-MATCHED ── */}
      <section style={{ background: '#fff', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(234,88,12,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="ab-tag" style={{ marginBottom: '16px' }}>Applications We Support</span>
            <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Industries &amp; <span style={{ color: 'var(--orange)' }}>Applications</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--muted)', fontSize: '16px' }}>We cater to diverse industries requiring precision and efficiency in high-frequency spindle performance.</p>
          </div>

          <div className="res-grid-3">
            {applications.map((app, i) => (
              <div key={i} className={`reveal delay-${(i % 3) + 1}`}
                onMouseEnter={() => setHoveredApp(i)}
                onMouseLeave={() => setHoveredApp(null)}
                style={{
                  position: 'relative',
                  background: '#fff',
                  border: hoveredApp === i ? '1px solid rgba(234,88,12,0.4)' : '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  textAlign: 'left',
                  cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transform: hoveredApp === i ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredApp === i ? '0 20px 48px rgba(15,23,42,0.08)' : 'var(--shadow-sm)',
                  overflow: 'hidden',
                }}>

                {/* Technical Badge */}
                <div style={{
                  fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  color: hoveredApp === i ? 'var(--orange)' : 'var(--muted)',
                  background: hoveredApp === i ? 'rgba(234,88,12,0.05)' : 'var(--off-white)',
                  border: hoveredApp === i ? '1px solid rgba(234,88,12,0.35)' : '1px solid var(--border)',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  display: 'inline-block',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease'
                }}>
                  {`APPLICATION // 0${i + 1}`}
                </div>

                <h4 style={{ 
                  fontSize: '18px', 
                  fontWeight: 700, 
                  color: hoveredApp === i ? 'var(--orange)' : 'var(--navy)', 
                  lineHeight: 1.35, 
                  margin: '0 0 12px 0', 
                  transition: 'color 0.3s ease' 
                }}>
                  {app.label}
                </h4>

                <p style={{
                  fontSize: '14px',
                  color: hoveredApp === i ? 'var(--text)' : 'var(--muted)',
                  lineHeight: 1.6,
                  margin: 0,
                  transition: 'color 0.3s ease'
                }}>
                  {app.desc}
                </p>

                {/* Top orange accent indicator */}
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  height: '4px', 
                  background: hoveredApp === i ? 'var(--orange)' : 'transparent', 
                  transition: 'all 0.3s ease' 
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US & CTA ── */}
      <section className="srv-why-section">
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
                <span className="ab-tag ab-tag-light" style={{ marginBottom: '16px' }}>Get In Touch</span>
                <h3>Need Grinding Spindle Repair?</h3>
                <p>Located in Pune, Maharashtra. Serving manufacturing clients across India with fast, reliable high-frequency spindle restoration services.</p>
                <div className="srv-ind-tags">
                  <span className="srv-ind-tag">Automotive</span>
                  <span className="srv-ind-tag">Aerospace</span>
                  <span className="srv-ind-tag">Tool Making</span>
                  <span className="srv-ind-tag">Defense</span>
                  <span className="srv-ind-tag">Precision Engineering</span>
                  <span className="srv-ind-tag">Medical</span>
                </div>
                <div className="srv-cta-box">
                  <h4>Call or WhatsApp Us Now</h4>
                  <a href="https://wa.me/919764032929?text=Hi%20GPS%20Spindles!%20I%20need%20high-frequency%20grinding%20spindle%20repair." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '12px', width: '100%', justifyContent: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Message on WhatsApp
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
