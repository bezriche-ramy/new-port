import { motion } from 'framer-motion';

const CertificateText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-accent mb-10 font-code terminal-text glitch" data-text="SECURITY_CREDENTIALS">
        {"> "}SECURITY_CREDENTIALS
      </h2>
      <div className="text-lg text-center max-w-3xl relative">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <p className="text-accent/80 font-code bg-black/30 p-6 border border-accent/30 rounded">
          {"> "}Verified security certifications and achievements in cybersecurity.
          <br />
          {"> "}Specialized training in penetration testing, network security,
          <br />
          {"> "}and secure application development methodologies.
        </p>
      </div>
    </div>
  );
};

export default CertificateText;
