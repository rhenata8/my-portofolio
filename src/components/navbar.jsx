// src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  const navLinks = ["Home", "About", "Projects", "Experience", "Skills", "Testimonials", "Contact"];

  return (
    // Ganti background dan warna teks
    <nav className="bg-pink/80 backdrop-blur-sm text-brand-dark shadow-sm fixed w-full top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          &lt;/&gt; My Portofolio
        </a>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              // Ganti warna hover dan warna link aktif ke pink
              className={`hover:text-brand-primary transition duration-300 ${
                link === "Home" ? "text-brand-primary font-semibold border-b-2 border-brand-primary" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;