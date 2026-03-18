import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * MagneticButton – wraps any element with a magnetic cursor-following effect.
 * @param {React.ReactNode} children
 * @param {number} strength - How far the element follows the cursor (default 0.3)
 * @param {string} className - Additional classes
 */
export default function MagneticButton({ children, strength = 0.3, className = '' }) {
    const ref = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current.getBoundingClientRect()
        const x = (clientX - (left + width / 2)) * strength
        const y = (clientY - (top + height / 2)) * strength
        setPosition({ x, y })
    }

    const reset = () => setPosition({ x: 0, y: 0 })

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    )
}
