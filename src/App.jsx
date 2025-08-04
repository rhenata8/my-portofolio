// src/App.jsx

import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';

function App() {
  return (
    // Latar belakang utama bisa diatur di sini jika ada bagian lain selain Hero
    <div className="bg-brand-pink"> 
      <Navbar />
      <main>
        <Hero />
        {/* Contoh section lain dengan warna latar berbeda untuk variasi */}
        {/* <div id="about" className="min-h-screen bg-white">About Section</div> */}
        {/* <div id="projects" className="min-h-screen bg-brand-pink">Projects Section</div> */}
      </main>
    </div>
  );
}

export default App;