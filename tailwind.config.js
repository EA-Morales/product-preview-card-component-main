/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'Cream': 'hsl(30, 38%, 92%)',
        'Very-dark-blue': 'hsl(212, 21%, 14%)',
        'Dark-grayish-blue': 'hsl(228, 12%, 48%)'
      }
    },
  },
  plugins: [],
}
