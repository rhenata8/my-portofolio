// src/components/Projects.jsx

import React from 'react';
import { projects } from '../data/projectData';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Varian animasi untuk judul, tetap sama
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

// --- PERUBAHAN UTAMA DI SINI ---
// Varian animasi untuk kartu, diubah menjadi fade dari kiri
const cardVariants = {
  hidden: { opacity: 0, x: -100 }, // Mulai dari transparan dan di sebelah kiri
  visible: (i) => ({
    opacity: 1,
    x: 0, // Bergerak ke posisi asli
    transition: {
      delay: i * 0.2, // Jeda antar kartu tetap ada untuk efek berurutan
      duration: 0.8,  // Durasi sedikit lebih lama untuk gerakan yang lebih halus
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-12 bg-brand-pink text-gray-800 overflow-hidden">
      <div className="container mx-auto">
        
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-brand-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Animasi akan berulang
          variants={titleVariants}
        >
          My Projects
        </motion.h2>

        <div className="flex space-x-8 pb-8 overflow-x-auto" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
          <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
          
          {projects.map((project, index) => (
            // --- PERUBAHAN KEDUA DI SINI ---
            // 'whileHover' dan 'transition' hover dihilangkan untuk menghilangkan efek berkedut
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-80 md:w-96"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }} // Animasi akan berulang
              variants={cardVariants}
            >
              {/* Card sekarang memiliki transisi CSS biasa untuk hover */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-2 right-2 bg-brand-primary text-white text-xs font-semibold px-2 py-1 rounded-full">{project.category}</span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-brand-dark">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Built with:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-secondary transition-colors"
                    >
                      Demo <FiArrowUpRight />
                    </a>
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                    >
                       <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;