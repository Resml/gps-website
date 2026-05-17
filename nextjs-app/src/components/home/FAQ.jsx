'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'What brands of spindles do you repair?',
    a: 'We repair all major CNC, VMC, and HMC spindle brands including Fanuc, Siemens, Mazak, DMG Mori, Makino, Okuma, Haas, and more. Our experts have experience with over 50+ global brands.',
  },
  {
    q: 'Do you provide a warranty on repairs?',
    a: 'Yes, every repaired spindle comes with a comprehensive 1-year warranty. We provide a signed warranty certificate along with a detailed inspection report for your peace of mind.',
  },
  {
    q: 'What is your turnaround time?',
    a: 'Our standard turnaround time is 3–5 days. For urgent breakdowns, we offer priority 48-hour repairs and same-day emergency diagnosis to minimize your production downtime.',
  },
];

const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: 0 }}>
          <div className="label" style={{ justifyContent: 'center' }}>Got Questions?</div>
          <h2>Frequently Asked <span style={{ color: 'var(--orange)' }}>Questions</span></h2>
        </div>
        <div className="faq-grid reveal">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' active' : ''}`}>
              <div className="faq-header" onClick={() => toggle(i)}>
                {faq.q} <ChevronIcon />
              </div>
              <div className="faq-body">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
