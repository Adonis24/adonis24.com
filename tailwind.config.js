const { Pattern } = require('@mui/icons-material')

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode:'jit',
  purge:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],// ['*.html'],//
  prefix: 'tw-',
  darkMode: false, 
  theme: {
    extend: {
      fontFamily:{
        'raleway': ['raleway', 'sans-serif'],
        'raleway-400': ['raleway-400' ],
        'raleway-700': ['raleway-700'],
        'ProximaNovaRegular':['ProximaNovaRegular','ProximaNovaAltRegular, ProximaNovaScOsfRegular, Georgia, Verdana, Arial, Tahoma, Helvetica, "Ubuntu Light", Ubuntu, sans-serif'],
      },
      backgroundImage:{
        awardsAdonis2022_1:
          "url('https://res.cloudinary.com/ddgn7lxr9/image/upload/v1681993182/%D0%98%D1%81%D1%85._N_%D0%9B%D0%9F%D0%9E9-7707823594-1_uywhwe.png')",
    },
      },
      
  },
  plugins: [],
}


// backgroundImage:{
//   'landingImage':url('/public/images/intro-bg.jpg')
// } 