/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,php,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'811px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        YellowSun:'#fca652',
        webGreen:'#478ACC'
      }
    },
  },
  plugins: [],
}

