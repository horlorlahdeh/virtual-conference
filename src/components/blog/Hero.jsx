import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="pt-14 py-20 lg:pt-24 bg-black text-white bg-shapesBlog bg-fixed bg-cover bg-center-top bg-no-repeat">
      <div className="flex  flex-col lg:flex-row items-start mt-14 w-10/12 max-w-screen mx-auto">
        <div className="mb-12  lg:flex-1">
          <h1 className="z-10 text-4xl md:text-6xl lg:text-9xl lg:flex-1 font-semibold mb-14">
            Blog
          </h1>
          <div className="ml-6 flex gap-x-10 my-12 text-3xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className=" pt-40 pb-16 px-12 bg-white bg-shapesRegisterSm bg-no-repeat bg-right-top z-10 w-full lg:w-1/2">
          
          <div className="flex border-b-2 overflow-hidden border-black mb-4">
            <form action="" className=" w-full">

            <input placeholder="Email" type="text" className="flex-1  bg-none z-10 p-4 font-bold text-black focus:border-none w-full" />
            </form>
          </div>
          <button className="bg-black text-white w-full py-4 capitalize text-lg">subscribe</button>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
