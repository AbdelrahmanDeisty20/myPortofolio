/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080a0f',
          surface: '#0f1420',
          card: 'rgba(15, 20, 32, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-glow': 'rgba(16, 185, 129, 0.3)',
          neonGreen: '#10b981',
          neonCyan: '#06b6d4',
          neonPurple: '#8b5cf6',
          neonPink: '#ec4899',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'radar': 'radar 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        borderSpin: {
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        radar: {
          '75%, 100%': { transform: 'scale(2.5)', opacity: '0' },
        }
      },
      boxShadow: {
        'neon-green': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'neon-purple': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}

