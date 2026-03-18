import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ParallaxSection – adds a scroll-based parallax offset to its children.
 * @param {React.ReactNode} children
 * @param {number} speed - Parallax multiplier (default 0.3, higher = more offset)
 * @param {string} className - Additional classes
 */
export default function ParallaxSection({ children, speed = 0.3, className = '' }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100])

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    )
}
