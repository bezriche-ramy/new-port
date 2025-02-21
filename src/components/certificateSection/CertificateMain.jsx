import SingleCertificate from './SingleCertificate';

const CertificateMain = () => {
const certificates = [
  { 
    image: 'https://i.ibb.co/MyzFsd4X/cer1.png', // Updated URL for cer1.png
    title: '6th Place Hackathon Achievement',
    description: 'Secured 6th place in a competitive hackathon, demonstrating strong problem-solving skills and innovative thinking under pressure.'
  },
  { 
    image: 'https://i.ibb.co/VYNJ4mnj/cer2.png', // Updated URL for cer2.png
    title: 'GDGD Hack Community Manager',
    description: 'Certified Community Manager for GDGD Hack, responsible for fostering engagement and managing community interactions.'
  },
  { 
    image: 'https://i.ibb.co/PZrchQ2V/cer3.png', // Updated URL for cer3.png
    title: 'GIP Winner Certificate',
    description: 'Recognition for winning the GIP competition, showcasing excellence and outstanding achievement in the program.'
  }
];

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-5xl lg:text-6xl font-bold text-center mb-6">Certificates</h2>
      <p className="text-center text-gray-400 mb-12 text-xl lg:text-2xl">Click on any certificate to flip</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
    </section>
  );
};

export default CertificateMain;
