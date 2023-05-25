/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      themecolor: '#FF4E61',
      accentcolor: '#1C1B29',
      trigcolor: "#f8fafc",
      greytheme: "#C9C9C9",
      trans: '#fb7185',
      discord: '#2f3136',
    },


   


    content: {
      transform: (content) => content.replace(/taos:/g, ''),
    },
   
    screens: {
      'sl': '320px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },


    extend: {
      colors: {
        white: "#FFFFFF",
      },

      fontFamily: {
        'Lexend': ['Lexend', 'sans-serif']
      }
    },
  },
  
  plugins: [
    require('flowbite/plugin'),
    require('taos/plugin')
    

  ],

  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]

}

