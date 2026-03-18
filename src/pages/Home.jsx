import { useRef, useState, useEffect, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CharReveal from '../components/animations/TextReveal'
import Aurora from '../components/animations/Aurora'
import Marquee from '../components/animations/Marquee'
import OdometerCounter from '../components/animations/SmoothCounter'
import MagneticButton from '../components/animations/MagneticButton'
import ScrollReveal from '../components/animations/ScrollReveal'
import ParticleMorph from '../components/animations/ParticleMorph'

gsap.registerPlugin(ScrollTrigger)

const stats = [
    { value: 150, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
    { value: 40, suffix: '+', label: 'Team Members', icon: '👥' },
    { value: 12, suffix: '+', label: 'Years Experience', icon: '📅' },
]

const services = [
    {
        num: '01', icon: '🎨', title: 'Product Design',
        desc: 'End-to-end product design — from research and UX flows to polished UI systems and developer-ready handoff.',
        features: ['User Research', 'UX Flows', 'UI Systems', 'Dev Handoff'],
    },
    {
        num: '02', icon: '⚡', title: 'Full-Stack Development',
        desc: 'From React apps to full-stack platforms — performant, scalable digital products that users love.',
        features: ['React / Next.js', 'APIs & Microservices', 'Database Architecture', 'Cloud & DevOps'],
    },
    {
        num: '03', icon: '📈', title: 'GTM Strategy',
        desc: 'Data-driven strategies that define positioning, growth channels, and measurable ROI.',
        features: ['ICP & Segmentation', 'Positioning', 'Demand Gen', 'Growth Analytics'],
    },
    {
        num: '04', icon: '🧬', title: 'AI Solutions',
        desc: 'LLM applications, autonomous agents, fine-tuning, and production-grade AI pipelines.',
        features: ['RAG & Agents', 'Fine-tuning', 'Model Evals', 'MLOps'],
    },
    {
        num: '05', icon: '📱', title: 'Mobile Development',
        desc: 'Polished iOS & Android applications that extend your digital presence into users\' pockets.',
        features: ['React Native', 'Native Apps', 'Cross-platform', 'ASO'],
    },
    {
        num: '06', icon: '🌐', title: 'IoT & Connected',
        desc: 'Connected experiences that bridge hardware and software with real-time data.',
        features: ['Device Integration', 'Real-time Dashboards', 'Edge Computing', 'Firmware'],
    },
]

const techStack = ['React', 'Next.js', 'Three.js', 'Node.js', 'Figma', 'Flutter', 'TypeScript', 'TailwindCSS', 'AWS', 'Docker', 'GSAP', 'Python']

const caseStudies = [
    { num: '01', title: 'Nexus Labs', tags: ['SaaS', 'Product Design', 'Development'], color: 'from-cyan-500 to-blue-600' },
    { num: '02', title: 'AuraFit', tags: ['Mobile', 'AI', 'UX Design'], color: 'from-purple-500 to-pink-500' },
    { num: '03', title: 'ChainVault', tags: ['Web3', 'Dashboard', 'Full-Stack'], color: 'from-green-400 to-teal-600' },
    { num: '04', title: 'PulseMedia', tags: ['Agency', 'Brand', 'Animation'], color: 'from-orange-500 to-red-500' },
]

export default function Home() {
    const servicesContainerRef = useRef(null)
    const [activeServiceIndex, setActiveServiceIndex] = useState(0)
    const [hoveredCase, setHoveredCase] = useState(null)

    useEffect(() => {
        const container = servicesContainerRef.current
        if (!container) return

        const cards = container.querySelectorAll('.service-card')
        cards.forEach((card, i) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 60%',
                end: 'bottom 40%',
                onEnter: () => setActiveServiceIndex(i),
                onEnterBack: () => setActiveServiceIndex(i),
            })
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-bg"
        >
            {/* ─── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <Aurora intensity={0.6} />
                <div className="absolute inset-0 grid-bg opacity-30" />

                {/* Floating decoration orbs */}
                <div className="floating-orb w-72 h-72 bg-accent top-20 -left-20" style={{ animationDelay: '0s' }} />
                <div className="floating-orb w-96 h-96 bg-purple top-40 right-0" style={{ animationDelay: '3s', animationDuration: '15s' }} />
                <div className="floating-orb w-48 h-48 bg-primary bottom-32 left-1/3" style={{ animationDelay: '6s', animationDuration: '12s' }} />

                {/* Background watermark text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <span className="text-[15vw] font-black text-white/[0.015] whitespace-nowrap tracking-wider font-display">
                        ORBITERA
                    </span>
                </div>

                {/* Particle system */}
                <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-50">
                    <Suspense fallback={null}>
                        <ParticleMorph activeIndex={0} className="w-full h-full" />
                    </Suspense>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
                    <div className="max-w-2xl">
                        <ScrollReveal direction="up" distance={20} duration={0.5} delay={0.1}>
                            <span className="tag-pill mb-6 inline-flex">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                Premium Digital Agency
                            </span>
                        </ScrollReveal>

                        <div className="mt-4">
                            <CharReveal
                                text="Building"
                                as="h1"
                                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white font-display"
                                stagger={0.025}
                                duration={0.7}
                                delay={0.3}
                                scrollTrigger={false}
                            />
                            <CharReveal
                                text="Digital Solutions"
                                as="h1"
                                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] shimmer-text font-display"
                                stagger={0.025}
                                duration={0.7}
                                delay={0.6}
                                scrollTrigger={false}
                            />
                            <CharReveal
                                text="That Matter"
                                as="h1"
                                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white font-display"
                                stagger={0.025}
                                duration={0.7}
                                delay={0.9}
                                scrollTrigger={false}
                            />
                        </div>

                        <ScrollReveal direction="up" distance={25} duration={0.6} delay={1.3}>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-8 mb-10 max-w-xl">
                                We empower organizations with technology that turns complex
                                challenges into real-world outcomes.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" distance={20} duration={0.5} delay={1.5}>
                            <div className="flex flex-wrap gap-4">
                                <MagneticButton strength={0.2}>
                                    <Link to="/contact" className="btn-accent group">
                                        Start Your Project
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1.5">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                        </svg>
                                    </Link>
                                </MagneticButton>
                                <MagneticButton strength={0.2}>
                                    <Link to="/portfolio" className="btn-outline group">
                                        View Our Work
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1.5">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                        </svg>
                                    </Link>
                                </MagneticButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-gray-600 text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent"
                    />
                </motion.div>
            </section>

            {/* ─── Section Divider ───────────────────────────── */}
            <div className="section-divider" />

            {/* ─── STATS ─────────────────────────────────────── */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-radial-glow opacity-30" />
                <div className="floating-orb w-64 h-64 bg-purple top-0 right-20 opacity-10" style={{ animationDelay: '2s' }} />

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <ScrollReveal key={s.label} direction="up" delay={i * 0.12} className="text-center group">
                                <div className="glass-card rounded-2xl p-6 gradient-border">
                                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                                    <p className="text-4xl md:text-5xl font-black text-accent mb-2 font-display">
                                        <OdometerCounter target={s.value} suffix={s.suffix} duration={2} />
                                    </p>
                                    <p className="text-gray-400 text-sm">{s.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* ─── TECH MARQUEE ───────────────────────────────── */}
            <section className="py-6">
                <Marquee speed={18} className="py-4">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="mx-10 text-2xl md:text-3xl font-black text-white/[0.04] hover:text-accent/20 transition-colors duration-500 select-none whitespace-nowrap uppercase tracking-widest font-display"
                        >
                            {tech}
                        </span>
                    ))}
                </Marquee>
            </section>

            <div className="section-divider" />

            {/* ─── STICKY SERVICES ────────────────────────────── */}
            <section className="relative py-28">
                <div className="floating-orb w-80 h-80 bg-accent bottom-20 -left-20 opacity-10" style={{ animationDelay: '4s' }} />

                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal direction="up" className="text-center mb-4">
                        <span className="tag-pill inline-flex">
                            <span className="glow-dot" />
                            Our Services
                        </span>
                    </ScrollReveal>
                    <CharReveal
                        text="Services That Scale"
                        as="h2"
                        className="section-title text-center mb-4 font-display"
                        stagger={0.025}
                    />
                    <ScrollReveal direction="up" delay={0.2} className="text-center mb-20">
                        <p className="text-gray-400 mt-2 max-w-2xl mx-auto text-lg">
                            Comprehensive digital solutions that transform your business
                            and drive innovation across every touchpoint.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left — Sticky particle morph */}
                        <div className="hidden lg:block sticky top-32 h-[500px] relative">
                            <Suspense fallback={null}>
                                <ParticleMorph
                                    activeIndex={activeServiceIndex}
                                    className="w-full h-full"
                                />
                            </Suspense>
                            <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                <span className="text-xs font-mono text-gray-600">{services[activeServiceIndex]?.num} / 06</span>
                                <div className="w-20 h-px bg-white/10 relative">
                                    <motion.div
                                        className="h-full bg-accent"
                                        animate={{ width: `${((activeServiceIndex + 1) / 6) * 100}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right — Scrolling service cards */}
                        <div ref={servicesContainerRef} className="flex flex-col gap-6">
                            {services.map((s, i) => (
                                <ScrollReveal key={s.title} direction="right" delay={i * 0.05} distance={30}>
                                    <div
                                        className={`service-card group glass-card rounded-2xl p-8 transition-all duration-500 cursor-pointer relative overflow-hidden gradient-border ${
                                            activeServiceIndex === i
                                                ? 'border-accent/30 shadow-glow-accent'
                                                : ''
                                        }`}
                                    >
                                        {/* Number watermark */}
                                        <span className="absolute -top-6 -right-2 text-[7rem] font-black text-white/[0.015] group-hover:text-accent/[0.04] transition-colors duration-700 select-none leading-none font-display">
                                            {s.num}
                                        </span>

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-5">
                                                <span className="text-xs font-mono text-accent/60 tracking-wider">{s.num}</span>
                                                <div className="h-px flex-1 bg-white/5 animate-line-grow" />
                                            </div>

                                            <div className="flex items-start gap-4 mb-4">
                                                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                                                <div>
                                                    <h3 className="text-white text-xl font-bold mb-2 font-display">{s.title}</h3>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2 mt-5">
                                                {s.features.map((f) => (
                                                    <span key={f} className="flex items-center gap-2 text-gray-500 text-xs">
                                                        <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

                <ScrollReveal direction="up" className="text-center pt-16">
                    <MagneticButton>
                        <Link to="/services" className="btn-outline group">
                            View All Services
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1.5">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </Link>
                    </MagneticButton>
                </ScrollReveal>
            </section>

            <div className="section-divider" />

            {/* ─── CASE STUDIES — Antimatter hover list ───────── */}
            <section className="py-28 relative">
                <div className="absolute inset-0 bg-purple-glow opacity-20" />
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal direction="up" className="mb-4">
                        <span className="tag-pill inline-flex">
                            <span className="glow-dot" />
                            Case Studies
                        </span>
                    </ScrollReveal>
                    <CharReveal
                        text="Selected Work"
                        as="h2"
                        className="section-title mb-16 font-display"
                        stagger={0.03}
                    />

                    <div className="flex flex-col">
                        {caseStudies.map((cs, i) => (
                            <ScrollReveal key={cs.title} direction="up" delay={i * 0.08}>
                                <div
                                    className="group py-8 border-t border-white/5 last:border-b transition-all duration-500 cursor-pointer relative"
                                    onMouseEnter={() => setHoveredCase(i)}
                                    onMouseLeave={() => setHoveredCase(null)}
                                >
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <span className="text-sm font-mono text-accent/40 w-8">{cs.num}</span>
                                            <h3 className={`text-3xl md:text-4xl font-bold font-display transition-all duration-500 ${
                                                hoveredCase === i ? 'text-white translate-x-2' : 'text-gray-400'
                                            }`}>
                                                {cs.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="hidden md:flex items-center gap-2">
                                                {cs.tags.map((tag) => (
                                                    <span key={tag} className={`px-3 py-1 rounded-full text-xs border transition-all duration-500 ${
                                                        hoveredCase === i
                                                            ? 'border-accent/30 text-accent bg-accent/5'
                                                            : 'border-white/5 text-gray-500'
                                                    }`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <motion.div
                                                animate={{ x: hoveredCase === i ? 5 : 0, opacity: hoveredCase === i ? 1 : 0.3 }}
                                                className="text-accent"
                                            >
                                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Hover gradient preview */}
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{
                                            opacity: hoveredCase === i ? 1 : 0,
                                            scaleX: hoveredCase === i ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className={`absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r ${cs.color} origin-left`}
                                    />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal direction="up" className="mt-12 text-center">
                        <MagneticButton>
                            <Link to="/portfolio" className="btn-outline group">
                                View All Projects
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1.5">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                            </Link>
                        </MagneticButton>
                    </ScrollReveal>
                </div>
            </section>

            <div className="section-divider" />

            {/* ─── CTA ───────────────────────────────────────── */}
            <section className="py-32 relative overflow-hidden">
                <Aurora intensity={0.4} />
                <div className="floating-orb w-96 h-96 bg-accent top-0 right-0 opacity-10" />
                <div className="floating-orb w-72 h-72 bg-purple bottom-0 left-10 opacity-10" style={{ animationDelay: '5s' }} />

                <div className="max-w-7xl mx-auto px-6">
                    <div
                        className="relative rounded-3xl p-14 md:p-20 overflow-hidden text-center gradient-border"
                        style={{
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.08) 50%, rgba(0,212,255,0.06) 100%)',
                        }}
                    >
                        <div className="absolute inset-0 grid-bg opacity-20" />
                        <div className="noise-overlay" />

                        <div className="relative z-10">
                            <CharReveal
                                text="Ready to Launch?"
                                as="h2"
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 font-display"
                                stagger={0.03}
                            />
                            <ScrollReveal direction="up" delay={0.3}>
                                <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                                    Let's transform your vision into a premium digital experience that stands apart.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.5}>
                                <MagneticButton strength={0.25}>
                                    <Link to="/contact" className="btn-accent text-base px-10 py-4 group">
                                        Start Your Project
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transition-transform duration-300 group-hover:translate-x-1.5">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                        </svg>
                                    </Link>
                                </MagneticButton>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
