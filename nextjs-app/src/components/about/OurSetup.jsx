export default function OurSetup() {
  const galleryImages = [
    { src: '/images/ws-g.jpg', caption: 'Main Workshop Floor', tag: 'Workshop' },
    { src: '/images/ws-h.jpg', caption: 'Spindle Assembly Area', tag: 'Assembly' },
    { src: '/images/ws-i.jpg', caption: 'Quality Testing Lab', tag: 'Testing' },
    { src: '/images/ws-j.jpg', caption: 'Precision Tooling Room', tag: 'Tooling' },
    { src: '/images/ws-k.jpg', caption: 'Component Storage & Prep', tag: 'Storage' },
    { src: '/images/ws-l.jpg', caption: 'Final Inspection & QC', tag: 'QC' },
  ];

  return (
    <section className="ab-setup-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="ab-setup-header reveal">
          <span className="ab-tag">Inside GPS</span>
          <h2 className="ab-setup-headline">
            Where Precision <span className="ab-highlight-text">Gets Made</span>
          </h2>
          <p className="ab-setup-sub">
            A purpose-built facility at GKD Industrial Estate, Pune — with dedicated rooms for
            assembly, precision testing, quality control, and final dispatch.
          </p>
        </div>

        {/* ── Magazine Grid: 1 large + 5 smaller ── */}
        <div className="ab-mag-grid">

          {/* Feature — left tall column */}
          <div className="ab-mag-hero reveal">
            <img src={galleryImages[0].src} alt={galleryImages[0].caption} />
            <div className="ab-mag-hover-cap">
              <span className="ab-mag-tag">{galleryImages[0].tag}</span>
              <span className="ab-mag-cap">{galleryImages[0].caption}</span>
            </div>
          </div>

          {/* 5 smaller cells */}
          {galleryImages.slice(1).map((img, i) => (
            <div key={i} className={`ab-mag-cell reveal delay-${i + 1}`}>
              <img src={img.src} alt={img.caption} />
              <div className="ab-mag-hover-cap">
                <span className="ab-mag-tag">{img.tag}</span>
                <span className="ab-mag-cap">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Fact chips ── */}
        <div className="ab-setup-facts reveal">
          {[
            {
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              text: 'Dedicated Spindle Clean Room',
            },
            {
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              ),
              text: 'Precision Testing Equipment',
            },
            {
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              text: 'OEM-Grade Assembly Tools',
            },
            {
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              ),
              text: 'Rigorous QC Before Dispatch',
            },
          ].map((f, i) => (
            <div key={i} className="ab-setup-fact">
              <div className="ab-setup-fact-icon">{f.svg}</div>
              <span className="ab-setup-fact-text">{f.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
