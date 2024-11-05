/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2a9df4",
        primary_light: "#4096ff",
        secondary: "#e74c3c",
        success: "#00E096",
        warning: "#FFCF00",
        gray: "#666C85",
        dark: "#425166",
        black: "#232859",
        orange: "#E99624",
        bg_grey: "#ffffff80",
        cshadow: '-10px_10px_30px_rgba(96,113,175,0.1)',
        bc: '#dee2e6',
      }
    },
  },
  plugins: [],
};
