import Link from 'next/link';

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="services-header reveal">
          <div className="label">What We Do</div>
          <h2>Complete Spindle <span style={{ color: 'var(--orange)' }}>Solutions</span> Under One Roof</h2>
          <p style={{ marginTop: '12px' }}>From diagnosis to delivery — all spindle repair, reconditioning and manufacturing needs handled in-house.</p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-card-img">
              <img src="/images/vmc-spindles-2.jpg" alt="VMC HMC CNC Spindle Reconditioning" />
              <div className="service-card-img-overlay"></div>
            </div>
            <div className="service-card-body">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>VMC / HMC / CNC Spindle Reconditioning</h3>
              <p>Full disassembly, precision cleaning, OEM-grade bearing replacement, taper grinding & RPM testing.</p>
              <Link href="/services/vmc-hmc-and-cnc-spindles-reconditioning-repairing-services" className="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></Link>
            </div>
          </div>
          <div className="service-card reveal delay-1">
            <div className="service-card-img">
              <img src="/images/high-frequency-spindles.jpg" alt="High Frequency Grinding Spindles" />
              <div className="service-card-img-overlay"></div>
            </div>
            <div className="service-card-body">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>High-Frequency Grinding Spindle Repair</h3>
              <p>Expert repair up to 60,000 RPM. Dynamic balancing and vibration analysis included.</p>
              <Link href="/services/high-frequency-speed-precision-grinding-spindles-repairing-services" className="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></Link>
            </div>
          </div>
          <div className="service-card reveal delay-2">
            <div className="service-card-img">
              <img src="/images/customized-spindles-2.jpg" alt="Custom Spindle Manufacturing" />
              <div className="service-card-img-overlay"></div>
            </div>
            <div className="service-card-body">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3>Custom Spindle Manufacturing</h3>
              <p>Bespoke design & manufacturing for SPMs and special industrial applications.</p>
              <Link href="/services/customized-spindles-manufacturer" className="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></Link>
            </div>
          </div>
          <div className="service-card reveal delay-1">
            <div className="service-card-img" style={{ background: '#ececec' }}>
              <img src="/images/spindle-accessories-2.webp" alt="Spindle Accessories" style={{ objectFit: 'contain' }} />
              <div className="service-card-img-overlay"></div>
            </div>
            <div className="service-card-body">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3>Spindle Accessories & Spare Parts</h3>
              <p>Bearings (SKF/FAG/NSK), drawbars, disc springs, collets, encoder rings, pulleys and more.</p>
              <Link href="/services/spindle-accessories-spare-parts-manufacturer" className="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></Link>
            </div>
          </div>
          <div className="service-card reveal delay-2">
            <div className="service-card-img">
              <img src="/images/milling-heads-repairing-and-services.jpg" alt="Milling Head Repair" />
              <div className="service-card-img-overlay"></div>
            </div>
            <div className="service-card-body">
              <div className="service-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3>Milling Heads Repairing Services</h3>
              <p>Complete restoration of CNC and VMC milling heads. OEM-equivalent specs, all brands.</p>
              <Link href="/services/milling-heads-reconditioning-repairing-restoration-services" className="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></Link>
            </div>
          </div>
          <div className="service-card service-emergency reveal delay-3">
            <h3>Emergency Spindle Down?</h3>
            <p>Don't lose another hour of production. WhatsApp us right now — same-day assessment guaranteed.</p>
            <a href="https://wa.me/919764032929?text=Emergency!%20My%20spindle%20is%20down%20and%20I%20need%20urgent%20help." className="btn btn-wa" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Emergency WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
