import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { devProjects, designProjects } from '../data/projects.js'

const allProjects = [...devProjects, ...designProjects]
const tabs = [
  { key: 'all', label: 'Semua', icon: '✦' },
  { key: 'dev', label: 'Dev / Coding', icon: '💻' },
  { key: 'design', label: 'Graphic Design', icon: '🎨' },
]

const gradients = [
  'linear-gradient(145deg, var(--hot-pink), var(--petal-pink))',
  'linear-gradient(145deg, var(--grass), var(--lime))',
  'linear-gradient(145deg, var(--tennis-yellow), var(--hot-pink))',
  'linear-gradient(145deg, var(--warm-brown), var(--grass))',
  'linear-gradient(145deg, var(--dusty-rose), var(--maroon))',
  'linear-gradient(145deg, var(--lime), var(--petal-pink))',
  'linear-gradient(145deg, var(--warm-brown), var(--tennis-yellow))',
  'linear-gradient(145deg, var(--maroon), var(--grass))',
]

function CarouselCard({ project, position, onClick, gradientIndex }) {
  const abs = Math.abs(position)
  const isCenter = position === 0
  const isVisible = abs <= 2

  if (!isVisible) return null

  const scale = isCenter ? 1 : abs === 1 ? 0.82 : 0.68
  const translateX = position * 220
  const rotateY = position * -12
  const zIndex = isCenter ? 10 : abs === 1 ? 5 : 2
  const opacity = isCenter ? 1 : abs === 1 ? 0.85 : 0.6
  const projectImage = project.image || project.documentation?.find(item => item.type === 'image')?.src

  return (
    <motion.div
      onClick={() => onClick(project)}
      animate={{ scale, x: translateX, rotateY, opacity, zIndex }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute', left: '50%', top: '50%',
        marginLeft: -140, marginTop: -190,
        width: 280, height: 380, borderRadius: 28,
        background: gradients[gradientIndex % gradients.length],
        cursor: 'pointer', transformStyle: 'preserve-3d', transformOrigin: 'center center',
        boxShadow: isCenter ? '0 30px 80px rgba(0,0,0,0.35)' : '0 10px 40px rgba(0,0,0,0.2)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', padding: '1.5rem', userSelect: 'none',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)', pointerEvents: 'none' }} />

      {projectImage ? (
        <img src={projectImage} alt={project.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
      ) : (
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '4rem', opacity: 0.3 }}>
          {project.tag === 'dev' ? '💻' : '🎨'}
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'inline-block', padding: '0.2rem 0.7rem', background: 'rgba(255,255,255,0.25)', borderRadius: 100, fontSize: '0.62rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}>
          {project.category}
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '0.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
          {project.title}
        </h3>
        <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} style={{ fontSize: '0.62rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', background: 'rgba(0,0,0,0.2)', padding: '0.15rem 0.5rem', borderRadius: 4 }}>{t}</span>
          ))}
        </div>
        {isCenter && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>
            Lihat detail <span style={{ fontSize: '0.9rem' }}>↗</span>
          </motion.div>
        )}
      </div>

      <div style={{ position: 'absolute', top: '1.2rem', left: '1.2rem', background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(8px)', borderRadius: 8, padding: '0.25rem 0.6rem', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>
        {project.year}
      </div>
    </motion.div>
  )
}

function Modal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null)
  if (!project) return null
  const projectImage = project.image || project.documentation?.find(item => item.type === 'image')?.src
  const documentationImages = project.documentation?.filter(item => item.type === 'image') || []

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: 'var(--white)',
            borderRadius: 28,
            maxWidth: 860,          // ← lebih besar dari 560
            maxHeight: 'calc(100vh - 2rem)',  // ← lebih tinggi
            width: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
          }}
        >
          {/* Header */}
          <div style={{ height: 260, background: gradients[project.id % gradients.length], position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <div style={{ fontSize: '6rem', opacity: 0.4 }}>{project.tag === 'dev' ? '💻' : '🎨'}</div>
            {projectImage && (
              <img src={projectImage} alt={project.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
            )}
            {project.video && (
              <iframe src={project.video} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} allow="autoplay; encrypted-media" allowFullScreen />
            )}
            <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, width: 40, height: 40, background: 'rgba(0,0,0,0.3)', border: 'none', borderRadius: '50%', color: '#fff', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>

          {/* Content */}
          <div style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ padding: '0.3rem 1rem', background: 'var(--blush)', color: 'var(--hot-pink)', borderRadius: 100, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {project.category}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)', fontWeight: 500 }}>{project.year}</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '1rem' }}>
              {project.title}
            </h2>

            <p style={{ color: 'var(--gray-500)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.5rem' }}>
              {project.desc}
            </p>

            {project.detail && (
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {project.detail}
              </p>
            )}

            {documentationImages.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--maroon)', marginBottom: '1rem' }}>
                  Dokumentasi
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  {documentationImages.map((item, index) => (
                    <figure key={`${item.src}-${index}`} style={{ margin: 0, overflow: 'hidden', borderRadius: 12, background: 'var(--blush-white)', border: '1px solid rgba(216,111,145,0.16)' }}>
                      <button type="button" data-hover="true" onClick={() => setSelectedImage(item)} style={{ display: 'block', width: '100%', border: 'none', padding: 0, background: 'transparent', cursor: 'zoom-in', overflow: 'hidden' }}>
                        <motion.img
                          src={item.src}
                          alt={item.caption || `${project.title} dokumentasi ${index + 1}`}
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          style={{ display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }}
                        />
                      </button>
                      {item.caption && (
                        <figcaption style={{ padding: '0.65rem 0.8rem', color: 'var(--gray-500)', fontSize: '0.78rem', lineHeight: 1.5 }}>
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map(t => (
                <span key={t} style={{ padding: '0.4rem 1rem', borderRadius: 100, fontSize: '0.8rem', fontWeight: 600, background: 'rgba(216,111,145,0.1)', color: 'var(--hot-pink)', border: '1px solid rgba(216,111,145,0.2)' }}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={e => { e.stopPropagation(); setSelectedImage(null) }}
              style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(47,47,47,0.9)', backdropFilter: 'blur(10px)', display: 'grid', placeItems: 'center', padding: '2rem', cursor: 'zoom-out' }}
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.caption || project.title}
                initial={{ opacity: 0, scale: 0.9, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                onClick={e => e.stopPropagation()}
                style={{ maxWidth: 'min(100%, 980px)', maxHeight: 'calc(100vh - 4rem)', objectFit: 'contain', borderRadius: 12, boxShadow: '0 28px 90px rgba(0,0,0,0.42)', cursor: 'default' }}
              />
              <button type="button" data-hover="true" onClick={e => { e.stopPropagation(); setSelectedImage(null) }}
                style={{ position: 'fixed', top: 20, right: 20, width: 42, height: 42, border: '1px solid rgba(245,238,240,0.34)', borderRadius: '50%', background: 'rgba(245,238,240,0.14)', color: 'var(--blush-white)', fontSize: '1.25rem', cursor: 'pointer', display: 'grid', placeItems: 'center' }}
              >×</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const filtered = activeTab === 'all' ? allProjects : allProjects.filter(p => p.tag === activeTab)
  const prev = () => setCurrentIndex(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setCurrentIndex(i => (i + 1) % filtered.length)
  const handleTabChange = (key) => { setActiveTab(key); setCurrentIndex(0) }

  return (
    <section id="projects" style={{ padding: '7rem 2.5rem', background: 'linear-gradient(160deg, #FF4D8D 0%, #f9a8c9 35%, #fce4ec 70%, #ffd6e7 90%, #fff5f7 100%)', position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {[
        { top: '8%',  left: '3%',  size: '1.5rem' },
        { top: '15%', right: '4%', size: '1rem'   },
        { top: '85%', left: '5%',  size: '1.2rem' },
        { top: '90%', right: '6%', size: '0.9rem' },
      ].map((s, i) => (
        <motion.span key={i} animate={{ rotate: [0, 180, 360], scale: [1, 1.3, 1] }} transition={{ duration: 6 + i, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: s.top, left: s.left, right: s.right, fontSize: s.size, color: 'rgba(255,255,255,0.4)', pointerEvents: 'none' }}>✦</motion.span>
      ))}

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'rgba(255,255,255,0.8)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>My Work</span>
            <div style={{ width: 28, height: 1.5, background: 'rgba(255,255,255,0.8)' }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
            Karya & Proyek Kampus
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
            Hasil kerja selama kuliah, mulai dari aplikasi web/mobile hingga desain grafis.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: 100, padding: '0.4rem', width: 'fit-content', margin: '0 auto 3rem', border: '1px solid rgba(255,255,255,0.35)' }}>
          {tabs.map(tab => (
            <button key={tab.key} data-hover="true" onClick={() => handleTabChange(tab.key)} style={{ padding: '0.6rem 1.5rem', borderRadius: 100, border: 'none', background: activeTab === tab.key ? 'var(--tennis-yellow)' : 'transparent', color: activeTab === tab.key ? 'var(--maroon)' : 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.25s ease', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>MY PROJECT</span>
        </div>

        <div style={{ position: 'relative', height: 440 }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', perspective: 1200, transformStyle: 'preserve-3d' }}>
            <AnimatePresence mode="sync">
              {filtered.map((project, i) => {
                let pos = i - currentIndex
                const half = Math.floor(filtered.length / 2)
                if (pos > half) pos -= filtered.length
                if (pos < -half) pos += filtered.length
                return <CarouselCard key={project.id} project={project} position={pos} onClick={setSelectedProject} gradientIndex={i} />
              })}
            </AnimatePresence>
          </div>

          <button onClick={prev} data-hover="true" style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', width: 56, height: 56, background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '50%', color: '#fff', fontSize: '1.3rem', cursor: 'pointer', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}>‹</button>
          <button onClick={next} data-hover="true" style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', width: 56, height: 56, background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '50%', color: '#fff', fontSize: '1.3rem', cursor: 'pointer', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}>›</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {filtered.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} style={{ width: i === currentIndex ? 24 : 8, height: 8, borderRadius: 100, background: i === currentIndex ? '#fff' : 'rgba(255,255,255,0.35)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
          ))}
        </div>
      </div>

      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, transparent, #f9a8c9)', pointerEvents: 'none' }} />
    </section>
  )
}