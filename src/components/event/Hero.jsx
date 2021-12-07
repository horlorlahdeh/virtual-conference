import React from "react";

const Hero = () => {
  return (
    <section className="bg-black py-20 ">
      <div className="w-10/12 mx-auto flex flex-col lg:flex-row lg:gap-12 lg:items-start">
        <div className=" p-1 mb-8 lg:mb-0 lg:w-4/12 lg:mt-4">
          <img src="./images/event/hero.png" alt="hero" />
        </div>
        <div className=" text-white lg:w-8/12">
          <h1 className=" text-white text-4xl md:text-6xl lg:text-9xl mb-8 lg:mb-12 lg:pt-0 lg:mt-0 ">Database Design</h1>
          <h5 className="text-pink-500 text-base md:text-4xl lg:text-5xl mb-8 lg:mb-12">Saturday @ 1pm</h5>
          <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Enim ad minim veniam.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
