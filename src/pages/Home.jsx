import { useRef, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial, Sphere, useTexture } from '@react-three/drei'

function FloatingLogo() {
    const texture = useTexture('/logo.png')
    const meshRef = useRef()

    useFrame((state) => {
        meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.15
        meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1
    })

    return (
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
            <mesh ref={meshRef}>
                <planeGeometry args={[4.8, 4.8]} />
                <meshBasicMaterial
                    map={texture}
                    transparent={true}
                    alphaTest={0.5}
                    depthWrite={false}
                    toneMapped={false}
                />
            </mesh>
        </Float>
    )
}

function InnerRing() {
    const meshRef = useRef()
    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5
        meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.3
    })
    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[2.8, 0.025, 16, 100]} />
            <meshStandardMaterial color="#2563EB" emissive="#2563EB" emissiveIntensity={2} />
        </mesh>
    )
}

function OuterRing() {
    const meshRef = useRef()
    useFrame((state) => {
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
        meshRef.current.rotation.x = Math.PI / 2.5
    })
    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[3.6, 0.015, 16, 100]} />
            <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={1.5} />
        </mesh>
    )
}

function HeroScene() {
    return (
        <>
            <Stars radius={80} depth={50} count={3000} factor={4} fade speed={1} />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00D4FF" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#2563EB" />
            <FloatingLogo />
            <InnerRing />
            <OuterRing />
        </>
    )
}

const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '40+', label: 'Team Members' },
    { value: '12+', label: 'Years Experience' },
]

const services = [
    {
        icon: '🎨',
        title: 'UI/UX Design',
        desc: 'Pixel-perfect interfaces that delight users and drive conversions.',
    },
    {
        icon: '⚡',
        title: 'Web Development',
        desc: 'Blazing fast, scalable web apps built with cutting-edge technologies.',
    },
    {
        icon: '🚀',
        title: 'Digital Strategy',
        desc: 'Data-driven strategies that propel your brand into the stratosphere.',
    },
    {
        icon: '🔮',
        title: 'Brand Identity',
        desc: 'Memorable brand systems that leave a lasting impression.',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-bg"
        >
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Grid BG */}
                <div className="absolute inset-0 grid-bg opacity-50" />

                {/* Radial glow */}
                <div className="absolute inset-0 bg-radial-glow opacity-40" />

                {/* 3D Canvas */}
                <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
                    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                        <Suspense fallback={null}>
                            <HeroScene />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', color: '#00D4FF' }}>
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                Premium Digital Agency
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black leading-tight mb-6">
                            <span className="text-white">We Build</span>
                            <br />
                            <span className="glow-text" style={{ color: '#00D4FF' }}>Digital</span>
                            <br />
                            <span className="text-white">Futures</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            Orbitera crafts premium digital experiences that elevate brands.
                            From stunning design to powerful development — we launch brands to orbit.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <Link to="/portfolio" className="btn-accent">
                                View Our Work
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                            </Link>
                            <Link to="/contact" className="btn-outline">
                                Get In Touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-20 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((s) => (
                            <motion.div key={s.label} variants={itemVariants} className="text-center">
                                <p className="text-4xl md:text-5xl font-black text-accent mb-2">{s.value}</p>
                                <p className="text-gray-400 text-sm">{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 block">
                                What We Do
                            </span>
                            <h2 className="section-title">Services That Scale</h2>
                            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                                From concept to launch, we offer end-to-end digital solutions for ambitious brands.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((s) => (
                                <motion.div
                                    key={s.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -6 }}
                                    className="glass rounded-2xl p-6 card-hover border border-white/5"
                                >
                                    <div className="text-4xl mb-4">{s.icon}</div>
                                    <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={itemVariants} className="text-center mt-10">
                            <Link to="/services" className="btn-outline">
                                All Services →
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-3xl p-12 md:p-16 overflow-hidden text-center"
                        style={{
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.25) 0%, rgba(0,212,255,0.1) 100%)',
                            border: '1px solid rgba(0,212,255,0.2)',
                        }}
                    >
                        <div className="absolute inset-0 grid-bg opacity-30" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Ready to Launch?
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                                Let's transform your vision into a premium digital experience that stands apart.
                            </p>
                            <Link to="/contact" className="btn-accent text-base px-8 py-4">
                                Start Your Project
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}
