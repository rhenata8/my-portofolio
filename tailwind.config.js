/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'navbar-pink': '#e53d7c',
        'brand-pink': '#FCE7F3',    // pink-100, untuk background lembut
        'brand-primary': '#EC4899', // pink-500, untuk teks & tombol utama
        'brand-secondary': '#DB2777',// pink-600, untuk hover
        'brand-dark': '#fb3c84',
      },
    },
  },
  plugins: [],
};
