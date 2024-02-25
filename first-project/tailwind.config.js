import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: '32px'
    },
    extend: {
    screens: {
      'xs': '485px',
      'md': '700px',
    },
    colors: {
      'dark': 'blue',
      'smoke': 'whitesmoke',
      'gray': 'lightgray'
    },
    
  },
},
  plugins: [],
}

