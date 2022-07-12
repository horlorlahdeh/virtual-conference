import React, { useState, useEffect } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

import Layout from "../components/Layout";
import Question from "../components/Question";
import Registration from "../components/Registration";
import Button from "../components/Button/Button";

import axiosInstance from "../utils/axios";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    axiosInstance.get("/speakers").then((res) => {
      setSpeakers(res.data.data);
      console.log(res.data.data);
    });
  }, [setSpeakers]);
  return ( 
    <Layout title="virtual conference speakers">
      <section className=" bg-black text-white lg:pt-20 ">
        <div className="w-10/12  pt-16 pb-12 mx-auto max-w-screen bg-speakersHero bg-pos bg-cover bg-no-repeat">
          <h5 className="text-4xl md:text-6xl lg:text-9xl font-normal capitalize mb-10 tracking-wider">
            Speakers
          </h5>
        </div>
      </section>
      <section className="bg-black pt-12 pb-8 ">
        {speakers.map((speaker, id) => (
          <div className="py-4   text-white" key={id}>
            <div className="w-10/12 mx-auto max-w-screen">
              <div className="flex flex-col lg:flex-row gap-x-28">
                <div className="flex flex-row items-start gap-x-4 mb-12 lg:w-3/12">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 border-radius overflow-hidden">
                    <img
                      src={speaker?.avatar}
                      alt={speaker?.name}
                      className=""
                    />
                  </div>
                  <div className="">
                    <h5 className="uppercase text-home-yellow text-sm md:text-base lg:text-xs font-semibold  tracking-widest mb-3">
                      {speaker?.position}
                    </h5>
                    <h5 className="capitalize  text-lg md:text-lg lg:text-2xl font-normal  tracking-widest mb-7">
                      {speaker?.name}
                    </h5>
                    <div className="flex gap-x-5 font-bold">
                      <button>
                        <FaTwitter />
                      </button>
                      <button>
                        <FaInstagram />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-base md:text-lg lg:text-xl lg:flex-1 lg:tracking-wide">
                  {speaker?.bio ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="pt-20 pb-12 mt-0 bg-black">
        <div className=" bg-speakersSignUp bg-po bg-cover bg-no-repeat bg-home bg-home-blue text-white w-10/12 mx-auto max-w-screen text-center pt-8 pb-8 lg:pb-12 px-8">
          <h1 className=" text-3xl md:text-4xl lg:text-7xl  mx-auto tracking-wide mb-10 max-w-screen-speakers">
            Sign up to become a speaker
          </h1>
          <p className="text-base md:text-base lg:text-lg mb-12 tracking-normal  max-w-screen-speakers mx-auto ">
            Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia
            eget consectetur sed, convallis at tellus. Sed porttitor lectus
            nibh. Donec sollicitudin molestie malesuada. Cras ultricies ligula
            sed magna dictum porta. Sed porttitor lectus nibh.{" "}
          </p>

          <Button text="sign up" color="text-white" bgColor="bg-black" />
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="w-10/12 max-w-screen mx-auto">
          <div className="flex  lg:items-start flex-col lg:flex-row ">
            <div className="lg:mr-16 mb-6 lg:mb-0 lg:w-1/2   ">
              <div className="mb-8 bg-speakersJuly  bg-cover bg-no-repeat bg-home bg-home-yellow text-black mx-auto max-w-screen pt-4 pb-8 px-6 md:p-10 lg:px-12 lg:pt-28 lg:pb-12 bg-center-top ">
                <h1 className=" text-3xl md:text-5xl lg:text-6xl   tracking-wide capitalize lg:mb-2">
                  july
                </h1>
                <h1 className=" text-2xl md:text-5xl lg:text-6xl  tracking-wide font-light  ">
                  12-15
                </h1>
              </div>
              <div className="text-home-pink mx-auto">
                <div className="">
                  <Question
                    qstn="How to purchase one day ticket?"
                    ans="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
                  />
                  <Question
                    qstn="How to purchase a ticket for our team?"
                    ans="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
                  />
                  <Question
                    qstn="Lorem ipsum dolor sit amet?"
                    ans="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
                  />
                  <Question
                    qstn="Duis aute irure dolor in reprehenderit?"
                    ans="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
                  />
                  <Question
                    qstn="Aliquip ex ea commodo?"
                    ans="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
                  />
                </div>
              </div>
            </div>
            <Registration />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
