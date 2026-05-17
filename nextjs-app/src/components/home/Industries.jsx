export default function Industries() {
  const industries = [
    {
      name: 'Automotive',
      path: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
    },
    {
      name: 'Aerospace',
      path: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    },
    {
      name: 'Defence',
      path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      name: 'Medical Devices',
      path: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    {
      name: 'Heavy Engineering',
      path: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      name: 'Mould & Die',
      path: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    },
    {
      name: 'Pharma',
      path: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    },
    {
      name: 'Electronics',
      path: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: 0 }}>
          <div className="label" style={{ justifyContent: 'center' }}>Sectors</div>
          <h2>Industries We <span style={{ color: 'var(--orange)' }}>Serve</span></h2>
          <p style={{ marginTop: '10px' }}>Trusted by production engineers across these critical manufacturing sectors.</p>
        </div>
        <div className="industries-grid">
          {industries.map((industry, i) => (
            <div key={i} className={`industry-card reveal${i > 0 ? ` delay-${Math.min(i % 4, 3)}` : ''}`}>
              <div className="industry-card-content">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={industry.path} />
                </svg>
                <h4>{industry.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
