export default function AboutCompany() {
  return (
    <section className="ab-story-section">
      <div className="container">

        {/* ── SECTION LABEL ── */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '16px' }}>
          <span className="ab-tag">Who We Are</span>
        </div>

        {/* ── EDITORIAL SPLIT ── */}
        <div className="ab-split reveal">

          {/* LEFT — story text */}
          <div className="ab-split-text">
            <h2 className="ab-headline">
              Pune's Most Trusted<br />
              <span className="ab-headline-accent">Spindle Specialists</span>
            </h2>
            <p className="ab-lead">
              Founded in 2017, General Precision Spindles (GPS) grew from a single spindle room into a reliable reconditioning and manufacturing partner — trusted by 3000+ clients and having successfully completed over 5000+ projects across the manufacturing industry.
            </p>
            <p className="ab-sub">
              Located at GKD Industrial Estate, Sinhgad Road, Pune, we specialise in the repair, rebuilding, restoration, and reconditioning of CNC, VMC, HMC, high-speed, and precision spindles. Our team of skilled technicians and engineers brings 20+ years of industry know-how to every project.
            </p>

            {/* Animated stats */}
            <div className="ab-stats-row">
              {[
                { num: '2017', label: 'Year Founded' },
                { num: '3000+', label: 'Happy Clients' },
                { num: '5000+', label: 'Projects Done' },
                { num: '1 Yr', label: 'Warranty' },
              ].map((s, i) => (
                <div key={i} className="ab-stat">
                  <div className="ab-stat-num">{s.num}</div>
                  <div className="ab-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — stacked real photos */}
          <div className="ab-split-media reveal-right">
            <div className="ab-img-stack">
              <img
                className="ab-img-main"
                src="/images/about-hero-1.jpg"
                alt="GPS Spindles workshop"
              />
              <img
                className="ab-img-thumb"
                src="/images/about-hero-2.jpg"
                alt="Spindle reconditioning"
              />
              <div className="ab-float-badge">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>ISO-Grade<br />Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── EXPERTISE PILLARS ── */}
        <div className="ab-pillars-grid">
          {[
            {
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Core Services',
              text: 'Comprehensive spindle reconditioning and precision manufacturing. Worn spindles refurbished to OEM standards — ensuring optimal performance and longevity.',
            },
            {
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Expertise & Experience',
              text: '20+ years of deep expertise in spindle diagnostics, repair, and manufacturing. Cutting-edge technology meets meticulous craftsmanship on every job.',
            },
            {
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Customer Focus',
              text: 'We collaborate closely with every client, offering personalised solutions and fast support. Long-term partnerships built on trust, reliability, and exceptional service.',
            },
            {
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: 'Technology & Innovation',
              text: 'Harnessing the latest advancements in spindle tech — innovative materials and precision manufacturing techniques that optimise performance and durability.',
            },
          ].map((pillar, i) => (
            <div key={i} className={`ab-pillar-card reveal delay-${i + 1}`}>
              <div className="ab-pillar-svg">{pillar.svg}</div>
              <h3 className="ab-pillar-title">{pillar.title}</h3>
              <p className="ab-pillar-text">{pillar.text}</p>
            </div>
          ))}
        </div>

        {/* ── RECONDITIONING PROCESS ── */}
        <div className="ab-process-section reveal">
          <div className="ab-process-header">
            <span className="ab-tag">How We Work</span>
            <h3 className="ab-process-title">Our 5-Step Reconditioning Process</h3>
          </div>

          <div className="ab-process-cards">
            {[
              {
                step: '01',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="26" height="26">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: 'Inspect & Diagnose',
                desc: 'Full inspection and root-cause analysis using precision measuring instruments.',
              },
              {
                step: '02',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="26" height="26">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                title: 'Repair & Replace',
                desc: 'Worn bearings, seals, and components replaced with OEM-grade parts.',
              },
              {
                step: '03',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="26" height="26">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Refurbish to OEM Spec',
                desc: 'Precision machining and assembly to manufacturer specifications.',
              },
              {
                step: '04',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="26" height="26">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: 'Test & Quality Control',
                desc: 'Run-in tests, vibration analysis, and thermal checks before sign-off.',
              },
              {
                step: '05',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="26" height="26">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: '1-Year Warranty & Deliver',
                desc: 'Securely packaged, fully documented, and delivered with 1-year warranty.',
              },
            ].map((s, i) => (
              <div key={i} className={`ab-proc-card reveal delay-${i + 1}`}>
                {/* Connector line between cards */}
                {i < 4 && <div className="ab-proc-connector" />}

                <div className="ab-proc-icon-wrap">
                  {s.icon}
                </div>
                <div className="ab-proc-badge">{s.step}</div>
                <h4 className="ab-proc-card-title">{s.title}</h4>
                <p className="ab-proc-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
