/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Noto Sans JP'],
        accent: ['Lobster Two'],
      },
      colors: {
        primary: {
          DEFAULT: '#f8f9fb', //slate?
        },
        secondary: {
          DEFAULT: '#ffffff', //white
        },
        tertiary: {
          DEFAULT: '#101622', //black/font-colors
        },
        accent: {
          DEFAULT: '#007ef9', // blue
        },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '50%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(50) translateX(35)' },
          '25%': { transform: 'translateY(100px) translateX(200px)' },
          '50%': { transform: 'translateY(700px) translateX(1000px)' },
          '75%': { transform: 'translateY(500px) translateX(500px)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.8s ease-in-out forwards',
        'float': 'float 10s infinite',
      },
    },
    plugins: [],
  },
}