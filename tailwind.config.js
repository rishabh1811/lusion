module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
      '2xl': { 'max': '1300px' },

      'xl': { 'max': '1200px' },

      '1190' : { 'max' : '1190px'},

      'lg': { 'max': '1014px' },

      '890' : { "max" : "890px"},

      'md': { 'max': '767px' },

      'sm': { 'max': '639px' },

      'xs': { 'max': '450px' },

      "300" : { "max" : "300px"},
      
    },
    
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