import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
          
            <div className=" border-4 lg:border-8 lg:w-1/2 lg:h-4/5  border-home-blue mb-zero bg-dots bg-repeat-round p-4 md:p-8 lg:p-12 relative  ">
            <div className="bg-home-blue inline-block p-4 md:p-8 lg:p-10 text-white  hover:px-12  absolute top-0 right-0 ">
                {/* <Button text="hello"/> */}
                <button><FaArrowRight/>
                </button>
            </div>
            <div className="">
              <h5 className="text-white mb-10 mt-20 lg:mt-40 capitalize text-base md:text-3xl lg:text-5xl lg:tracking-widest">
              Earlybird Registration Now Open
              </h5>
              <p className=" text-white text-base md:text-lg lg:text-xl mb-4 lg:mb-20">
              Nulla quis lorem ut libero malesuada
               feugiat. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum.
              </p>

            </div>
            </div>
          
    
      
   
  );
};

export default Hero;
