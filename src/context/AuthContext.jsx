import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const VALID_EMAIL = 'thoyyibcherur@gmail.com'
const VALID_PASSWORD = '123'

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('orbitera_auth') === 'true'
    })

    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('orbitera_user')
        return stored ? JSON.parse(stored) : null
    })

    const login = (email, password) => {
        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            const userData = { email, name: 'Thoyyib' }
            setIsAuthenticated(true)
            setUser(userData)
            localStorage.setItem('orbitera_auth', 'true')
            localStorage.setItem('orbitera_user', JSON.stringify(userData))
            return { success: true }
        }
        return { success: false, error: 'Invalid email or password.' }
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUser(null)
        localStorage.removeItem('orbitera_auth')
        localStorage.removeItem('orbitera_user')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
    return ctx
}
