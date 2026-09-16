/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#080808',
          card: '#0D0D0F',
          surface: '#131316',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-gold': 'rgba(214, 173, 85, 0.25)',
        },
        gold: {
          DEFAULT: '#D6AD55',
          dark: '#C99A3D',
          light: '#F0D58A',
          glow: 'rgba(214, 173, 85, 0.15)',
        },
        warm: {
          white: '#F5F3EE',
          secondary: '#A5A5A5',
          muted: '#6E6E73',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
        serif: ['Source Serif 4', 'serif'],
        accent: ['Supermercado One', 'cursive'],
      },
      boxShadow: {
        'gold-glow': '0 0 30px -5px rgba(214, 173, 85, 0.15)',
        'obsidian-card': '0 10px 40px -10px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F0D58A 0%, #D6AD55 50%, #C99A3D 100%)',
        'gold-text-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F0D58A 60%, #D6AD55 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(214, 173, 85, 0.08) 0%, rgba(8, 8, 8, 0) 70%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
