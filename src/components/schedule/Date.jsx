import React from "react";
import Button from "./Button/Button";

const Date = () => {
  return (
    <section className="bg-black text-black ">
        <div className="bg-home-pink bg-home1 bg-home bg-cover bg-pos pt-6 pb-0 lg:pb-28 px-8 lg:pl-10 pr-24  ">
          <p className="text-sm md:text-base lg:text-lg mb-1 lg:mb-4 font-semibold">July 12</p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal capitalize mb-10 tracking-wider">
            fri
          </h1>
          <p className="text-lg mb-8 lg:mb-4 font-medium">8 Speakers</p>
          <p className="text-lg mb-14 font-medium">2 Workshops</p>
          <Button text="Purchase Day Pass" />
        </div>
    </section>
  );
};

export default Date;
