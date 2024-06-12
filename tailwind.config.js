/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'groupHoverColor': 'color: hsl(219, 14%, 63%)'
      }
    },
  },
  variants: {
    extend: {
      textColor: ['hover']
    }
  },
  plugins: [],
}

