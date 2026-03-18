import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * OdometerCounter — Antimatter-style slot-machine digit counter.
 * Digits "spin" vertically through numbers to reach the target value.
 *
 * @param {number} target - The number to count to
 * @param {string} suffix - Text after the number ('+', '%', etc.)
 * @param {number} duration - Roll duration in seconds (default 2)
 * @param {string} className - Additional classes
 */
export default function OdometerCounter({ target, suffix = '', duration = 2, className = '' }) {
    const containerRef = useRef(null)
    const [hasTriggered, setHasTriggered] = useState(false)
    const digits = String(target).split('')

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => setHasTriggered(true),
        })
        return () => trigger.kill()
    }, [])

    useEffect(() => {
        if (!hasTriggered) return
        const columns = containerRef.current.querySelectorAll('.odometer-column')
        columns.forEach((col, i) => {
            const digitVal = parseInt(digits[i], 10)
            // Roll through all digits up to the target
            gsap.fromTo(col,
                { y: 0 },
                {
                    y: -digitVal * 48, // 48px per digit (h-12 = 3rem = 48px)
                    duration: duration + i * 0.15,
                    ease: 'power2.out',
                    delay: i * 0.08,
                }
            )
        })
    }, [hasTriggered, digits, duration])

    return (
        <span ref={containerRef} className={`inline-flex items-baseline ${className}`}>
            <span className="inline-flex overflow-hidden" style={{ height: '48px' }}>
                {digits.map((d, i) => (
                    <span key={i} className="relative inline-block" style={{ width: '0.65em', height: '48px', overflow: 'hidden' }}>
                        <span className="odometer-column absolute left-0 top-0 flex flex-col">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                                <span
                                    key={n}
                                    className="flex items-center justify-center font-black"
                                    style={{ height: '48px', lineHeight: '48px' }}
                                >
                                    {n}
                                </span>
                            ))}
                        </span>
                    </span>
                ))}
            </span>
            {suffix && <span className="font-black">{suffix}</span>}
        </span>
    )
}
