module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "slime": "#E2EAC2",
        "mint": "#B2C9A5",
        "midnight": "#413C58",
        "night": "#5B5578"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
