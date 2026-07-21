import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  radius: number
  speed: number
  phase: number
}

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return undefined
    }

    const stars: Star[] = []
    let animationFrame = 0
    let width = 0
    let height = 0
    let time = 0

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = window.devicePixelRatio || 1

      canvas.width = Math.floor(width * ratio)
      canvas.height = Math.floor(height * ratio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const initStars = () => {
      stars.length = 0

      for (let index = 0; index < 160; index += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.2,
          speed: Math.random() * 0.003 + 0.001,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      time += 0.008

      for (const star of stars) {
        const alpha = 0.15 + 0.55 * (0.5 + 0.5 * Math.sin(time * star.speed * 60 + star.phase))
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(201,169,110,${alpha})`
        context.fill()
      }

      animationFrame = window.requestAnimationFrame(draw)
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const drawStatic = () => {
      context.clearRect(0, 0, width, height)
      for (const star of stars) {
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fillStyle = 'rgba(201,169,110,0.45)'
        context.fill()
      }
    }

    resizeCanvas()
    initStars()

    if (prefersReducedMotion) {
      drawStatic()
    } else {
      draw()
    }

    const handleResize = () => {
      resizeCanvas()
      initStars()
      if (prefersReducedMotion) {
        drawStatic()
      }
    }

    // Pause the animation when the tab is hidden to save battery.
    const handleVisibility = () => {
      if (prefersReducedMotion) {
        return
      }
      window.cancelAnimationFrame(animationFrame)
      if (!document.hidden) {
        draw()
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
  )
}
