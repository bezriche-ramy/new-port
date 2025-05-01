import { motion } from 'framer-motion';

const CertificateText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-accent font-code mb-4 sm:mb-6 terminal-text text-center px-2">
        <span className="inline-block">{"> "}SECURITY_CREDENTIALS</span>
      </h2>
      <div className="text-lg text-center max-w-3xl relative px-2">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <p className="text-accent/80 font-code bg-black/30 p-3 sm:p-4 md:p-5 border border-accent/30 rounded text-xs sm:text-sm md:text-base">
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
