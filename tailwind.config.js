module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0D0D2B",
          primary: '#2B076E',
          icon: "#3671E9",
          button: "#3671E9",
          white10: "#FFFFFF10",
          divider: "#F2F2F2",
          sloganDescription: "#E0E0E0",
          borderBottom: '#E0E0E0',
          estimatedTextColor: "#3671E9",
          grey1: "#828282",
          grey2: '#E0E0E0',
          blue1: "#3671E9",
          black1: "#0D0D2B",
        },
      },
    },
  },
  plugins: [],
};
