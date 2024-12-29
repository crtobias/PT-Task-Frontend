/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      colors:{
        principal: '#6E6890',
        secundario: '#413a65',
        fuentes: '#dbdce3',
      },
      maxWidth: {
        '1024': '1024px',
      },
    },
  },
  plugins: [],
};
