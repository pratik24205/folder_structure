/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf5f1',
          100: '#bdded2',
          200: '#9dcfbd',
          300: '#71b99f',
          400: '#55ab8c',
          500: '#2b966f',
          600: '#2b966f',
          700: '#278965',
          800: '#18533d',
          900: '#123f2f',
        },
        text: {
          90: '#333333'
        },
        gray: "#555555",
        lightGray: "#B4B4B4",
      },
      fontFamily: {
        'merriweather': ['"Merriweather Sans"', 'sans-serif'],
        'clash': ['"Clash Grotesk"', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 20s ease-out forwards',
        'slide-in': 'slideIn 10s ease-out forwards',
        'fade-in-scroll': 'fadeInScroll 1s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'scale-rotate': 'scaleRotate 1s ease-out forwards',
        'fade-in-scroll': 'fadeInScroll 1s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
        'fade-up': 'fadeUp 1.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        scaleRotate: {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'rotate(15deg) scale(0.9)',
          },
          '100%': {
            opacity: 1,
            transform: 'rotate(0deg) scale(1)',
          },
        },
        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
