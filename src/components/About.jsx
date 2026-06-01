import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Mail, MessageCircle } from 'lucide-react'

const useReveal = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

export default function About() {
  const { ref, inView } = useReveal()
  const contacts = [
    { label: 'WhatsApp', value: '+62 815-6835-5507', href: 'https://wa.me/6281568355507', icon: MessageCircle },
    { label: 'Instagram', value: '@araajourn', href: 'https://www.instagram.com/araajourn/', icon: Camera },
    { label: 'Email', value: 'anisdianf@email.com', href: 'mailto:anisdianf@email.com', icon: Mail },
  ]

  return (
    <section id="about" style={{
      padding: '7rem 2.5rem',
      background: 'linear-gradient(160deg, rgba(139,198,64,0.2) 0%, var(--pale-pink) 52%, var(--paper-cream) 75%, #ffeef4 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 18% 18%, rgba(216,111,145,0.16), transparent 28%), radial-gradient(circle at 82% 72%, rgba(139,198,64,0.22), transparent 30%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: 70,
        right: '8%',
        width: 140,
        height: 140,
        borderRadius: '50%',
        border: '1px solid rgba(216,111,145,0.22)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        bottom: 75,
        left: '7%',
        width: 86,
        height: 86,
        borderRadius: 24,
        background: 'rgba(139,198,64,0.18)',
        transform: 'rotate(-12deg)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', left: 0, top: '20%',
        width: 4, height: '60%',
        background: 'linear-gradient(to bottom, transparent, var(--hot-pink), transparent)',
      }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', height: 520 }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: 340, height: 410,
            background: 'linear-gradient(135deg, var(--hot-pink), var(--dusty-rose))',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }} />

          <div style={{
            position: 'absolute', top: 44, left: 34,
            width: 340, height: 410,
            background: 'rgba(255,246,236,0.92)',
            borderRadius: 20,
            boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
            border: '1px solid var(--pink-200)',
            overflow: 'hidden',
          }}>
            <img
              src="/potoo.jpg"
              alt="Anis"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: 12, right: -12,
              background: 'var(--white)',
              borderRadius: 16,
              padding: '1rem 1.05rem',
              boxShadow: '0 8px 30px rgba(47,47,47,0.14)',
              border: '1px solid var(--pink-200)',
              minWidth: 260,
            }}
          >
            <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Contact
            </div>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              {contacts.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  data-hover="true"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '32px 1fr',
                    gap: '0.7rem',
                    alignItems: 'center',
                    color: 'var(--dark)',
                  }}
                >
                  <span style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'var(--blush)',
                    color: 'var(--hot-pink)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={17} strokeWidth={2.4} />
                  </span>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--gray-500)', fontWeight: 500 }}>{label}</span>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--hot-pink)', fontWeight: 700, overflowWrap: 'anywhere' }}>{value}</strong>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'var(--hot-pink)' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--hot-pink)' }}>
              About Me
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--dark)',
            marginBottom: '1.5rem',
          }}>
            Adaptif, Detail,<br />
            <span style={{ color: 'var(--hot-pink)', fontStyle: 'italic' }}>& Always Learning ✦</span>
          </h2>

          <p style={{ color: 'var(--gray-500)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '1.05rem' }}>
            Halo! Saya Anis Dian Fahrani, mahasiswi Teknologi Rekayasa Perangkat Lunak di Universitas Duta Bangsa Surakarta.
            Saya memiliki ketertarikan pada pengembangan aplikasi web dan mobile, serta senang mempelajari hal-hal baru
            yang berkaitan dengan teknologi, desain antarmuka, dan dunia digital.
          </p>

          <p style={{ color: 'var(--gray-500)', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Bagi saya, setiap proyek adalah kesempatan untuk berkembang, melatih kreativitas, dan menuangkan ide menjadi
            sesuatu yang bermanfaat. Saya terbuka untuk pengalaman baru, terutama internship yang dapat
            membantu saya mengasah kemampuan sebagai calon software engineer.
          </p>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[
              { icon: '🎓', label: 'Software Engineer, Semester 6' },
              { icon: '📍', label: 'Surakarta, Indonesia' },
              { icon: '✨', label: 'Open to Internship' },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'var(--blush)',
                borderRadius: 100,
                fontSize: '0.88rem',
                color: 'var(--hot-pink)',
                fontWeight: 500,
              }}>
                <span>{icon}</span> {label}
              </div>
            ))}
          </div>

          <a href="#projects" data-hover="true" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.8rem 2rem',
            background: 'var(--hot-pink)',
            color: 'var(--blush-white)',
            borderRadius: 100,
            fontWeight: 600,
            fontSize: '0.94rem',
            transition: 'all 0.2s',
            boxShadow: '0 4px 20px rgba(216,111,145,0.28)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(216,111,145,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(216,111,145,0.28)' }}
          >
            Lihat Proyekku →
          </a>
        </motion.div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 20,
        background: 'linear-gradient(to bottom, transparent, var(--hot-pink))',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
