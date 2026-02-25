import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'

function useCounter(target, duration = 2000) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (target === 0) return
        const step = target / (duration / 16)
        let current = 0
        const timer = setInterval(() => {
            current += step
            if (current >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [target, duration])
    return count
}

const stats = [
    { label: 'Total Projects', value: 24, icon: '📁', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/20', prefix: '' },
    { label: 'Happy Clients', value: 47, icon: '🤝', color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/20', prefix: '' },
    { label: 'New Messages', value: 8, icon: '✉️', color: 'from-green-500/20 to-teal-500/20', border: 'border-green-500/20', prefix: '' },
    { label: 'Revenue', value: 120, icon: '💰', color: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/20', prefix: '$', suffix: 'K' },
]

function StatCard({ stat }) {
    const count = useCounter(stat.value)
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={`relative glass rounded-2xl p-6 border ${stat.border} overflow-hidden`}
            style={{ background: `linear-gradient(135deg, ${stat.color.split(' ')[0].replace('from-', '').replace('/20', '')} 0%, transparent 100%)` }}
        >
            <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <div className={`w-2 h-2 rounded-full bg-accent animate-pulse`} />
            </div>
            <p className="text-4xl font-black text-white mb-1">
                {stat.prefix}{count}{stat.suffix || ''}
            </p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
        </motion.div>
    )
}

const recentActivity = [
    { action: 'New message from', name: 'Rahul Sharma', time: '2m ago', type: 'message' },
    { action: 'Project added:', name: 'ChainVault Dashboard', time: '1h ago', type: 'project' },
    { action: 'Service updated:', name: 'Web Development', time: '3h ago', type: 'service' },
    { action: 'New message from', name: 'Priya Mehta', time: '5h ago', type: 'message' },
    { action: 'Project added:', name: 'AuraFit App', time: '1d ago', type: 'project' },
]

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-bg flex">
            <Sidebar />

            <main className="flex-1 ml-64 p-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-black text-white mb-1">
                                Welcome, <span className="text-accent">Thoyyib</span> 👋
                            </h1>
                            <p className="text-gray-400 text-sm">Here's what's happening with your agency today.</p>
                        </div>
                        <div className="glass rounded-xl px-4 py-2 border border-white/5">
                            <p className="text-gray-400 text-xs uppercase tracking-widest">Last Login</p>
                            <p className="text-white text-sm font-medium">Just now</p>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
                >
                    {stats.map((stat) => (
                        <StatCard key={stat.label} stat={stat} />
                    ))}
                </motion.div>

                {/* Content row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Activity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="lg:col-span-2 glass rounded-2xl border border-white/5 p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-white font-bold text-lg">Recent Activity</h2>
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        </div>
                        <div className="flex flex-col gap-3">
                            {recentActivity.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${item.type === 'message' ? 'bg-blue-500/20 text-blue-400' :
                                            item.type === 'project' ? 'bg-green-500/20 text-green-400' :
                                                'bg-purple-500/20 text-purple-400'
                                        }`}>
                                        {item.type === 'message' ? '✉' : item.type === 'project' ? '📁' : '⚡'}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-gray-300 text-sm">
                                            {item.action} <span className="text-white font-medium">{item.name}</span>
                                        </p>
                                    </div>
                                    <span className="text-gray-600 text-xs flex-shrink-0">{item.time}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="glass rounded-2xl border border-white/5 p-6"
                    >
                        <h2 className="text-white font-bold text-lg mb-6">Agency Health</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { label: 'Client Retention', value: 94, color: '#00D4FF' },
                                { label: 'Project Completion', value: 88, color: '#2563EB' },
                                { label: 'On-Time Delivery', value: 96, color: '#10B981' },
                                { label: 'Client Satisfaction', value: 98, color: '#F59E0B' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="flex justify-between text-sm mb-1.5">
                                        <span className="text-gray-400">{item.label}</span>
                                        <span className="text-white font-semibold">{item.value}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.value}%` }}
                                            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                                            className="h-full rounded-full"
                                            style={{ background: item.color, boxShadow: `0 0 8px ${item.color}60` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
