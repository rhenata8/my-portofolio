// src/components/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const fromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'Probolinggo, Indonesia' },
    { icon: <FaEnvelope />, text: 'rhenataevrilia@gmail.com' },
    { icon: <FaPhoneAlt />, text: '+62 858 5262 5903' },
  ];
  
  const socialLinks = [
    { icon: <FaGithub />, url: '#' },
    { icon: <FaLinkedin />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
  ];

  return (
    // Latar belakang section diubah menjadi bg-brand-pink
    <section id="contact" className="py-24 px-4 sm:px-12 bg-brand-pink">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fromLeft}>
            <h3 className="text-3xl font-bold text-brand-dark mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                // Kartu info diberi latar belakang putih agar kontras
                <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
                  <div className="text-brand-primary text-2xl">{item.icon}</div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fromRight}>
            <h3 className="text-3xl font-bold text-brand-dark mb-6">Send Me a Message</h3>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="7cfc5347-3f59-4840-b213-13732ed770af" />
              
              {/* Formulir diberi latar belakang putih agar kontras */}
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
              <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
              <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none"></textarea>
              
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="text-center mt-24 pt-8 border-t border-pink-200">
        <p className="font-bold text-xl text-brand-dark">Rhenata Evrilia Putri</p>
        <div className="flex justify-center space-x-6 my-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="text-gray-500 hover:text-brand-primary text-2xl transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Rhenata Evrilia Putri. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;