/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ef4056', // قرمز دیجی‌کالا
        secondary: '#3f4064', // خاکستری دیجی‌کالا
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
