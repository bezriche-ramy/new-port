import { motion } from 'framer-motion';

const CertificateText = () => {
  return (
    <div className="section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Professional Certifications
        </h2>
        <p className="section-subtitle">
          Verified credentials and achievements in web development and technology. 
          Specialized training in modern frameworks, cloud technologies, and professional development practices.
        </p>
      </motion.div>
    </div>
  );
};

export default CertificateText;
