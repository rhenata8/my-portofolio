// src/components/navbar.jsx

import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const navLinks = ["Home", "About", "Projects", "Experience", "Skills", "Testimonials", "Contact"];
  const [activeLink, setActiveLink] = useState("Home");

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