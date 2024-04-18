/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          0: "#EEF3FF",
          1: "#DCE4F5",
          2: "#B9C7E2",
          3: "#94A8D0",
          4: "#748DC1",
          5: "#5F7CB8",
          6: "#5474B4",
          7: "#44639F",
          8: "#39588F",
          9: "#2D4B81",
          default: "#5474B4",
          text: "#334155",
          body: "#f5fbfe",
          background: "#fff",
          border: "#e5e7eb",
        },
      },
    },
  },
  plugins: [],
};
