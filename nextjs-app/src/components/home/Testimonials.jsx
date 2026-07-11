'use client';
import { useState } from 'react';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    text: '"GPS Spindles saved our VMC from months of OEM wait time. Sachin\'s team diagnosed the issue within 2 hours and had us running in 3 days. The spindle has been performing perfectly for 8 months now."',
    name: 'Rajesh Patil',
    role: 'Production Head — Auto Component, Pune',
    avatar: 'R',
    image: '/images/rajesh_patil.png',
  },
  {
    text: '"We send all our high-frequency grinding spindles exclusively to GPS. Nobody else in Pune handles 40,000 RPM with this level of care. The written inspection report they provide is excellent for our ISO audits."',
    name: 'Amol Deshmukh',
    role: 'Maintenance Manager — Medical Devices Mfr.',
    avatar: 'A',
    image: '/images/amol_deshmukh.png',
  },
  {
    text: '"Reliable, fast, and technically sound. GPS Spindles repaired 3 of our Mazak HMC spindles in 2024. Cost was 40% less than OEM replacement and performance is identical. Highly recommended."',
    name: 'Vikram Sharma',
    role: 'Plant Manager — Aerospace Sub-contractor',
    avatar: 'V',
    image: '/images/vikram_sharma.png',
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: 0 }}>
          <div className="label" style={{ justifyContent: 'center' }}>Client Reviews</div>
          <h2>What Our Clients <span style={{ color: 'var(--orange)' }}>Say</span></h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testi-card reveal${i > 0 ? ` delay-${i}` : ''}`}>
              <div className="testi-stars">
                {[1, 2, 3, 4, 5].map(s => <StarIcon key={s} />)}
              </div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">
                  {t.image ? (
                    <img src={t.image} alt={t.name} />
                  ) : (
                    t.avatar
                  )}
                </div>
                <div className="testi-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
