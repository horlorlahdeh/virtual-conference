import React, { useState } from "react";
import Singlequestion from "./Singlequestion";

const Faq = () => {
  return (
    <section className="text-home-yellow w-10/12 lg:w-6/12 mx-auto     ">
      <div className="" >
        <Singlequestion qstn="How to purchase one day ticket?"  />
        <Singlequestion qstn="How to purchase a ticket for our team?" />
        <Singlequestion qstn="Lorem ipsum dolor sit amet?"/>
        <Singlequestion qstn="Duis aute irure dolor in reprehenderit?"/>
        <Singlequestion qstn="Aliquip ex ea commodo?"/>
      </div>
    </section>
  );
};

export default Faq;
