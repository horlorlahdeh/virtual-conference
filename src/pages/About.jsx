import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

import Organizer from "../components/Organizer";
import Question from "../components/Question";
import { eventOrganizers } from "../data";

import Layout from "../components/Layout";
import Button from "../components/Button/Button";

const About = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    axios.get("/sponsors").then((res) => {
      setSponsors(res.data.data);
      console.log(sponsors);
    });
  }, []);
  return (
    <Layout title="about us">
      <section className="pt-14 py-20 bg-black text-white bg-shapesAbout bg-cover bg-center bg-no-repeat">
        <div className="flex  flex-col lg:flex-row items-start md:mt-14 w-10/12 max-w-screen mx-auto">
          <h1 className="z-10 text-4xl md:text-6xl lg:text-9xl lg:flex-1 font-bold mb-12">
            About Dygycon
          </h1>
          <div className="z-10 flex flex-col items-start lg:w-5/12 lg:pl-20   ">
            <p className="z-10 mb-8 mt-2 lg:text-xl lg:w-12/12 ">
              Are you interested in sponsoring DYGYCON or participating in
              collaborated opportunities as a partner of Splinterlands? Set up
              an appointment here or email Sarah at sarah@splinterlands.com.
            </p>

            <Button
              text="save your seat"
              color="text-black"
              bgColor="bg-pink-main"
            />
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-4 md:py-8">
        <div className=" w-10/12 max-w-screen mx-auto flex flex-col lg:flex-row   ">
          <div className="border-purple-600 virtual bg-dots bg-repeat-round border-4 md:border-8 p-6 md:p-12 mb-8 lg:w-6/12 lg: lg:m-0 virtual ">
            <h1 className="text-2xl md:text-4xl lg:text-6xl w-10/12 font-bold  mb-8">
              A virtual gamers' conference
            </h1>
            <Button
              text="view schedule"
              color="text-home-yellow"
              bgColor="bg-transparent"
              border="border-2"
              borderColor="border-home-yellow"
              bgColorHover="bg-home-yellow"
              colorHover="text-black"
            />
          </div>
          <div className="bg-purple-600 lg:flex-1 pt-8">
            <img
              src="../images/about/virtual web developer.png"
              alt="virtual web developer"
            />
          </div>
        </div>
      </section>
      <section className="bg-black text-white  py-24 ">
        <div className="w-10/12 mx-auto max-w-screen flex flex-col lg:flex-row lg:gap-x-20">
          <div className="flex-1">
            <h1 className="text-base md:text-xl lg:text-3xl  mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-base md:text-lg lg:text-xl mb-6">
              Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin
              molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Curabitur aliquet quam id dui posuere blandit. Praesent
              sapien massa, convallis a pellentesque nec, egestas non nisi.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec sollicitudin molestie
              malesuada.
            </p>
            <p className="text-base md:text-lg lg:text-xl ">
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Cras ultricies ligula sed magna dictum porta. Curabitur arcu
              erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu
              erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac
              diam sit amet quam vehicula elementum sed sit amet dui. Proin eget
              tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum
              id enim. Pellentesque in ipsum id orci porta dapibus. Proin eget
              tortor risus.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center bg-black text-white py-20 capitalize">
        <h1 className="text-3xl md:text-5xl md:font-bol lg:text-7xl lg:font-bold mb-20 font-semibold">
          Event Organizers
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-y-8 w-10/12 mx-auto max-w-screen">
          {eventOrganizers.map((organizer, index) => (
            <Organizer key={index} organizer={organizer} />
          ))}
        </div>
      </section>
      <section className=" bg-black text-pink-400 py-20 ">
        <div className="section-center w-10/12 max-w-screen mx-auto">
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
      <section className="bg-black text-white py-20 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-12">
          Sponsors & partners
        </h1>
        <div className="w-10/12 mx-auto max-w-screen grid grid-cols-2 lg:grid-cols-4 gap-8 items-center  justify-center text-center">
          {sponsors.map((sponsor, index) => (
            <div key={sponsor._id} className=" flex  justify-center">
              <img
                src={sponsor?.icon}
                alt={sponsor.name}
                className="w-6/12 md:w-7/12 lg:w-11/12"
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
