// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCompass, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGraduationCap, FaBirthdayCake, FaFileDownload } from 'react-icons/fa';
import profileImage from '/src/assets/profile-image.jpg';

const About = () => {
  // Varian untuk gambar (slide dari kanan)
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Varian untuk kontainer kolom kanan yang akan mengatur animasi anak-anaknya
  const rightColumnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // <-- KUNCI UTAMA: Jeda 0.3 detik antar setiap anak
      },
    },
  };

  // Varian untuk setiap item di dalam kolom kanan (fade dari atas)
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="about" className="py-24 px-12 text-brand-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Kolom Kiri: Gambar (animasinya tetap sama) */}
          <motion.div 
            className="lg:w-1/3 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <img 
              src={profileImage} 
              alt="Rhenata Evrilia Putri" 
              className="w-full max-w-sm rounded-lg shadow-2xl" 
            />
          </motion.div>

          {/* Kolom Kanan: Informasi */}
          {/* PERUBAHAN DI SINI: Kolom kanan sekarang menjadi kontainer animasi */}
          <motion.div 
            className="lg:w-2/3"
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }} // Memicu saat 20% bagian terlihat
          >
            {/* Setiap blok di bawah ini sekarang adalah anak animasi */}
            
            {/* Who Am I */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-3">
                <FaUser className="text-brand-primary" /> Who Am I
              </h3>
              <p className="text-gray-600">
                I am an Information Systems student passionate about front-end development, with hands-on experience in building web-based projects and strong organizational involvement.
              </p>
            </motion.div>

            {/* My Approach */}
            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-3">
                <FaCompass className="text-brand-primary" /> My Approach
              </h3>
              <p className="text-gray-600">
                I focus on building responsive, user-friendly interfaces through clean code, consistent design, and collaborative development.
              </p>
            </motion.div>
            
            {/* Personal Info */}
            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Personal Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <InfoItem icon={<FaBirthdayCake />} label="Date of Birth" value="April 07, 2005" />
                <InfoItem icon={<FaEnvelope />} label="Email" value="rhenadvan@gmail.com" />
                <InfoItem icon={<FaMapMarkerAlt />} label="Place of Birth" value="Probolinggo, Indonesia" />
                <InfoItem icon={<FaGraduationCap />} label="Education" value="Universitas Jember" />
                <InfoItem icon={<FaPhone />} label="Phone" value="+62 823 3616 4684" />
              </div>
            </motion.div>

            {/* Tombol Download */}
            <motion.div variants={itemVariants} className="mt-10">
              <a href="/cv.pdf" download className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-secondary transition duration-300 flex items-center gap-2 w-fit">
                <FaFileDownload /> Download My Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Komponen kecil ini tidak perlu diubah
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="text-brand-primary text-xl">{icon}</div>
    <div>
      <p className="font-semibold text-gray-800">{label}:</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

export default About;