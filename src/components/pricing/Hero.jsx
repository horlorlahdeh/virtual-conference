import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Btn from "./Btn";
// import img from './images/about/company logos/pitch.png'

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <section className="py-20">
      <div className="w-10/12 mx-auto max-w-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-20 text-left text-white">
          Registration
        </h1>
        <div className="flex flex-col lg:flex-row gap-x-20 gap-y-10">
          <div className="border-4 border-pink-main bg-dots flex flex-col justify-start p-4 text-white">
            <div className="w-20 h-20 border-radius  object-contain mb- ">
              <img
                src="./images/about/company logos/pitch.png"
                alt="loudnick"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-yellow-700 text-base md:text-2xl lg:text-sm uppercase font-semibold mb-2">
              ALL ACCESS PASS
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-3xl uppercase font-semibold mb-8">
              $650
            </h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. Enim ad minim veniam.
            </p>
            <div className="flex bg-pink-300 text-black w-28 items-center">
              <button
                onMouseEnter={() => setShowArrow(true)}
                onMouseLeave={() => setShowArrow(false)}
                className={`  py-3   ${
                  showArrow && "pl-2 mr-2 "
                }  font-semibold text-lg bg-transparent
              cursor-pointer  p-4 pr-0  transform-all duration-200`}
              >
                Buy now
              </button>
              <FaChevronRight
                className={`${
                  showArrow ? "flex translate-x " : "hidden ml-0"
                } text-base transform-all duration-200`}
              />
            </div>
          </div>
          <div className="bg-sky-blue-pricing bg-pricingSkyBlue text-black bg-cover bg-bottom   flex flex-col justify-start p-4 ">
            <div className="w-20 h-20 border-radius  object-contain mb-4 ">
              <img
                src="./images/about/company logos/pitch.png"
                alt="loudnick"
                className="w-full h-full"
              />
            </div>
            <h1 className=" text-base md:text-2xl lg:text-sm uppercase font-semibold mb-2">
              WEEKEND PASS
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-3xl uppercase font-semibold mb-8">
              $650
            </h1>
            <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Enim ad minim veniam.
            </p>
           <Btn text={"Buy now"} hoverBg={"black"} hoverText={"white"}  borderSize={2} borderColor={"black"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
