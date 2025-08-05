// src/data/skillData.js

import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaLaravel,
  FaFigma,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMysql,
  SiVercel,
  SiCisco,
} from 'react-icons/si';

// Daftar skill, ikon, dan warnanya
export const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4' },
  { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Cisco', icon: SiCisco, color: '#1BA0D7' },
];