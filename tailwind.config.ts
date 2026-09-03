import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        bg: {
          app: '#e5e7eb', // Light gray outer background
          window: '#ffffff', // White inner window
          bar: '#33363e', // Dark browser top bar
          footer: '#1a1a1a', // Very dark footer
        },
        text: {
          dark: '#1a1a1a',
          muted: '#6b7280',
          light: '#ffffff',
        },
        border: {
          subtle: '#e5e7eb',
          dark: '#374151',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
