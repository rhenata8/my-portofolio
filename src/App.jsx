// src/App.jsx

import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { amount: 0.2 } 
};

function App() {
  return (
    // Latar belakang utama diatur di sini
    <div className="bg-brand-pink"> 
      <Navbar />
      <main>
        {/* Semua kelas background di motion.div dihapus */}
        <motion.div {...sectionAnimation}>
          <Hero />
        </motion.div>
        
        <motion.div {...sectionAnimation}>
          <About />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Projects />
        </motion.div>
        
        <motion.div {...sectionAnimation}>
          <Skills />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Certificates />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Contact />
        </motion.div>

      </main>
    </div>
  );
}

export default App;