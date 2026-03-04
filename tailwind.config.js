/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend: {
        colors: {
          accent: "#5eead4",        // mint/green accent (Apple-ish)
          'glass-bg': 'rgba(255,255,255,0.04)'
        },
        ironman: {
          red: '#FF0000',
          gold: '#FFD700',
        },
        captainamerica: {
          navy: '#0A3D62',
          red: '#E63946',
          white: '#FFFFFF',
        },
        thor: {
          gray: '#A9A9A9',
          blue: '#1E90FF',
        },
        hulk: {
          green: '#4CAF50',
          purple: '#6A0DAD',
        },
        blackwidow: {
          black: '#000000',
          red: '#B22222',
        },
        hawkeye: {
          purple: '#6A0DAD',
          black: '#000000',
        },
        doctorstrange: {
          darkred: '#8B0000',
          gold: '#FFD700',
        },
        spiderman: {
          red: '#E53935',
          blue: '#1E88E5',
        },
        blackpanther: {
          black: '#000000',
          silver: '#C0C0C0',
        },
        borderRadius: { xl: '1rem', '2xl': '1.25rem' }
      }
    },
    plugins: []
    
  };
  