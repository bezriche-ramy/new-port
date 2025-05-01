import React from 'react';
import SingleCertificate from './SingleCertificate';

const certificates = [
  { 
    image: 'https://i.ibb.co/MyzFsd4X/cer1.png',
    title: 'Security Challenge Achievement',
    description: 'Demonstrated advanced penetration testing and vulnerability assessment skills in a competitive security hackathon environment.'
  },
  { 
    image: 'https://i.ibb.co/VYNJ4mnj/cer2.png',
    title: 'Security Research Lead',
    description: 'Led security research initiatives and vulnerability assessments for the GDGD community, focusing on system hardening and threat mitigation.'
  },
  { 
    image: 'https://i.ibb.co/PZrchQ2V/cer3.png',
    title: 'Network Security Certification',
    description: 'Advanced certification in network security protocols and defensive security measures.'
  }
];

const CertificateMain = React.memo(() => {
  return (
    <section id="certificates" className="max-w-7xl mx-auto px-2 sm:px-3 py-10 sm:py-12 md:py-16 relative">
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      
      <div className="relative z-10">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent font-code mb-6 terminal-text text-center break-words">
          {"> "}SECURITY_CREDENTIALS
        </h2>
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-accent/80 font-code bg-black/30 p-4 sm:p-5 md:p-6 border border-accent/30 rounded inline-block text-xs sm:text-sm md:text-base">
            {"> "}Verified security achievements and certifications.
            <br />
            {"> "}Access classified documents by executing pointer interaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {certificates.map((cert, index) => (
            <div key={index} className="perspective-1000 w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3]">
              <SingleCertificate 
                image={cert.image} 
                title={cert.title}
                description={cert.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default CertificateMain;
