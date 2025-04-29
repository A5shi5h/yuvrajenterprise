/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        fontFamily: {
            sans: ['var(--font-inter)', 'sans-serif'],
            serif: ['var(--font-serif)', ...fontFamily.serif],
            mono: ['var(--font-mono)', ...fontFamily.mono],
        },
      },
    },
  };