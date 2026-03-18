import { motion } from 'framer-motion'
import CharReveal from '../components/animations/TextReveal'
import Aurora from '../components/animations/Aurora'
import ScrollReveal from '../components/animations/ScrollReveal'

const services = [
    {
        icon: '🎨', title: 'UI/UX Design', num: '01',
        desc: 'We design intuitive, beautiful interfaces grounded in user psychology. Our design systems are scalable, consistent, and conversion-focused.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
        icon: '⚡', title: 'Web Development', num: '02',
        desc: 'From React apps to full-stack platforms, we build performant, scalable digital products that users love.',
        features: ['React / Next.js', 'Node.js APIs', 'Database Design', 'DevOps & CI/CD'],
    },
    {
        icon: '🚀', title: 'Digital Strategy', num: '03',
        desc: 'Data-driven strategies that define market positioning, growth channels, and measurable ROI for ambitious brands.',
        features: ['Market Research', 'SEO/SEM', 'Analytics Setup', 'Growth Planning'],
    },
    {
        icon: '🔮', title: 'Brand Identity', num: '04',
        desc: 'Cohesive visual identities that communicate your values at a glance. Logo, typography, color, and voice — all unified.',
        features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Brand Voice'],
    },
    {
        icon: '📱', title: 'Mobile Apps', num: '05',
        desc: 'Polished iOS and Android applications that extend your digital presence into users\' pockets.',
        features: ['React Native', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications'],
    },
    {
        icon: '🛡️', title: 'Maintenance & Support', num: '06',
        desc: 'We stand behind everything we build. Ongoing monitoring, updates, and support to keep your digital assets performing.',
        features: ['24/7 Monitoring', 'Security Patches', 'Performance Tuning', 'Feature Additions'],
    },
]

export default function Services() {
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
                <Aurora intensity={0.45} />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-[10vw] font-black text-white/[0.015] whitespace-nowrap tracking-wider">SERVICES</span>
                </div>
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <ScrollReveal direction="up" distance={20}>
                        <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
                            What We Offer
                        </span>
                    </ScrollReveal>
                    <CharReveal
                        text="Services Built for Impact"
                        as="h1"
                        className="section-title text-5xl md:text-6xl mb-6"
                        stagger={0.025}
                        delay={0.2}
                        scrollTrigger={false}
                    />
                    <ScrollReveal direction="up" delay={0.5}>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We offer a full suite of digital services to take your brand from vision to reality — and beyond.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <ScrollReveal key={s.title} direction="up" delay={i * 0.08} distance={40}>
                                <motion.div
                                    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="relative rounded-2xl p-7 border border-white/5 card-3d overflow-hidden group glass h-full"
                                >
                                    <span className="absolute -top-4 -right-2 text-9xl font-black text-white/[0.02] group-hover:text-accent/[0.06] transition-colors duration-700 select-none leading-none">
                                        {s.num}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/[0.06] group-hover:to-primary/[0.04] transition-all duration-700 rounded-2xl" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                                            <span className="text-xs font-mono text-accent/50 tracking-widest">{s.num}</span>
                                            <div className="h-px flex-1 bg-white/5" />
                                        </div>
                                        <h3 className="text-white text-xl font-bold mb-3">{s.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                                        <ul className="flex flex-col gap-2">
                                            {s.features.map((f) => (
                                                <li key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
