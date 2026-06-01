import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--hot-pink)',
      color: '#fff',
      padding: '3rem 2.5rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ fontSize: '2rem', marginBottom: '1rem' }}
        >
          🌸
        </motion.div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--tennis-yellow)', marginBottom: '0.5rem' }}>
          [Anis Dian Fahrani]
        </div>
        <p style={{ color: '#fff', fontSize: '0.82rem', marginBottom: '2rem' }}>
          Creative Developer & Graphic Designer ✦ 
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {['Home', 'About', 'Projects', 'Skills'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              color: '#fff',
              fontSize: '0.8rem',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--tennis-yellow)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--blush-white)'}
            >{link}</a>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(245,238,240,0.22)', paddingTop: '1.5rem', color: '#fff', fontSize: '0.75rem' }}>
          © 2025 Anis Dian F.
        </div>
      </div>
    </footer>
  )
}
