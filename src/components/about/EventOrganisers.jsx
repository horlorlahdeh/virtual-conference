import React from "react";
import { eventOrganizers } from "../../data";
import Organizer from "./Organizer";

const EventOrganisers = () => {
  return (
    <section className="text-center bg-black text-white py-20 capitalize">
      <h1 className="text-3xl md:text-5xl md:font-bol lg:text-7xl lg:font-bold mb-20 font-semibold">
        Event Organizers
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-y-8 w-10/12 mx-auto max-w-screen">
        {eventOrganizers.map((organizer,index) => (
          <Organizer key={index} organizer={organizer}/>
        ))}
      </div>
    </section>
  );
};

export default EventOrganisers;
