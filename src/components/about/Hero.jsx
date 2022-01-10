import React from "react";
import Button from "./Button/Button";

const Hero = () => {
  return (
    <section className="pt-14 py-20 bg-black text-white bg-shapesAbout bg-cover bg-center bg-no-repeat">
      <div className="flex  flex-col lg:flex-row items-start md:mt-14 w-10/12 max-w-screen mx-auto">
        <h1 className="z-10 text-4xl md:text-6xl lg:text-9xl lg:flex-1 font-bold mb-12">
          About the event
        </h1>
        <div className="z-10 flex flex-col items-start lg:w-5/12 lg:pl-20   ">
          <p className="z-10 mb-8 mt-2 lg:text-xl lg:w-12/12 ">
            Faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          </p>
          <Button text="save your seat" />
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
