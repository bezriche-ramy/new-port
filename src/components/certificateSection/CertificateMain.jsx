import { useEffect, useRef, useState } from "react";
import SingleCertificate from "./SingleCertificate";
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
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) {
      return;
    }

    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="certificates">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Certifications et Realisations</h2>
          <p className="section-subtitle">
            Credentials and achievements reflecting continuous learning and practical engineering growth.
          </p>
        </div>

        <div ref={gridRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((certificate, index) => (
            <SingleCertificate
              key={certificate.title}
              image={certificate.image}
              title={certificate.title}
              onOpen={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        {selectedIndex !== null ? (
          <div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-xl p-5 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="glass-panel w-full max-w-5xl p-3 md:p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={certificates[selectedIndex].image}
                alt={certificates[selectedIndex].title}
                className="w-full max-h-[82vh] object-contain rounded-xl bg-black/20"
              />
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-text-secondary text-sm md:text-base">{certificates[selectedIndex].title}</p>
                <button type="button" onClick={() => setSelectedIndex(null)} className="btn-secondary py-2 px-4 text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CertificateMain;
