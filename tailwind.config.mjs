/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        burgundy: '#800020',
        black: '#000000',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
