import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * CharReveal — Antimatter-style character-by-character staggered reveal.
 * Each character gets its own <span>, fades in + slides up with stagger.
 *
 * @param {string} text - Text to reveal
 * @param {string} as - HTML tag (default 'h1')
 * @param {string} className - Additional classes
 * @param {number} stagger - Delay between each char (default 0.02)
 * @param {number} duration - Per-char animation duration (default 0.6)
 * @param {number} delay - Initial delay (default 0)
 * @param {boolean} scrollTrigger - Whether to trigger on scroll (default true)
 * @param {string} italic - Text substring to italicize
 */
export default function CharReveal({
    text = '',
    as: Tag = 'h1',
    className = '',
    stagger = 0.02,
    duration = 0.6,
    delay = 0,
    scrollTrigger = true,
    italic = '',
}) {
    const containerRef = useRef(null)

    useEffect(() => {
        const chars = containerRef.current.querySelectorAll('.char-reveal-char')
        if (!chars.length) return

        const tl = gsap.timeline({
            scrollTrigger: scrollTrigger ? {
                trigger: containerRef.current,
                start: 'top 85%',
                once: true,
            } : undefined,
            delay,
        })

        tl.fromTo(
            chars,
            {
                opacity: 0,
                y: 20,
                rotateX: 40,
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration,
                stagger,
                ease: 'power3.out',
            }
        )

        return () => {
            tl.kill()
        }
    }, [text, stagger, duration, delay, scrollTrigger])

    // Split text into characters, preserving spaces
    const renderChars = () => {
        const words = text.split(' ')
        return words.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
                {word.split('').map((char, ci) => {
                    const isItalic = italic && text.indexOf(italic) !== -1 &&
                        text.indexOf(italic) <= words.slice(0, wi).join(' ').length + ci &&
                        words.slice(0, wi).join(' ').length + ci < text.indexOf(italic) + italic.length

                    return (
                        <span
                            key={`${wi}-${ci}`}
                            className={`char-reveal-char inline-block ${isItalic ? 'italic' : ''}`}
                            style={{ opacity: 0, perspective: '600px' }}
                        >
                            {char}
                        </span>
                    )
                })}
                {wi < words.length - 1 && (
                    <span className="char-reveal-char inline-block" style={{ opacity: 0 }}>&nbsp;</span>
                )}
            </span>
        ))
    }

    return (
        <Tag ref={containerRef} className={`overflow-hidden ${className}`} aria-label={text}>
            {renderChars()}
        </Tag>
    )
}
