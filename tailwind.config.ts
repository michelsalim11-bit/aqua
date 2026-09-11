import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        acqua: {
          cream: '#ede7dc',
          'cream-soft': '#f2ede2',
          'cream-hover': '#ddd4c0',
          blue: '#1b3a6b',
          'blue-soft': '#1f2e4a',
          'blue-deep': '#12213f',
          'blue-card': '#16233c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(23,40,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(23,40,74,0.06) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(circle at 50% 0%, rgba(27,58,107,0.14), transparent 60%)',
        'cta-gradient':
          'linear-gradient(135deg, rgba(27,58,107,0.14) 0%, rgba(27,58,107,0.03) 100%)',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(27,58,107,0.35)',
        'card-soft': '0 8px 30px -12px rgba(23,40,74,0.12)',
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
