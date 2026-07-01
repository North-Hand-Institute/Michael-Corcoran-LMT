export default function About() {
  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-section {
            padding: 3.5rem 1.5rem !important;
          }
        }
      `}</style>
      <section id="about" className="about-section" style={{ padding: '6rem 5rem', background: '#f5edd8' }}>
        <div className="about-grid">
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9572a', marginBottom: '1rem', fontWeight: 500 }}>About the Practitioner</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: '#1a2640' }}>
              Michael Corcoran, <em style={{ fontStyle: 'italic', color: '#5c3d1e' }}>LMT</em>
            </h2>
            <p style={{ marginTop: '2rem', fontSize: '0.95rem', lineHeight: 1.9, color: '#7a6a58' }}>
              I don&apos;t believe in a one-size-fits-all massage. Every body arrives with its own history — its own patterns of tension, compensation, and holding — and the most effective session is one that adapts to what&apos;s actually in front of me. That&apos;s why I&apos;ve spent years training across a broad range of modalities: Shiatsu, Ashiatsu, Thai Massage, Cupping, Myofascial Release, Deep Tissue, and Trigger Point therapy.
            </p>
            <p style={{ marginTop: '1.2rem', fontSize: '0.95rem', lineHeight: 1.9, color: '#7a6a58' }}>
              Rather than treating these as separate offerings, I weave them together within a single session. The meridian awareness of shiatsu might guide where I begin; the depth of Ashiatsu or deep tissue might address a stubborn restriction; cupping or myofascial work can free the fascia so the muscle underneath can finally release; and precise trigger point work resolves the knot at its source. The result is bodywork that meets you where you are and follows your body&apos;s lead — a genuinely therapeutic experience rather than a routine.
            </p>
          </div>

          <div style={{ position: 'relative', padding: '3rem', background: '#1a2640' }}>
            <div style={{ position: 'absolute', top: '-0.5rem', left: '2rem', fontFamily: 'Cormorant Garamond, serif', fontSize: '8rem', color: '#c9572a', opacity: 0.25, lineHeight: 1 }}>&ldquo;</div>
            <blockquote style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.6, color: '#f5edd8' }}>
              The body speaks in patterns. When you can draw on many traditions at once — meridian, muscle, fascia, and bone — you can effectively answer what the body is asking for.
            </blockquote>
            <cite style={{ display: 'block', marginTop: '1.5rem', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b8956a', fontStyle: 'normal', fontFamily: 'Jost, sans-serif' }}>
              — Michael Corcoran, LMT
            </cite>
          </div>
        </div>
      </section>
    </>
  )
}
