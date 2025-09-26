/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // ⬅️ otomatis ikuti setting HP/browser
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1A3F",
        gold: "#F5B700",
        ivory: "#FAF9F6",
        charcoal: "#111827",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif"],
        display: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
