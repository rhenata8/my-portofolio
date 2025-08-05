// src/components/navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Projects", "Skills", "Certificates", "Contact"];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* --- NAVIGASI DESKTOP --- */}
      <nav className="hidden sm:flex fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-20 bg-white/90 backdrop-blur-md shadow-lg rounded-full items-center justify-center">
        <div className="flex space-x-1 md:space-x-2 px-4 py-2 md:px-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              activeClass="bg-navbar-pink text-white"
              to={link.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer rounded-full px-3 py-2 md:px-4 text-sm md:text-base font-semibold transition-colors duration-300 text-gray-700 hover:bg-gray-200"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>

      {/* --- TOMBOL HAMBURGER UNTUK MOBILE --- */}
      <div className="sm:hidden fixed top-4 right-4 z-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg text-brand-dark"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* --- MENU MOBILE (MUNCUL KETIKA DIKLIK) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden fixed inset-0 bg-brand-pink z-20 flex flex-col items-center justify-center"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                // --- PERUBAHAN DI SINI ---
                // Warna font diubah dari 'text-white' menjadi 'text-brand-dark'
                className="text-brand-dark text-3xl font-bold py-4"
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;