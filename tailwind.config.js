/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg': '#0B0F1A',
                'primary': '#2563EB',
                'accent': '#00D4FF',
                'surface': '#111827',
                'surface2': '#1a2035',
                'muted': '#6B7280',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'glow-primary': '0 0 20px rgba(37,99,235,0.5)',
                'glow-accent': '0 0 20px rgba(0,212,255,0.4)',
                'glow-sm': '0 0 10px rgba(0,212,255,0.25)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'counter': 'counter 2s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
                'radial-glow': 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.15) 0%, transparent 70%)',
                'hero-gradient': 'radial-gradient(ellipse at center, rgba(37,99,235,0.2) 0%, rgba(11,15,26,0) 70%)',
            },
        },
    },
    plugins: [],
}
