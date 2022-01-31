
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
// import Button from "../pricing/Button/Button";


const Hero = () => {
  const [wfull, setWfull] = useState(false);
  const handleMouseOver = () => {
    setWfull(true);
  };
  const handleMouseLeave = () => {
    setWfull(false);
  };
  // console.log(wfull);
  return (
    <section className='text-white  py-0 lg:py-0 bg-black  lg:bg-homeHeroBg-- bg-cover  bg-no-repeat bg-center bg-pos flex justify-center align-center xs:h-screen'>
      <div className='background-blend-multiply w-full bg-gradient-to-r from-black via-transparent to-black'>
        <div className='flex flex-col items-start w-10/12 max-w-h-screen2 mx-auto  md:py-14'>
          <div className='w-full'>
            <div className='flex flex-col'>
              <div className='border-4 lg:border-8 border-home-yellow mb-zero bg-dots bg-repeat-round p-4 md:p-8 lg:p-12'>
                <h1 className='  capitalize text-2xl md:text-2 lg:text-2 mb-0'>
                  Explore
                </h1>
                <h1 className='text-home-yellow mb-4 capitalize text-3xl md:text-6xl lg:text-9xl'>
                  DYGY CON
                </h1>
                <h1 className='capitalize text-2xl md:text-6xl lg:text-6xl mb-4'>
                  edition 7.0
                </h1>
                <p className='md:text-lg'>
                  DYGYCON is a one-stop event showicasing all your favourite
                  crypto projects in one place.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between w-full align-center'>
            <div className='flex flex-row items-end gap-x-4 justify-center align-center'>
              <h5 className='capitalize  inline-block md:text-3xl lg:text-5xl flex-1 font-semibold self-center'>
                RSVP Now!
              </h5>
            </div>
            <div className='bg-home-yellow inline-block p-4 md:p-8 lg:p-10 text-black  hover:px-12 hover:bg-green-200 '>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
