// src/components/hero.jsx

import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDownload, FaReact, FaJsSquare, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
// Pastikan path ke gambar Anda sudah benar
import profileImage from '/src/assets/profile-image.jpg'; 

const Hero = () => {
  return (
    // Latar belakang dan semua warna aksen diubah ke palet "Soft Rose"
    <section id="home" className="min-h-screen flex items-center bg-brand-pink pt-20">
      <div className="container mx-auto px-12 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark">
            Hi, I'm Rhenata Evrilia Putri 👋
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-primary mt-2">
            Frontend Developer Enthusiast
          </h2>
          <p className="mt-4 text-gray-700 max-w-lg mx-auto lg:mx-0">
           I’m a front-end enthusiast focused on building responsive, accessible, and well-structured user interfaces with clean and efficient code
          </p>

          <div className="mt-6">
            <span className="text-gray-700 mr-4">Follow me on:</span>
            <div className="inline-flex space-x-4">
              <a href="#" className="text-brand-dark hover:text-brand-primary text-2xl transition duration-300"><FaLinkedin /></a>
              <a href="#" className="text-brand-dark hover:text-brand-primary text-2xl transition duration-300"><FaGithub /></a>
              <a href="#" className="text-brand-dark hover:text-brand-primary text-2xl transition duration-300"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <a href="#projects" className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-secondary transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore My Project
            </a>
            <a href="/cv.pdf" download className="bg-white border border-gray-300 text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2">
              <FaDownload /> Download My CV
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Hizkia Siahaan" 
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
            />
            <div className="absolute top-5 -left-5 bg-white p-3 rounded-full shadow-lg animate-bounce">
              <FaReact className="text-5xl text-cyan-400" />
            </div>
             <div className="absolute top-10 right-0 bg-white p-4 rounded-full shadow-lg animate-pulse">
              <FaJsSquare className="text-4xl text-yellow-400" />
            </div>
            <div className="absolute bottom-5 -right-5 bg-white p-3 rounded-full shadow-lg">
              <SiTailwindcss className="text-5xl text-cyan-500" />
            </div>
            <div className="absolute bottom-0 -left-10 bg-white p-4 rounded-full shadow-lg">
              <FaHtml5 className="text-4xl text-orange-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;