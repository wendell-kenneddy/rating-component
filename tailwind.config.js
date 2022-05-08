const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'brand-orange': 'hsl(25, 97%, 53%)',
        'brand-white': 'hsl(0, 0%, 100%)',
        'brand-light-grey': 'hsl(217, 12%, 63%)',
        'brand-med-grey': 'hsl(216, 12%, 54%)',
        'brand-dark-blue': 'hsl(213, 19%, 18%)',
        'brand-darker-blue': 'hsl(216, 12%, 8%)'
      },
      fontFamily: {
        sans: ['Overpass', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
