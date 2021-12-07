module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        dots: "url('../src/images/dots.png')",
        shapesAbout: "url('../src/images/shapes-about.png')",
        shapesContact: "url('../src/images/shapes-contact.png')",
        shapesRegisterMain: "url('../src/images/shapes-register-main.png')",
        shapesRegisterSm: "url('../src/images/shapes-register-sm.png')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "purple-main": "#6700FF",
        "purple-light": "#9046FE",
      }),
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
         "purple-main": '#6700FF' ,
        "purple-light": '#9046FE'
        
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
