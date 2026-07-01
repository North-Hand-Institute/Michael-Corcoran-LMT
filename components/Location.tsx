const BOOKING_URL = 'https://www.vagaro.com/michaelcorcoranlmt/book-now'

// TODO: Michael — replace with your real address and hours.
const HOURS = [
  { day: 'Monday', time: '9:00 AM \u2013 6:00 PM' },
  { day: 'Tuesday', time: '9:00 AM \u2013 6:00 PM' },
  { day: 'Wednesday', time: '9:00 AM \u2013 6:00 PM' },
  { day: 'Thursday', time: '9:00 AM \u2013 6:00 PM' },
  { day: 'Friday', time: '9:00 AM \u2013 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM \u2013 3:00 PM' },
  { day: 'Sunday', time: 'Closed' },

]

export default function Location() {
  return (
    <>
      <style>{`
        .location-section { padding: 6rem 5rem; background: #e8d8b8; }
        .location-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        @media (max-width: 768px) {
          .location-section { padding: 3.5rem 1.5rem !important; }
          .location-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
      <section id="location" className="location-section">
        <div className="location-grid">
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9572a', marginBottom: '1rem', fontWeight: 500 }}>Visit</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: '#1a2640', marginBottom: '2rem' }}>
              Location &amp; <em style={{ fontStyle: 'italic', color: '#5c3d1e' }}>Hours</em>
            </h2>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9572a', fontWeight: 500, marginBottom: '0.4rem' }}>Address</div>
              <a href="https://www.google.com/maps/search/?api=1&query=485+Western+Ave+Albany+NY+12203" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#1a2640', lineHeight: 1.5, textDecoration: 'none', display: 'inline-block' }}>
                485 Western Ave<br />Albany, NY 12203
              </a>
            </div>

            <div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9572a', fontWeight: 500, marginBottom: '0.6rem' }}>Hours</div>
              <div>
                {HOURS.map(h => (
                  <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 320, padding: '0.4rem 0', borderBottom: '1px solid rgba(92,61,30,0.1)' }}>
                    <span style={{ fontSize: '0.9rem', color: '#1a2640' }}>{h.day}</span>
                    <span style={{ fontSize: '0.9rem', color: '#7a6a58' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', marginTop: '2.5rem', padding: '0.9rem 2.4rem',
              background: '#c9572a', color: '#f5edd8', textDecoration: 'none',
              fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500,
            }}>Book an Appointment</a>
          </div>

          {/* Google Maps embed — keyless (no API key/billing required) */}
          <div style={{ position: 'relative', minHeight: 360, background: '#1a2640', border: '1px solid rgba(92,61,30,0.2)', overflow: 'hidden' }}>
            <iframe
              title="485 Western Ave, Albany, NY 12203"
              src="https://maps.google.com/maps?q=485%20Western%20Ave%2C%20Albany%2C%20NY%2012203&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360, display: 'block', filter: 'grayscale(0.2) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
