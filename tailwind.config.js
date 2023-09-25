/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#e4604a', 
      },
      keyframes:{
        "keyframes":' bg-spin { to { --border-angle: 1turn}}',
      },
      hovers:{
        "hover": 'animation-play-state: paused ',
      },
      animation:{
        animation: 'bg-spin 3s linear infinite',
      }
    },  
  },
  plugins: [],
}

