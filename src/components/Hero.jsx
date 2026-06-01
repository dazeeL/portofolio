import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: `transparent`,
      backgroundSize: '34px 34px, 34px 34px, auto, auto, auto',
    }}>
      {/* Background image */}
<div style={{
  position: 'absolute', inset: 0,
  backgroundImage: 'url(/hero.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,
}} />

{/* Overlay gelap transparan */}
<div style={{
  position: 'absolute', inset: 0,
  background: 'rgba(96, 96, 96, 0.72)',
  zIndex: 1,
}} />
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.48, 0.65, 0.48] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '14%', left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          width: 'min(860px, 86vw)', height: 150,
          background: 'rgba(255,255,255,0.5)',
          border: '1px dashed rgba(216,111,145,0.26)',
          boxShadow: '0 22px 60px rgba(47,47,47,0.08)',
          pointerEvents: 'none',
        }}
      />

      {[
        { top: '11%', left: '9%', width: 132, height: 34, color: 'rgba(215,233,107,0.42)', rotate: '-10deg' },
        { top: '72%', right: '8%', width: 150, height: 36, color: 'rgba(255,255,255,0.64)', rotate: '8deg' },
        { top: '18%', right: '18%', width: 106, height: 30, color: 'rgba(216,111,145,0.22)', rotate: '13deg' },
      ].map((tape, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: tape.top,
          left: tape.left,
          right: tape.right,
          width: tape.width,
          height: tape.height,
          background: tape.color,
          border: '1px solid rgba(47,47,47,0.08)',
          transform: `rotate(${tape.rotate})`,
          boxShadow: '0 10px 24px rgba(47,47,47,0.07)',
          pointerEvents: 'none',
        }} />
      ))}

      {[
        { text: 'Ai', color: 'var(--hot-pink)', bg: 'var(--paper-cream)', shadow: 'rgba(216,111,145,0.22)', top: '12%', left: '4%', size: '1.8rem', rotate: '-8deg' },
        { text: 'Ps', color: 'var(--dark)', bg: 'var(--tennis-yellow)', shadow: 'rgba(139,198,64,0.3)', top: '10%', right: '5%', size: '1.8rem', rotate: '7deg' },
        { text: 'Fg', color: 'var(--hot-pink)', bg: 'var(--pale-pink)', shadow: 'rgba(216,111,145,0.2)', top: '22%', right: '12%', size: '1.4rem', rotate: '-5deg' },
        { text: 'Pr', color: 'var(--warm-brown)', bg: '#fff0bf', shadow: 'rgba(86,110,42,0.18)', top: '15%', left: '18%', size: '1.4rem', rotate: '9deg' },
      ].map((icon, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          style={{
            position: 'absolute',
            top: icon.top, left: icon.left, right: icon.right,
            background: icon.bg,
            border: '1px solid rgba(47,47,47,0.1)',
            borderRadius: 8,
            padding: '0.4rem 0.7rem',
            fontSize: icon.size,
            fontWeight: 900,
            color: icon.color,
            fontFamily: 'var(--font-display)',
            boxShadow: `0 8px 24px ${icon.shadow}`,
            pointerEvents: 'none',
          }}
        >
          {icon.text}
        </motion.div>
      ))}

      {[
        { top: '20%', left: '6%', size: '1.2rem' },
        { top: '65%', left: '5%', size: '0.9rem' },
        { top: '80%', right: '14%', size: '1rem' },
        { top: '35%', right: '4%', size: '0.8rem' },
        { top: '55%', left: '15%', size: '0.7rem' },
      ].map((s, i) => (
        <motion.span key={i}
          animate={{ rotate: [0, 180, 360], scale: [1, 1.3, 1] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: s.top, left: s.left, right: s.right, fontSize: s.size, color: 'rgba(255,246,236,0.82)', pointerEvents: 'none' }}
        >✦</motion.span>
      ))}

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 2rem' }}>
        <motion.div {...fade(0.1)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
          <div style={{ width: 36, height: 1, background: '#fff' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff' }}>
            Development & Graphic Designer
          </span>
          <div style={{ width: 36, height: 1, background: '#fff' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{ position: 'relative', marginBottom: '0.2rem' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 14vw, 11rem)',
            fontWeight: 900,
            color: 'var(--white)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            margin: 0,
            textShadow: '5px 5px 0 rgba(205, 44, 167, 0.52)',
          }}>
            PORTOFOLIO
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              bottom: '-4rem',
              left: '40%',
              transform: 'translateX(-50%)',
              fontFamily: "'LaMonarchie', cursive",
              fontSize: 'clamp(6rem, 4.5vw, 3.8rem)',
              color: '#57d672',
              whiteSpace: 'nowrap',
              fontWeight: 400,
              letterSpacing: '0.06em',
              textShadow: '0 12px 32px rgba(124, 19, 19, 0.28)',
            }}
          >
            Software Engineer
          </motion.div>
        </motion.div>

        <div style={{ height: 'clamp(3rem, 5vw, 4.5rem)' }} />

        <motion.p {...fade(0.55)} style={{
          fontSize: '0.95rem',
          color: '#fff',
          lineHeight: 1.75,
          maxWidth: 480,
          margin: '0 auto 2.5rem',
          fontWeight: 500,
          letterSpacing: '0.01em',
        }}>
          Mahasiswi RPL · Universitas Duta Bangsa Surakarta<br />
        </motion.p>

        <motion.div {...fade(0.7)} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" data-hover="true" style={{
            padding: '0.85rem 2.2rem',
            background: 'var(--hot-pink)',
            color: '#fff',
            borderRadius: 6,
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'all 0.2s',
            boxShadow: '0 4px 20px rgba(216,111,145,0.35)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(216,111,145,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(216,111,145,0.35)' }}
          >
            Lihat Karya ↓
          </a>
          <a href="#about" data-hover="true" style={{
            padding: '0.85rem 2.2rem',
            background: 'rgba(255,255,255,0.52)',
            color: 'var(--maroon)',
            borderRadius: 6,
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            border: '1px solid rgba(47,47,47,0.18)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--hot-pink)'; e.currentTarget.style.color = 'var(--hot-pink)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(47,47,47,0.18)'; e.currentTarget.style.color = 'var(--maroon)' }}
          >
            About Me
          </a>
        </motion.div>
      </div>

      <motion.div
        {...fade(0.9)}
        style={{ position: 'absolute', bottom: '2rem', left: '2.5rem', display: 'flex', gap: '1.5rem' }}
      >
        {['Behance', 'Instagram', 'LinkedIn'].map(s => (
          <a key={s} href="#" data-hover="true"
            style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(47,47,47,0.58)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--hot-pink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(47,47,47,0.58)'}
          >{s}</a>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
      >
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', color: 'rgba(47,47,47,0.5)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 35, background: 'linear-gradient(to bottom, rgba(216,111,145,0.72), transparent)' }} />
      </motion.div>
    </section>
  )
}
