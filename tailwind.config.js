/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'groupHoverColor': 'hsl(219, 14%, 63%)',
        'PMHoverColor': 'hsl(211, 68%, 94%)',
        'gNameColor': 'hsl(219, 85%, 26%)',
        'newNotifyBgColor': 'hsl(210, 60%, 98%)'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover']
    }
  },
  plugins: [],
}

