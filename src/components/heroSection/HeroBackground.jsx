import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaReact, FaShieldAlt } from "react-icons/fa";
import { PiCodeBold } from "react-icons/pi";

const HeroBackground = () => {
    const containerRef = useRef(null);
    const shapesRef = useRef([]);
    const iconsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Organic Blobs
            shapesRef.current.forEach((shape, i) => {
                gsap.to(shape, {
                    x: gsap.utils.random(-100, 100),
                    y: gsap.utils.random(-100, 100),
                    scale: gsap.utils.random(0.8, 1.2),
                    rotation: gsap.utils.random(-180, 180),
                    duration: gsap.utils.random(10, 20),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 2,
                });
            });

            // Animate 3D Icons
            // 1. Shield (Cybersecurity) - Slow rotation Y (spinning coin effect) + Float
            gsap.to(iconsRef.current[0], {
                rotationY: 360,
                duration: 15,
                repeat: -1,
                ease: "none",
                transformOrigin: "50% 50%"
            });
            gsap.to(iconsRef.current[0], {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // 2. React (Frontend) - Rotation Z (Spinning) + Float
            gsap.to(iconsRef.current[1], {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });
            gsap.to(iconsRef.current[1], {
                y: 30,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1
            });

            // 3. Code (Dev) - Tumble/Tilt 3D effect + Float
            gsap.to(iconsRef.current[2], {
                rotationX: 360,
                rotationY: 360,
                duration: 25,
                repeat: -1,
                ease: "none"
            });
            gsap.to(iconsRef.current[2], {
                y: -25,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none z-0"
            style={{ perspective: "1000px" }} // Essential for 3D transforms
        >
            {/* Organic Shapes (Background Layer) */}
            <div
                ref={(el) => (shapesRef.current[0] = el)}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[80px] mix-blend-multiply opacity-70"
            />
            <div
                ref={(el) => (shapesRef.current[1] = el)}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] mix-blend-multiply opacity-70"
            />
            <div
                ref={(el) => (shapesRef.current[2] = el)}
                className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[60px] mix-blend-multiply opacity-60"
            />

            {/* 3D Floating Icons Removed for Clean Design */}

            {/* Geometric Overlay Pattern (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
    );
};

export default HeroBackground;
