import React from "react";
import Heading from "./Heading";
import SingleSchedule1 from "./SingleSchedule1";
import SingleSchedule2 from "./SingleSchedule2";
import SingleSchedule3 from "./SingleSchedule3";

const Schedules = () => {
  return (
    <section className="pt-12  bg-black text-white ">
      <div className="w-10/12 max-w-screen  mx-auto">
        <Heading/>
        <SingleSchedule1/>
        <SingleSchedule2/>
        <SingleSchedule3/>
      </div>
    </section>
  );
};

export default Schedules;
