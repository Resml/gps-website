'use client';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '36px' }}>
          <div className="label" style={{ justifyContent: 'center', color: '#FDBA74' }}>The Problem</div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>Every hour of spindle downtime costs you money</h2>
        </div>
        <div className="problem-grid reveal">
          <div className="problem-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3>Unexpected Breakdown</h3>
            <p>VMC or CNC spindle fails mid-production, halting entire operations with no warning.</p>
          </div>
          <div className="problem-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3>Production Losses Mount</h3>
            <p>Idle machines, delayed orders, and customer penalties — every hour costs ₹10,000 or more.</p>
          </div>
          <div className="problem-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3>Where to Go?</h3>
            <p>Finding a trusted, technically capable repair shop with fast turnaround and warranty is not easy.</p>
          </div>
        </div>
        <div className="problem-arrow reveal" style={{ marginTop: '32px' }}>
          <p><strong>GPS Spindles</strong> solves all three — fast diagnosis, expert repair, 1-year warranty. Call us now.</p>
        </div>
      </div>
    </section>
  );
}
