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
    svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
  },
  {
    label: 'Tool & Cutter Grinding',
    svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>),
  },
  {
    label: 'High-Speed Machining',
    svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
  },
  {
    label: 'Surface Grinding',
    svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>),
  },
  {
    label: 'Cylindrical Grinding',
    svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>),
  },
  {
    label: 'Internal Grinding',
    svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>),
  },
];

const whyUs = [
  { icon: '⚡', title: 'Technical Expertise', desc: 'Specialized knowledge in repairing high-frequency spindles running up to 80,000 RPM and beyond.' },
  { icon: '🔬', title: 'Advanced Tools', desc: 'Equipped with state-of-the-art diagnostic equipment — vibration analyzers, dynamic balancers, and precision gauges.' },
  { icon: '💰', title: 'Cost-Effective', desc: 'Save 60–70% compared to spindle replacement costs. Affordable repair services with no compromise on quality.' },
  { icon: '🚀', title: 'Quick Turnaround', desc: 'Minimizing downtime to keep your grinding operations running smoothly with fast repair cycles.' },
  { icon: '🛡️', title: 'Quality Guarantee', desc: 'Every repaired spindle is tested and certified before delivery. Backed by our documented 1-year service warranty.' },
  { icon: '🏆', title: '3000+ Clients Served', desc: 'Trusted by leading manufacturers across Pune and Maharashtra for over 15 years of spindle excellence.' },
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
      <section style={{ background: 'var(--navy)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>Our Repair Process</span>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>How We Restore <span style={{ color: '#FDBA74' }}>Your Spindles</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto' }}>A precision-engineered 4-step process to bring your high-frequency grinding spindles back to factory peak performance.</p>
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
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  transform: hoveredApp === i ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: hoveredApp === i ? '0 16px 40px rgba(234,88,12,0.1)' : 'var(--shadow-sm)',
                  overflow: 'hidden',
                }}>

                {/* Icon */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '14px',
                  background: 'var(--off-white)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px',
                  transition: 'all 0.3s',
                  color: hoveredApp === i ? 'var(--orange)' : 'var(--text)',
                  transform: hoveredApp === i ? 'scale(1.1)' : 'scale(1)',
                }}>
                  {app.svg}
                </div>

                <h4 style={{ fontSize: '14px', fontWeight: 700, color: hoveredApp === i ? 'var(--orange)' : 'var(--text)', lineHeight: 1.4, margin: 0, transition: 'color 0.3s' }}>{app.label}</h4>

                {/* Bottom orange bar */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--gradient-orange)', opacity: hoveredApp === i ? 1 : 0, transition: 'opacity 0.3s' }} />
              </div>
            ))}
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
                  <a href="https://wa.me/919764032929?text=Hi%20GPS%20Spindles!%20I%20need%20high-frequency%20grinding%20spindle%20repair." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}>
                    Message on WhatsApp
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
