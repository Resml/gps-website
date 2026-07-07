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
  { title: 'Extensive Inventory', desc: 'We stock a wide range of critical components to ensure you find exactly what you need quickly.' },
  { title: 'OEM Quality', desc: 'All our spare parts match or exceed original equipment manufacturer standards.' },
  { title: 'Expert Guidance', desc: 'Our technical team assists you in selecting the perfectly compatible parts for your machinery.' },
  { title: 'Reduced Downtime', desc: 'Fast turnaround and shipping to get your machines back up and running instantly.' },
  { title: 'Competitive Pricing', desc: 'Premium quality accessories and spare parts provided at highly cost-effective rates.' },
  { title: 'Trusted Partner', desc: 'Long-term supplier for hundreds of manufacturing units across India.' },
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
      <section style={{ background: 'var(--white)', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(15,23,42,0.03) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.15)', color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>Quality Assurance</span>
            <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Our Supply <span style={{ color: 'var(--orange)' }}>Process</span></h2>
            <p style={{ color: 'var(--muted)', maxWidth: '560px', margin: '0 auto' }}>A meticulous 4-step workflow designed to deliver unparalleled precision, perfect fit, and rapid availability.</p>
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

      {/* ── WHY CHOOSE US & CTA ── */}
      <section className="srv-why-section">
        <div className="container">
          <div className="srv-two-col">
            <div className="reveal">
              <span className="ab-tag">Our Strengths</span>
              <h2 className="srv-title-dark">Why Choose GPS?</h2>
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
                  <a href="https://wa.me/919764032929?text=Hi%20GPS%20Spindles!%20I%20am%20looking%20for%20Spindle%20Accessories%20%26%20Spare%20Parts." target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '12px', width: '100%', justifyContent: 'center', gap: '8px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send Parts Enquiry
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
