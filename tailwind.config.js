/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontSize: {
      tab: '120%',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      xs: '0.69rem'
    },    
    extend: {
      colors: {
        'groupHoverColor': 'hsl(219, 14%, 63%)',
        'PMHoverColor': 'hsl(211, 68%, 94%)',
        'gNameColor': 'hsl(219, 85%, 26%)',
        'newNotifyBgColor': 'hsl(210, 60%, 98%)',
        'postColor': 'hsl(0, 1%, 36%)',
        'redDot': 'hsl(1, 90%, 64%)',
        'footer': 'hsl(228, 45%, 44%)'
      },
      screens: {
        '3sm': '320px',
        '2sm': '374px'
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

