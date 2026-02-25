import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const team = [
    { name: 'Thoyyib C.', role: 'Founder & CEO', initials: 'TC', color: 'from-primary to-accent' },
    { name: 'Arham K.', role: 'Lead Designer', initials: 'AK', color: 'from-purple-500 to-pink-500' },
    { name: 'Riya M.', role: 'Head of Dev', initials: 'RM', color: 'from-green-500 to-teal-500' },
    { name: 'Dani L.', role: 'Strategy Lead', initials: 'DL', color: 'from-orange-500 to-red-500' },
]

const values = [
    { icon: '🎯', title: 'Precision', desc: 'Every pixel, every line of code crafted with intent.' },
    { icon: '🚀', title: 'Innovation', desc: 'We pioneer solutions before they become trends.' },
    { icon: '🤝', title: 'Partnership', desc: 'Your success is our mission — always aligned.' },
    { icon: '✨', title: 'Excellence', desc: 'We never ship mediocre. Only premium outputs.' },
]

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-bg page-wrapper"
        >
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.span variants={itemVariants} className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Our Story
                        </motion.span>
                        <motion.h1 variants={itemVariants} className="section-title text-5xl md:text-6xl mb-6">
                            Built to Elevate
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed">
                            Orbitera was founded with a single mission: to craft digital experiences so exceptional,
                            they become the benchmark for excellence. We're a team of designers, developers, and visionaries
                            who believe the future deserves better design.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 block">Mission</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                We Don't Just Build Websites.<br />
                                <span className="text-accent">We Build Brands.</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                In a world full of digital noise, we create signal. Every project we take on becomes a
                                statement — a fusion of strategy, aesthetics, and technology that moves markets.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                From early-stage startups to established enterprises, we bring the same obsessive
                                attention to detail and drive for perfection to every engagement.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {values.map((v) => (
                                <div key={v.title} className="glass rounded-xl p-5 border border-white/5 hover:border-accent/20 transition-all">
                                    <div className="text-3xl mb-3">{v.icon}</div>
                                    <h4 className="text-white font-semibold mb-1">{v.title}</h4>
                                    <p className="text-gray-500 text-sm">{v.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 block">Meet The Team</span>
                            <h2 className="section-title">The Minds Behind the Magic</h2>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {team.map((member) => (
                                <motion.div
                                    key={member.name}
                                    variants={itemVariants}
                                    whileHover={{ y: -6 }}
                                    className="glass rounded-2xl p-6 text-center border border-white/5 card-hover"
                                >
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg`}>
                                        {member.initials}
                                    </div>
                                    <h4 className="text-white font-semibold mb-1">{member.name}</h4>
                                    <p className="text-gray-500 text-sm">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}
