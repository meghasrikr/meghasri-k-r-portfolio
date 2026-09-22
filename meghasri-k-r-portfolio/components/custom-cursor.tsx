'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    let raf = 0
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let started = false

    const start = () => {
      if (started) return
      started = true
      setEnabled(true)
      document.documentElement.classList.add('custom-cursor-active')
      raf = requestAnimationFrame(tick)
    }

    const onMove = (e: MouseEvent) => {
      // A real mouse moved — activate the custom cursor.
      start()

      mouseX = e.clientX
      mouseY = e.clientY

      const dot = dotRef.current
      const ring = ringRef.current
      if (dot) {
        dot.style.opacity = '1'
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }
      if (ring) {
        ring.style.opacity = '1'
        const target = e.target as HTMLElement | null
        const interactive = target?.closest(
          'a, button, input, textarea, select, label, [role="button"]',
        )
        ring.dataset.active = interactive ? 'true' : 'false'
      }
    }

    const onDown = () => {
      if (ringRef.current) ringRef.current.dataset.pressed = 'true'
    }
    const onUp = () => {
      if (ringRef.current) ringRef.current.dataset.pressed = 'false'
    }
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    const tick = () => {
      // Ring trails the dot with easing for a smooth, springy feel.
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      const ring = ringRef.current
      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.documentElement.classList.remove('custom-cursor-active')
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ visibility: enabled ? 'visible' : 'hidden' }}
    >
      <div
        ref={ringRef}
        data-active="false"
        data-pressed="false"
        className="fixed left-0 top-0 h-8 w-8 rounded-full border border-[#7c3aed]/60 bg-[#7c3aed]/5 opacity-0 shadow-[0_0_18px_rgba(124,58,237,0.35)] transition-[width,height,background-color,border-color,opacity] duration-200 ease-out data-[active=true]:h-12 data-[active=true]:w-12 data-[active=true]:border-[#4f46e5]/70 data-[active=true]:bg-[#4f46e5]/10 data-[pressed=true]:scale-90"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-[#4f46e5] opacity-0 shadow-[0_0_12px_rgba(79,70,229,0.8)]"
        style={{ willChange: 'transform' }}
      />
    </div>
  )
}
