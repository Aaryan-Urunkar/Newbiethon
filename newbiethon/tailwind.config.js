/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#f0eee5',
        background: '#0e0d01',
        primary: '#f35c16',
        secondary: '#49820d',
        accent: '#3dac11',
      },
    },
  },
  plugins: [],
}
