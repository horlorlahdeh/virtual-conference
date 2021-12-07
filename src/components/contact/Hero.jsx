import React from "react";

const Hero = () => {
  return (
    <div className="relative py-20 bg-green-500 overflow-hidden">
      <div className="absolute top-20  left-0 bg-black w-screen-full h-screen ">
        <div className="relative">
          <div className="bg-yellow-200 w-12 h-12  rounded-full absolute top-8 left-1/4"></div>
          <div className="bg-purple-500 w-12 h-12  md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-purple "></div>
          <div className="bg-pink-500 w-8 h-8  absolute about-square-pink "></div>
          <div className="bg-pink-200 w-8 h-8 hidden lg:block absolute about-rounded-pink rounded-full "></div>
          <div className="bg-blue-500 w-8 h-8 hidden lg:block absolute about-square-blue "></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
