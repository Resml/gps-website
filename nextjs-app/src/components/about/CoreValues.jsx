export default function CoreValues() {
  const values = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      accent: '#FDBA74',
      title: 'Company Vision',
      text: 'To become the leading company through continuous innovation and advancements in spindle repair — setting the benchmark for precision engineering in India.',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      accent: '#60A5FA',
      title: 'Values & Mission',
      text: 'Deliver excellence in spindle reconditioning and manufacturing while upholding integrity, reliability, and innovation. We are dedicated to exceeding client expectations at every step.',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      accent: '#34D399',
      title: 'Achievements',
      text: '900+ clients across Maharashtra trust GPS for their most critical spindle work. Industry accolades for outstanding service and technical expertise that continues to grow.',
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      accent: '#A78BFA',
      title: 'Quality Assurance',
      text: 'Every spindle meets stringent quality benchmarks before it leaves our facility. Industry-leading QC processes, rigorous testing, and a 1-year warranty — all guaranteed.',
    },
  ];

  return (
    <section className="ab-values-section">
      <div className="container">

        {/* Header */}
        <div className="ab-values-header reveal">
          <span className="ab-tag ab-tag-light">Our Philosophy</span>
          <h2 className="ab-values-headline">
            Built on <span className="ab-highlight-text">Principles</span> That Last
          </h2>
          <p className="ab-values-sub">
            Four pillars that define how we work, what we stand for, and why hundreds of manufacturers trust GPS with their most critical equipment.
          </p>
        </div>

        {/* Cards */}
        <div className="ab-values-grid">
          {values.map((val, i) => (
            <div key={i} className={`ab-value-card reveal delay-${i + 1}`} style={{ '--accent': val.accent }}>
              <div className="ab-value-icon-wrap">
                {val.svg}
              </div>
              <div className="ab-value-num">0{i + 1}</div>
              <h3 className="ab-value-title">{val.title}</h3>
              <p className="ab-value-text">{val.text}</p>
              <div className="ab-value-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
