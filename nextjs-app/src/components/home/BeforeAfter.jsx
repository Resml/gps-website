export default function BeforeAfter() {
  return (
    <section className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="text-center reveal">
          <div className="label" style={{ justifyContent: 'center' }}>Proven Results</div>
          <h2>Before &amp; After <span style={{ color: 'var(--orange)' }}>Restoration</span></h2>
          <p style={{ marginTop: '10px', marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            See the dramatic difference in quality and precision. We take heavily damaged, worn-out spindles and restore them to pristine, OEM-grade conditions.
          </p>
        </div>
        <div className="res-grid-2" style={{ marginTop: '20px', gap: '24px' }}>
          {/* BEFORE */}
          <div className="reveal">
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center',
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <h3 style={{ color: '#dc2626', marginBottom: '15px', fontSize: '20px', fontWeight: '700' }}>
                Before: Broken &amp; Rusty
              </h3>
              <img
                src="/images/spindle-before.webp"
                alt="Damaged spindle before repair"
                style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', maxHeight: '260px' }}
              />
              <p style={{ marginTop: '15px', fontSize: '14px', color: 'var(--muted)' }}>
                Severely damaged bearings, rust accumulation, and loss of precision.
              </p>
            </div>
          </div>
          {/* AFTER */}
          <div className="reveal delay-1">
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center',
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <h3 style={{ color: '#16a34a', marginBottom: '15px', fontSize: '20px', fontWeight: '700' }}>
                After: OEM Restored
              </h3>
              <img
                src="/images/spindle-after.webp"
                alt="Spindle after OEM restoration"
                style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', maxHeight: '260px' }}
              />
              <p style={{ marginTop: '15px', fontSize: '14px', color: 'var(--muted)' }}>
                Fully reconditioned, dynamically balanced, and tested to perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
