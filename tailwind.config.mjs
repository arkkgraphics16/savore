/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        burgundy: '#8B1538',
        gold:     '#D4AF37',
        cream:    '#FFF8F0',
      },
    },
  },
  plugins: [],
};
