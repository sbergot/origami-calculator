module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2fc": "repeat(2, fit-content(300px))",
        "3fc": "repeat(3, fit-content(300px))",
      },
    },
  },
  plugins: [],
};
