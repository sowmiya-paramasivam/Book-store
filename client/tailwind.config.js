/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-right': 'fadeInRight 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'bounce-in': 'bounceIn 1s ease-out',
        'marquee': 'marquee 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(0.5) translateY(-50px)' },
          '60%': { opacity: 1, transform: 'scale(1.1) translateY(10px)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        eduArrow: ['"Edu AU VIC WA NT Arrows"', 'cursive'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
