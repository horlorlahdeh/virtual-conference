import React from "react";
import Layout from "../components/Layout";

const Event = () => {
  return (
    <Layout title="Virtual Conference Event">
      <section className="bg-black py-20 lg:pt-40 ">
        <div className="w-10/12 mx-auto flex flex-col lg:flex-row lg:gap-12 lg:items-start">
          <div className=" p-1 mb-8 lg:mb-0 lg:w-4/12 lg:mt-4">
            <img src="./images/event/hero.png" alt="hero" />
          </div>
          <div className=" text-white lg:w-8/12">
            <h1 className=" text-white text-4xl md:text-6xl lg:text-9xl mb-8 lg:mb-12 lg:pt-0 lg:mt-0 ">
              Database Design
            </h1>
            <h5 className="text-pink-500 text-base md:text-4xl lg:text-5xl mb-8 lg:mb-12">
              Saturday @ 1pm
            </h5>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. Enim ad minim veniam.
            </p>
          </div>   
        </div>
      </section>
      <section className="bg-black py-16">
        <div className="border-purple-main py-8 w-10/12 mx-auto border-4 lg:border-8 max-w-screen bg-dots bg-repeat-round">
          <div className="text-white mt-12 lg:mt-0 flex flex-col items-center justify-center p-8">
            <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
              <img
                src="../images/about/Antonio french.jpg"
                alt="Antonio french"
                className=" "
              />
            </div>
            <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">
              Developer
            </h1>
            <h1 className=" text-xl lg:text-2xl md:text-2xl font-semibold mb-8">
              Antonio French
            </h1>
            <p className="text-lg text-center lg:text-2xl">
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Donec rutrum congue leo eget malesuada. Donec rutrum congue
              leo eget malesuada. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim. Cras ultricies ligul
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-black">
         <div className=" text-white w-10/12 mx-auto flex flex-col lg:flex-row lg:gap-x-20 max-w-screen">
             <div className="flex-1 mb-12 ">
                <h1 className="text-2xl md:text-4xl lg:text-7xl lg:w-9/12 leading-4 lg:tracking-wider mb-8 ">Dynamic, Flexible, Usable Data</h1>
                <h1 className="text-base md:text-xl lg:text-3xl lg:tracking-wider lg:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h1>
             </div>
             <div className="lg:w-4/12">
                 <p className="mb-6 md:text-lg lg:text-xl font-light tracking-wide">Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.</p>
                <p className="md:text-lg lg:text-xl font-light tracking-wide">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.</p>
             </div>
         </div>
     </section>
    </Layout>
  );
};

export default Event;
