/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '400': '400px',
        '50' : '50px',
        'img' : '500px',
        'my-xl':'1049px',
        'my-lg':'700px',
        'my-md':'300px',
        
      }
    },
    screens: {
      'sm': {"max" : '640px'},

      'md': {"max" :'768px'},

      'lg': {"min":"769px","max" :'1024px'},

      'xl': {"min":"1025px","max" :'1280px'},

      '2xl': {"min":"1281px","max" :'1536px'},
    }
  },
  plugins: [],
}