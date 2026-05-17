'use client';
import React, { useState } from 'react';

const steps = [
  { num: '01', title: 'Requirement Analysis', desc: 'Expert consultation to identify the exact specifications, dimensions, and compatibility requirements for your specific machine model.', color: '#60A5FA' },
  { num: '02', title: 'Premium Sourcing', desc: 'We supply only certified OEM-grade components and high-quality materials to ensure peak performance and longevity.', color: '#FDBA74' },
  { num: '03', title: 'Quality Inspection', desc: 'Every spare part and accessory undergoes rigorous quality control and dimensional checks before dispatch.', color: '#34D399' },
  { num: '04', title: 'Fast Delivery', desc: 'Maintain minimal machine downtime with our extensive inventory and rapid dispatch system, backed by technical support.', color: '#A78BFA' },
];

const features = [
  'Spindle Bearings (NSK, SKF, FAG, NACHI)',
  'Spindle Disc Springs & Washers',
  'Spindle Collets (HSK 50/63/100, BT 30/40/50)',
  'Spindle O-Rings & Mechanical Gaskets',
  'Spindle Drawbars & Grippers',
  'Spindle Encoder Rings & Ring Encoders',
  'Clamp Force Meters',
  'Vibration Meters',
  'Spindle Taper Cleaning Tools',
  'Rotary Unions',
  'Non-contact & Cylinder Seals',
  'ATC Alignment Tools & Spindle Pulleys',
];

const whyUs = [
  { icon: '📦', title: 'Extensive Inventory', desc: 'We stock a wide range of critical components to ensure you find exactly what you need quickly.' },
  { icon: '✔️', title: 'OEM Quality', desc: 'All our spare parts match or exceed original equipment manufacturer standards.' },
  { icon: '👨‍🔧', title: 'Expert Guidance', desc: 'Our technical team assists you in selecting the perfectly compatible parts for your machinery.' },
  { icon: '⏱️', title: 'Reduced Downtime', desc: 'Fast turnaround and shipping to get your machines back up and running instantly.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Premium quality accessories and spare parts provided at highly cost-effective rates.' },
  { icon: '🤝', title: 'Trusted Partner', desc: 'Long-term supplier for hundreds of manufacturing units across India.' },
];

export default function AccessoriesDetails() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* ── OVERVIEW SECTION ── */}
      <section className="srv-overview-section">
        <div className="container">
          <div className="ab-split reveal">
            <div className="ab-split-text">
              <span className="ab-tag">Premium Components</span>
              <h2 className="ab-headline">
                Spindle Accessories &<br />
                <span className="ab-headline-accent">Spare Parts</span>
              </h2>
              <p className="ab-lead" style={{ textAlign: 'justify' }}>
                We are a leading Manufacturer, Supplier, and Exporter of high-precision Spindle Accessories and Spare Parts in Pune, Maharashtra. We provide end-to-end component replacement solutions to keep your operations flawless.
              </p>
              <p className="ab-sub" style={{ textAlign: 'justify' }}>
                Our extensive inventory includes Spindle Bearings, Angular Contact Ball Bearings, SK/BT Collets, Disc Springs, Drawbars, Encoder Rings, Clamp Force Meters, and much more, designed for unmatched durability and compatibility.
              </p>
              <div className="ab-stats-row">
                <div className="ab-stat">
                  <div className="ab-stat-num">OEM</div>
                  <div className="ab-stat-label">Standards</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">20+</div>
                  <div className="ab-stat-label">Categories</div>
                </div>
                <div className="ab-stat">
                  <div className="ab-stat-num">Fast</div>
                  <div className="ab-stat-label">Dispatch</div>
                </div>
              </div>
            </div>

            <div className="ab-split-media reveal-right">
              <div className="ab-img-stack">
                <img className="ab-img-main" src="/images/spindle-room-1.jpg" alt="Spindle Spare Parts Inventory" />
                <img className="ab-img-thumb" src="/images/spindle-accessories-2.webp" alt="Spindle Accessories" />
                <div className="ab-float-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                  <span>Premium<br />Quality</span>
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
            <span className="ab-tag">Our Inventory</span>
            <h2 style={{ color: 'var(--navy)', marginTop: '8px' }}>Products & Capabilities</h2>
            <p style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--muted)' }}>
              We stock and supply a comprehensive range of critical spindle accessories and replacement parts tailored to your machinery's exact specifications.
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
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>Quality Assurance</span>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>Our Supply <span style={{ color: '#FDBA74' }}>Process</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto' }}>A meticulous 4-step workflow designed to deliver unparalleled precision, perfect fit, and rapid availability.</p>
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
                  <div className="srv-list-card" key={i}>
                    <div className="srv-list-check" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', background: 'rgba(234,88,12,0.1)', color: 'var(--orange)' }}>
                      {item.icon}
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
                <p>Located in Pune, Maharashtra. We empower precision machining across major industries with our highly specialized spare parts and accessories.</p>
                <div className="srv-ind-tags">
                  <span className="srv-ind-tag">Automotive</span>
                  <span className="srv-ind-tag">Aerospace</span>
                  <span className="srv-ind-tag">Heavy Manufacturing</span>
                  <span className="srv-ind-tag">Tooling</span>
                  <span className="srv-ind-tag">Precision Engineering</span>
                  <span className="srv-ind-tag">Defense</span>
                </div>
                <div className="srv-cta-box">
                  <h4>Need Spindle Accessories?</h4>
                  <a href="https://wa.me/918484898144?text=Hi%20GPS%20Spindles!%20I%20am%20looking%20for%20Spindle%20Accessories%20%26%20Spare%20Parts." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '12px', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                    Send Parts Enquiry
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
