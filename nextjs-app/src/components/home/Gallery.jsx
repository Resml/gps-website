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
              <source src="/images/cnc-v.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="gallery-item-overlay">
              <span className="gallery-tag">Live Workshop</span>
            </div>
          </div>
          <div className="gallery-item video-item">
            <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/images/IMG_5140.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="gallery-item-overlay">
              <span className="gallery-tag">Live Workshop</span>
            </div>
          </div>
          <div className="gallery-item video-item">
            <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/images/gallery/IMG_2389.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="gallery-item-overlay">
              <span className="gallery-tag">Live Workshop</span>
            </div>
          </div>
          {[
            { id: '1310', src: '/images/gallery/IMG_1310.jpg' },
            { id: '3705', src: '/images/gallery/IMG_3705.png' },
            { id: '3708', src: '/images/gallery/IMG_3708.png', isVertical: true },
            { id: '3709', src: '/images/gallery/IMG_3709.png' },
            { id: '13', src: '/images/gallery/gallery_13.jpg' },
            { id: '14', src: '/images/gallery/gallery_14.jpg' },
            { id: '15', src: '/images/gallery/gallery_15.jpg' }
          ].map(item => (
            <a
              key={item.id}
              className="gallery-item"
              href={item.src}
              onClick={(e) => e.preventDefault()}
              style={{
                ...(item.isTransparent ? { background: 'rgba(30, 41, 59, 0.5)', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}),
                ...(item.isVertical ? { gridRow: 'span 2' } : {})
              }}
            >
              <img
                src={item.src}
                alt="Original Work Photo"
                loading="lazy"
                style={{
                  ...(item.isTransparent ? { objectFit: 'contain', width: '100%', height: '100%' } : {}),
                  ...(item.isVertical ? { objectFit: 'contain', background: 'rgba(15, 23, 42, 0.2)' } : {})
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
