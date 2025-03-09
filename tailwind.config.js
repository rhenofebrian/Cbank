/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Biru utama (Tailwind blue-700)
        secondary: "#3B82F6", // Biru lebih terang (Tailwind blue-500)
        dark: "#1E293B", // Biru gelap (Tailwind slate-800)
        light: "#F8FAFC", // Warna terang (Tailwind slate-50)
        accent: "#93C5FD", // Biru pastel untuk aksen (Tailwind blue-300)
      },
      fontFamily: {
        inter: ["Horticulture", "sans-serif"],
        roboto: ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
