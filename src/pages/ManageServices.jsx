import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from '../components/Sidebar'

const defaultServices = [
    { id: 1, title: 'UI/UX Design', description: 'Pixel-perfect interfaces grounded in user psychology.', icon: '🎨' },
    { id: 2, title: 'Web Development', description: 'Fast, scalable apps built with modern technologies.', icon: '⚡' },
    { id: 3, title: 'Brand Identity', description: 'Cohesive visual identities that communicate values.', icon: '🔮' },
]

const emptyForm = { title: '', description: '', icon: '' }

export default function ManageServices() {
    const [services, setServices] = useState(defaultServices)
    const [form, setForm] = useState(emptyForm)
    const [errors, setErrors] = useState({})
    const [saved, setSaved] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.title.trim()) e.title = 'Title is required'
        if (!form.description.trim()) e.description = 'Description is required'
        return e
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: '' })
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setServices([{ ...form, id: Date.now(), icon: form.icon || '⚡' }, ...services])
        setForm(emptyForm)
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
    }

    const handleDelete = (id) => {
        setServices(services.filter((s) => s.id !== id))
    }

    const fields = [
        { name: 'title', label: 'Service Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'text' },
        { name: 'icon', label: 'Icon Emoji (optional)', type: 'text' },
    ]

    return (
        <div className="min-h-screen bg-bg flex">
            <Sidebar />
            <main className="flex-1 ml-64 p-8">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                    <h1 className="text-3xl font-black text-white mb-1">Manage Services</h1>
                    <p className="text-gray-400 text-sm">Add, view, and delete the services your agency offers.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Form */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
                        <div className="glass rounded-2xl border border-white/5 p-6">
                            <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="text-accent">+</span> Add New Service
                            </h2>
                            <form onSubmit={handleAdd} className="flex flex-col gap-4">
                                {fields.map((field) => (
                                    <div key={field.name} className="relative">
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            id={`svc-${field.name}`}
                                            value={form[field.name]}
                                            onChange={handleChange}
                                            placeholder=" "
                                            className={`peer w-full bg-white/5 border rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none focus:border-accent/50 transition-all ${errors[field.name] ? 'border-red-500/50' : 'border-white/10'
                                                }`}
                                        />
                                        <label
                                            htmlFor={`svc-${field.name}`}
                                            className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent transition-all pointer-events-none"
                                        >
                                            {field.label}
                                        </label>
                                        {errors[field.name] && (
                                            <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
                                        )}
                                    </div>
                                ))}
                                <button type="submit" className="btn-accent justify-center py-3 mt-2">
                                    {saved ? '✓ Service Added!' : 'Save Service'}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* List */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-3">
                        <div className="glass rounded-2xl border border-white/5 p-6">
                            <h2 className="text-white font-bold text-lg mb-6">Services ({services.length})</h2>
                            {services.length === 0 ? (
                                <div className="text-center py-16">
                                    <p className="text-5xl mb-4">⚡</p>
                                    <p className="text-gray-500">No services yet. Add your first one!</p>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <AnimatePresence>
                                        {services.map((s) => (
                                            <motion.div
                                                key={s.id}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -20, height: 0 }}
                                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-2xl flex-shrink-0">
                                                    {s.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-white font-semibold text-sm truncate">{s.title}</p>
                                                    <p className="text-gray-500 text-xs truncate">{s.description}</p>
                                                </div>
                                                <button
                                                    onClick={() => handleDelete(s.id)}
                                                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 flex items-center justify-center transition-colors"
                                                >
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                                    </svg>
                                                </button>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
