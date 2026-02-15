import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 3,
        backgroundColor: 'rgba(0, 240, 255, 0.1)',
        border: '2px solid rgba(0, 240, 255, 0.5)',
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        border: '2px solid rgba(0, 240, 255, 0.3)',
        duration: 0.3,
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);

    // Add magnetic effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hover-magnetic');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
          border: '2px solid rgba(0, 240, 255, 0.8)',
          borderRadius: '50%',
          transition: 'width 0.3s, height 0.3s',
        }}
      />

      {/* Center dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent pointer-events-none z-[9999] rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px rgba(0, 240, 255, 1), 0 0 30px rgba(0, 240, 255, 0.5)',
        }}
      />
    </>
  );
};

export default MagneticCursor;
