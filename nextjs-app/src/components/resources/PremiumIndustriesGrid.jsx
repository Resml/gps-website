'use client';
import React from 'react';

const industriesData = [
  {
    id: 1,
    title: 'Automotive Industry',
    description: 'Precision spindle solutions for high-volume engine and transmission component manufacturing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h8M8 11h8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11v4" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Auto Ancillaries',
    description: 'Reliable reconditioning for tier-1 and tier-2 auto ancillary machining centers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Machine Tool OEM',
    description: 'Partnering with original equipment manufacturers for robust, OEM-grade spindle integration.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Aerospace Industry',
    description: 'Ultra-precision repairs for spindles manufacturing mission-critical aerospace components.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Dies & Moulds',
    description: 'High-speed, vibration-free spindles tailored for intricate die and mould finishing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Medical Industry',
    description: 'Stringent tolerance maintenance for spindles producing healthcare and surgical instruments.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14v4M10 16h4" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Wood Working',
    description: 'Heavy-duty router spindles designed to withstand high RPM and wood dust environments.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Jewellery',
    description: 'Micro-precision spindles for delicate, high-accuracy jewellery engraving and cutting.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3l8 4.5L12 12 4 7.5 12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21l-8-4.5V7.5M12 21l8-4.5V7.5" />
      </svg>
    )
  },
  {
    id: 9,
    title: 'Heavy Equipment & Construction',
    description: 'Rugged large-bore spindles for machining massive construction equipment components.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 10,
    title: 'Allied Industries',
    description: 'Customized repairing solutions for specialized and niche manufacturing sectors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function PremiumIndustriesGrid() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative background styling */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(270deg, rgba(248,250,252,1) 0%, rgba(255,255,255,0) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(15,23,42,0.03) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header Area */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
          <span className="ab-tag" style={{ marginBottom: '16px' }}>Cross-Sector Expertise</span>
          <h2 style={{ fontSize: '42px', color: 'var(--navy)', marginBottom: '24px', lineHeight: 1.2 }}>
            Empowering <span style={{ color: 'var(--orange)' }}>Global Industries</span> with Precision
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: 1.6 }}>
            From high-speed aerospace components to rugged heavy engineering equipment, GPS Spindles provides unmatched repairing, testing, and manufacturing services across diverse sectors.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px' 
        }}>
          {industriesData.map((industry, index) => (
            <div 
              key={industry.id} 
              className="reveal fade-in-bottom"
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '40px 32px',
                border: '1px solid var(--border)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                animationDelay: `${(index % 5) * 100}ms`
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(15,23,42,0.08)';
                e.currentTarget.style.borderColor = 'rgba(234,88,12,0.2)';
                const iconBg = e.currentTarget.querySelector('.icon-bg');
                if (iconBg) iconBg.style.transform = 'scale(1.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border)';
                const iconBg = e.currentTarget.querySelector('.icon-bg');
                if (iconBg) iconBg.style.transform = 'scale(1)';
              }}
            >
              {/* Subtle top gradient line on hover */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--gradient-orange)', opacity: 0, transition: 'opacity 0.3s' }} className="hover-line" />
              <style>{`
                div:hover > .hover-line { opacity: 1 !important; }
              `}</style>

              <div 
                className="icon-bg"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(234,88,12,0.1)',
                  color: 'var(--orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                <div style={{ width: '32px', height: '32px' }}>
                  {industry.icon}
                </div>
              </div>

              <h3 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '12px', fontWeight: 800 }}>
                {industry.title}
              </h3>
              
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                {industry.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
