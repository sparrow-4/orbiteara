import { useState } from 'react'
import { motion } from 'framer-motion'
import CharReveal from '../components/animations/TextReveal'
import Aurora from '../components/animations/Aurora'
import ScrollReveal from '../components/animations/ScrollReveal'
import MagneticButton from '../components/animations/MagneticButton'

function saveMessage(data) {
    const existing = JSON.parse(localStorage.getItem('orbitera_messages') || '[]')
    existing.push({ ...data, id: Date.now(), timestamp: new Date().toISOString() })
    localStorage.setItem('orbitera_messages', JSON.stringify(existing))
}

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        await new Promise((r) => setTimeout(r, 900))
        saveMessage(form)
        setSubmitted(true)
        setSubmitting(false)
    }

    const info = [
        { icon: '📧', label: 'Email', value: 'hello@orbitera.io' },
        { icon: '📍', label: 'Location', value: 'Bangalore, India' },
        { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
    ]

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
                    <span className="text-[10vw] font-black text-white/[0.015] whitespace-nowrap tracking-wider">CONTACT</span>
                </div>
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <ScrollReveal direction="up" distance={20}>
                        <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Let's Connect</span>
                    </ScrollReveal>
                    <CharReveal
                        text="Start Your Project"
                        as="h1"
                        className="section-title text-5xl md:text-6xl mb-6"
                        stagger={0.025}
                        delay={0.2}
                        scrollTrigger={false}
                    />
                    <ScrollReveal direction="up" delay={0.5}>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Ready to launch something extraordinary? We'd love to hear from you.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Info */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <ScrollReveal direction="left" distance={30}>
                                <h2 className="text-2xl font-bold text-white mb-2">Get In Touch</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Fill out the form and our team will reach out within 24 hours to discuss your project.
                                </p>
                            </ScrollReveal>
                            {info.map((item, i) => (
                                <ScrollReveal key={item.label} direction="left" delay={0.2 + i * 0.1} distance={20}>
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        className="glass rounded-xl p-5 border border-white/5 flex items-start gap-4 hover:border-accent/20 transition-all duration-300 group"
                                    >
                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                                        <div>
                                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-white font-medium">{item.value}</p>
                                        </div>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Form */}
                        <ScrollReveal direction="right" distance={30} className="lg:col-span-3">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="glass rounded-2xl p-12 border border-accent/20 text-center h-full flex flex-col items-center justify-center gap-6"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                                        className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center text-4xl animate-pulse-glow"
                                    >
                                        ✅
                                    </motion.div>
                                    <div>
                                        <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                                        <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                                    </div>
                                    <button
                                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                                        className="btn-outline"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="glass rounded-2xl p-8 border border-white/5 flex flex-col gap-5 glow-border-animated"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {[
                                            { name: 'name', label: 'Your Name', type: 'text' },
                                            { name: 'email', label: 'Email Address', type: 'email' },
                                        ].map((field) => (
                                            <div key={field.name} className="relative">
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    id={`contact-${field.name}`}
                                                    value={form[field.name]}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder=" "
                                                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-5 pb-2 text-white text-sm outline-none focus:border-accent/50 transition-all hover:border-white/20"
                                                />
                                                <label
                                                    htmlFor={`contact-${field.name}`}
                                                    className="absolute left-4 top-1.5 text-xs text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none"
                                                >
                                                    {field.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text" name="subject" id="contact-subject"
                                            value={form.subject} onChange={handleChange} required placeholder=" "
                                            className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-5 pb-2 text-white text-sm outline-none focus:border-accent/50 transition-all hover:border-white/20"
                                        />
                                        <label htmlFor="contact-subject" className="absolute left-4 top-1.5 text-xs text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none">
                                            Subject
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            name="message" id="contact-message" rows={5}
                                            value={form.message} onChange={handleChange} required placeholder=" "
                                            className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-5 pb-2 text-white text-sm outline-none focus:border-accent/50 transition-all resize-none hover:border-white/20"
                                        />
                                        <label htmlFor="contact-message" className="absolute left-4 top-1.5 text-xs text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none">
                                            Your Message
                                        </label>
                                    </div>

                                    <MagneticButton strength={0.15} className="w-full">
                                        <button
                                            type="submit" disabled={submitting}
                                            className="btn-accent justify-center py-3.5 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed w-full group"
                                        >
                                            {submitting ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                                                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1">
                                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </MagneticButton>
                                </form>
                            )}
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
