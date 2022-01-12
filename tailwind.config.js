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
        shapesBlog: "url('../src/images/blog/shapes-blog.png')",
        shapesBlog2: "url('../src/images/blog/blog-2.png')",
        shapesPricing: "url('../src/images/pricing/pricing-bg.png')",
        pricingBg2: "url('../src/images/pricing/pricing-bg-2.png')",
        pricingBg3: "url('../src/images/pricing/pricing-bg-3.png')",
        shapesHome: "url('../src/images/shapes-home.png')",
        home1: "url('../src/images/home/home-img1.png')",
        home2: "url('../src/images/home/home-img2.png')",
        home3: "url('../src/images/home/home-img3.png')",
        schedule1: "url('../src/images/schedule/schedule-img.png')",
        schedule2: "url('../src/images/schedule/schedule-img2.png')",
        schedule3: "url('../src/images/schedule/schedule-img3.png')",
        speakersHero: "url('../src/images/speakers/speaker-hero.png')",
        speakersSignUp: "url('../src/images/speakers/sign.png')",
        speakersJuly: "url('../src/images/speakers/july.png')",
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
        "schedule-pink": "#FF6AF0",
        "schedule-red": "#FB3800",
        "schedule-yellow": "#FFF022",
        "pricing-brown": "#facdcd",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
