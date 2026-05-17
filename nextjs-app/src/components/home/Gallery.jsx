export default function Gallery() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="text-center reveal">
          <div className="label" style={{ justifyContent: 'center' }}>Our Work</div>
          <h2>Workshop <span style={{ color: 'var(--orange)' }}>Gallery</span></h2>
          <p style={{ marginTop: '12px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>Real spindles. Real repairs. Real results from our Pune workshop.</p>
        </div>
        <div className="gallery-masonry reveal">
          <div className="gallery-item video-item">
            <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/images/hero-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="gallery-item-overlay">
              <span className="gallery-tag">Live Workshop</span>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <a key={num} className="gallery-item" href={`/images/gallery/gallery_${num}.jpg`} onClick={(e) => e.preventDefault()}>
              <img src={`/images/gallery/gallery_${num}.jpg`} alt="Original Work Photo" loading="lazy" />
              <div className="gallery-item-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
