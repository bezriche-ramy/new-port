import { motion } from 'framer-motion';

const CertificateText = ({ title, description }) => {
  return (
    <div className="p-6">
      <motion.h3
        className="text-xl font-semibold mb-4 text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-300 text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default CertificateText;
