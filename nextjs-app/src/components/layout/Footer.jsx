import Link from 'next/link';

const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* BRAND */}
            <div className="footer-brand">
              <img src="/images/logo.jpg" alt="General Precision Spindles" className="footer-logo" />
              <p>General Precision Spindles (GPS) — Pune's most trusted CNC, VMC &amp; HMC spindle repair and reconditioning specialists since 2017. Serving 3000+ clients and 5000+ completed projects with documented quality and 1-year warranty.</p>
              <div className="footer-social">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/g-p-s-86286b402" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/general_precision_spindles" target="_blank" rel="noopener" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/share/19Pid2vPhV/" target="_blank" rel="noopener" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com/@generalprecisionspindles" target="_blank" rel="noopener" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a href="https://x.com/gps_spindles" target="_blank" rel="noopener" aria-label="X (Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/919764032929" target="_blank" rel="noopener" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/"><ChevronIcon />Home</Link></li>
                <li><Link href="/about-gps"><ChevronIcon />About Us</Link></li>
                <li><Link href="/brands-we-repair"><ChevronIcon />Brands We Repair</Link></li>
                <li><Link href="/industries-we-serve"><ChevronIcon />Industries We Serve</Link></li>
                <li><Link href="/gps-contact"><ChevronIcon />Contact</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link href="/services/vmc-hmc-and-cnc-spindles-reconditioning-repairing-services"><ChevronIcon />VMC / HMC / CNC Repair</Link></li>
                <li><Link href="/services/high-frequency-speed-precision-grinding-spindles-repairing-services"><ChevronIcon />High-Frequency Grinding</Link></li>
                <li><Link href="/services/customized-spindles-manufacturer"><ChevronIcon />Custom Manufacturing</Link></li>
                <li><Link href="/services/spindle-accessories-spare-parts-manufacturer"><ChevronIcon />Accessories &amp; Parts</Link></li>
                <li><Link href="/services/milling-heads-reconditioning-repairing-restoration-services"><ChevronIcon />Milling Head Repair</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4>Contact &amp; Locations</h4>
              <ul className="footer-contact">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>15/A/2, Shop No.5, GKD Industrial Estate, Nanded Phata, Sinhgad Road, Pune – 411041</p>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p><a href="tel:+919764252188">+91 97642 52188</a><br /><a href="tel:+919764032929">+91 9764032929</a></p>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>
                    <a href="mailto:anilvakude@gpsspindles.com">anilvakude@gpsspindles.com</a>
                    <br />
                    <a href="mailto:sachinkuchekar@gpsspindles.com">sachinkuchekar@gpsspindles.com</a>
                  </p>
                </li>
              </ul>
              <div style={{ marginTop: '16px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0!2d73.7935774!3d18.4578573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2952c53d84e9f%3A0x63a85f269f33f470!2sGeneral%20Precision%20Spindles!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                  width="100%" height="170" style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="GPS Spindles Location Map">
                </iframe>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 General Precision Spindles, Pune. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/gps-contact">Contact</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
