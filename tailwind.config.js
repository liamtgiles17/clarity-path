const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/app/**/*.{html,js,jsx}",
    "./public/**/*.{html,js,jsx}",
    "./src/app/layout.js",
    "./src/components/navbar.js",
    "./src/components/footer.js",
    "./src/components/marquee.js",
    "./src/pages/index.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        offwhite: {
          DEFAULT: "#F7F7F7",
          darker: "#E7E7E7",
        },
      },
      backgroundImage: {
        'home-hero': "url('/stock1.avif')",
        'home-hero-mob': "url('/stock1mob.avif')",
        'home-hero-blur': "url('/stock1blur.avif')",
        'talk-therapy': "url('/stock6.avif')",
        'diagnostic': "url('/stock2blur.avif')",
        'therapeutic': "url('/stock3blur.avif')",
        'achievement': "url('/stock8blur.avif')",
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        slideInFromLeft: "1.2s ease-out 0s 1 slideInFromLeft",
        slideInFromLeft2: "1.4s ease-out 0s 1 slideInFromLeft",
        slideInFromRight: "1.2s ease-out 0s 1 slideInFromRight",
        slideInFromRight2: "1.4s ease-out 0s 1 slideInFromRight",
        slideInFromBottom: "1.2s ease-out 0s 1 slideInFromBottom",
        slideInFromBottom: "1.4s ease-out 0s 1 slideInFromBottom",
      },
      keyframes: {
        marquee: {
          '0%': {transform: 'translate(0, 0)'},
          '100%': {transform: 'translate(-100%, 0)'},
        },
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
            filter: 'blur(5px)'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
            filter: 'blur(0)'
          },
        },
        slideInFromRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
            filter: 'blur(5px)'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
            filter: 'blur(0)'
          },
        },
        slideInFromBottom: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
            filter: 'blur(5px)'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
            filter: 'blur(0)'
          },
        },
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    flowbite.plugin(),
  ]
};
