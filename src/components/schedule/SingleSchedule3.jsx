import React from 'react'
import Button from './Button/Button';


const SingleSchedule = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-x-12 ">
         <div className="">
        <div className="bg-home-yellow text-black bg-schedule3 bg-home bg-cover bg-pos pt-6 pb-0 lg:pb-28 px-8 lg:pl-10 pr-24  ">
          <p className="text-sm md:text-base lg:text-lg mb-1 lg:mb-4 font-semibold">July 14</p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal capitalize mb-10 tracking-wider">
            sun
          </h1>
          <p className="text-lg mb-8 lg:mb-4 font-medium">8 Speakers</p>
          <p className="text-lg mb-14 font-medium">2 Workshops</p>
          <Button text="Purchase Day Pass" />
        </div>
             </div>  
    

          <div className="">
            <div className="mt-14 lg:mt-8 mb-20">
              <h5 className="text-schedule-yellow mb-2 text-xs font-bold tracking-widest">
                9-10AM
              </h5>
              <h4 className="text-lg md:text-2xl lg:text-5xl mb-3 tracking-wide">
                Lorem ipsum dolor sit
              </h4>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut. Enim ad minim veniam.
              </p>
              <div className="flex flex-row items-center gap-x-4">
                <div className="w-8 h-8 border-radius overflow-hidden">
                  <img
                    src="../images/schedule/schedule-jennifer.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <h5 className="capitalize text-lg font-normal  tracking-wide">
                  Jennifer Lee, Frontend Developer
                </h5>
              </div>
            </div>

            <div className="mt-14 lg:mt-8 mb-20">
              <h5 className="text-schedule-yellow mb-2 text-xs font-bold tracking-widest">
              11-12PM
              </h5>
              <h4 className="text-lg md:text-2xl lg:text-5xl mb-3 tracking-wide">
                Dolor Amet Sit
              </h4>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut. Enim ad minim veniam.
              </p>
              <div className="flex flex-row items-center gap-x-4">
                <div className="w-8 h-8 border-radius overflow-hidden">
                  <img
                    src="../images/schedule/schedule-curtis.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <h5 className="capitalize text-lg font-normal  tracking-wide">
                Curtis Berry, Full Stack Developer
                </h5>
              </div>
            </div>

            <div className="mt-14 lg:mt-8 mb-20">
              <h5 className="text-schedule-yellow mb-2 text-xs font-bold tracking-widest">
              2-3PM
              </h5>
              <h4 className="text-lg md:text-2xl lg:text-5xl mb-3 tracking-wide">
              Adipiscing Elit
              
              </h4>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut. Enim ad minim veniam.
              </p>
              <div className="flex flex-row items-center gap-x-4">
                <div className="w-8 h-8 border-radius overflow-hidden">
                  <img
                    src="../images/schedule/schedule-brittany.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <h5 className="capitalize text-lg font-normal  tracking-wide">
                Britany Waller, UX Designer
                </h5>
              </div>
            </div>

            <div className="mt-14 lg:mt-8 mb-20">
              <h5 className="text-schedule-yellow mb-2 text-xs font-bold tracking-widest">
              3-4PM
              </h5>
              <h4 className="text-lg md:text-2xl lg:text-5xl mb-3 tracking-wide">
              Veniam Minim Enim
              </h4>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut. Enim ad minim veniam.
              </p>
              <div className="flex flex-row items-center gap-x-4">
                <div className="w-8 h-8 border-radius overflow-hidden">
                  <img
                    src="../images/schedule/schedule-bradley.jpg"
                    alt="img"
                    className=" "
                  />
                </div>
                <h5 className="capitalize text-lg font-normal  tracking-wide">
                Bradly Mainard, Backend Developer
                </h5>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SingleSchedule
