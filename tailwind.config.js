/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "astreoids1": "url('images/bg-1.png')",
        "astreoids2": "url('images/bg-2.png')",
        "astreoids3": "url('images/bg-3.png')",
        "astreoids4": "url('images/bg-4.png')",
      },
    },
  },
  plugins: [],
};
