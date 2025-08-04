import React from 'react';
// import profile from '../assets/profile.jpg'; // Ganti dengan foto kamu

function Hero() {
  return (
    <section id="home" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I’m <span className="text-blue-600">Your Name</span> 👋
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
            Frontend Developer
          </h2>
          <p className="text-gray-600 mb-6">
            I build modern, responsive web apps with clean UI and smooth UX blending design and code to create delightful experiences.
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="bg-gray-900 text-white px-4 py-2 rounded shadow hover:bg-gray-800">Explore My Project</a>
            <a href="#" className="border border-gray-900 text-gray-900 px-4 py-2 rounded hover:bg-gray-100">Download My CV</a>
          </div>
          <div className="flex space-x-4">
            <a href="#"><i className="fa-brands fa-github text-xl"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin text-xl"></i></a>
            <a href="#"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#"><i className="fa-brands fa-twitter text-xl"></i></a>
          </div>
        </div>
        <div className="flex-1 relative">
          <img src={profile} alt="Profile" className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;