'use client'
const BOOKING_URL = 'https://www.vagaro.com/michaelcorcoranlmt/book-now'

// TODO: Michael — replace these with your real Vagaro service names, durations, and prices.
const SERVICES = [
  { name: 'Integrative Therapeutic Massage', duration: '60/75/90 min', price: '$115/144/172', note: 'A fully customized session drawing on whichever modalities your body needs.' },
  { name: 'Ashiatsu', duration: '60/75/90 min', price: '$115/144/172', note: 'Barefoot massage \u2014 effectively addresses multiple areas in depth.' },
  { name: 'Deep Tissue', duration: '60/75/90 min', price: '$115/144/172', note: 'Targeted deep work for chronic tension and dense muscle groups.' },
  { name: 'Shiatsu / Thai Bodywork Floor', duration: '60/75/90 min', price: '$115/144/172', note: 'Meridian-based pressure and assisted stretching, performed clothed on the floor.' },
  { name: 'Shiatsu / Thai Bodywork Table', duration: '60/75/90 min', price: '$115/144/172', note: 'Meridian-based pressure and assisted stretching, performed clothed on the table.' },
  { name: 'Cupping &amp; Myofascial Add-On', duration: 'upon request', 'no additional charge', note: 'Add decompression and fascial work to any session.' },
]

export default function Services() {
  return (
    <>
      <style>{`
        .services-section { padding: 6rem 5rem; background: #f5edd8; }
        .service-row {
          display: flex; justify-content: space-between; align-items: center;
          gap: 1.5rem; padding: 1.6rem 0; border-top: 1px solid rgba(92,61,30,0.12);
        }
        @media (max-width: 768px) {
          .services-section { padding: 3.5rem 1.5rem !important; }
          .service-row { flex-direction: column; align-items: flex-start !important; gap: 1rem; }
          .service-actions { width: 100%; display: flex; justify-content: space-between; align-items: center; }
        }
      `}</style>
      <section id="services" className="services-section">
        <div style={{ marginBottom: '2.5rem', maxWidth: 640 }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9572a', marginBottom: '1rem', fontWeight: 500 }}>Sessions &amp; Rates</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: '#1a2640' }}>
            Services &amp; <em style={{ fontStyle: 'italic', color: '#5c3d1e' }}>Pricing</em>
          </h2>
          <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', lineHeight: 1.9, color: '#7a6a58' }}>
            Every session is tailored to you. If you&apos;re not sure which to choose, book the integrative session and we&apos;ll shape it together.
          </p>
        </div>

        <div>
          {SERVICES.map((s, i) => (
            <div key={i} className="service-row">
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#1a2640', fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: s.name }} />
                <div style={{ fontSize: '0.85rem', color: '#7a6a58', marginTop: '0.3rem' }} dangerouslySetInnerHTML={{ __html: s.note }} />
              </div>
              <div className="service-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#1a2640', lineHeight: 1 }}>{s.price}</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a6a58' }} dangerouslySetInnerHTML={{ __html: s.duration }} />
                </div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
                  padding: '0.75rem 1.5rem', background: '#c9572a', color: 'white',
                  textDecoration: 'none', fontSize: '0.68rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', fontWeight: 500, whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#b84a20')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#c9572a')}
                >Book</a>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(92,61,30,0.12)' }} />
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', padding: '1rem 2.6rem', background: '#1a2640', color: '#f5edd8',
            textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500,
          }}>See Full Menu &amp; Book on Vagaro</a>
        </div>
      </section>
    </>
  )
}
