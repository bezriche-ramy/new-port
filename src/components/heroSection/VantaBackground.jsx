import { useEffect, useRef } from "react";
import * as THREE from "three";
// We need to disable the eslint rule for this line if we were using static import
// but we will use dynamic import to be safe

const VantaBackground = () => {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        let script = null;

        const loadVanta = async () => {
            // Vanta requires THREE to be available globally in some versions/bundlers
            if (!window.THREE) {
                window.THREE = THREE;
            }

            // Dynamically import the Vanta Clouds script
            // We rely on the fact that the npm package puts it in window.VANTA or exports it
            try {
                const module = await import("vanta/dist/vanta.clouds.min.js");
                // Vanta usually attaches to default export OR window.VANTA
                const VantaClouds = module.default || window.VANTA.CLOUDS;

                if (!vantaEffect.current && vantaRef.current && VantaClouds) {
                    vantaEffect.current = VantaClouds({
                        el: vantaRef.current,
                        THREE: THREE, // Pass THREE explicitly as well
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        skyColor: 0x68b8d7,
                        cloudColor: 0xadc1de, // Lavender/Blue from screenshot
                        cloudShadowColor: 0x183550,
                        sunColor: 0xff9919,
                        sunGlareColor: 0xff6633,
                        sunlightColor: 0xffffff, // White light to show true cloud color
                        speed: 1.0,
                    });
                }
            } catch (error) {
                console.error("Failed to load Vanta Clouds:", error);
            }
        };

        loadVanta();

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0, backgroundColor: "#68b8d7" }}
        >
            {/* Vanta will render the canvas here */}
        </div>
    );
};

export default VantaBackground;
