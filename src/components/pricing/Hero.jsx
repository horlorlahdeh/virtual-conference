import React from "react";
import Button from "./Button/Button";
import Button2 from "./Button/Button2";



const Hero = () => {
  return (
    <section className="py-16 lg:pt-40 bg-transparent">
      <div className="flex   flex-col  items-start  w-10/12 max-w-screen mx-auto">
      <h1 className="text-left text-4xl md:text-6xl lg:text-9xl  tracking-wide mb-16">
      Registration
        </h1>
        <div className="flex flex-col lg:flex-row  w-full gap-y-8 gap-x-12">
        <div className="border-4 lg:border-8 border-pink-main bg-dots flex flex-col justify-start p-6 md:p-8 lg:p-14 text-white lg:w-7/12">
            <div className="w-12 h-12 lg:w-24 lg:h-24 border-radius  object-contain mb-6 ">
              <img
                src="./images/pricing/pricing-img-1.png"
                alt="loudnick"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-pricing-brown text-sm md:text-base lg:text-xs uppercase font-bold mb-2 lg:mb-4 tracking-widest">
              ALL ACCESS PASS
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-3xl uppercase font-semibold mb-8">
              $650
            </h1>
            <p className="mb-8 text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. Enim ad minim veniam.
            </p>
            <Button text="Buy Now" className="lg:mb-14"/>
          </div>
        <div className="lg:flex-1  bg-sky-blue-pricing text-black bg-pricingBg2 bg-home bg-cover w-full lg:w-1/2 p-6 md:p-8 lg:p-14 ">
          
        <div className="w-12 h-12 lg:w-24 lg:h-24 border-radius  object-contain mb-6 ">
              <img
                src="./images/pricing/pricing-img-2.png"
                alt="pricing"
                className="w-full h-full"
              />
            </div>
            <h1 className="tracking-widest font-bold text-sm md:text-base lg:text-xs uppercase  mb-2">
            WEEKEND PASS
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-3xl uppercase font-normal mb-8">
            $475
            </h1>
            <p className="mb-8 max-w-sm text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. Enim ad minim veniam.
            </p>
            <Button2 text="Buy Now"/>        
        </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
