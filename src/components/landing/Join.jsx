import React from "react";

const Join = () => {
  return (
    <section className="bg-landingBgSecond  bg-contain  bg-no-repeat bg-pos py-20 bg-black">
      <div className="w-10/12 max-w-screen-landing mx-auto ">
        <div className=" mx-auto">
          <h1 className="text-center mb-6 md:mb-8 lg:mb-12   text-base md:text-3xl lg:text-5xl   tracking-wide capitalize  font-semibold">
            Join us for 3 days of Talks & Workshops
          </h1>
        </div>
      </div>
        <div className="bg-white pt-2 pb-12 md:pt-4 md:pb-14 text-gray-500 w-10/12 max-w-screen-landing  mx-auto">
            <div className="flex  w-8/12 mx-auto justify-between capitalize max-w-sm ">
                {/* single item */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-1 text-4xl tracking-widest">000</h1>
                    <h5 className="text-sm tracking-widest font-normal">Day<span className="">(s)</span></h5>
                </div>
                
                {/* single item */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-1 text-4xl tracking-widest">00</h1>
                    <h5 className="text-sm tracking-widest font-normal">Hours<span className="">(s)</span></h5>
                </div>
                {/* single item */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-1 text-4xl tracking-widest">00</h1>
                    <h5 className="text-sm tracking-widest font-normal">Minute<span className="">(s)</span></h5>
                </div>
                {/* single item */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-1 text-4xl tracking-widest">00</h1>
                    <h5 className="text-sm tracking-widest font-normal">Second<span className="">(s)</span></h5>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Join;
