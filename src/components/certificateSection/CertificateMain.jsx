import React from 'react';
import SingleCertificate from './SingleCertificate';

const certificates = [
  { 
    image: 'https://i.ibb.co/MyzFsd4X/cer1.png',
    title: 'Security Challenge Achievement'
  },
  { 
    image: 'https://i.ibb.co/VYNJ4mnj/cer2.png',
    title: 'Security Research Lead'
  },
  { 
    image: 'https://i.ibb.co/PZrchQ2V/cer3.png',
    title: 'Network Security Certification'
  }
];

const CertificateMain = React.memo(() => {
  return (
    <section id="certificates" className="max-w-7xl mx-auto px-4 py-10 sm:py-12 md:py-16 relative">
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      
      <div className="relative z-10">
        <h2 className="text-accent font-code mb-10 terminal-text text-center 
                       xs:text-lg xs:tracking-tighter xs:leading-tight
                       text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 
                       break-words xs:break-all px-3 md:px-0">
          {"> "}SECURITY_CREDENTIALS
        </h2>
        
        {/* Container for horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto pb-4">
          {/* Fixed width container to ensure proper spacing */}
          <div className="flex gap-6 min-w-max px-2">
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
