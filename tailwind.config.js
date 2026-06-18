/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        charcoal: '#0D0D0D',
        graphite: '#171717',
        champagne: '#D4AF37',
        gold: '#F4D06F',
        ivory: '#FFFFFF',
        smoke: 'rgba(255,255,255,0.75)'
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'ui-sans-serif', 'system-ui'],
        display: ['"Abyssinica SIL"', 'serif'],
        displaySans: ['Abel', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 55, 0.24)',
        soft: '0 25px 80px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.24), transparent 55%)'
      }
    }
  },
  plugins: []
};
