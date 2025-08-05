// src/data/projectData.js

// Impor gambar-gambar proyek Anda dari assets
import project1Image from '../assets/projects/project1.png';
// import project2Image from '../assets/projects/project2.jpg';
// import project3Image from '../assets/projects/project3.jpg';

export const projects = [
  {
    id: 1,
    title: 'Pokémon Explorer',
    image: project1Image,
    description: 'A web application built with React to display a list of Pokémon. Users can browse, search, and view details about each Pokémon.',
    tags: ['ReactJS', 'Vite', 'TailwindCSS', 'React Router', 'Context API'],
    category: 'App',
    demoUrl: 'https://pokemon-delta-ten.vercel.app/',
    codeUrl: 'https://github.com/rhenata8/pokemon',
  },
//   {
//     id: 2,
//     title: 'Sistem Informasi Kurikulum',
//     image: project2Image,
//     description: 'This Outcome-Based Education (OBE) Curriculum Design Information System was specifically developed to support curriculum development.',
//     tags: ['Tailwind CSS', 'PHP', 'Laravel', 'Figma'],
//     category: 'Website',
//     demoUrl: '#',
//     codeUrl: '#',
//   },
//   {
//     id: 3,
//     title: 'Snakes And Ladders Game',
//     image: project3Image,
//     description: 'A web-based Snakes and Ladders game built using HTML, CSS, and JavaScript. This classic board game is recreated with interactive features.',
//     tags: ['HTML', 'CSS', 'JavaScript'],
//     category: 'Game',
//     demoUrl: '#',
//     codeUrl: '#',
//   },
//   // Tambahkan proyek lainnya di sini...
];