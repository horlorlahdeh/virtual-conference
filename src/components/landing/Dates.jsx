import React from "react";
import Button from "./Button/Button";

const Dates = () => {
    return (
        <section className="bg-black text-black py-20  ">
            <div className="flex  flex-col lg:grid lg:grid-cols-3 justify-between gap-y-8 gap-x-10 mx-auto w-10/12 lg:w-9/12 max-w-screen ">
                <div className="bg-home-pink bg-home1 bg-home bg-cover py-10 lg:pb-28 px-4 lg:px-10  ">
                    <p className="text-sm md:text-lg lg:text-xl mb-1">July 12</p>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold capitalize mb-10">fri</h1>
                    <p className="text-lg mb-8 lg:mb-4 font-medium">8 Speakers</p>
                    <p className="text-lg mb-14 font-medium">2 Workshops</p>
                   

                    <Button text="view schedule" />
          
                </div>

                
                <div className="bg-home-blue text-white bg-home2 bg-home bg-cover py-10 lg:pb-28 px-4 lg:px-10 ">
                    <p className="text-sm md:text-lg lg:text-xl mb-1">July 13</p>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold capitalize mb-10">sat</h1>
                    <p className="text-lg mb-8 lg:mb-4 font-medium">16 Speakers</p>
                    <p className="text-lg mb-14 font-medium">2 Workshops</p>
                    <Button text="view schedule" />
                </div>

                <div className="bg-home-yellow bg-home3 bg-home bg-cover py-10 lg:pb-28 px-4 lg:px-10  ">
                    <p className="text-sm md:text-lg lg:text-xl mb-1">July 14</p>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold capitalize mb-10">fri</h1>
                    <p className="text-lg mb-8 lg:mb-4 font-medium">4 Speakers</p>
                    <p className="text-lg mb-14 font-medium">5 Workshops</p>
                    <Button text="view schedule" />
                </div>


            </div>
        </section>
    )
}

export default Dates



