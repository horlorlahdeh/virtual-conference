import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Speaker from "../components/Speaker";
import Button from "../components/Button/Button";
import Question from "../components/Question";
import Registration from "../components/Registration";

import { FaArrowRight } from "react-icons/fa";

import axios from "../utils/axios";

const Home = () => {
  const [speakers, setSpeakers] = useState([]);
  const [wFullExplore, setWfullExplore] = useState(false);

  useEffect(() => {
    axios.get("/speakers").then((res) => {
      setSpeakers(res.data.data);
    });
  }, []);
  return (
    <Layout title="virtual conference home">
      <section className="bg-homeHeroBg text-white w-full">
        <div className="w-full pt-20 bg-gradient-to-r from-black via-transparent to-black overlay-black">
          <div className="top-overlay"></div>
          <div className="flex  flex-col lg:flex-col justify-center items-center md:mt-14 w-10/12 max-w-screen mx-auto">
            <h1 className="z-10 text-home-yellow text-4xl md:text-6xl lg:text-9xl lg:flex-1 font-bold mb-12">
              DYGYCON 7
            </h1>
            <h4 className="z-10 text-3xl md:text-4xl lg:text-6xl lg:flex-1 font-bold mb-10 text-center">
              Friday to Sunday, May 27-29, 2022 <br />
              <span className="text-2xl lg:text-4xl text-home-yellow">
                Livestream
              </span>{" "}
              <span className="text-2xl lg:text-4xl">
                Saturday, May 28th at 2 PM EST / 7 PM UTC
              </span>
            </h4>
            <p className="z-10 mb-8 mt-2 lg:text-3xl text-center lg:w-12/12 ">
              DYGYCON is a metaverse convention featuring crypto projects,
              presentations, giveaways, and community networking! Hosted
              bi-monthly on Gamerjibe and organized by Splinterlands! 😎
            </p>
            <a
              href="https://tinyurl.com/dygycon9"
              rel="noreferrer"
              target="_blank"
              className="p-3 mt-6 text-black font-semibold bg-yellow-500 hover:bg-yellow-300 ease-in duration-300 z-10 block capitalize text-center m-auto rounded"
            >
              RSVP to DYGYCON7
            </a>
          </div>
          <div className="bg-yellow-200 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-yellow "></div>
          <div className="bg-purple-500 w-12 h-12  md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-purple "></div>
          <div className="bg-pink-500 w-8 h-8  absolute about-square-pink "></div>
          <div className="bg-pink-200 w-8 h-8 hidden lg:block absolute about-rounded-pink rounded-full "></div>
          <div className="bg-blue-500 w-8 h-8 hidden lg:block absolute about-square-blue "></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="linear-gradient(180deg, transparent, rgb(0, 0, 0), rgba(0, 0, 0, 0.719)"
              fillOpacity="1"
              d="M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,138.7C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <div className="bottom-overlay"></div>
        </div>
      </section>
      <section className="w-full flex-1 py-3 bg-black mb-20">
        <div className="md:mt-4 w-10/12 max-w-screen mx-auto">
          <h1 className="z-10 text-home-yellow text-center text-4xl md:text-6xl lg:text-4xl lg:flex-1 font-bold mb-4">
            D9 Live Schedule & Activities
          </h1>
          <p className=" mt-3 lg:text-lg text-center text-white lg:w-12/12 ">
            Activities and events lined up by DYGYCON and sponsors Friday to
            Sunday, so be sure to stay in the space and check the event landing
            page tab for complete Official Schedule.
          </p>

          <p className="text-center text-white mt-4">
            See our{" "}
            <a
              className="text-yellow-300 font-bold underline"
              href="https://twitter.com/dygycon"
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>{" "}
            &{" "}
            <a
              className="text-yellow-300 font-bold underline"
              href="https://peakd.com/@dygycon"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>{" "}
            for sneak peeks, info, and more! 😎
          </p>
        </div>
      </section>
      <section className="text-white  py-0 lg:py-0 bg-black  lg:bg-homeHeroBg-- bg-cover  bg-no-repeat bg-center bg-pos flex justify-center align-center xs:h-screen mb-20">
        <div className="background-blend-multiply w-full bg-gradient-to-r from-black via-transparent to-black">
          <div className="flex flex-col items-start w-10/12 max-w-h-screen2 mx-auto  md:py-14">
            <div className="w-full">
              <div className="flex flex-col">
                <div className="border-4 lg:border-8 border-home-yellow mb-zero bg-dots bg-repeat-round p-4 md:p-8 lg:p-12">
                  <h1 className="  capitalize text-2xl md:text-2 lg:text-2 mb-0">
                    Explore
                  </h1>
                  <h1 className="text-home-yellow mb-4 capitalize text-3xl md:text-6xl lg:text-9xl">
                    DYGY CON
                  </h1>
                  <h1 className="capitalize text-2xl md:text-6xl lg:text-6xl mb-4">
                    edition 9
                  </h1>
                  <p className="md:text-lg">
                    DYGYCON is a one-stop event showicasing all your favourite
                    crypto projects in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full align-center">
              <div className="flex flex-row items-end gap-x-4 justify-center align-center">
                <h5 className="capitalize  inline-block md:text-3xl lg:text-5xl flex-1 font-semibold self-center">
                  RSVP Now!
                </h5>
              </div>
              <a
                href="https://tinyurl.com/dygycon9"
                rel="noreferrer"
                target="_blank"
                className="w-3/12"
              >
                <div
                  onMouseOver={() => setWfullExplore(true)}
                  onMouseLeave={() => setWfullExplore(false)}
                  className={`ml-auto transit flex items-center justify-center bg-home-yellow  p-4 md:p-8 lg:p-10 text-black   cursor-pointer ${
                    wFullExplore ? "w-full" : "w-7/12"
                  }`}
                >
                  <div className="">
                    <FaArrowRight />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex-1 py-3 bg-black">
        <div className="md:mt-4 w-10/12 max-w-screen mx-auto">
          <h1 className="z-10 text-home-yellow text-center text-4xl md:text-6xl lg:text-4xl lg:flex-1 font-bold mb-4">
            D9 Live Schedule & Activities
          </h1>
          <img
            className="border-4 rounded-lg border-yellow-300 mt-16"
            src="https://dygycon.files.wordpress.com/2022/04/goldenhour.png?w=2048"
            alt=""
          />
        </div>
      </section>
      <section className=" text-white py-40 xs:py-20">
        <h1 className="text-center text-3xl md:text-5xl lg:text-4xl font-semibold mb-20">
          Higlights{" "}
        </h1>
        <div className="mx-auto w-10/12 lg:w-9/12 max-w-1000px flex flex-col lg:flex-row lg:gap-x-20 ">
          <div className="mb-12">
            <div className="flex items-center gap-x-4 mb-8">
              <div className=" w-12 lg:w-16 ">
                <img src="../images/home/img1.png" alt="img-home" />
              </div>
              <div className="">
                <h5 className="text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold">
                  Trading
                </h5>
                <h1 className="text-lg md:text-xl lg:text-2xl capitalize font-semibold">
                  Auctions
                </h1>
              </div>
            </div>
            <p className="text-base md:text-base lg:text-lg">
              Get to share and sell your products to a group of readily
              available buyers. Auction rooms are filled with eager and exited
              buys
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-x-4 mb-8">
              <div className=" w-12 lg:w-16 ">
                <img src="../images/home/img2.png" alt="img-home" />
              </div>
              <div className="">
                <h5 className="text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold">
                  meeting
                </h5>
                <h1 className="text-lg md:text-xl lg:text-2xl capitalize font-semibold">
                  Connecting
                </h1>
              </div>
            </div>
            <p className="text-base md:text-base lg:text-lg">
              Connect and synergize with individuals from all over the world at
              the compfort of your PC. Get a rare physical experience virtually.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-x-4 mb-8">
              <div className=" w-12 lg:w-16 ">
                <img src="../images/home/img3.png" alt="img-home" />
              </div>
              <div className="">
                <h5 className="text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold">
                  Showcasing
                </h5>
                <h1 className="text-lg md:text-xl lg:text-2xl capitalize font-semibold">
                  {" "}
                  Presentations
                </h1>
              </div>
            </div>
            <p className="text-base md:text-base lg:text-lg">
              Pitch your project to an existing market filled with enthusiasts
              and potential partners in the same virtual space.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center bg-black text-white py-20 capitalize pb-36 m-auto">
        <h1 className="text-3xl md:text-5xl md:font-bol lg:text-7xl lg:font-bold mb-20 font-semibold">
          Event Speakers
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-y-8 w-10/12 mx-auto max-w-screen">
          {speakers.map((speaker, index) => (
            <Speaker key={index} speaker={speaker} />
          ))}
        </div>
      </section>
      <section className="bg-black  ">
        <div className="flex  flex-col lg:grid lg:grid-cols-3 justify-between gap-y-8 gap-x-10 mx-auto w-10/12 lg:w-9/12 max-w-screen ">
          <div className="bg-home-pink bg-home1 bg-home bg-cover py-10 lg:pb-28 px-4 lg:px-10  ">
            <p className="text-sm md:text-lg lg:text-xl mb-1">May 27</p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold capitalize mb-10 ml-8 sm:ml-12 md:ml-14 lg:ml-0">
              fri
            </h1>
            <p className="text-lg mb-8 lg:mb-4 font-medium">8 Speakers</p>
            <p className="text-lg mb-14 font-medium">2 Workshops</p>
            <Button
              text="view schedules"
              bgColor="bg-black"
              color="text-white"
            />
          </div>

          <div className="bg-home-blue text-white bg-home2 bg-home bg-cover py-10 lg:pb-28 px-4 lg:px-10 ">
            <p className="text-sm md:text-lg lg:text-xl mb-1">May 28</p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold capitalize mb-10 ml-8 sm:ml-12 md:ml-14 lg:ml-0">
              sat
            </h1>
            <p className="text-lg mb-8 lg:mb-4 font-medium">16 Speakers</p>
            <p className="text-lg mb-14 font-medium">2 Workshops</p>
            <Button
              text="view schedule"
              bgColor="bg-black"
              color="text-white"
            />
          </div>

          <div className="bg-home-yellow bg-home3 bg-home bg-cover py-10 lg:pb-28 px-4 lg:px-10  ">
            <p className="text-sm md:text-lg lg:text-xl mb-1">May 29</p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold capitalize mb-10 ml-8 sm:ml-12 md:ml-14 lg:ml-0">
              Sun
            </h1>
            <p className="text-lg mb-8 lg:mb-4 font-medium">4 Speakers</p>
            <p className="text-lg mb-14 font-medium">5 Workshops</p>
            <Button
              text="view schedule"
              bgColor="bg-black"
              color="text-white"
            />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className=" py-20 px-10 flex flex-col lg:flex-row justify-between items-start gap-x-16 gap-y-4 max-w-screen mx-auto">
          {/* faq questions */}
          <section className=" w-10/12 lg:w-6/12 mx-auto     ">
            <div className="">
              <Question
                qstn="Project Management or Product Management, which do you believe will thrive more in Canada??"
                ans="Product managers can actually take up the role of project managers. Which explains why there are more job vacancies for them and a higher pay. "
              />
              <Question
                qstn="After training, how do I go on to conquer the world in Business Analytics?"
                ans="By the time you are done with our course on business analysis, you would be more than ready to take the world by its horns.. "
              />
              <Question
                qstn="Between Salesforce and BA, which one has better reception in the marketplace after certification?"
                ans="The salesforce economy is expected to create 3.3 million new jobs by 2022 while the need for business analysts is expected to increase by 11% by 2024."
              />
              <Question
                qstn="What are the benefits of acquiring Salesforce skills?"
                ans="The first benefit is how high your prospects are in securing a high-paying job as a Salesforce professional. On average a salesforce professional earns $84,922 yearly."
              />
              <Question
                qstn="How are Salesforce CRM and Scrum Master different from Business Analysis?"
                ans="These three have distinctive roles. Let’s start with what a scrum master does. A scrum master helps development teams apply the scrum framework. A Salesforce administrator ensures the effective use of Salesforce as a customer relationship management tool."
              />
            </div>
          </section>
          <Registration />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
