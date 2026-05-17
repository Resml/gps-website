export default function Clients() {
  const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const row2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40];

  return (
    <section className="section section-alt clients-section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '40px' }}>
          <div className="label" style={{ justifyContent: 'center' }}>900+ Happy Clients</div>
          <h2>Trusted By <span style={{ color: 'var(--orange)' }}>India's Top Manufacturers</span></h2>
          <p style={{ marginTop: '10px' }}>From Pune's auto belt to pan-India aerospace & defence facilities.</p>
        </div>
        <div className="logos-marquee reveal">
          <div className="logos-track logos-track-fwd">
            {row1.map(num => (
              <div key={`client-${num}`} className="logo-card">
                <img src={`/images/clients/client${num}.${num === 39 || num === 40 ? 'jpg' : 'webp'}`} alt={`Client ${num}`} loading="lazy" />
              </div>
            ))}
            {row1.map(num => (
              <div key={`client-dup-${num}`} className="logo-card">
                <img src={`/images/clients/client${num}.${num === 39 || num === 40 ? 'jpg' : 'webp'}`} alt={`Client ${num}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="logos-marquee reveal" style={{ marginTop: '16px' }}>
          <div className="logos-track logos-track-rev">
            {row2.map(num => (
              <div key={`client-${num}`} className="logo-card">
                <img src={`/images/clients/client${num}.${num === 39 || num === 40 ? 'jpg' : 'webp'}`} alt={`Client ${num}`} loading="lazy" />
              </div>
            ))}
            {row2.map(num => (
              <div key={`client-dup-${num}`} className="logo-card">
                <img src={`/images/clients/client${num}.${num === 39 || num === 40 ? 'jpg' : 'webp'}`} alt={`Client ${num}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '32px' }}>
          <a href="/brands-we-repair" className="btn btn-outline">View All Brands & Clients →</a>
        </div>
      </div>
    </section>
  );
}
