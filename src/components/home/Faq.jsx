import React from "react";
import Singlequestion from "./Singlequestion";

const Faq = () => {
  return (
    <section className="text-home-yellow w-10/12 lg:w-6/12 mx-auto     ">
      <div className="" >
        <Singlequestion qstn="Duis aute irure dolor in reprehenderit?"  />
        <Singlequestion qstn="Lorem ipsum dolor sit amet?" />
        <Singlequestion qstn="Lorem ipsum dolor sit amet?"/>
        <Singlequestion qstn="Duis aute irure dolor in reprehenderit?"/>
        <Singlequestion qstn="Aliquip ex ea commodo?"/>
      </div>
    </section>
  );
};

export default Faq;
