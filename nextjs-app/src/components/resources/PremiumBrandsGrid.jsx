'use client';
import React, { useState } from 'react';

const brandsData = [
  { id: 1, name: 'DMG Mori', image: '/images/clients/client1.webp', topTier: true },
  { id: 2, name: 'Makino', image: '/images/clients/client2.webp', topTier: true },
  { id: 3, name: 'Haas', image: '/images/clients/client3.webp', topTier: true },
  { id: 4, name: 'Hartford', image: '/images/clients/client4.webp' },
  { id: 5, name: 'BFW', image: '/images/clients/client5.webp' },
  { id: 6, name: 'AMS', image: '/images/clients/client6.webp' },
  { id: 7, name: 'TAL', image: '/images/clients/client7.webp' },
  { id: 8, name: 'Kessler', image: '/images/clients/client8.webp' },
  { id: 9, name: 'Doosan', image: '/images/clients/client9.webp', topTier: true },
  { id: 10, name: 'Mazak', image: '/images/clients/client10.webp', topTier: true },
  { id: 12, name: 'Okuma', image: '/images/clients/client12.webp', topTier: true },
  { id: 13, name: 'Setco', image: '/images/clients/client13.webp' },
  { id: 14, name: 'Grob', image: '/images/clients/client14.webp' },
  { id: 15, name: 'Kitamura', image: '/images/clients/client15.webp' },
  { id: 16, name: 'Chiron', image: '/images/clients/client16.webp' },
  { id: 17, name: 'FANUC', image: '/images/clients/client17.webp', topTier: true },
  { id: 18, name: 'GMN', image: '/images/clients/client18.webp' },
  { id: 19, name: 'Heller', image: '/images/clients/client19.webp' },
  { id: 20, name: 'Hurco', image: '/images/clients/client20.webp' },
  { id: 21, name: 'Dake', image: '/images/clients/client21.webp' },
  { id: 22, name: 'Hyundai', image: '/images/clients/client22.webp' },
  { id: 23, name: 'Takisawa', image: '/images/clients/client23.webp' },
  { id: 24, name: 'Weiss', image: '/images/clients/client24.webp' },
  { id: 25, name: 'Jyoti', image: '/images/clients/client25.webp' },
  { id: 26, name: 'LMW', image: '/images/clients/client26.webp' },
  { id: 27, name: 'Fischer', image: '/images/clients/client27.webp' },
  { id: 28, name: 'EMAG', image: '/images/clients/client28.webp' },
  { id: 29, name: 'Lokesh', image: '/images/clients/client29.webp' },
  { id: 30, name: 'Brother', image: '/images/clients/client30.webp' },
  { id: 31, name: 'YCM', image: '/images/clients/client31.webp' },
  { id: 32, name: 'Gamfior', image: '/images/clients/client32.webp' },
  { id: 33, name: 'Westwind', image: '/images/clients/client33.webp' },
  { id: 34, name: 'Royal', image: '/images/clients/client34.webp' },
  { id: 35, name: 'Tsugami', image: '/images/clients/client35.webp' },
  { id: 36, name: 'Omlat', image: '/images/clients/client36.webp' },
  { id: 37, name: 'IBAG', image: '/images/clients/client37.webp' },
  { id: 39, name: 'HSD', image: '/images/clients/client39.jpg' },
  { id: 40, name: 'Step Tec', image: '/images/clients/client40.jpg' },
];

export default function PremiumBrandsGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBrands = brandsData.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section style={{ padding: '100px 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {/* Decorative background blobs */}
      <div style={{ position: 'absolute', top: '-15%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(15,23,42,0.04) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header Area */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <span className="ab-tag" style={{ marginBottom: '16px' }}>OEM-Grade Expertise</span>
          <h2 style={{ fontSize: '42px', color: 'var(--navy)', marginBottom: '24px', lineHeight: 1.2 }}>
            We Repair Spindles from <span style={{ color: 'var(--orange)' }}>Top Global Brands</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '18px', lineHeight: 1.6 }}>
            Our Pune facility is equipped to provide comprehensive repairing, rebuilding, and reconditioning services for a vast range of CNC, VMC, and HMC spindles.
          </p>
        </div>

        {/* Search Bar (Glassmorphic) */}
        <div className="reveal delay-1" style={{ maxWidth: '600px', margin: '0 auto 60px', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-orange)', borderRadius: '50px', transform: 'scale(1.02) translateY(4px)', filter: 'blur(12px)', opacity: 0.15 }} />
          <div style={{ 
            position: 'relative', 
            background: '#fff', 
            border: '1px solid rgba(15, 23, 42, 0.1)', 
            borderRadius: '50px', 
            padding: '8px 8px 8px 24px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="var(--muted)" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search for your spindle brand (e.g. Haas, Makino)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                padding: '12px 16px',
                fontSize: '16px',
                color: 'var(--navy)',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        {/* Top Tier Brands Spotlight */}
        <div className="reveal delay-2" style={{ marginBottom: '60px', display: searchTerm === '' ? 'block' : 'none' }}>
          <h3 style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', textAlign: 'center', marginBottom: '32px' }}>Most Frequently Serviced</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px' }}>
            {brandsData.filter(b => b.topTier).map(brand => (
              <div key={brand.id} style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(234,88,12,0.12)';
                e.currentTarget.style.borderColor = 'rgba(234,88,12,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
              title={brand.name}>
                <img src={brand.image} alt={`${brand.name} Spindle Repair`} style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain', transition: 'all 0.3s' }} />
              </div>
            ))}
          </div>
        </div>

        {/* All Brands Grid */}
        <div className="reveal delay-3">
          <h3 style={{ fontSize: '24px', color: 'var(--navy)', marginBottom: '32px', textAlign: 'center' }}>
            {searchTerm === '' ? 'All Supported Brands' : `Search Results for "${searchTerm}"`}
          </h3>
          
          {filteredBrands.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '24px', border: '1px dashed var(--border)' }}>
              <p style={{ color: 'var(--muted)', fontSize: '18px' }}>No brand found matching your search.</p>
              <button onClick={() => setSearchTerm('')} className="btn btn-outline" style={{ marginTop: '16px' }}>Clear Search</button>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
              gap: '20px' 
            }}>
              {filteredBrands.map((brand, index) => (
                <div key={brand.id} style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '24px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.5s ease forwards`,
                  animationDelay: `${(index % 10) * 50}ms`,
                  opacity: 0,
                  transform: 'translateY(10px)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(15,23,42,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(15,23,42,0.15)';
                  e.currentTarget.style.opacity = '1'; // ensure opacity stays 1 on hover
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
                title={brand.name}>
                  <img src={brand.image} alt={`${brand.name} Repair`} style={{ maxWidth: '100%', maxHeight: '40px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
