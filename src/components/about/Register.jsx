import React from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Register = () => {
  
  return (
    <section className="bg-purple-700 py-20 relative">
      <div className="flex   flex-col lg:flex-row lg:gap-x-12 lg:items-start w-10/12  mx-auto max-w-screen">
        <div className="  text-white flex flex-1 flex-col w-10/12 md:w-full items-center justify-center">
          <div className="bg-black hover:text-black hover:bg-pink-400 transition-all z-10  px-4 py-8 md:p-8 w-full ">
            <div className=" ">
              <h1 className="text-center text-4xl md:text-8xl  ">
                Register today
              <FaChevronRight className="inline "/>
              </h1>
            </div>
          </div>
          <div className="bg-purple-700 w-full ">
            <h1 className=" mb-4 mt-6 text-xl capitalize font-semibold">follow</h1>
            <div className="flex gap-x-12 my-12 text-3xl">
              <FaFacebookF  />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-48 pb-20 px-12 bg-white relative z-10">
          <h1 className="text-black font-semibold text-lg md:text-3xl lg:text-5xl lg:w-10/12 mb-8 z-20 lg:font-normal">
            Join our newsletter
          </h1>
          <div className="flex border-b-2 border-black mb-4">
            <input placeholder="Email" type="text" className="flex-1 ml-4 bg-none z-10 p-4 font-bold text-black focus:border-none" />
          </div>
          <button className="bg-black text-white w-full py-4 capitalize text-lg">subscribe</button>
        <div className="absolute top-0 right-0 ">
          <div className="relative w-48 h-72">
            <div className="bg-black absolute w-24 h-24 top-0 right-0 rounded-b-full"></div>
            <div className="bg-yellow-300 absolute w-24 h-24 top-24 left-0 rounded-semi-full"></div>
            <div className="bg-red-500 absolute w-24 h-24 top-24 right-0 rounded-full"></div>
            <div className="bg-pink-500 absolute w-24 h-24 bottom-0 left-0 z-0"></div>
            <div className="bg-purple-500 absolute w-24 h-24 bottom-0 right-0 rounded-b-full z-0"></div>
          </div>
        </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 left-8 bg-green-300 w-144 ">
        <div className="relative">
        <div className="bg-red-500 absolute w-48 h-48 top-0 left-0 "></div>
        <div className="bg-purple-200 absolute w-48 h-48 top-0 left-48  rounded-t-full"></div>
        <div className="bg-gray-300 absolute w-48 h-48 top-0 right-0 "></div>
        <div className="bg-yellow-600 absolute w-48 h-48 top-48 left-0  rounded-b-full"></div>
        {/* <div className="bg-pink-500 absolute w-48 h-48 bottom-0 left-48 "></div> */}
        <div className="bg-yellow-300 absolute w-48 h-48 top-48 right-0  rounded-b-full"></div>

        </div>
      </div>
    </section>
  );
};

export default Register;
