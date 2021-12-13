import React, { useState } from "react";
import Singlequestion from "./Singlequestion";

const Faq = () => {
  return (
    <section className=" bg-black text-pink-400 py-20 ">
      <div className="section-center w-10/12 max-w-screen mx-auto" >
        <Singlequestion />
        <Singlequestion />
        <Singlequestion />
      </div>
    </section>
  );
};

export default Faq;
