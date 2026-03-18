/**
 * Marquee – infinite horizontal scroll ticker.
 * @param {React.ReactNode} children - Content to scroll
 * @param {number} speed - Duration in seconds for one full loop (default 30)
 * @param {'left'|'right'} direction - Scroll direction
 * @param {boolean} pauseOnHover - Pause when hovered
 * @param {string} className - Additional classes
 */
export default function Marquee({
    children,
    speed = 30,
    direction = 'left',
    pauseOnHover = true,
    className = '',
}) {
    const animDirection = direction === 'left' ? 'normal' : 'reverse'

    return (
        <div
            className={`marquee-container overflow-hidden ${className}`}
            style={{ ['--pause']: pauseOnHover ? 'paused' : 'running' }}
        >
            <div
                className="marquee-track"
                style={{
                    animationDuration: `${speed}s`,
                    animationDirection: animDirection,
                }}
            >
                <div className="marquee-content">{children}</div>
                <div className="marquee-content" aria-hidden="true">{children}</div>
            </div>
        </div>
    )
}
