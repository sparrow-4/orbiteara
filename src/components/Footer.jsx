import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Marquee from './animations/Marquee'
import CharReveal from './animations/TextReveal'
import MagneticButton from './animations/MagneticButton'
import ScrollReveal from './animations/ScrollReveal'

const footerLinks = {
    Company: [
        { label: 'About', to: '/about' },
        { label: 'Portfolio', to: '/portfolio' },
        { label: 'Contact', to: '/contact' },
    ],
    Services: [
        { label: 'Web Design', to: '/services' },
        { label: 'Development', to: '/services' },
        { label: 'Branding', to: '/services' },
        { label: 'AI Solutions', to: '/services' },
    ],
}

const socials = [
    {
        label: 'Twitter',
        href: '#',
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: '#',
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        href: '#',
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: '#',
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
]

const marqueeWords = ['Design', '✦', 'Develop', '✦', 'Strategize', '✦', 'Launch', '✦', 'Innovate', '✦', 'Scale', '✦']

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 mt-auto" style={{ background: 'linear-gradient(180deg, #050810 0%, #030508 100%)' }}>
            {/* Large CTA text */}
            <div className="py-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <CharReveal
                        text="Let's Build Together"
                        as="h2"
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white font-display"
                        stagger={0.025}
                    />
                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="mt-8">
                            <MagneticButton strength={0.2}>
                                <Link to="/contact" className="btn-accent text-base px-8 py-3.5 group">
                                    Get In Touch
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1.5">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                    </svg>
                                </Link>
                            </MagneticButton>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Marquee strip */}
            <div className="border-b border-white/5 py-3">
                <Marquee speed={35}>
                    {marqueeWords.map((word, i) => (
                        <span key={i} className="mx-6 text-lg font-bold text-white/[0.04] select-none whitespace-nowrap uppercase tracking-widest font-display">
                            {word}
                        </span>
                    ))}
                </Marquee>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Orbitera Logo" className="w-14 h-14 object-contain" />
                            <span className="text-2xl font-bold font-display">
                                <span className="text-white">Orbit</span>
                                <span className="text-accent">era</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                            Crafting premium digital experiences that elevate brands 
                            and drive real-world results.
                        </p>
                        <div className="flex items-center gap-3">
                            {socials.map((s, i) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/20 transition-all duration-300"
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([group, links]) => (
                        <div key={group}>
                            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">{group}</h4>
                            <ul className="flex flex-col gap-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            className="text-gray-500 text-sm hover:text-accent hover:translate-x-1 inline-block transition-all duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="section-divider mt-12 mb-8" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} Orbitera. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs flex items-center gap-1">
                        Crafted with
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                            className="text-accent mx-0.5"
                        >
                            ♥
                        </motion.span>
                        for the future
                    </p>
                </div>
            </div>
        </footer>
    )
}
