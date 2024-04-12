/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
  },
  screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
  },
  fontFamily: {
     manrope: ['Manrope', 'sans-serif'],
  },
  colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#08111F',
      primary: '#006BFD',
      secondary: '#ea47ed', 
      gray: {
        lighter: '#FAF7F3',
        light: '#323232', 
        dark: '#1C2C3C',    
        txt: '#252800',
      },
  },
    extend: {},
  },
  plugins: [],
}

