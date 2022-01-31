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
    <section className="text-white  py-12 lg:py-2 lg:pt-20 bg-black  lg:bg-shapesHome bg-cover  bg-no-repeat bg-center bg-pos">
      <div className=" flex  flex-col items-start md:mt-14 w-10/12 max-w-h-screen2 mx-auto">
        <div className=" w-full">
          <div className="flex flex-col">
            <div className="border-4 lg:border-8 border-home-yellow mb-zero bg-dots bg-repeat-round p-4 md:p-8 lg:p-12  ">
              <h1 className="text-home-yellow mb-4 capitalize text-3xl md:text-6xl lg:text-9xl">
                Divi Con
              </h1>
              <h1 className="  capitalize text-2xl md:text-6xl lg:text-8xl mb-4">
                Summer 2021
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" flex flex-row items-end justify-between  mb-10 gap-x-4 ">
            <h5 className="capitalize  inline-block md:text-3xl lg:text-5xl w-8/12  font-semibold  ">
              Register now
            </h5>
            <div className="flex   w-3/12 lg:w-2/12">
              <div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                className={`${
                  wfull
                    ? "w-full ml-auto transit flex items-center justify-center bg-home-yellow  p-4 md:p-8 lg:p-10 text-black   cursor-pointer  "
                    : "text-center flex items-center justify-center w-7/12 bg-home-yellow  p-4 md:p-8 lg:p-10 text-black   cursor-pointer transit  ml-auto "
                }`}
              >
                {/* <Button text="hello"/> */}
                <button className="text-center flex items-center justify-center ">
                  <FaArrowRight className=" text-2xl " />
                </button>
              </div>
            </div>
          </div>
          <p className="md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. Enim ad minim veniam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
