'use client'
const BOOKING_URL = 'https://www.vagaro.com/michaelcorcoranlmt/book-now'

const MODALITIES = ['Shiatsu', 'Ashiatsu', 'Thai Massage', 'Cupping', 'Myofascial', 'Deep Tissue', 'Trigger Point']

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-grid {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .hero-right-img {
          width: 78%;
          max-width: 440px;
          opacity: 0.9;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-left {
            padding: 2rem 1.5rem 3rem !important;
            order: 2;
          }
          .hero-right {
            order: 1;
            min-height: 60vw !important;
            padding-top: 56px !important;
          }
          .hero-right-img {
            width: 72% !important;
          }
          .hero-title {
            font-size: 2.4rem !important;
          }
          .hero-sub {
            font-size: 0.88rem !important;
          }
        }
      `}</style>

      <section className="hero-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Left */}
        <div className="hero-left" style={{ background: '#1a2640', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 4rem 6rem 5rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9572a', marginBottom: '1.5rem', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>
            Licensed Massage Therapist · Albany, NY
          </p>
          <h1 className="hero-title" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 4vw, 4.5rem)', fontWeight: 300, lineHeight: 1.05, color: '#f5edd8', marginBottom: '1rem' }}>
            Professional<br />
            <em style={{ fontStyle: 'italic', color: '#b8956a' }}>Massage &amp; Bodyworks</em>
          </h1>
          <div style={{ width: 60, height: 2, background: '#c9572a', margin: '1.8rem 0' }} />
          <p className="hero-sub" style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.72)', maxWidth: 380 }}>
            Therapeutic bodywork that draws on many traditions — from shiatsu and Thai to deep tissue and myofascial release — woven together to meet your body where it needs it most.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', marginTop: '2.5rem', padding: '0.9rem 2.4rem',
            background: '#c9572a', color: '#f5edd8', textDecoration: 'none',
            fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500,
            alignSelf: 'flex-start',
          }}>
            Book an Appointment
          </a>
        </div>

        {/* Right */}
        <div className="hero-right" style={{ position: 'relative', overflow: 'hidden', background: '#e8d8b8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* TODO: replace /logo-placeholder.svg with your own logo file */}
          <img src="/logo-placeholder.svg" alt="Michael Corcoran LMT" className="hero-right-img" />
        </div>
      </section>

      {/* Marquee — modalities */}
      <div style={{ background: '#1a2640', padding: '0.85rem 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 25s linear infinite' }}>
          {Array(2).fill(null).map((_, i) => (
            <span key={i}>
              {MODALITIES.map((t, j) => (
                <span key={j}>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b8956a', margin: '0 2rem' }}>{t}</span>
                  <span style={{ color: '#c9572a' }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </>
  )
}