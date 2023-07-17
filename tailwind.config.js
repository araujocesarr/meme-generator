/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#672280",
        "purple-light": "#A626D3",
      },
      boxShadow: {
        header: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        Karla: ["Karla", "Arial", "sans-serif"],
        impact: ["impact", "sans-serif"],
      },
    },
  },
  plugins: [],
};
