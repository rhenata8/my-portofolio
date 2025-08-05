// src/App.jsx

import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/Projects'; // Impor komponen About yang baru
import { motion } from 'framer-motion'; // Impor motion

// Konfigurasi animasi sederhana
const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true } // Animasi hanya berjalan sekali
};

function App() {
  return (
    <div className="bg-brand-pink"> 
      <Navbar />
      <main>
        {/* Bungkus setiap section dengan motion.div */}
        <motion.div {...sectionAnimation}>
          <Hero />
        </motion.div>
        
        <motion.div {...sectionAnimation}>
          <About />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Projects />
        </motion.div>
        {/* <motion.div>
          <Projects />
        </motion.div> */}
        {/* Anda bisa menambahkan section lain di sini dengan pola yang sama */}
        {/* <motion.div {...sectionAnimation} id="projects">
          // ... Isi komponen Projects ...
        </motion.div> 
        */}
      </main>
    </div>
  );
}

export default App;