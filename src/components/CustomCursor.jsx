
import { useEffect, useRef } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const cursorRef = useRef(null)
  const frameRef = useRef(null)
  const latestPosition = useRef({ x: -100, y: -100 })
  const previousPosition = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const handleMouseMove = (event) => {
      latestPosition.current = {
        x: event.clientX,
        y: event.clientY,
      }

      if (frameRef.current) return

      frameRef.current = requestAnimationFrame(() => {
        const { x, y } = latestPosition.current
        const previous = previousPosition.current

        const dx = x - previous.x
        const dy = y - previous.y

        const angle =
          Math.abs(dx) + Math.abs(dy) > 0.5
            ? Math.atan2(dy, dx) * (180 / Math.PI)
            : 0

        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
        cursor.style.setProperty('--comet-angle', `${angle}deg`)
        cursor.classList.add('comet-visible')

        previousPosition.current = { x, y }
        frameRef.current = null
      })
    }

    const handleMouseLeave = () => {
      cursor.classList.remove('comet-visible')
    }

    const handleMouseEnter = () => {
      cursor.classList.add('comet-visible')
    }

    const handlePointerOver = (event) => {
      const interactive = event.target.closest(
        'a, button, input, textarea, select, [role="button"]'
      )

      cursor.classList.toggle('comet-hover', Boolean(interactive))
    }

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    })

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handlePointerOver, {
      passive: true,
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handlePointerOver)

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div ref={cursorRef} className="comet-cursor">
      <span className="comet-tail" />
      <span className="comet-trail-particle particle-one" />
      <span className="comet-trail-particle particle-two" />
      <span className="comet-trail-particle particle-three" />
      <span className="comet-core" />
      <span className="comet-center" />
    </div>
  )
}

export default CustomCursor
