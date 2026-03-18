import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CharReveal from '../components/animations/TextReveal'
import Aurora from '../components/animations/Aurora'
import ScrollReveal from '../components/animations/ScrollReveal'

const categories = ['All', 'Web Design', 'Branding', 'Development', 'Mobile']

const projects = [
    { id: 1, title: 'Nexus Labs', cat: 'Web Design', desc: 'Futuristic SaaS platform UI', tags: ['React', 'Framer Motion'], color: 'from-blue-500 to-cyan-500' },
    { id: 2, title: 'AuraFit', cat: 'Mobile', desc: 'Fitness tracking mobile app', tags: ['React Native', 'AI'], color: 'from-purple-500 to-pink-500' },
    { id: 3, title: 'Stealth.io', cat: 'Branding', desc: 'Startup brand identity system', tags: ['Figma', 'Brand'], color: 'from-orange-500 to-red-500' },
    { id: 4, title: 'ChainVault', cat: 'Development', desc: 'Web3 portfolio dashboard', tags: ['Next.js', 'Web3'], color: 'from-green-500 to-teal-500' },
    { id: 5, title: 'PulseMedia', cat: 'Web Design', desc: 'Digital media agency website', tags: ['Tailwind', 'GSAP'], color: 'from-yellow-500 to-orange-500' },
    { id: 6, title: 'Meridian Bank', cat: 'Development', desc: 'Fintech dashboard platform', tags: ['TypeScript', 'Charts'], color: 'from-cyan-500 to-blue-500' },
    { id: 7, title: 'PeakBrand', cat: 'Branding', desc: 'Luxury product brand identity', tags: ['Branding', 'Print'], color: 'from-pink-500 to-rose-500' },
    { id: 8, title: 'SwiftyPay', cat: 'Mobile', desc: 'Payment app with biometric auth', tags: ['React Native', 'UX'], color: 'from-indigo-500 to-purple-500' },
]

export default function Portfolio() {
    const [active, setActive] = useState('All')
    const filtered = active === 'All' ? projects : projects.filter((p) => p.cat === active)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-bg page-wrapper"
        >
            {/* Header */}
            <section className="relative py-24 overflow-hidden">
                <Aurora intensity={0.4} />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-[10vw] font-black text-white/[0.015] whitespace-nowrap tracking-wider">PORTFOLIO</span>
                </div>
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <ScrollReveal direction="up" distance={20}>
                        <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Our Work</span>
                    </ScrollReveal>
                    <CharReveal
                        text="Projects That Inspire"
                        as="h1"
                        className="section-title text-5xl md:text-6xl mb-6"
                        stagger={0.025}
                        delay={0.2}
                        scrollTrigger={false}
                    />
                    <ScrollReveal direction="up" delay={0.5}>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            A showcase of our finest digital work — each project a story of transformation.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        active === cat
                                            ? 'bg-accent text-black font-semibold shadow-glow-accent'
                                            : 'glass text-gray-400 hover:text-white border border-white/10 hover:border-accent/30'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((p, i) => (
                                <motion.div
                                    key={p.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.85, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.85 }}
                                    transition={{ delay: i * 0.05, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    whileHover={{ y: -10, rotateX: 2, rotateY: -1.5, scale: 1.02 }}
                                    className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all cursor-pointer card-3d"
                                >
                                    {/* Thumbnail */}
                                    <div className={`h-40 bg-gradient-to-br ${p.color} opacity-70 group-hover:opacity-100 transition-all duration-500 relative overflow-hidden`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-5xl font-black text-white/20">{p.title[0]}</span>
                                        </div>
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                                            <span className="text-white text-sm font-semibold border border-white/30 px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                                                View Project
                                            </span>
                                        </div>
                                        {/* Shine wipe */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                                    </div>

                                    <div className="p-5">
                                        <span className="text-xs text-accent font-medium uppercase tracking-wide">{p.cat}</span>
                                        <h3 className="text-white font-bold text-lg mt-1 mb-2">{p.title}</h3>
                                        <p className="text-gray-500 text-sm mb-3">{p.desc}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {p.tags.map((t) => (
                                                <span key={t} className="px-2 py-0.5 rounded text-xs text-gray-400 bg-white/5 border border-white/5 group-hover:border-accent/10 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
