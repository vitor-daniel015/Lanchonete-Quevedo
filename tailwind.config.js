/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(359, 94%, 26%)',
        'secondary': 'hsl(48, 100%, 95%)',
        'accent': 'hsl(48, 100%, 60%)',
        'text': 'hsl(210, 22%, 18%)',
        'background': 'hsl(210, 22%, 98%)',
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