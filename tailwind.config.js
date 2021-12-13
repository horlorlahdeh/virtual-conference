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
        pricingYellowLight: "url('../src/images/pricing/pricing-yellow.png')"
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "purple-main": "#6700FF",
        "purple-light": "#9046FE",
        "pink-main": "#ff6af0",
        "sky-blue-pricing": "#03B6F8",
        "yellow-light-pricing": "#FFF022",
      }),
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
         "purple-main": '#6700FF' ,
        "purple-light": '#9046FE',
        "pink-main": "#ff6af0",

       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
