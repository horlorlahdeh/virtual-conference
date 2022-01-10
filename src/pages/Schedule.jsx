import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Schedules from "../components/schedule/Schedules";

const Schedule = () => {
  return (
    <div>
      <Navbar />
      <Schedules/>
      <Register/>
    </div>
  );
};
 
export default Schedule;
