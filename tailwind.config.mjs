/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}"
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "#8B1538",
        gold: "#D4AF37",
        cream: "#FFF8F0",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
