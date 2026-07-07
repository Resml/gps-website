'use client';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "Unexpected Production Halts",
      desc: "A sudden spindle failure brings your CNC/VMC machining line to an immediate standstill, delaying critical customer shipments.",
    },
    {
      num: "02",
      title: "Escalating Financial Losses",
      desc: "Idle operators, delayed orders, and contractual penalties compound by the hour. Every minute of machine downtime is lost profit.",
    },
    {
      num: "03",
      title: "Unreliable Repair Standards",
      desc: "Generic local workshops often lack the specialized equipment, calibration tools, dynamic balancing capabilities, and warranty support needed for high-speed spindles.",
    }
  ];

  return (
    <section style={{
      padding: '90px 0',
      background: 'var(--white)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'start'
        }}>
          {/* Left Column: Context / Value Prop */}
          <div style={{ maxWidth: '480px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(234, 88, 12, 0.08)', 
              padding: '6px 14px', 
              borderRadius: '20px',
              marginBottom: '20px' 
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--orange)' }}></span>
              <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>The Cost of Downtime</span>
            </div>
            
            <h2 style={{ 
              color: 'var(--navy)', 
              fontSize: 'clamp(28px, 3vw, 38px)', 
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '24px'
            }}>
              Spindle failure is a direct hit to your <span style={{ color: 'var(--orange)' }}>bottom line.</span>
            </h2>
            
            <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
              When a spindle fails, production stops. GPS Spindles provides high-precision reconditioning, dynamic balancing, and OEM-grade assembly to get your machinery back online with certified reliability.
            </p>
            
            <div style={{
              background: 'var(--off-white)',
              border: '1px solid var(--border)',
              padding: '24px',
              borderRadius: '16px',
            }}>
              <h4 style={{ color: 'var(--navy)', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>The GPS Resolution</h4>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                We address all three challenges with rapid diagnosis, expert engineering, and an industry-leading <strong>1-year warranty</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: The 3 Pain Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {problems.map((prob, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                gap: '24px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: 'var(--orange)',
                  background: 'rgba(234, 88, 12, 0.08)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {prob.num}
                </div>
                <div>
                  <h3 style={{ 
                    color: 'var(--navy)', 
                    fontSize: '18px', 
                    fontWeight: 700, 
                    marginBottom: '8px' 
                  }}>
                    {prob.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--muted)', 
                    fontSize: '14.5px', 
                    lineHeight: 1.6, 
                    margin: 0 
                  }}>
                    {prob.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
