/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006064', // Deep Teal
          light: '#00838F',
          dark: '#00363A',
        },
        accent: {
          DEFAULT: '#FF6F00', // Warm Orange
          light: '#FF8F00',
          dark: '#E65100',
        },
        dark: '#121212',
        light: '#FAFAFA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
