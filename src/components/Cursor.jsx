import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicked(true)
    const up = () => setClicked(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    const interactables = document.querySelectorAll('a, button, [data-hover]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => setHovering(true))
      el.addEventListener('mouseleave', () => setHovering(false))
    })

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  useEffect(() => {
    let raf
    const ease = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12
      }))
      raf = requestAnimationFrame(ease)
    }
    raf = requestAnimationFrame(ease)
    return () => cancelAnimationFrame(raf)
  }, [pos])

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        pointerEvents: 'none',
        width: clicked ? 8 : hovering ? 6 : 8,
        height: clicked ? 8 : hovering ? 6 : 8,
        background: 'var(--tennis-yellow)',
        borderRadius: '50%',
        transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
        transition: 'width 0.2s, height 0.2s',
      }} />
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9998,
        pointerEvents: 'none',
        width: hovering ? 44 : 32,
        height: hovering ? 44 : 32,
        border: '1.5px solid var(--hot-pink)',
        borderRadius: '50%',
        transform: `translate(${trail.x - (hovering ? 22 : 16)}px, ${trail.y - (hovering ? 22 : 16)}px)`,
        transition: 'width 0.3s, height 0.3s, opacity 0.3s',
        opacity: 0.6,
        background: hovering ? 'rgba(216,111,145,0.1)' : 'transparent',
      }} />
    </>
  )
}
