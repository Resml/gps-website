export default function Brands() {
  const brands = [
    'Fanuc', 'Siemens', 'Mazak', 'DMG Mori', 'Makino', 'Okuma', 'Haas', 'BFW', 'ACE Micromatic',
    'Jyoti CNC', 'Yamazaki', 'Mitsui Seiki', 'Doosan', 'Hyundai WIA', 'Hartford', 'Brother',
    'Kitamura', 'Matsuura'
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '14px' }}>
          <div className="label" style={{ justifyContent: 'center' }}>50+ Machine Brands</div>
          <h2>Machine Brands We <span style={{ color: 'var(--orange)' }}>Repair</span></h2>
          <p style={{ marginTop: '10px' }}>All major CNC, VMC & HMC manufacturer spindles serviced with OEM-grade parts.</p>
        </div>
        <div className="brands-marquee" style={{ marginBottom: 0 }}>
          <div className="brands-track">
            {brands.map((brand, i) => <span key={`brand1-${i}`} className="brand-pill">{brand}</span>)}
            {/* Duplicate for infinite scroll */}
            {brands.map((brand, i) => <span key={`brand2-${i}`} className="brand-pill">{brand}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
