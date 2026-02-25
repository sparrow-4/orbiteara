import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from '../components/Sidebar'

export default function Messages() {
    const [messages, setMessages] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('orbitera_messages') || '[]')
        setMessages(stored.reverse())
    }, [])

    const handleDelete = (id) => {
        const updated = messages.filter((m) => m.id !== id)
        setMessages(updated)
        localStorage.setItem('orbitera_messages', JSON.stringify([...updated].reverse()))
        if (selected?.id === id) setSelected(null)
    }

    const formatDate = (iso) => {
        if (!iso) return ''
        const d = new Date(iso)
        return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    }

    return (
        <div className="min-h-screen bg-bg flex">
            <Sidebar />
            <main className="flex-1 ml-64 p-8">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                    <h1 className="text-3xl font-black text-white mb-1">Messages</h1>
                    <p className="text-gray-400 text-sm">
                        {messages.length} message{messages.length !== 1 ? 's' : ''} from contact form submissions.
                    </p>
                </motion.div>

                {messages.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="glass rounded-2xl border border-white/5 p-16 text-center"
                    >
                        <p className="text-6xl mb-4">📭</p>
                        <p className="text-white text-xl font-bold mb-2">No Messages Yet</p>
                        <p className="text-gray-500">
                            Messages from the contact form will appear here.
                            <br />Visit <span className="text-accent">/contact</span> to submit one!
                        </p>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Message list */}
                        <div className="lg:col-span-2 flex flex-col gap-3">
                            <AnimatePresence>
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setSelected(msg)}
                                        className={`glass rounded-xl p-4 border cursor-pointer transition-all duration-200 ${selected?.id === msg.id
                                                ? 'border-accent/40 bg-accent/5'
                                                : 'border-white/5 hover:border-white/15'
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                                {msg.name?.[0]?.toUpperCase() || '?'}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2">
                                                    <p className="text-white font-semibold text-sm truncate">{msg.name}</p>
                                                    <span className="text-gray-600 text-xs flex-shrink-0">
                                                        {formatDate(msg.timestamp).split(',')[0]}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 text-xs truncate mt-0.5">{msg.subject}</p>
                                                <p className="text-gray-600 text-xs truncate mt-1">{msg.message}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Detail view */}
                        <div className="lg:col-span-3">
                            <AnimatePresence mode="wait">
                                {selected ? (
                                    <motion.div
                                        key={selected.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="glass rounded-2xl border border-white/5 p-6 h-full"
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                                                    {selected.name?.[0]?.toUpperCase() || '?'}
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold">{selected.name}</p>
                                                    <p className="text-gray-400 text-sm">{selected.email}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(selected.id)}
                                                className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm flex items-center gap-1.5 transition-colors"
                                            >
                                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                                </svg>
                                                Delete
                                            </button>
                                        </div>

                                        <div className="mb-4">
                                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Subject</p>
                                            <p className="text-white font-semibold">{selected.subject}</p>
                                        </div>

                                        <div className="mb-4">
                                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Sent</p>
                                            <p className="text-gray-300 text-sm">{formatDate(selected.timestamp)}</p>
                                        </div>

                                        <div>
                                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Message</p>
                                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                                <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <a
                                                href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                                                className="btn-accent text-sm py-2.5"
                                            >
                                                Reply via Email
                                            </a>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="glass rounded-2xl border border-white/5 p-12 text-center h-full flex flex-col items-center justify-center"
                                    >
                                        <p className="text-5xl mb-4">👆</p>
                                        <p className="text-gray-500">Select a message to read it</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
