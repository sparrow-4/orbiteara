import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import MagneticButton from './animations/MagneticButton'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [visible, setVisible] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const lastScrollY = useRef(0)
    const location = useLocation()
    const { isAuthenticated } = useAuth()

    // Antimatter-style: hide navbar on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setScrolled(currentY > 30)

            if (currentY > lastScrollY.current && currentY > 120) {
                // Scrolling down — hide
                setVisible(false)
            } else {
                // Scrolling up — show
                setVisible(true)
            }
            lastScrollY.current = currentY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/'
        return location.pathname.startsWith(path)
    }

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <MagneticButton strength={0.15}>
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="relative">
                                <img src="/logo.png" alt="Orbitera Logo" className="w-16 h-16 object-contain" />
                                <div className="absolute inset-0 rounded-lg bg-accent/20 blur-md group-hover:bg-accent/40 transition-all duration-500 -z-10" />
                            </div>
                            <span className="text-xl font-bold tracking-wide">
                                <span className="text-white">Orbit</span>
                                <span className="text-accent">era</span>
                            </span>
                        </Link>
                    </MagneticButton>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <MagneticButton key={link.to} strength={0.2}>
                                <Link
                                    to={link.to}
                                    className={`relative text-sm font-medium transition-all duration-300 py-1 ${
                                        isActive(link.to) ? 'text-accent' : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                    {isActive(link.to) && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                            style={{ background: 'linear-gradient(90deg, #00D4FF, #2563EB)' }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </MagneticButton>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <MagneticButton strength={0.2}>
                            {isAuthenticated ? (
                                <Link to="/admin" className="btn-accent text-sm px-5 py-2.5 group">
                                    Admin Panel
                                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                    </svg>
                                </Link>
                            ) : (
                                <Link to="/login" className="btn-primary text-sm px-5 py-2.5 group">
                                    Sign In
                                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:translate-x-1">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                    </svg>
                                </Link>
                            )}
                        </MagneticButton>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-20 left-0 right-0 z-40 glass-dark border-t border-white/5 md:hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.to}
                                        className={`text-base font-medium py-2 border-b border-white/5 block ${
                                            isActive(link.to) ? 'text-accent' : 'text-gray-300'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-2">
                                {isAuthenticated ? (
                                    <Link to="/admin" className="btn-accent w-full text-center justify-center">
                                        Admin Panel
                                    </Link>
                                ) : (
                                    <Link to="/login" className="btn-primary w-full text-center justify-center">
                                        Sign In
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
