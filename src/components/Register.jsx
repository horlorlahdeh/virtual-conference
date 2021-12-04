import React from "react";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Register = () => {
  
  return (
    <section className="bg-purple-700 py-20">
      <div className="flex   flex-col lg:flex-row lg:gap-x-12 lg:items-start w-10/12  mx-auto max-w-screen">
        <div className="  text-white flex flex-1 flex-col w-9/12 md:w-full items-center justify-center">
          <div className="bg-black hover:text-black hover:bg-pink-400 transition-all  p-10  md:p-12 w-full ">
            <div className="flex items-center gap-x-4">
              <h1 className="text-center text-4xl md:text-8xl  ">
                Register today
              <FaChevronRight className="inline "/>
              </h1>
            </div>
          </div>
          <div className="bg-purple-700 w-full ">
            <h1 className=" mb-4 mt-6 text-xl capitalize">follow</h1>
            <div className="flex gap-x-12 my-12 text-3xl">
              <FaFacebook  />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-40 pb-20 px-12 bg-white">
          <h1 className="text-black font-semibold text-lg md:text-3xl lg:text-6xl mb-8">
            Join our newsletter
          </h1>
          <div className="flex border-b-2 border-black mb-4">
            <h1 className="p-4 font-semibold text-lg">Email</h1>
            <input type="text" className="flex-1 ml-4 bg-none" />
          </div>
          <button className="bg-black text-white w-full py-4 capitalize text-lg">subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
