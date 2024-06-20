/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'head': "url('Image/asset/background/bg-home.png')",
        'heal': "url('Image/asset/background/bg-home.png')",
        'food': "url('Image/asset/background/pexels-shkrabaanthony-5810677.jpg')"
      },
      
    },
  },
  plugins: [],
}