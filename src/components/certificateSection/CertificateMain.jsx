import SingleCertificate from './SingleCertificate';

const CertificateMain = () => {
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

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-3 py-16 sm:py-12 relative">
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl lg:text-6xl md:text-5xl sm:text-3xl text-accent font-code mb-6 terminal-text text-center">
          {"> "}SECURITY_CREDENTIALS
        </h2>
        <div className="text-center mb-12 sm:mb-8">
          <p className="text-accent/80 font-code bg-black/30 p-6 sm:p-4 border border-accent/30 rounded inline-block sm:text-sm">
            {"> "}Verified security achievements and certifications.
            <br />
            {"> "}Access classified documents by executing pointer interaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="perspective-1000">
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
};

export default CertificateMain;
