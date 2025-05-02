import React from 'react';

const SingleCertificate = ({ image, title }) => {
  return (
    <div className="w-full h-full rounded overflow-hidden border border-accent/50 bg-black/90 
                    hover:shadow-matrix-glow transition-all duration-300">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default SingleCertificate;
