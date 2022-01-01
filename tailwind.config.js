module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2fc": "repeat(2, fit-content(300px))",
        "3fc": "repeat(3, fit-content(300px))",
      },
      spacing: {
        '128': '32rem',
        '192': '48rem',
      },
    },
  },
  plugins: [],
};
