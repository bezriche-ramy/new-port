import React from 'react';
import SingleCertificate from './SingleCertificate';

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
  }
];

const CertificateMain = React.memo(() => {
  return (
    <section id="certificates" className="section-background py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Recognition of my professional development and technical expertise in web development and software engineering.
          </p>
        </div>
        
        {/* Container for horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto pb-4">
          {/* Fixed width container to ensure proper spacing */}
          <div className="flex gap-6 min-w-max px-2 justify-center">
            {certificates.map((cert, index) => (
              <div key={index} className="w-[300px] h-[200px]">
                <SingleCertificate 
                  image={cert.image} 
                  title={cert.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default CertificateMain;
