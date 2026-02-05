import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Float, Cylinder, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// --- PREMIUM 3D ICONS COMPONENTS ---

// 1. NEON REACT ATOM (Web Development)
const ReactAtom = ({ position, scale = 1 }) => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.z -= 0.002;
            groupRef.current.rotation.y -= 0.002;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
            <group ref={groupRef} scale={scale}>
                {/* Core Nucleus - Glowing Sphere */}
                <Sphere args={[0.3, 32, 32]}>
                    <meshPhysicalMaterial
                        color="#00ffff"
                        emissive="#00ffff"
                        emissiveIntensity={2}
                        roughness={0}
                        metalness={0.5}
                    />
                </Sphere>

                {/* Electron Rings - Neon Tubes */}
                <ElectronRing rotation={[0, 0, 0]} />
                <ElectronRing rotation={[Math.PI / 3, 0, 0]} />
                <ElectronRing rotation={[-Math.PI / 3, 0, 0]} />
            </group>
        </Float>
    );
};

const ElectronRing = ({ rotation }) => {
    return (
        <group rotation={rotation}>
            <Torus args={[1.15, 0.03, 32, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshPhysicalMaterial
                    color="#00ffff"
                    emissive="#00dbff"
                    emissiveIntensity={0.8}
                    roughness={0}
                    metalness={1}
                    transparent
                    opacity={0.8}
                />
            </Torus>
        </group>
    );
};

// 2. CYBER SHIELD (Cybersecurity) - REPLACED THE BLOCKY LOCK
const CyberShield = ({ position, scale = 1 }) => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8} position={position}>
            <group ref={groupRef} scale={scale}>
                {/* Inner Core - Glowing Security Core */}
                <Icosahedron args={[0.5, 0]}>
                    <meshPhysicalMaterial
                        color="#ffd700"
                        emissive="#ffaa00"
                        emissiveIntensity={1}
                        wireframe
                        thickness={0.02}
                    />
                </Icosahedron>

                {/* Outer Glass Shield Shell */}
                {/* We build a shield shape using a deformed sphere/box combination isn't easy with prims, 
            so we'll use a stylistic Hexagon (Cylinder with 6 sides) as a "Cyber Token" */}
                <Cylinder args={[0.9, 0.9, 0.2, 6]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshPhysicalMaterial
                        color="#ffffff"
                        roughness={0}
                        transmission={1} // Glass
                        thickness={0.5}
                        ior={1.5}
                        clearcoat={1}
                    />
                </Cylinder>

                {/* Metallic Rim */}
                <Torus args={[0.92, 0.05, 16, 6]}>
                    <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} />
                </Torus>

                {/* Floating "Lock" Icon bits inside? or just let the core be the "Secure Data" */}
            </group>
        </Float>
    );
};

// 3. GLASS CODE CONSTANTS (Development)
const CodeSymbol = ({ position, rotation, scale = 1, type = "opening" }) => {
    // type: opening (<) or closing (>)
    return (
        <Float speed={3} rotationIntensity={0.4} floatIntensity={0.6} position={position}>
            <group rotation={rotation} scale={scale}>
                {/* Stylized Modern Bracket - Using thin boxes with Glass Material */}
                <Box args={[0.15, 1.2, 0.15]} position={[0, 0.4, 0]} rotation={[0, 0, -Math.PI / 4]}>
                    <meshPhysicalMaterial
                        color="#d8b4fe" // Light Purple
                        emissive="#a855f7"
                        emissiveIntensity={0.5}
                        roughness={0.1}
                        metalness={0.8}
                    />
                </Box>
                <Box args={[0.15, 1.2, 0.15]} position={[0, -0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
                    <meshPhysicalMaterial
                        color="#d8b4fe"
                        emissive="#a855f7"
                        emissiveIntensity={0.5}
                        roughness={0.1}
                        metalness={0.8}
                    />
                </Box>
            </group>
        </Float>
    );
};

// --- MAIN SCENE ---

const Hero3DScene = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 9], fov: 45 }}
                style={{ background: 'transparent', pointerEvents: 'none' }}
                gl={{ antialias: true, alpha: true, toneMappingExposure: 1.5 }}
            >
                {/* Studio Lighting Setup for "Beautiful" reflections */}
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#61dafb" /> {/* Cyan Rim Light */}
                <pointLight position={[0, 5, 0]} intensity={0.8} color="#d8b4fe" />   {/* Purple Top Light */}

                {/* --- REFINED BEAUTIFUL OBJECTS --- */}

                {/* 1. React Atom - Glowing & Clean */}
                <ReactAtom position={[-3.8, 2, 0]} scale={0.9} />

                {/* 2. Cyber Shield (Replaces Ugly Lock) - Glass & Gold */}
                <CyberShield position={[3.8, -2.5, 1]} scale={1.1} />

                {/* 3. Code Brackets - Neon Purple Glass */}
                <CodeSymbol type="opening" position={[-4.5, -2, -2]} rotation={[0, 0, 0]} scale={0.7} />
                <CodeSymbol type="closing" position={[4.5, 2.5, -3]} rotation={[0, 0, Math.PI]} scale={0.7} />

                {/* 4. Floating Particles for Depth */}
                <Float speed={1.5} position={[2, 3, -4]}>
                    <Icosahedron args={[0.2, 0]}>
                        <meshStandardMaterial color="#61dafb" wireframe />
                    </Icosahedron>
                </Float>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.6}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
};

export default Hero3DScene;
