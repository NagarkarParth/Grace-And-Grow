/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tactical: {
          bg: '#080A0B',
          dark: '#101214',
          surface: '#151719',
          card: '#181B1E',
          cardHover: '#1E2226',
          border: '#262A30',
          borderHover: '#F59E0B',
          orange: '#F59E0B',
          orangeDark: '#D97706',
          orangeGlow: 'rgba(245, 158, 11, 0.25)',
          red: '#E50914',
          redGlow: 'rgba(229, 9, 20, 0.25)',
          yellow: '#FFD166',
          green: '#22C55E',
          greenGlow: 'rgba(34, 197, 94, 0.25)',
          text: '#F5F5F5',
          muted: '#A3A3A3',
          dim: '#63666A',
          grid: 'rgba(245, 158, 11, 0.04)',
        }
      },
      fontFamily: {
        tactical: ['Chakra Petch', 'Rajdhani', 'sans-serif'],
        display: ['Orbitron', 'Chakra Petch', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'hud-orange': '0 0 15px rgba(245, 158, 11, 0.3), inset 0 0 15px rgba(245, 158, 11, 0.1)',
        'hud-red': '0 0 15px rgba(229, 9, 20, 0.3), inset 0 0 15px rgba(229, 9, 20, 0.1)',
        'hud-green': '0 0 15px rgba(34, 197, 94, 0.3), inset 0 0 15px rgba(34, 197, 94, 0.1)',
        'hud-subtle': '0 4px 20px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'radar': 'radar 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 2px rgba(245, 158, 11, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
