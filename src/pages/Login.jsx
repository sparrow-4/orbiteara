import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await new Promise((r) => setTimeout(r, 600))
        const result = login(form.email, form.password)
        if (result.success) {
            navigate('/admin')
        } else {
            setError(result.error)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-bg flex items-center justify-center relative overflow-hidden px-4">
            {/* Background effects */}
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            {/* Animated rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full border border-primary/10 animate-spin-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-accent/5 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full max-w-md"
            >
                {/* Card */}
                <div className="relative glass rounded-2xl p-8 border"
                    style={{ borderColor: 'rgba(0,212,255,0.15)', boxShadow: '0 0 60px rgba(0,212,255,0.08)' }}>
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <Link to="/" className="flex flex-col items-center gap-4 mb-8">
                            <img src="/logo.png" alt="Orbitera Logo" className="w-32 h-32 object-contain" />
                            <span className="text-3xl font-black">
                                <span className="text-white">Orbit</span>
                                <span className="text-accent">era</span>
                            </span>
                        </Link>
                        <h1 className="text-white text-2xl font-bold mb-1">Welcome Back</h1>
                        <p className="text-gray-500 text-sm">Sign in to your admin panel</p>
                    </div>

                    {/* Error */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-5 px-4 py-3 rounded-xl text-red-400 text-sm flex items-center gap-2"
                            style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="login-email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                autoComplete="email"
                                className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none focus:border-accent/50 transition-all"
                            />
                            <label
                                htmlFor="login-email"
                                className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none"
                            >
                                Email Address
                            </label>
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="login-password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                autoComplete="current-password"
                                className="peer w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 pr-12 text-white text-sm outline-none focus:border-accent/50 transition-all"
                            />
                            <label
                                htmlFor="login-password"
                                className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none"
                            >
                                Password
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-accent transition-colors"
                            >
                                {showPassword ? (
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            id="login-submit"
                            className="btn-accent justify-center py-3.5 text-base font-semibold disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                                    </svg>
                                    Signing In...
                                </span>
                            ) : (
                                <>Sign In <span>→</span></>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link to="/" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                            ← Back to Website
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
