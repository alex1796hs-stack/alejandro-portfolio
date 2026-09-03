import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#080808',
          lighter: '#101010',
          card: '#151515',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0',
          tertiary: '#808080',
        },
        accent: {
          DEFAULT: '#00d4ff', // Cyan como default (puede cambiar)
          blue: '#0099ff',
          purple: '#aa3bff',
          green: '#00d97e',
          cyan: '#00d4ff',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, rgba(10, 8, 20, 0.8) 0%, rgba(170, 59, 255, 0.35) 50%, rgba(147, 51, 234, 0.22) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
