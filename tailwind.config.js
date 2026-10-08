/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDF9',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#062B29',
          spruce: '#0E3836',
          dark: '#0B2927',
          deep: '#061D1C',
          mint: '#10B981',
          arrow: '#14B8A6',
          canvas: '#FBFBF9',
          surface: '#FFFFFF',
          charcoal: '#0F172A',
          muted: '#64748B',
          subtle: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(14, 56, 54, 0.06)',
        'card': '0 10px 30px -4px rgba(14, 56, 54, 0.08), 0 4px 12px -2px rgba(14, 56, 54, 0.03)',
        'hover': '0 20px 40px -8px rgba(14, 56, 54, 0.14), 0 8px 16px -4px rgba(20, 184, 166, 0.12)',
        'glow': '0 0 25px rgba(20, 184, 166, 0.35)',
        'glow-lg': '0 0 50px rgba(20, 184, 166, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        }
      }
    },
  },
  plugins: [],
}
