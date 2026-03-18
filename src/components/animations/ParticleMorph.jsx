import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PARTICLE_COUNT = 2000

// Generate positions for different shapes
function generateSphere(count, radius = 2) {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count)
        const theta = Math.sqrt(count * Math.PI) * phi
        positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi)
        positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
        positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
}

function generateCube(count, size = 2) {
    const positions = new Float32Array(count * 3)
    const perFace = Math.floor(count / 6)
    let idx = 0
    for (let face = 0; face < 6 && idx < count; face++) {
        for (let i = 0; i < perFace && idx < count; i++) {
            const u = (Math.random() - 0.5) * size
            const v = (Math.random() - 0.5) * size
            switch (face) {
                case 0: positions[idx*3]=size/2; positions[idx*3+1]=u; positions[idx*3+2]=v; break
                case 1: positions[idx*3]=-size/2; positions[idx*3+1]=u; positions[idx*3+2]=v; break
                case 2: positions[idx*3]=u; positions[idx*3+1]=size/2; positions[idx*3+2]=v; break
                case 3: positions[idx*3]=u; positions[idx*3+1]=-size/2; positions[idx*3+2]=v; break
                case 4: positions[idx*3]=u; positions[idx*3+1]=v; positions[idx*3+2]=size/2; break
                case 5: positions[idx*3]=u; positions[idx*3+1]=v; positions[idx*3+2]=-size/2; break
            }
            idx++
        }
    }
    return positions
}

function generateTorus(count, R = 1.8, r = 0.6) {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI * 2
        positions[i * 3] = (R + r * Math.cos(phi)) * Math.cos(theta)
        positions[i * 3 + 1] = (R + r * Math.cos(phi)) * Math.sin(theta)
        positions[i * 3 + 2] = r * Math.sin(phi)
    }
    return positions
}

function generateHelix(count, radius = 1.5, height = 4) {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        const t = i / count
        const angle = t * Math.PI * 6
        const strand = i % 2 === 0 ? 1 : -1
        positions[i * 3] = Math.cos(angle) * radius * strand
        positions[i * 3 + 1] = (t - 0.5) * height
        positions[i * 3 + 2] = Math.sin(angle) * radius * strand
    }
    return positions
}

function MorphingParticles({ activeIndex }) {
    const pointsRef = useRef()
    const currentPositions = useRef(null)

    const shapes = useMemo(() => [
        generateSphere(PARTICLE_COUNT),
        generateCube(PARTICLE_COUNT),
        generateTorus(PARTICLE_COUNT),
        generateHelix(PARTICLE_COUNT),
        generateSphere(PARTICLE_COUNT, 1.5),
        generateCube(PARTICLE_COUNT, 1.5),
    ], [])

    // Initialize positions
    useEffect(() => {
        if (!currentPositions.current) {
            currentPositions.current = new Float32Array(shapes[0])
        }
    }, [shapes])

    // Morph to new shape when activeIndex changes
    useEffect(() => {
        if (!currentPositions.current) return
        const target = shapes[activeIndex % shapes.length]
        const curr = currentPositions.current

        // Animate each position
        const obj = { t: 0 }
        const startPositions = new Float32Array(curr)

        gsap.to(obj, {
            t: 1,
            duration: 1.2,
            ease: 'power2.inOut',
            onUpdate: () => {
                for (let i = 0; i < curr.length; i++) {
                    curr[i] = startPositions[i] + (target[i] - startPositions[i]) * obj.t
                }
            },
        })
    }, [activeIndex, shapes])

    useFrame((state) => {
        if (!pointsRef.current || !currentPositions.current) return
        const positions = pointsRef.current.geometry.attributes.position
        const time = state.clock.getElapsedTime()

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3
            positions.array[i3] = currentPositions.current[i3] + Math.sin(time * 0.3 + i * 0.01) * 0.03
            positions.array[i3 + 1] = currentPositions.current[i3 + 1] + Math.cos(time * 0.4 + i * 0.01) * 0.03
            positions.array[i3 + 2] = currentPositions.current[i3 + 2] + Math.sin(time * 0.2 + i * 0.01) * 0.03
        }
        positions.needsUpdate = true

        // Slow rotation
        pointsRef.current.rotation.y = time * 0.1
        pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.1
    })

    const initialPositions = useMemo(() => new Float32Array(shapes[0]), [shapes])

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={PARTICLE_COUNT}
                    array={initialPositions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#00D4FF"
                transparent
                opacity={0.7}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

/**
 * ParticleMorph — Antimatter-style particle system that morphs between shapes.
 * @param {number} activeIndex - Which shape to morph to (0-5)
 * @param {string} className
 */
export default function ParticleMorph({ activeIndex = 0, className = '' }) {
    return (
        <div className={`${className}`}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ background: 'transparent' }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <MorphingParticles activeIndex={activeIndex} />
            </Canvas>
        </div>
    )
}
