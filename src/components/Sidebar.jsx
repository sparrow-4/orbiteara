import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

const navItems = [
    {
        to: '/admin',
        label: 'Dashboard',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            </svg>
        ),
    },
    {
        to: '/admin/projects',
        label: 'Projects',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
            </svg>
        ),
    },
    {
        to: '/admin/services',
        label: 'Services',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        ),
    },
    {
        to: '/admin/messages',
        label: 'Messages',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
    },
]

export default function Sidebar() {
    const location = useLocation()
    const navigate = useNavigate()
    const { logout, user } = useAuth()

    const isActive = (path) => {
        if (path === '/admin') return location.pathname === '/admin'
        return location.pathname.startsWith(path)
    }

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <motion.aside
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed left-0 top-0 h-full w-64 glass-dark border-r border-white/5 z-40 flex flex-col"
        >
            {/* Logo */}
            <div className="p-6 border-b border-white/5">
                <Link to="/" className="flex items-center gap-4">
                    <img src="/logo.png" alt="Orbitera Logo" className="w-14 h-14 object-contain" />
                    <span className="font-bold text-xl text-white">
                        Orbitera
                    </span>
                </Link>
            </div>

            {/* User info */}
            <div className="px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                        {user?.name?.[0] || 'T'}
                    </div>
                    <div>
                        <p className="text-white text-sm font-semibold">{user?.name || 'Thoyyib'}</p>
                        <p className="text-gray-500 text-xs">Administrator</p>
                    </div>
                </div>
            </div>

            {/* Nav items */}
            <nav className="flex-1 p-4 overflow-y-auto">
                <p className="text-gray-600 text-xs uppercase tracking-widest px-3 mb-3 mt-2">Navigation</p>
                <ul className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.to)
                                    ? 'bg-primary/20 text-accent border border-accent/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className={isActive(item.to) ? 'text-accent' : 'text-gray-500'}>
                                    {item.icon}
                                </span>
                                {item.label}
                                {isActive(item.to) && (
                                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-white/5">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                    </svg>
                    Logout
                </button>
            </div>
        </motion.aside>
    )
}
