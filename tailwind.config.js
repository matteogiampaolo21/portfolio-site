/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1260' : '1260px',
        '750': '750px',
        '440': '440px',
        '400': '400px',
        '300': '300px',
        'img-xs' : '200px',
        'img-sm' : '250px',
        'img-md' : '375px',
        
      }
    },
    screens: {
      "xs": "250px",

      'sm': '465px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}