import React from "react";
import Navbar from "../components/Navbar";
import Date from "../components/speakers/Date";
import Developers from "../components/speakers/Developers";
import Hero from "../components/speakers/Hero";
import SignUp from "../components/speakers/SignUp";

const Speakers = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Developers/>
      <SignUp/> 
      <Date/> 
    </div>
  );
};

export default Speakers;
