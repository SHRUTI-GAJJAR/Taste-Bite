// tailwind.config.js
export default {
  darkMode: ["class", '[data-theme="dark"]'], // ✅ Required
  content: ["./index.html", "./src/**/*.{jsx,ts,js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
