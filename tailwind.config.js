module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "dark": "#2C2C2C",
        "cream": "#EFEFEF",
        "skin": "#F6DED0"
      },
      fontFamily: {
        "jost": ['Jost', "sans-serif"],
        'helvetica': 'Helvetica, Arial, sans-serif',
      },
     
    },
  },
  plugins: [],
}