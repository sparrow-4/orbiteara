/**
 * Aurora – animated gradient mesh background with drifting blobs.
 * @param {string} className - Additional classes for the container
 * @param {number} intensity - Opacity multiplier (0–1, default 0.5)
 */
export default function Aurora({ className = '', intensity = 0.5 }) {
    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            style={{ opacity: intensity }}
        >
            {/* Primary blob – cyan */}
            <div
                className="aurora-blob"
                style={{
                    width: '60%',
                    height: '60%',
                    top: '-10%',
                    left: '-10%',
                    background: 'radial-gradient(circle, rgba(0,212,255,0.35) 0%, transparent 70%)',
                    animationDuration: '18s',
                }}
            />
            {/* Secondary blob – blue */}
            <div
                className="aurora-blob"
                style={{
                    width: '50%',
                    height: '50%',
                    bottom: '-10%',
                    right: '-10%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
                    animationDuration: '22s',
                    animationDelay: '-5s',
                }}
            />
            {/* Tertiary blob – purple accent */}
            <div
                className="aurora-blob"
                style={{
                    width: '40%',
                    height: '40%',
                    top: '30%',
                    left: '30%',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
                    animationDuration: '25s',
                    animationDelay: '-10s',
                }}
            />
            {/* Noise grain overlay */}
            <div className="noise-overlay" />
        </div>
    )
}
