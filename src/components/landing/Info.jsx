import React from "react";
// import Button from "./Button/Button";
// import Button2 from "./Button/Button2";

const Hero = () => {
  return (
    <section className="py-16 bg-black ">
        <div className="flex flex-col lg:flex-row w-10/12  lg:w-full gap-y-2 gap-x-12  mx-auto mb-10 ">
          <div className=" mb-5 lg:w-1/2">
            <img
              src="./images/landing/landing-img.jpg"
              alt="computer "
              className="w-full h-full"
            />
          </div>
          <div className="w-full    text-white lg:w-1/2">
            <h1 className=" text-2xl md:text-5xl lg:text-8xl   tracking-wide capitalize lg:mt-60 lg:w-10/12">
            About the Event
            </h1>
          </div>
        </div>
        <p className=" w-10/12  text-base md:text-2xl lg:text-4xl tracking-normal lg:tracking-wide text-white lg:w-10/12 mx-auto max-w-screen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section> 
  );
};

export default Hero;
