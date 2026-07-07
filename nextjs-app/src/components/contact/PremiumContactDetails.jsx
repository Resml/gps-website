'use client';
import React from 'react';

export default function PremiumContactDetails() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(15,23,42,0.04) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Header Section */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px' }}>
          <span className="ab-tag" style={{ marginBottom: '16px' }}>Get In Touch</span>
          <h2 style={{ fontSize: '36px', color: 'var(--navy)', marginBottom: '24px', lineHeight: 1.3 }}>
            We Provide <span style={{ color: 'var(--orange)' }}>Restoration, Rebuilding & Repair Services</span> for High-End Spindles
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: 1.6 }}>
            Based in Pune, Maharashtra, India, we are a leading manufacturer, supplier, and exporter of Grinding Spindles, Milling Heads, CNC/VMC Milling Spindles, and Multi-Spindle Drill Heads.
          </p>
        </div>

        {/* Split Layout: Contact Cards & Map */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'stretch'
        }}>

          {/* Left Column: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Primary Address Card */}
            <div className="reveal delay-1" style={{
              background: '#fff', borderRadius: '24px', padding: '32px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--gradient-orange)' }} />
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(234,88,12,0.1)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '8px', fontWeight: 800 }}>Pune Headquarters</h4>
                  <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                    15 / A / 2, Shop No.5, GKD Industrial Estate,<br />
                    Nanded Phata, Sinhgad Road,<br />
                    Pune - 411041. Maharashtra, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-cards Container (Phones) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>

              {/* Manufacturing Contact */}
              <a href="tel:+919764252188" className="reveal delay-2" style={{
                background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid var(--border)', transition: 'all 0.3s ease', display: 'block', textDecoration: 'none'
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--orange)', marginBottom: '12px', fontWeight: 700 }}>Manufacturing Phone</h5>
                <h4 style={{ fontSize: '17px', color: 'var(--navy)', marginBottom: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '20px', height: '20px', color: 'var(--orange)', flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 97642 52188
                </h4>
              </a>

              {/* Reconditioning Contact */}
              <a href="tel:+919764032929" className="reveal delay-3" style={{
                background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid var(--border)', transition: 'all 0.3s ease', display: 'block', textDecoration: 'none'
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--orange)', marginBottom: '12px', fontWeight: 700 }}>Reconditioning Phone</h5>
                <h4 style={{ fontSize: '17px', color: 'var(--navy)', marginBottom: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '20px', height: '20px', color: 'var(--orange)', flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 9764032929
                </h4>
              </a>

            </div>

            {/* Sub-cards Container (Emails) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>

              {/* Manufacturing Email */}
              <a href="mailto:anilvakude@gpsspindles.com" className="reveal delay-4" style={{
                background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid var(--border)', transition: 'all 0.3s ease', display: 'block', textDecoration: 'none'
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--orange)', marginBottom: '12px', fontWeight: 700 }}>Manufacturing Email</h5>
                <h4 style={{ fontSize: '15px', color: 'var(--navy)', marginBottom: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', wordBreak: 'break-all' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '18px', height: '18px', color: 'var(--orange)', flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 022 2z" /></svg>
                  anilvakude@gpsspindles.com
                </h4>
              </a>

              {/* Reconditioning Email */}
              <a href="mailto:sachinkuchekar@gpsspindles.com" className="reveal delay-4" style={{
                background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid var(--border)', transition: 'all 0.3s ease', display: 'block', textDecoration: 'none'
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--orange)', marginBottom: '12px', fontWeight: 700 }}>Reconditioning Email</h5>
                <h4 style={{ fontSize: '15px', color: 'var(--navy)', marginBottom: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', wordBreak: 'break-all' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '18px', height: '18px', color: 'var(--orange)', flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 022 2z" /></svg>
                  sachinkuchekar@gpsspindles.com
                </h4>
              </a>

            </div>

            {/* Google Reviews Button */}
            <div className="reveal delay-5" style={{ display: 'flex' }}>
              <a href="https://g.page/r/CXD0M58mX6hjEBM/review" target="_blank" rel="noopener noreferrer" 
                style={{ 
                  flex: '1 1 auto', 
                  justifyContent: 'center', 
                  borderRadius: '20px', 
                  padding: '16px 28px',
                  background: '#ffffff',
                  color: '#0F172A',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: '1px solid #0F172A',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px', color: '#EAB308' }}>
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.858 1.4-8.168-5.934-5.787 8.2-1.192L12 .587z" />
                </svg>
                Read our Google Reviews
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map */}
          <div className="reveal delay-2" style={{
            background: '#fff', borderRadius: '24px', padding: '8px', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,23,42,0.03)', display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ padding: '20px 24px' }}>
              <h4 style={{ color: 'var(--navy)', fontSize: '20px', margin: 0, display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800 }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="var(--orange)" style={{ width: '24px', height: '24px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Navigate to Facility
              </h4>
            </div>
            <div style={{ flex: 1, borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0!2d73.7935774!3d18.4578573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2952c53d84e9f%3A0x63a85f269f33f470!2sGeneral%20Precision%20Spindles!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GPS Spindles Location Map"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
