'use client'
import { useState } from 'react'

// TODO: Michael — edit these questions/answers to match your practice.
const FAQS = [
  {
    q: 'How do I book an appointment?',
    a: 'All scheduling is handled online through Vagaro. Click any "Book" button on this site to see real-time availability and reserve your session. If you have questions before booking, reach out through the contact section below.',
  },
  {
    q: 'Which type of massage should I choose?',
    a: 'If you\u2019re unsure, book the integrative therapeutic session. Because I draw on many modalities within a single appointment, we\u2019ll discuss what your body needs when you arrive and shape the session around that \u2014 you don\u2019t have to diagnose yourself in advance.',
  },
  {
    q: 'What should I expect during a session?',
    a: 'We\u2019ll start with a brief check-in about how you\u2019re feeling and any areas of concern. From there I combine techniques \u2014 shiatsu, deep tissue, cupping, myofascial work, stretching, and more \u2014 based on what your body responds to. Some modalities are performed clothed (like Thai and shiatsu); others use oil on the table.',
  },
  {
    q: 'Is deep work going to hurt?',
    a: 'Therapeutic depth should feel productive, never like something to grit your teeth through. I work with your feedback throughout and adjust pressure continuously. Techniques like Ashiatsu let me deliver serious depth in a broad, comfortable way rather than a sharp one.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Please provide advance notice if you need to reschedule or cancel, so the time can be offered to another client. Specific policy details are shown during the Vagaro booking process.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <>
      <style>{`
        .faq-section { padding: 6rem 5rem; background: #f5edd8; }
        .faq-inner { max-width: 760px; margin: 0 auto; }
        @media (max-width: 768px) {
          .faq-section { padding: 3.5rem 1.5rem !important; }
        }
      `}</style>
      <section id="faq" className="faq-section">
        <div className="faq-inner">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9572a', marginBottom: '1rem', fontWeight: 500 }}>Good to Know</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: '#1a2640' }}>
              Frequently Asked <em style={{ fontStyle: 'italic', color: '#5c3d1e' }}>Questions</em>
            </h2>
          </div>

          {FAQS.map((f, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(92,61,30,0.15)' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                padding: '1.4rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#1a2640' }}>{f.q}</span>
                <span style={{ fontSize: '1.4rem', color: '#c9572a', lineHeight: 1, flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
              </button>
              {open === i && (
                <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#7a6a58', paddingBottom: '1.4rem', maxWidth: 680 }}>{f.a}</p>
              )}
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(92,61,30,0.15)' }} />
        </div>
      </section>
    </>
  )
}
