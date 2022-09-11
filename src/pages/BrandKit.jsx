import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import img1 from "../images/brand-kit/one.webp";
import img2 from "../images/brand-kit/two.png";
import img3 from "../images/brand-kit/three.webp";
import img4 from "../images/brand-kit/four.webp";
import img5 from "../images/brand-kit/five.webp";
import img6 from "../images/brand-kit/past-event-venues.webp";
import img7 from "../images/brand-kit/main.webp";
import Navbar from "../components/Navbar";
const featuredProducts = [
  {
    name: "one",
    src: img1,
    desc: "one use anything around the website to save and add it to your next content Here are resources to help you create content about DYGYCON! Feel free to use anything around the website to save and add it to your next content project. Email sarah@splinterlands.com if you have any questions.",
  },
  {
    name: "two",
    src: img2,
    desc: "two Here are resources to help you create content about DYGYCON! Feel free to to save and add it to your next content Here are resources to help you create content about DYGYCON! Feel free to use anything around the website to save and add it to your next content project. Email sarah@splinterlands.com if you have any questions",
  },
  {
    name: "three",
    src: img3,
    desc: "three Go to Past Events & Jump into the venue to save and add it to your next content Here are resources to help you create content about DYGYCON! Feel free to use anything around the website to save and add it to your next content project. Email sarah@splinterlands.com if you have any questions",
  },
  {
    name: "four",
    src: img4,
    desc: "four If you’d like to provide us your screenshots, videos, gifs, etc., please email to save and add it to your next content Here are resources to help you create content about DYGYCON! Feel free to use anything around the website to save and add it to your next content project. Email sarah@splinterlands.com if you have any questions",
  },
  {
    name: "five",
    src: img5,
    desc: "five Screenshots you can use to save and add it to your next content Here are resources to help you create content about DYGYCON! Feel free to use anything around the website to save and add it to your next content project. Email sarah@splinterlands.com if you have any questions",
  },
];

let count = 0;
let slideInterval;
export default function BrandKit() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();


  useEffect(() => {
    
    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  return (
    <section className="bg-black text-white">
      <Navbar title="Brand Kit" />
      <section className=" mx-auto mb-24">
        <img src={img7} alt="main" className="w-full mb-6" />
        <div className="">
          <p className="text-lg  max-w-screen-sm mx-auto text-center">
            Here are resources to help you create content about DYGYCON! Feel
            free to use anything around the website to save and add it to your
            next content project. Email{" "}
            <a href="#h" className="text-red-700 hover:underline">
              sarah@splinterlands.com
            </a>{" "}
            if you have any questions.
          </p>
        </div>
      </section>
      <section className=" py-20">
        <div className="mb-10">
          <h1 className="text-5xl  max-w-4xl mb-8  mx-auto">
            Go to Past Events & Jump into the venue
          </h1>
          <p className="text-lg text-center w-full  mx-auto max-w-screen-lg">
            Take screenshots and video from different perspectives.
          </p>
        </div>
        <img src={img6} alt="past-event-venues" className="w-full mb-6" />
        <div className="flex justify-center">
          <a
            href="h"
            className="font-normal py-2 px-5 rounded-3xl text-lg capitalize bg-gray-800 hover:bg-pink-900"
          >
            past event venues
          </a>
        </div>
      </section>
      <section className="pb-96 ">
        <div className="mb-10 max-w-screen-sm mx-auto">
          <h1 className="text-5xl   mb-8  mx-auto ">
          Screenshots you can use:
          </h1>
          <p className="text-lg  w-full  mx-auto">
          If you’d like to provide us your screenshots, videos, gifs, etc., please email <a href="#h" className="text-red-700 hover:underline">
              sarah@splinterlands.com
            </a>{" "}
          </p>
        </div>
        <div ref={slideRef} className="w-full select-none relative  h-96">
          <div className="flex items-center justify-center ">
            <img
              src={featuredProducts[currentIndex].src}
              alt=""
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="bg-black">
            <p className="bg-black text-white text-center w-9/12 mx-auto text-lg py-5">
              {featuredProducts[currentIndex].desc}
            </p>
          </div>
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
            <button
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
              onClick={handleOnPrevClick}
            >
              <AiOutlineVerticalRight size={30} />
            </button>
            <button
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
              onClick={handleOnNextClick}
            >
              <AiOutlineVerticalLeft size={30} />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
