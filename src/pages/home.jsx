import React from 'react';
// import profile from '../assets/profile.jpg'; // Ganti dengan foto kamu
// import htmlIcon from '../assets/html5.svg';
// import cssIcon from '../assets/css3.svg';
// import jsIcon from '../assets/javascript.svg';
// import reactIcon from '../assets/react.svg';

function Home() {
  return (
    <section id="home" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I’m <span className="text-blue-600">Your Name</span> <span className="inline-block">👋</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
            Frontend Developer
          </h2>
          <p className="text-gray-600 mb-6">
            I build modern, responsive web apps with clean UI and smooth UX blending design and code to create delightful experiences.
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#projects" className="bg-gray-900 text-white px-4 py-2 rounded shadow hover:bg-gray-800">Explore My Project</a>
            <a href="#cv" className="border border-gray-900 text-gray-900 px-4 py-2 rounded hover:bg-gray-100">Download My CV</a>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

        <div className="flex-1 relative">
          <img src={profile} alt="Profile" className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg mx-auto" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="relative w-64 h-64">
              <img src={htmlIcon} className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10" alt="HTML" />
              <img src={cssIcon} className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-10" alt="CSS" />
              <img src={jsIcon} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10" alt="JavaScript" />
              <img src={reactIcon} className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-10" alt="React" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
