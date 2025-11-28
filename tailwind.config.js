/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        market: {
          open: '#10b981',
          closed: '#ef4444',
          early: '#f59e0b'
        },
        gray: {
          750: '#2d3748'
        }
      }
    },
  },
  plugins: [],
}

