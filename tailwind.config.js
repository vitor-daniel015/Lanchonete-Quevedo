/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'corn-yellow': '#FDB813',
        'earth-brown': '#8B4513',
        'warm-beige': '#F5E6D3',
        'appetite-red': '#DC2626',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
      },
    },
  },
  plugins: [],
};