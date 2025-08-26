/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brainrot-pink': '#FFB3D9',
        'brainrot-blue': '#B3D9FF',
        'brainrot-purple': '#D9B3FF',
        'brainrot-yellow': '#FFF2B3',
        'brainrot-mint': '#B3FFD9',
      },
      fontFamily: {
        'brainrot': ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
}
