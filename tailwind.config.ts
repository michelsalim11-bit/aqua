import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        aqua: {
          green: '#ede7dc',
          'green-soft': '#f2ede2',
          'green-hover': '#ddd4c0',
          'green-deep': '#1b3a6b',
          dark: '#1b3a6b',
          'dark-soft': '#1f2e4a',
          'dark-card': '#16233c',
          'dark-deep': '#0f1930',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(circle at 50% 0%, rgba(237,231,220,0.18), transparent 60%)',
        'cta-gradient':
          'linear-gradient(135deg, rgba(237,231,220,0.18) 0%, rgba(237,231,220,0.04) 100%)',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(237,231,220,0.45)',
        'card-soft': '0 8px 30px -12px rgba(0,0,0,0.6)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-30px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        'fade-up': 'fadeUp 500ms ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
