/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontfamily: {
        Bellefair: ['Bellefair', 'sans-serif'],
        Manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        'golden': '#D1C62A',
      }
    },
    
  },
  plugins: [],
}

