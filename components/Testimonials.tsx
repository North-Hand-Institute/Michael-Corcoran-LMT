// TODO: Michael — replace these with real client testimonials (e.g. from your Vagaro or Yelp reviews).
const TESTIMONIALS = [
  { quote: 'Michael is hands-down one of the best massage therapists I’ve ever seen. His Ashiatsu technique is incredible—deep, powerful, and unapologetically intense in the best way. He has incredibly strong hands and feet (yes, feet!) and uses them with precision and skill. Every session feels thoughtful, thorough, and intentionally tailored. You can tell he genuinely cares about his clients’ well-being. If you’re looking for serious bodywork that gets results, Michael is your guy.', name: 'Lindsey Phelps', tag: 'Verified Client' },
  { quote: 'Michael is the best massage therapist around. His technique is excellent, and he personalizes each session based on your needs. He takes the time to listen and make sure problem areas are properly addressed. Highly recommend, he’s outstanding!', name: 'Joshua', tag: 'Verified Client' },
  { quote: 'Michael is absolutely absolutely amazing! He customized the session to meet my needs with a blend of Thai and Swedish techniques making it a very unique and epic experience. After reading his profile, I knew he was the right Massage Therapist for me and I drove 90 minutes to meet with him. He is very passionate about his work, very professional, knowledgeable, attentive and a beautiful soul. With him you’ll be in good hands and you’ll enjoy a unique experience. Looking forward to my second session in two weeks.', name: 'Francis Charles', tag: 'Verified Client' },
]


export default function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials-section { padding: 6rem 5rem; background: #1a2640; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        @media (max-width: 768px) {
          .testimonials-section { padding: 3.5rem 1.5rem !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
      <section className="testimonials-section">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b8956a', marginBottom: '1rem', fontWeight: 500 }}>In Their Words</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: '#f5edd8' }}>
            Client <em style={{ fontStyle: 'italic', color: '#b8956a' }}>Experiences</em>
          </h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: 'rgba(245,237,216,0.04)', border: '1px solid rgba(184,149,106,0.2)', padding: '2.5rem' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#c9572a', opacity: 0.4, lineHeight: 0.5, height: '1.5rem' }}>&ldquo;</div>
              <blockquote style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,237,216,0.85)', marginBottom: '1.5rem' }}>
                {t.quote}
              </blockquote>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#f5edd8' }}>{t.name}</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8956a', marginTop: '0.2rem' }}>{t.tag}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
