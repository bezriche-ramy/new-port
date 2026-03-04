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

  useEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  return (
    <section id="certificates" ref={sectionRef}>
      <div className="section-padding max-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-label">Certifications</span>
          <div className="flex-1 h-[1px] bg-border-subtle" />
          <span className="text-xs text-text-tertiary font-code">
            {String(certificates.length).padStart(2, "0")} Certs
          </span>
        </div>

        <h2 className="text-heading font-display text-text-primary mb-12">
          Certifications & Achievements
        </h2>

        {/* Spaced grid with proper gaps */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {certificates.map((cert, i) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="group text-left border border-border-subtle hover:border-border-medium transition-all duration-300 bg-bg-primary hover:bg-bg-elevated overflow-hidden"
            >
              {/* Image container with white background */}
              <div className="p-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-contain scale-[1.02] group-hover:scale-100 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Info row */}
              <div className="px-4 pb-4 pt-1 flex items-center justify-between gap-3">
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
                  {cert.title}
                </p>
                <span className="text-[10px] text-text-tertiary font-code shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Full-screen modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-bg-primary/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-4 md:p-6">
              <img
                src={certificates[selectedIndex].image}
                alt={certificates[selectedIndex].title}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-text-secondary">
                {certificates[selectedIndex].title}
              </p>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="text-xs text-text-tertiary border border-border-medium px-4 py-2 hover:text-text-primary hover:border-text-primary transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateMain;
