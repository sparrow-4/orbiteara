import { useEffect, useRef } from 'react'

/**
 * CursorGlow — A soft glow that follows the mouse cursor.
 * Creates a premium ambient lighting effect.
 */
export default function CursorGlow() {
    const glowRef = useRef(null)

    useEffect(() => {
        const el = glowRef.current
        if (!el) return

        let x = 0, y = 0
        let currentX = 0, currentY = 0

        const handleMouseMove = (e) => {
            x = e.clientX
            y = e.clientY
        }

        const animate = () => {
            // Smooth interpolation
            currentX += (x - currentX) * 0.08
            currentY += (y - currentY) * 0.08
            el.style.left = `${currentX}px`
            el.style.top = `${currentY}px`
            requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', handleMouseMove)
        const raf = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <div
            ref={glowRef}
            className="cursor-glow hidden md:block"
            aria-hidden="true"
        />
    )
}
