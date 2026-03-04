import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";

const certificates = [
  { image: "https://i.ibb.co/MyzFsd4X/cer1.png", title: "Professional Development Achievement" },
  { image: "https://i.ibb.co/VYNJ4mnj/cer2.png", title: "Technical Leadership Recognition" },
  { image: "https://i.ibb.co/PZrchQ2V/cer3.png", title: "Development Excellence Certification" },
  { image: "https://i.ibb.co/v6sqv2Xk/Rami-Bezriche.png", title: "Certificate 4" },
  { image: "https://i.ibb.co/CpDQZ14n/Bezriche-Ramy-2.png", title: "Certificate 5" },
  { image: "https://i.ibb.co/XxQqQfrs/Bezriche-Ramy-3.png", title: "Certificate 6" },
  { image: "https://i.ibb.co/WNGSLzpQ/ramy.png", title: "Certificate 7" },
  { image: "https://i.ibb.co/Wpzcx1TB/Bezriche-Ramy-1.png", title: "Certificate 8" },
  { image: "https://i.ibb.co/4RgvVnNj/bezriche-ramy.png", title: "Certificate 9" },
];

const CertificateMain = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const headerRef = useRef(null);
  const modalRef = useRef(null);
  const modalImgRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = Array.from(gridRef.current.children);
      const headerItems = headerRef.current ? Array.from(headerRef.current.children) : [];

      gsap.set(cards, { willChange: "transform,opacity" });

      // Header reveal
      if (headerItems.length) {
        gsap.fromTo(
          headerItems,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.06,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 88%",
              fastScrollEnd: true,
              invalidateOnRefresh: true,
              once: true,
            },
          }
        );
      }

      // Cards staggered reveal
      gsap.fromTo(
        cards,
        { y: 22, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => gsap.set(cards, { clearProps: "willChange" }),
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            fastScrollEnd: true,
            invalidateOnRefresh: true,
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Modal open animation
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") setSelectedIndex((p) => (p + 1) % certificates.length);
      if (e.key === "ArrowLeft") setSelectedIndex((p) => (p - 1 + certificates.length) % certificates.length);
    };
    window.addEventListener("keydown", onKey);

    // Animate modal in
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
    if (modalImgRef.current) {
      gsap.fromTo(
        modalImgRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.4)", delay: 0.1 }
      );
    }

    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setSelectedIndex(null),
      });
    } else {
      setSelectedIndex(null);
    }
  };

  return (
    <section id="certificates" ref={sectionRef}>
      <div className="section-padding max-container">
        {/* Header */}
        <div ref={headerRef}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-label">Certifications</span>
            <div className="flex-1 h-[1px] bg-border-subtle" />
            <span className="text-xs text-text-tertiary font-code">
              {String(certificates.length).padStart(2, "0")} Certs
            </span>
          </div>

          <h2 className="text-heading font-display text-text-primary mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mb-14 leading-relaxed">
            Verified credentials spanning cybersecurity, development, and technical leadership.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {certificates.map((cert, i) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="group relative text-left overflow-hidden bg-bg-primary border border-border-subtle hover:border-accent/30 transition-all duration-500 will-change-transform"
              data-cursor-label="View"
            >
              {/* Number badge */}
              <span className="absolute top-3 left-3 z-10 text-[10px] font-code text-text-tertiary bg-bg-primary/80 backdrop-blur-sm px-2 py-1 border border-border-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Image — grayscale by default, color on hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={i < 3 ? "high" : "auto"}
                  className="w-full h-full object-contain p-3 grayscale group-hover:grayscale-0 scale-[1.01] group-hover:scale-100 transition-all duration-500 ease-out"
                />

                {/* Subtle scan line overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-0 transition-opacity duration-500"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                  }}
                />

                {/* Bottom gradient fade */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary to-transparent" />
              </div>

              {/* Info */}
              <div className="px-4 pb-4 pt-3 flex items-center justify-between gap-3">
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300 truncate">
                  {cert.title}
                </p>
                <span className="w-6 h-[1px] bg-border-subtle group-hover:bg-accent group-hover:w-10 transition-all duration-500 shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Full-screen modal — full color */}
      {selectedIndex !== null && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[200] bg-bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          <div
            ref={modalImgRef}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Certificate image — full color in modal */}
            <div className="bg-white p-4 md:p-6 shadow-2xl shadow-black/40">
              <img
                src={certificates[selectedIndex].image}
                alt={certificates[selectedIndex].title}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Footer bar */}
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-code text-text-tertiary">
                  {String(selectedIndex + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}
                </span>
                <p className="text-sm text-text-secondary">
                  {certificates[selectedIndex].title}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Prev / Next */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((p) => (p - 1 + certificates.length) % certificates.length);
                  }}
                  className="text-xs text-text-tertiary border border-border-medium px-3 py-2 hover:text-text-primary hover:border-text-primary transition-all duration-200"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((p) => (p + 1) % certificates.length);
                  }}
                  className="text-xs text-text-tertiary border border-border-medium px-3 py-2 hover:text-text-primary hover:border-text-primary transition-all duration-200"
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-xs text-text-tertiary border border-border-medium px-4 py-2 hover:text-accent hover:border-accent transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateMain;
