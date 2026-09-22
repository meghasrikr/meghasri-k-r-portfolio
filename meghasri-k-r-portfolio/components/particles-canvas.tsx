'use client'

import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  radius: number
  speedY: number
  driftX: number
  driftPhase: number
  alpha: number
  color: string
}

export function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = ['#4F46E5', '#6366F1']
    let width = 0
    let height = 0
    let dots: Dot[] = []
    let animationId = 0

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function createDot(randomY: boolean): Dot {
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -10,
        radius: Math.random() * 2 + 1,
        speedY: Math.random() * 0.5 + 0.25,
        driftX: Math.random() * 0.4 + 0.1,
        driftPhase: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.4 + 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    }

    function setup() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(Math.floor((width * height) / 12000), 130)
      dots = Array.from({ length: count }, () => createDot(true))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      for (const dot of dots) {
        dot.y += dot.speedY
        dot.driftPhase += 0.01
        dot.x += Math.sin(dot.driftPhase) * dot.driftX

        if (dot.y - dot.radius > height) {
          dot.y = -10
          dot.x = Math.random() * width
        }
        if (dot.x < -10) dot.x = width + 10
        if (dot.x > width + 10) dot.x = -10

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.alpha
        ctx.shadowColor = dot.color
        ctx.shadowBlur = 8
        ctx.fill()
      }
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      animationId = requestAnimationFrame(draw)
    }

    setup()

    if (prefersReduced) {
      // Render a single static frame without continuous motion
      ctx.clearRect(0, 0, width, height)
      for (const dot of dots) {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.alpha
        ctx.shadowColor = dot.color
        ctx.shadowBlur = 8
        ctx.fill()
      }
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
    } else {
      draw()
    }

    const handleResize = () => setup()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  )
}
