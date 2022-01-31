import React from "react";
import Registration from "./Registration";

const Date = () => {
  return (
    <section className=" bg-transparent pb-20">
      <div className="w-10/12 max-w-screen mx-auto">
        <div className="flex flex-col lg:flex-row  ">
          <div className="lg:mr-16 mb-6 lg:mb-0 lg:w-1/2   ">
            <div className="mb-8 bg-speakersJuly  bg-cover bg-no-repeat bg-home bg-home-yellow text-black mx-auto max-w-screen pt-4 pb-8 px-6 md:p-10 lg:px-12 lg:pt-28 lg:pb-12 bg-center-top ">
              <h1 className=" text-3xl md:text-5xl lg:text-6xl   tracking-wide capitalize lg:mb-2">
                july
              </h1>
              <h1 className=" text-2xl md:text-5xl lg:text-6xl  tracking-wide font-light  ">
                12-15
              </h1>
            </div>
              <div className="">
                <h1 className="font-light text-left text-4xl md:text-6xl lg:text-9xl  tracking-wide mb-16">
                  Online
                </h1>
              </div>
          </div>
          <Registration />
        </div>
      </div>
    </section>
  );
};

export default Date;
