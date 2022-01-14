import React from "react";
import Button2 from "./Button/Button2";
import Button3 from "./Button/Button3";



const Hero2 = () => {
  return (
    <section className="  bg-transparent text-black pb-20 ">
      <div className="flex   flex-col  items-start  w-10/12 max-w-screen mx-auto">
      
        <div className="flex flex-col lg:flex-row  w-full gap-y-8 gap-x-12">
        <div className="bg-yellow-light-pricing bg-pricingBg3 bg-cover bg-pos-pricing flex flex-col justify-start p-6 md:p-8 lg:p-14 lg:pb-10 lg:flex-1">
            <div className="w-12 h-12 lg:w-24 lg:h-24 border-radius  object-contain mb-6 ">
              <img
                src="./images/pricing/pricing-img-2.png"
                alt="loudnick"
                className="w-full h-full"
              />
            </div>
            <h1 className=" text-sm md:text-base lg:text-xs uppercase font-bold mb-2 lg:mb-4 tracking-widest">
            SINGLE DAY PASS
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-3xl uppercase font-normal mb-8">
              $280
            </h1>
            <p className="mb-8 text-base lg:text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. Enim ad minim veniam.
            </p>
            <Button2 text="Buy Now" className="lg:mb-14"/>
          </div>
        <div className="lg:w-7/12   text-black bg-white bg-home bg-cover w-full  p-6 md:p-8 lg:p-14 ">
          
        <div className="w-12 h-12 lg:w-24 lg:h-24 border-radius  object-contain mb-6 ">
              <img
                src="./images/pricing/pricing-img-3.png"
                alt="pricing"
                className="w-full h-full"
              />
            </div>
            <h1 className=" text-sm md:text-base lg:text-xs uppercase font-semibold mb-2 tracking-widest">
            STUDENT ALL ACCESS
            </h1>
            <h1 className=" text-lg md:text-2xl lg:text-3xl uppercase font-normal mb-8">
            $450
            </h1>
            <p className="mb-8 max-w-md text-base lg:text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. Enim ad minim veniam.
            </p>
            <Button3 text="Buy Now"/>        
        </div>

        </div>
      </div>
    </section>
  );
};

export default Hero2;
