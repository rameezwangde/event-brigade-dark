/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#070707',
        charcoal: '#111214',
        graphite: '#1b1b1d',
        champagne: '#d8b76a',
        gold: '#f4d78a',
        ivory: '#f8f1df',
        smoke: '#b9b2a3'
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        glow: '0 0 40px rgba(216, 183, 106, 0.22)',
        soft: '0 25px 80px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at center, rgba(244, 215, 138, 0.24), transparent 55%)'
      }
    }
  },
  plugins: []
};
