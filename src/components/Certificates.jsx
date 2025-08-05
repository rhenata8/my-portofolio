// src/components/Certificates.jsx

import React from 'react';
import { certificates } from '../data/certificateData';
import { motion } from 'framer-motion';

// Varian animasi untuk judul
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

// Varian animasi untuk kartu, fade dari kiri
const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-4 sm:px-12 bg-brand-pink text-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-brand-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={titleVariants}
        >
          Certificates & Achievements
        </motion.h2>

        {/* Wrapper untuk Horizontal Scrolling */}
        <div className="flex space-x-8 pb-8 overflow-x-auto" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
          <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
          
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="flex-shrink-0 w-80 md:w-96"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <img src={cert.image} alt={cert.title} className="w-full h-48 object-contain rounded-md" />
                </div>
                <div className="p-6 flex-grow flex flex-col text-left">
                  <h3 className="text-xl font-bold mb-1 text-brand-dark">{cert.title}</h3>
                  <p className="text-md font-semibold text-brand-primary mb-3">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm flex-grow">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;