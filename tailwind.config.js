module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Inter, sans-serif'],
         anton: ['Anton', 'sans-serif'],
          playfair: ['"Playfair Display"', 'serif'],
            outfit: ['Outfit', 'sans-serif'],
              playfair: ['"Playfair Display"', 'serif'],
               clash: ['"Clash Display"', 'sans-serif'],
                 cinzel: ['Cinzel', 'serif'],
      },
      animation: {
    'flash-fast': 'flash-fast 0.6s linear infinite',
        'gradient': 'gradient-move 3s ease infinite',
    'bounce-slow': 'bounce 2s infinite',
     glitch: 'glitch 1s infinite',
  },
  keyframes: {
    'flash-fast': {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.6 },
    }, glitch: {
      '0%': { transform: 'translate(0)', opacity: 1 },
      '20%': { transform: 'translate(-2px, 2px)', opacity: 0.8 },
      '40%': { transform: 'translate(2px, -2px)', opacity: 1 },
      '60%': { transform: 'translate(-1px, 1px)', opacity: 0.9 },
      '80%': { transform: 'translate(1px, -1px)', opacity: 1 },
      '100%': { transform: 'translate(0)', opacity: 1 },
    },
    'gradient-move': {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
  },
    },
  }, 
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  
  plugins: [],
};
