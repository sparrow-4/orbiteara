import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollReveal — GSAP ScrollTrigger-powered reveal wrapper.
 * Mimics Antimatter's exact scroll-triggered element animations.
 *
 * @param {React.ReactNode} children
 * @param {string} className
 * @param {'up'|'down'|'left'|'right'|'scale'} direction
 * @param {number} distance - Animation distance in px (default 60)
 * @param {number} duration - Animation duration (default 0.8)
 * @param {number} delay - Delay in seconds (default 0)
 * @param {string} start - ScrollTrigger start position (default 'top 85%')
 */
export default function ScrollReveal({
    children,
    className = '',
    direction = 'up',
    distance = 60,
    duration = 0.8,
    delay = 0,
    start = 'top 85%',
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        const fromVars = { opacity: 0 }

        switch (direction) {
            case 'up':    fromVars.y = distance; break
            case 'down':  fromVars.y = -distance; break
            case 'left':  fromVars.x = distance; break
            case 'right': fromVars.x = -distance; break
            case 'scale': fromVars.scale = 0.85; break
        }

        const anim = gsap.fromTo(el, fromVars, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start,
                once: true,
            },
        })

        return () => anim.kill()
    }, [direction, distance, duration, delay, start])

    return (
        <div ref={ref} className={className} style={{ opacity: 0 }}>
            {children}
        </div>
    )
}
