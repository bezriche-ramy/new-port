import { useEffect, useRef, useState, useCallback } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
const COLUMNS_GAP = 20;

const EasterEgg = () => {
  const [active, setActive] = useState(false);
  const seqRef = useRef([]);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  // Listen for Konami code
  useEffect(() => {
    const onKey = (e) => {
      seqRef.current.push(e.key);
      seqRef.current = seqRef.current.slice(-KONAMI.length);

      if (seqRef.current.join(",") === KONAMI.join(",")) {
        setActive(true);
        seqRef.current = [];
      }
    };
    const onMatrix = () => setActive(true);

    window.addEventListener("keydown", onKey);
    window.addEventListener("activate-matrix", onMatrix);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("activate-matrix", onMatrix);
    };
  }, []);

  // Matrix rain
  const startRain = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / COLUMNS_GAP);
    const drops = Array.from({ length: columns }, () => Math.random() * -100);

    let opacity = 1;
    let fadeStart = null;
    const DURATION = 5000;
    const FADE_AT = 3500;

    const draw = (timestamp) => {
      if (!fadeStart) fadeStart = timestamp;
      const elapsed = timestamp - fadeStart;

      if (elapsed > FADE_AT) {
        opacity = Math.max(0, 1 - (elapsed - FADE_AT) / (DURATION - FADE_AT));
      }

      if (elapsed > DURATION) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setActive(false);
        return;
      }

      ctx.fillStyle = `rgba(5, 5, 5, 0.08)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(196, 255, 0, ${0.9 * opacity})`;
      ctx.font = "14px 'JetBrains Mono', monospace";

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, i * COLUMNS_GAP, y * 16);

        if (y * 16 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    if (active) {
      startRain();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, startRain]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[10000] pointer-events-none"
      onClick={() => setActive(false)}
    />
  );
};

export default EasterEgg;
