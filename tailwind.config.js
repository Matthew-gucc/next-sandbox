module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spotlight1: 'moveAround1 10s ease-in-out infinite',
        spotlight2: 'moveAround2 15s ease-in-out infinite',
        spotlight3: 'moveAround3 12s ease-in-out infinite',
      },
      keyframes: {
        moveAround1: {
          '0%, 100%': { transform: 'translate(0% , 0%) scale(1)' },
          '25%': { transform: 'translate(-50% , -30%) scale(1.2) skewX(20deg) rotate(30deg)' },
          '50%': { transform: 'translate(0% , 40%) scale(0.8) skewX(20deg) rotate(100deg)' },
          '75%': { transform: 'translate(-20% , 20%) scale(.9) skewX(20deg) rotate(10deg)' },
        },
        moveAround2: {
          '0%, 100%': { transform: 'translate(0% , 0%) scale(1)' },
          '25%': { transform: 'translate(-30% , -30%) scale(0.6) skewX(50deg) rotate(-50deg)' },
          '50%': { transform: 'translate(10% , -40%) scale(0.9) skewX(30deg) rotate(20deg)' },
          '75%': { transform: 'translate(-20% , -20%) scale(1.1) skewX(10deg) rotate(50deg)' },
        },
        moveAround3: {
          '0%, 100%': { transform: 'translate(0% , 0%) scale(1)' },
          '25%': { transform: 'translate(20% , -20%) scale(1.2) skewX(20deg) rotate(100deg)' },
          '50%': { transform: 'translate(-15% , 30%) scale(1) skewX(10deg) rotate(100deg)' },
          '75%': { transform: 'translate(35% , -10%) scale(0.8) skewX(-10deg) rotate(-10deg)' },
        },
      },
    },
  },
  plugins: [],
};
