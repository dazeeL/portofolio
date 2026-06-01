import { motion } from 'framer-motion'

const links = ['Home', 'About', 'Projects', 'Skills']

export default function Navbar() {
  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1.2rem 2.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'transparent',
          backdropFilter: 'none',
          borderBottom: 'none',
        }}
      >
        <a href="#home" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: '#C03068',letterSpacing: '-0.02em' }}>
          ✦ portofolio
        </a>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              data-hover="true"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#fff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                position: 'relative',
              }}
              className="nav-link"
            >
              {link}
            </a>
          ))}
          <a href="#about" data-hover="true" style={{
            padding: '0.5rem 1.4rem',
            background: '#f581ac',
            color: '#fff',
            borderRadius: '100px',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}>
            Hire Me
          </a>
        </div>
      </motion.nav>

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--tennis-yellow);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        @media (max-width: 768px) {
          nav > div { display: none; }
        }
      `}</style>
    </>
  )
}
