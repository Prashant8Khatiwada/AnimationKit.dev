import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: 'rgb(var(--primary-purple) / <alpha-value>)',
          'purple-dark': 'rgb(var(--primary-purple-dark) / <alpha-value>)',
          'purple-light': 'rgb(var(--primary-purple-light) / <alpha-value>)',
        },
        accent: {
          cyan: 'rgb(var(--accent-cyan) / <alpha-value>)',
          'cyan-dark': 'rgb(var(--accent-cyan-dark) / <alpha-value>)',
          'cyan-light': 'rgb(var(--accent-cyan-light) / <alpha-value>)',
        },
        background: 'rgb(var(--bg-primary) / <alpha-value>)',
        foreground: 'rgb(var(--text-primary) / <alpha-value>)',
        border: 'rgb(var(--border-color) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      spacing: {
        '1': 'calc(var(--space-unit) * 0.5)',
        '2': 'var(--space-unit)',
        '3': 'calc(var(--space-unit) * 1.5)',
        '4': 'calc(var(--space-unit) * 2)',
        '5': 'calc(var(--space-unit) * 2.5)',
        '6': 'calc(var(--space-unit) * 3)',
        '8': 'calc(var(--space-unit) * 4)',
        '10': 'calc(var(--space-unit) * 5)',
        '12': 'calc(var(--space-unit) * 6)',
        '16': 'calc(var(--space-unit) * 8)',
        '20': 'calc(var(--space-unit) * 10)',
        '24': 'calc(var(--space-unit) * 12)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-normal) ease-in-out',
        'slide-up': 'slideUp var(--duration-normal) ease-out',
        'slide-down': 'slideDown var(--duration-normal) ease-out',
        'scale-in': 'scaleIn var(--duration-normal) ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        instant: 'var(--duration-instant)',
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },
    },
  },
  plugins: [],
};

export default config;
