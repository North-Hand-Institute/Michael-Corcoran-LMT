'use client'

const BOOKING_URL = 'https://www.vagaro.com/michaelcorcoranlmt/book-now'

export function Contact() {
  function handleSubmit() {
    const name = (document.getElementById('name') as HTMLInputElement)?.value
    const email = (document.getElementById('email') as HTMLInputElement)?.value
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value
    if (!name || !email || !message) { alert('Please fill in all fields.'); return }
    const subject = encodeURIComponent('Massage Inquiry from ' + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@michaelcorcoranlmt.com?subject=${subject}&body=${body}`
  }

  const inputStyle: React.CSSProperties = {
    background: 'white', border: '1px solid rgba(92,61,30,0.2)', padding: '0.85rem 1rem',
    fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: '#2a1f14', outline: 'none', width: '100%',
  }

  return (
    <>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .contact-form-col { padding-top: 3.5rem; }
        @media (max-width: 768px) {
          .contact-section { padding: 3.5rem 1.5rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .contact-form-col { padding-top: 0 !important; }
          .footer-inner { flex-direction: column !important; text-align: center !important; gap: 0.75rem !important; }
        }
      `}</style>
      <section id="contact" className="contact-section" style={{ padding: '6rem 5rem', background: '#e8d8b8' }}>
        <div className="contact-grid">
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9572a', marginBottom: '1rem', fontWeight: 500 }}>Get in Touch</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: '#1a2640' }}>
              Questions? <em style={{ fontStyle: 'italic', color: '#5c3d1e' }}>Let&apos;s Talk.</em>
            </h2>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', lineHeight: 1.85, color: '#7a6a58', maxWidth: 380 }}>
              Ready to book? The fastest way is online through Vagaro. For anything else, send a note and I&apos;ll get back to you.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', margin: '1.8rem 0 0.5rem', padding: '0.9rem 2.4rem',
              background: '#c9572a', color: '#f5edd8', textDecoration: 'none',
              fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500,
            }}>Book on Vagaro</a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2.5rem' }}>
              {[['Email', 'info@michaelcorcoranlmt.com', 'mailto:info@michaelcorcoranlmt.com'], ['Phone', '(518) 330-7272', 'tel:5183307272'], ['Practitioner', 'Michael Corcoran, LMT', '']].map(([label, val, href]) => (
                <div key={label}>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9572a', fontWeight: 500, marginBottom: '0.3rem' }}>{label}</div>
                  {href ? <a href={href} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#1a2640', textDecoration: 'none' }}>{val}</a>
                    : <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#1a2640' }}>{val}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[['name', 'Your Name', 'text', 'Jane Smith'], ['email', 'Email Address', 'email', 'you@example.com']].map(([id, label, type, ph]) => (
              <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor={id} style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6a58' }}>{label}</label>
                <input id={id} type={type} placeholder={ph} style={inputStyle} />
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a6a58' }}>Message</label>
              <textarea id="message" rows={4} placeholder="Tell me a bit about what you're looking for..." style={{ ...inputStyle, resize: 'none' }} />
            </div>
            <button onClick={handleSubmit} style={{
              padding: '1rem 2.4rem', background: '#c9572a', color: 'white', border: 'none',
              fontFamily: 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer', alignSelf: 'flex-start',
            }}>Send Message</button>
          </div>
        </div>
      </section>
    </>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#1a2640', padding: '2.5rem 3rem', borderTop: '1px solid rgba(184,149,106,0.2)' }}>
      <div className="footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600, color: '#f5edd8', letterSpacing: '0.06em' }}>
          Michael Corcoran, LMT · Professional Massage &amp; Bodyworks
        </div>
        <div style={{ fontSize: '0.7rem', color: 'rgba(245,237,216,0.4)', letterSpacing: '0.08em' }}>
          © {new Date().getFullYear()} Michael Corcoran, LMT
        </div>
        <a href="mailto:info@michaelcorcoranlmt.com" style={{ fontSize: '0.75rem', color: '#b8956a', textDecoration: 'none' }}>
          info@michaelcorcoranlmt.com
        </a>
      </div>
    </footer>
  )
}
