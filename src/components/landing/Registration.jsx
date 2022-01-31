import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [wfull, setWfull] = useState(false);
  const handleMouseOver = () => {
    setWfull(true);
  };
  const handleMouseLeave = () => {
    setWfull(false);
  };
  return (
    <div className="  lg:w-6/12 mx-auto border-4 lg:border-8 border-home-blue mb-zero bg-dots bg-repeat-round  relative pb-4 md:pb-8 lg:pb-12  ">
      
      <div className="flex justify-between mb-4 md:mb-8 lg:mb-12 ">
        <div className=" w-6/12 lg:w-7/12"></div>
        <div className=" w-3/12  ">
          <div
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className={`${
              wfull
                ? "w-full ml-auto transit flex items-center justify-center bg-home-blue  p-4 md:p-8 lg:p-10 text-black   cursor-pointer  "
                : "text-center flex items-center justify-center w-7/12 bg-home-blue  p-4 md:p-8 lg:p-10 text-black   cursor-pointer transit  ml-auto "
            }`}
          >
            {/* <Button text="hello"/> */}
            <button className="text-center flex items-center justify-center ">
              <FaArrowRight className=" text-2xl text-white " />
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-12">
        <h5 className="text-white mb-10 mt-20 lg:mt-40 capitalize text-base md:text-3xl lg:text-5xl lg:tracking-widest">
          Earlybird Registration Now Open
        </h5>
        <p className=" text-white text-base md:text-lg lg:text-xl mb-4 lg:mb-20">
          Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
          nibh. Cras ultricies ligula sed magna dictum.
        </p>
      </div>
    </div>
  );
};

export default Hero;
