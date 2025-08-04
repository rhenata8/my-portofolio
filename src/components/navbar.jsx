// src/components/navbar.jsx

import React from 'react';

// Impor komponen Link dari react-scroll
import { Link } from 'react-scroll';

import { useState } from 'react';


const Navbar = () => {
  const navLinks = ["Home", "About", "Projects", "Experience", "Skills", "Testimonials", "Contact"];
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-10 bg-white/90 backdrop-blur-md shadow-lg rounded-full">
      <div className="flex space-x-2 px-10 py-2">
        {navLinks.map((link) => (
          <Link
            key={link}
            // activeClass adalah kelas yang akan diterapkan saat link aktif
            activeClass="bg-navbar-pink text-white"
            // to adalah ID dari section yang dituju
            to={link.toLowerCase()}
            // Opsi untuk scroll-spy dan smooth scroll
            spy={true}
            smooth={true}
            offset={-70} // Memberi jarak agar tidak terlalu pas di atas section
            duration={500}
            className="cursor-pointer rounded-full px-4 py-2 font-semibold transition-colors duration-300 text-gray-700 hover:bg-gray-200"
          >
            {link}
          </Link>

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    // PERUBAHAN DI SINI: ganti top-4 menjadi top-6
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-10 bg-white/80 backdrop-blur-md shadow-lg rounded-full">
      <div className="flex space-x-4 px-12 py-2">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleNavLinkClick(link)}
            className={`rounded-full px-4 py-2 font-semibold transition duration-300
              ${activeLink === link
                ? 'bg-navbar-pink text-white'
                : 'text-gray-700 hover:bg-gray-200'
              }`}
          >
            {link}
          </button>

        ))}
      </div>
    </nav>
  );
};

export default Navbar;