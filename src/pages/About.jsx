import { motion } from 'framer-motion'
import CharReveal from '../components/animations/TextReveal'
import Aurora from '../components/animations/Aurora'
import ScrollReveal from '../components/animations/ScrollReveal'
import ParallaxSection from '../components/animations/ParallaxSection'

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
                <Aurora intensity={0.5} />
                <div className="absolute inset-0 grid-bg opacity-20" />

                {/* Background watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-[10vw] font-black text-white/[0.015] whitespace-nowrap tracking-wider">ABOUT US</span>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <ScrollReveal direction="up" distance={20} duration={0.5}>
                            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
                                Our Story
                            </span>
                        </ScrollReveal>
                        <CharReveal
                            text="Built to Elevate"
                            as="h1"
                            className="section-title text-5xl md:text-6xl mb-6"
                            stagger={0.025}
                            delay={0.2}
                            scrollTrigger={false}
                        />
                        <ScrollReveal direction="up" delay={0.6}>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Orbitera was founded with a single mission: to craft digital experiences so exceptional,
                                they become the benchmark for excellence. We're a team of designers, developers, and visionaries
                                who believe the future deserves better design.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <ParallaxSection speed={0.1}>
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <ScrollReveal direction="left" distance={40}>
                                    <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 block">Mission</span>
                                </ScrollReveal>
                                <CharReveal
                                    text="We Don't Just Build Websites."
                                    as="h2"
                                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                                    stagger={0.02}
                                />
                                <CharReveal
                                    text="We Build Brands."
                                    as="h2"
                                    className="text-3xl md:text-4xl font-bold shimmer-text mb-6"
                                    stagger={0.03}
                                />
                                <ScrollReveal direction="up" delay={0.3}>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        In a world full of digital noise, we create signal. Every project we take on becomes a
                                        statement — a fusion of strategy, aesthetics, and technology that moves markets.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        From early-stage startups to established enterprises, we bring the same obsessive
                                        attention to detail and drive for perfection to every engagement.
                                    </p>
                                </ScrollReveal>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {values.map((v, i) => (
                                    <ScrollReveal key={v.title} direction="up" delay={i * 0.1} distance={30}>
                                        <motion.div
                                            whileHover={{ y: -6 }}
                                            className="glass rounded-xl p-5 border border-white/5 hover:border-accent/20 transition-all card-3d group h-full"
                                        >
                                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                                            <h4 className="text-white font-semibold mb-1">{v.title}</h4>
                                            <p className="text-gray-500 text-sm">{v.desc}</p>
                                        </motion.div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ParallaxSection>

            {/* Team */}
            <section className="py-16 relative">
                <div className="absolute inset-0 bg-radial-glow opacity-15" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <ScrollReveal direction="up" className="text-center mb-4">
                        <span className="text-accent text-sm font-semibold uppercase tracking-widest block">Meet The Team</span>
                    </ScrollReveal>
                    <CharReveal
                        text="The Minds Behind the Magic"
                        as="h2"
                        className="section-title text-center mb-12"
                        stagger={0.02}
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <ScrollReveal key={member.name} direction="scale" delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="glass rounded-2xl p-6 text-center border border-white/5 card-3d group"
                                >
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg group-hover:shadow-glow-accent transition-shadow duration-500`}>
                                        {member.initials}
                                    </div>
                                    <h4 className="text-white font-semibold mb-1">{member.name}</h4>
                                    <p className="text-gray-500 text-sm">{member.role}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
