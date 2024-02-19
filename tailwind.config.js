/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#DF4838',
        secondary:'#FAEF5D'
      },
      keyframes:{
        scale: {
          '0%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation:{
        'scale':'scale 10s linear infinite',
        'zoom':'scale 1.3s linear '
      }
    },
  },
  plugins: [],
}