/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        danger: '#ff3b30',
        secondary: '#f2f4f8',
      },
    },
  },
  plugins: [],
}
