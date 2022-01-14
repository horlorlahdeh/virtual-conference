import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BookSeat = () => {
  return (
    <section className=" bg-transparent py-20 ">
      <div className="w-10/12 max-w-screen  mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-16 gap-y-12">
          <div className="flex flex-col">
            <div className=" w-full">
              <div className="flex flex-col">
                <div className="border-4 md:border-8 border-home-yellow mb-zero bg-dots bg-repeat-round p-4 md:p-8 lg:p-12  ">
                  <h1 className="  capitalize text-2xl md:text-5xl lg:text-7xl mb-4 tracking-wide">
                    Book a Seat
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-end  mb-10 gap-x-4  relative">
                <h5 className="capitalize mt-6 inline-block md:text-3xl lg:text-5xl font-semibold  lg:w-7/12  lg:text-left">
                  Earlybird Pricing Ends June 14th
                </h5>
                <div className="absolute top-0 right-0 bg-home-yellow inline-block p-4 md:p-8 lg:p-10 text-black  hover:px-12 cursor-pointer ">
                  {/* <Button text="hello"/> */}
                  <button>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
              <p className="md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut. Enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="">
            <div className="relative">
              <img
                src="./images/landing/landing-img-2.png"
                alt="computer "
                className="w-full h-full "
              />
              {/* <h1 className="  capitalize text-home-yellow text-2xl md:text-5xl lg:text-7xl mb-4 tracking-wide">
                  Divi Con
                  </h1> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSeat;
