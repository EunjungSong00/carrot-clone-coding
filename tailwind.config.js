/** @type {import('tailwindcss').Config} */
//components - 어디서 쓸지 정해줌
module.exports = {
  content: [
      // "./pages/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [
    require("@tailwindcss/forms")
  ],
}
