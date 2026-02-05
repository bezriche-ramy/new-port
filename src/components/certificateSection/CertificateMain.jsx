import React, { useState } from "react";
import SingleCertificate from "./SingleCertificate";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    image: 'https://i.ibb.co/MyzFsd4X/cer1.png',
    title: 'Professional Development Achievement'
  },
  {
    image: 'https://i.ibb.co/VYNJ4mnj/cer2.png',
    title: 'Technical Leadership Recognition'
  },
  {
    image: 'https://i.ibb.co/PZrchQ2V/cer3.png',
    title: 'Development Excellence Certification'
  },
  {
    image: "https://i.ibb.co/v6sqv2Xk/Rami-Bezriche.png",
    title: "Certificate 4",
  },
  {
    image: "https://i.ibb.co/CpDQZ14n/Bezriche-Ramy-2.png",
    title: "Certificate 5",
  },
  {
    image: "https://i.ibb.co/XxQqQfrs/Bezriche-Ramy-3.png",
    title: "Certificate 6",
  },
  {
    image: "https://i.ibb.co/WNGSLzpQ/ramy.png",
    title: "Certificate 7",
  },
  {
    image: "https://i.ibb.co/Wpzcx1TB/Bezriche-Ramy-1.png",
    title: "Certificate 8",
  },
  {
    image: "https://i.ibb.co/4RgvVnNj/bezriche-ramy.png",
    title: "Certificate 9",
  },
];

const CertificateMain = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="certificates" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications et Réalisations</h2>
          <p className="section-subtitle">
            Reconnaissance de mon développement professionnel et de mon expertise technique en génie logiciel.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <SingleCertificate
              key={index}
              image={cert.image}
              title={cert.title}
              index={index}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>

        {/* Lightbox / Zoom Overlay */}
        <AnimatePresence>
          {selectedId !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`cert-${selectedId}`} // Shared Switch Animation
                className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              >
                <img
                  src={certificates[selectedId].image}
                  alt={certificates[selectedId].title}
                  className="w-full h-full object-contain bg-black"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificateMain;
