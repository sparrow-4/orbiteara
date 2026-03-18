/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg': '#050810',
                'bg-secondary': '#0a0e1a',
                'primary': '#2563EB',
                'accent': '#00D4FF',
                'purple': '#7c3aed',
                'surface': '#0c1123',
                'surface2': '#111b38',
                'muted': '#6B7280',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            boxShadow: {
                'glow-primary': '0 0 30px rgba(37,99,235,0.4), 0 0 60px rgba(37,99,235,0.15)',
                'glow-accent': '0 0 30px rgba(0,212,255,0.35), 0 0 60px rgba(0,212,255,0.1)',
                'glow-purple': '0 0 30px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1)',
                'glow-sm': '0 0 12px rgba(0,212,255,0.2)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'aurora': 'aurora-drift 20s linear infinite',
                'marquee': 'marquee-scroll 30s linear infinite',
                'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
                'orb-float': 'orb-float 10s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backgroundImage: {
                'radial-glow': 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.12) 0%, transparent 70%)',
                'hero-gradient': 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, rgba(5,8,16,0) 70%)',
                'purple-glow': 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)',
            },
        },
    },
    plugins: [],
}
