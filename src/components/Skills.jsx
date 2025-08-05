// src/components/Skills.jsx

import React from 'react';
import { skills } from '../data/skillData';
import { motion } from 'framer-motion';

// Varian animasi untuk judul
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Varian animasi untuk kartu skill
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({ // 'i' adalah index untuk delay
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1, // Membuat kartu muncul satu per satu
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-12 bg-brand-pink text-gray-800">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-brand-dark"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={titleVariants}
        >
          My Skills
        </motion.h2>
        <motion.h3
          className="text-2xl font-semibold mb-12 text-gray-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={titleVariants}
        >
          Technical Skills
        </motion.h3>

        {/* Grid untuk menampung kartu skill */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-lg"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0px 10px 20px rgba(236, 72, 153, 0.2)' }}
              >
                <IconComponent
                  className="text-6xl mb-3"
                  style={{ color: skill.color }}
                />
                <p className="font-semibold text-gray-700">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;