const MODALITIES = [
  {
    name: 'Shiatsu',
    origin: 'Japan',
    body: 'A Japanese form of bodywork applying rhythmic, sustained pressure along the body\u2019s meridians \u2014 the channels through which traditional East Asian medicine understands energy, or qi, to flow.',
    why: 'By working the meridian lines rather than isolated muscles, shiatsu can address tension at a whole-body level, calm an overactive nervous system, and restore a sense of balance that purely mechanical work often misses.',
  },
  {
    name: 'Ashiatsu',
    origin: 'Japan',
    body: 'Literally \u201cfoot pressure.\u201d Using my feet \u2014 with overhead bars for balance and control \u2014 I deliver broad, deep, gliding compression that the hands alone simply can\u2019t produce.',
    why: 'The broad surface of the foot spreads deep pressure over a wider area, so you get profound depth without the sharp, poking sensation of an elbow or thumb. It\u2019s ideal for large, dense muscle groups and for clients who love deep work but find it too intense when concentrated in a small point.',
  },
  {
    name: 'Thai Massage',
    origin: 'Thailand',
    body: 'An ancient assisted-stretching tradition performed with a blend of compression, rhythmic rocking, and guided yoga-like stretches that move the body through its natural ranges of motion.',
    why: 'Thai work restores mobility and length to muscles and joints that static massage can\u2019t reach the same way. It leaves the body feeling opened and lengthened, improves flexibility, and releases tension held deep in the hips, shoulders, and spine.',
  },
  {
    name: 'Cupping',
    origin: 'China and Japan',
    body: 'Suction cups create a gentle negative pressure that lifts and separates the skin, fascia, and muscle \u2014 the opposite of the compression used in most massage.',
    why: 'That decompression increases local circulation, hydrates and mobilizes restricted fascia, and helps flush stagnation from tissue that\u2019s been chronically tight. Many clients find it relieves stubborn adhesions and lingering soreness that respond slowly to hands-on pressure alone.',
  },
  {
    name: 'Myofascial Release',
    origin: 'United States',
    body: 'Slow, sustained pressure applied directly into the fascia \u2014 the continuous web of connective tissue that wraps and links every muscle in the body.',
    why: 'When fascia becomes restricted, it can pull the body out of alignment and refer pain far from its source. Releasing it gently and patiently restores glide between tissue layers, eases chronic tension, and can resolve pain that never fully responds to muscle-focused work.',
  },
  {
    name: 'Deep Tissue',
    origin: 'Europe and North America',
    body: 'Focused, deliberate pressure directed at the deeper layers of muscle and connective tissue, working with the grain of the fibers to reach chronic tension.',
    why: 'Deep tissue targets the persistent knots and adhesions behind long-standing pain and stiffness. Applied with the right pacing, it breaks up restriction, improves range of motion, and delivers lasting relief where lighter work only skims the surface.',
  },
  {
    name: 'Trigger Point',
    origin: 'Europe and North America',
    body: 'Precise, targeted pressure held on \u201ctrigger points\u201d \u2014 tight, hyperirritable knots within a muscle that often refer pain to entirely different areas of the body.',
    why: 'Because a single trigger point can send pain to a distant region, resolving it can relieve headaches, referred aches, and mysterious pain whose true source isn\u2019t where you feel it. Deactivating these points interrupts the pain cycle and lets the muscle return to its normal resting length.',
  },
]

export default function Modalities() {
  return (
    <>
      <style>{`
        .modalities-section { padding: 6rem 5rem; background: #e8d8b8; }
        .modality-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .modalities-section { padding: 3.5rem 1.5rem !important; }
          .modality-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .modality-card { padding: 1.8rem !important; }
        }
      `}</style>
      <section id="modalities" className="modalities-section">
        <div style={{ marginBottom: '3rem', maxWidth: 640 }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9572a', marginBottom: '1rem', fontWeight: 500 }}>What I Practice</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: '#1a2640' }}>
            The <em style={{ fontStyle: 'italic', color: '#5c3d1e' }}>Modalities</em>
          </h2>
          <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', lineHeight: 1.9, color: '#7a6a58' }}>
            Each of these traditions brings something the others don&apos;t. In a session I draw on whichever ones your body is asking for &mdash; often several within the same hour.
          </p>
        </div>

        <div className="modality-grid">
          {MODALITIES.map(m => (
            <div key={m.name} className="modality-card" style={{ background: '#f5edd8', border: '1px solid rgba(92,61,30,0.15)', padding: '2.5rem' }}>
              <span style={{ display: 'inline-block', background: '#1a2640', color: '#f5edd8', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.3rem 0.8rem', marginBottom: '1.2rem' }}>
                {m.origin}
              </span>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 400, lineHeight: 1.2, color: '#1a2640', marginBottom: '1rem' }}>
                {m.name}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#7a6a58', marginBottom: '1.2rem' }}>{m.body}</p>
              <div style={{ borderTop: '1px solid rgba(92,61,30,0.15)', paddingTop: '1.2rem' }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9572a', fontWeight: 500, marginBottom: '0.5rem' }}>Why It Works</div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#5c3d1e' }}>{m.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
