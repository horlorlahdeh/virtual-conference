module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        dots: "url('../src/images/dots.png')",
        shapesAbout: "url('../src/images/shapes-about.png')",
        shapesContact: "url('../src/images/shapes-contact.png')",
        shapesPricing: "url('../src/images/shapes-pricing.png')",
        shapesRegisterMain: "url('../src/images/shapes-register-main.png')",
        shapesRegisterSm: "url('../src/images/shapes-register-sm.png')",
        pricingSkyBlue: "url('../src/images/pricing/pricing-sky-blue.png')",
        pricingYellowLight: "url('../src/images/pricing/pricing-yellow.png')",
        shapesHome: "url('../src/images/shapes-home.png')",
        // shapesHomeImg: "url('../src/images/shapes-home-img.jpg')",
        home1: "url('../src/images/home/home-img1.png')",
        home2: "url('../src/images/home/home-img2.png')",
        home3: "url('../src/images/home/home-img3.png')",
        homeHeroBg: "url('../src/images/home_hero_bg.jpg')"
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "purple-main": "#6700FF",
        "purple-light": "#9046FE",
        "pink-main": "#ff6af0",
        "sky-blue-pricing": "#03B6F8",
        "yellow-light-pricing": "#FFF022",
        "home-pink": "#ff6af0",
        "home-blue": "#6700FF",
        "home-yellow": "#fff022",
      }),
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
         "purple-main": '#6700FF' ,
        "purple-light": '#9046FE',
        "pink-main": "#ff6af0",
        "home-yellow": "#fff022",
        "home-blue": "#6700FF",
        "home-pink": "#ff6af0",

       }),
       colors: {
        "home-yellow": "#fff022",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
