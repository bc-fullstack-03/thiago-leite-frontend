/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-one': '#121214',
        'gray-title': '#EEEEEE',
        'gray-text': '#7C7C8A',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      }
    },
    screens: {
      'mobile': '375px'
    }
  },
  plugins: [],
}

