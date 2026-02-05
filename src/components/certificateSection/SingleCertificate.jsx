import React from "react";
import { motion } from "framer-motion";

const SingleCertificate = ({ image, title, index, setSelectedId }) => {
  return (
    <motion.div
      layoutId={`cert-${index}`} // Shared layout ID for the zoom effect
      onClick={() => setSelectedId(index)}
      whileHover={{ scale: 1.02 }}
      className="cursor-zoom-in relative rounded-xl overflow-hidden shadow-lg border border-accent/20 bg-black/50 aspect-[4/3] group"
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
          Voir Détail
        </span>
      </div>
    </motion.div>
  );
};

export default SingleCertificate;
