import React,{useState} from "react";
import { FaFacebookF, FaGooglePlus, FaInstagram, FaTwitter, FaYoutube,FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Hero = () => {
  const [showArrow,setShowArrow]=useState(false)
  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row w-10/12 mx-auto max-w-screen gap-x-28 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-9xl mb-10 capitalize tracking-wider lg:w-5/12 ">contact us</h1>
        <div className="border-4 md:border-8 border-yellow-300 bg-dots bg-repeat-round p-5 md:p-8 lg:p-12 lg:w-7/12 flex flex-col justify-start">
          <h5 className="text-yellow-300 font-bold text-sm  uppercase mb-8">email</h5>
          <h5 className=" text-sm md:text-2xl  mb-8">hello@diviconference.com</h5>
          <h5 className="text-yellow-300 font-bold text-sm  uppercase mb-4">follow</h5>
          <div className="flex items-center gap-x-5 text-xl mb-12">
            <FaFacebookF className="cursor-pointer"/>
            <FaTwitter  className="cursor-pointer"/>
            <FaInstagram  className="cursor-pointer"/>
            <FaYoutube  className="cursor-pointer"/>
            <FaGooglePlus className="cursor-pointer"/>
          </div>
          <Link to="#">
          <button onMouseEnter={()=>setShowArrow(true)} onMouseLeave={()=>setShowArrow(false)}  className={`border-yellow-300 text-yellow-300 border-2 py-3 px-7 ${showArrow&&"pl-2 "} w-40 font-semibold text-lg bg-transparent cursor-pointer  flex items-center gap-x-1 hover:bg-yellow-300 hover:text-black  transform-all duration-500`}>Registration <FaChevronRight className={`${showArrow?"flex ml-2":"hidden"}`}/> </button>  
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
