import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Public pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Login from './pages/Login'

// Admin pages
import AdminDashboard from './pages/AdminDashboard'
import ManageProjects from './pages/ManageProjects'
import ManageServices from './pages/ManageServices'
import Messages from './pages/Messages'

function PublicLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-bg">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}

function AnimatedRoutes() {
    const location = useLocation()
    const isAdmin = location.pathname.startsWith('/admin')

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* Public Routes */}
                <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
                <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
                <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
                <Route path="/portfolio" element={<PublicLayout><Portfolio /></PublicLayout>} />
                <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
                <Route path="/login" element={<Login />} />

                {/* Admin Routes (protected) */}
                <Route element={<PrivateRoute />}>
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/projects" element={<ManageProjects />} />
                    <Route path="/admin/services" element={<ManageServices />} />
                    <Route path="/admin/messages" element={<Messages />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AnimatedRoutes />
            </AuthProvider>
        </BrowserRouter>
    )
}
