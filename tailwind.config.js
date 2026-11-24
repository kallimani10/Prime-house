/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0f1f3d', 950: '#070f20', 900: '#0a1630', 800: '#132849', 700: '#1c365f', 600: '#2a4a7a' },
        cream: { DEFAULT: '#faf7f2', 100: '#f5f0e7' },
        beige: { DEFAULT: '#ece3d4', 200: '#e4d8c4', 300: '#d6c5a8' },
        charcoal: { DEFAULT: '#1f2328', 600: '#4a5059', 500: '#646b75' },
        gold: { DEFAULT: '#c98a2e', 400: '#d99a3d', 300: '#e8b867', 600: '#a96f1c' },
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.045em' },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(15,31,61,.25)',
        card: '0 1px 2px rgba(15,31,61,.06), 0 12px 32px -12px rgba(15,31,61,.18)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        scrolldot: { '0%': { transform: 'translateY(0)', opacity: 1 }, '80%': { transform: 'translateY(14px)', opacity: 0 }, '100%': { opacity: 0 } },
        kenburns: { from: { transform: 'scale(1.12)' }, to: { transform: 'scale(1)' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        scrolldot: 'scrolldot 1.8s ease-in-out infinite',
        kenburns: 'kenburns 14s ease-out forwards',
      },
    },
  },
  plugins: [],
}
