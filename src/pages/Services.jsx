import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const services = [
    {
        icon: '🎨',
        title: 'UI/UX Design',
        desc: 'We design intuitive, beautiful interfaces grounded in user psychology. Our design systems are scalable, consistent, and conversion-focused.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        color: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/20',
    },
    {
        icon: '⚡',
        title: 'Web Development',
        desc: 'From React apps to full-stack platforms, we build performant, scalable digital products that users love.',
        features: ['React / Next.js', 'Node.js APIs', 'Database Design', 'DevOps & CI/CD'],
        color: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/20',
    },
    {
        icon: '🚀',
        title: 'Digital Strategy',
        desc: 'Data-driven strategies that define market positioning, growth channels, and measurable ROI for ambitious brands.',
        features: ['Market Research', 'SEO/SEM', 'Analytics Setup', 'Growth Planning'],
        color: 'from-green-500/20 to-teal-500/20',
        border: 'border-green-500/20',
    },
    {
        icon: '🔮',
        title: 'Brand Identity',
        desc: 'Cohesive visual identities that communicate your values at a glance. Logo, typography, color, and voice — all unified.',
        features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Brand Voice'],
        color: 'from-orange-500/20 to-red-500/20',
        border: 'border-orange-500/20',
    },
    {
        icon: '📱',
        title: 'Mobile Apps',
        desc: 'Polished iOS and Android applications that extend your digital presence into users\' pockets.',
        features: ['React Native', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications'],
        color: 'from-cyan-500/20 to-blue-500/20',
        border: 'border-cyan-500/20',
    },
    {
        icon: '🛡️',
        title: 'Maintenance & Support',
        desc: 'We stand behind everything we build. Ongoing monitoring, updates, and support to keep your digital assets performing.',
        features: ['24/7 Monitoring', 'Security Patches', 'Performance Tuning', 'Feature Additions'],
        color: 'from-yellow-500/20 to-orange-500/20',
        border: 'border-yellow-500/20',
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
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                        <motion.span variants={itemVariants} className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
                            What We Offer
                        </motion.span>
                        <motion.h1 variants={itemVariants} className="section-title text-5xl md:text-6xl mb-6">
                            Services Built for Impact
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We offer a full suite of digital services to take your brand from vision to reality — and beyond.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((s) => (
                            <motion.div
                                key={s.title}
                                variants={itemVariants}
                                whileHover={{ y: -6 }}
                                className={`relative rounded-2xl p-7 border ${s.border} card-hover overflow-hidden`}
                                style={{ background: `linear-gradient(135deg, ${s.color.split(' ')[0].replace('from-', 'rgba(').replace('/20', ',0.1)')} 0%, transparent 100%)` }}
                            >
                                <div className="text-5xl mb-5">{s.icon}</div>
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
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}
