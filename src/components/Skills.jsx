import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brush, Code2 } from 'lucide-react'

const skillGroups = [
  {
    title: 'Development',
    note: 'Frontend, mobile, backend dasar, website.',
    icon: Code2,
    skills: [
      { name: 'Python', level: 65 },
      { name: 'MySQL', level: 75 },
      { name: 'JavaScript', level: 65 },
      { name: 'HTML', level: 87 },
      { name: 'Flutter', level: 78 },
      { name: 'CSS', level: 87 },
    ],
  },
  {
    title: 'Design',
    note: 'UI/UX dan kebutuhan visual digital.',
    icon: Brush,
    skills: [
      { name: 'Figma', level: 75 },
      { name: 'Canva', level: 95 },
      { name: 'Adobe Photoshop', level: 80 },
      { name: 'Adobe Ilustrator', level: 65 },
      { name: 'Adobe After Effect', level: 70 },
      { name: 'blender', level: 70},
    ],
  },
]

function SkillBar({ name, level, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.45rem' }}>
        <span style={{ fontSize: '0.88rem', fontWeight: 650, color: 'var(--dark)' }}>{name}</span>
        <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--hot-pink)' }}>{level}%</span>
      </div>

      <div style={{
        height: 8,
        borderRadius: 100,
        background: 'rgba(216,111,145,0.16)',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.05, delay: delay + 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '100%',
            borderRadius: 100,
            background: 'linear-gradient(90deg, var(--tennis-yellow), var(--hot-pink))',
          }}
        />
      </div>
    </motion.div>
  )
}

function SkillPanel({ group, index, inView }) {
  const Icon = group.icon
  const average = Math.round(group.skills.reduce((sum, skill) => sum + skill.level, 0) / group.skills.length)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(255,253,248,0.92)',
        border: '1px solid rgba(216,111,145,0.18)',
        borderRadius: 8,
        padding: '1.5rem',
        boxShadow: '0 18px 46px rgba(47,47,47,0.1)',
        transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
      }}
    >
      <div style={{
        width: 78,
        height: 24,
        background: index % 2 === 0 ? 'rgba(215,233,107,0.42)' : 'rgba(216,111,145,0.16)',
        border: '1px solid rgba(47,47,47,0.08)',
        transform: 'rotate(-4deg)',
        margin: '-2rem auto 1rem',
        boxShadow: '0 8px 18px rgba(47,47,47,0.06)',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            background: index % 2 === 0 ? 'rgba(215,233,107,0.28)' : 'rgba(139,198,64,0.18)',
            color: 'var(--hot-pink)',
            display: 'grid',
            placeItems: 'center',
            flex: '0 0 auto',
          }}>
            <Icon size={21} strokeWidth={2.4} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '0.35rem' }}>
              {group.title}
            </h3>
            <p style={{ color: 'var(--gray-500)', lineHeight: 1.6, fontSize: '0.86rem' }}>
              {group.note}
            </p>
          </div>
        </div>

        <div style={{
          minWidth: 58,
          padding: '0.45rem 0.6rem',
          borderRadius: 8,
          background: 'rgba(215,233,107,0.3)',
          border: '1px dashed rgba(216,111,145,0.22)',
          textAlign: 'center',
        }}>
          <div style={{ color: 'var(--hot-pink)', fontSize: '1rem', fontWeight: 900, lineHeight: 1 }}>{average}%</div>
          <div style={{ color: 'var(--gray-500)', fontSize: '0.62rem', fontWeight: 700, marginTop: 3 }}>AVG</div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {group.skills.map((skill, si) => (
          <SkillBar
            key={skill.name}
            {...skill}
            delay={0.2 + index * 0.1 + si * 0.05}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" style={{
      padding: '7rem 2.5rem',
     background: `
  linear-gradient(rgba(255,77,141,0.06) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,77,141,0.06) 1px, transparent 1px),
  linear-gradient(160deg, #fff5f7 0%, #fce4ec 25%, #f9a8c9 90%, #f0f8ff 100%)
`,
      backgroundSize: '28px 28px, 28px 28px, auto',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(860px, 80%)',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(216,111,145,0.32), transparent)',
      }} />

      <div style={{
        position: 'absolute',
        top: 70,
        left: '7%',
        width: 118,
        height: 34,
        background: 'rgba(255,255,255,0.68)',
        border: '1px solid rgba(216,111,145,0.16)',
        transform: 'rotate(-8deg)',
        boxShadow: '0 10px 24px rgba(47,47,47,0.08)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: 138,
        left: '13%',
        width: 132,
        height: 42,
        background: 'rgba(215,233,107,0.36)',
        border: '1px solid rgba(47,47,47,0.08)',
        transform: 'rotate(7deg)',
        boxShadow: '0 10px 24px rgba(47,47,47,0.06)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        right: '8%',
        top: 105,
        width: 120,
        height: 92,
        borderRadius: 8,
        background: 'rgba(255,246,236,0.76)',
        border: '1px dashed rgba(216,111,145,0.24)',
        transform: 'rotate(12deg)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        left: '4%',
        bottom: 95,
        width: 140,
        height: 38,
        border: '1px solid rgba(47,47,47,0.08)',
        background: 'rgba(139,198,64,0.22)',
        transform: 'rotate(-5deg)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{ maxWidth: 1120, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 3.4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1rem' }}
          >
            <div style={{ width: 30, height: 1.5, background: 'var(--hot-pink)' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--hot-pink)' }}>
              Keahlian
            </span>
            <div style={{ width: 30, height: 1.5, background: 'var(--hot-pink)' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            style={{ color: 'var(--gray-500)', lineHeight: 1.8, fontSize: '1.1rem' }}
          >
            Kemampuan yang ditekuni selama kuliah dan sudah diimplementasikan di project nyata.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '1.4rem', marginBottom: '2.4rem' }}>
          {skillGroups.map((group, index) => (
            <SkillPanel key={group.title} group={group} index={index} inView={inView} />
          ))}
        </div>

      </div>
      
    </section>
  )
}
