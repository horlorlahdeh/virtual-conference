import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../images/exhibit-halls/gold.jpg";
import img2 from "../images/exhibit-halls/brand.webp";
import img3 from "../images/exhibit-halls/diamond.jpg";
import img4 from "../images/exhibit-halls/platinum.png";
import img5 from "../images/exhibit-halls/tables.webp";
import img6 from "../images/exhibit-halls/chat.webp";
import img7 from "../images/exhibit-halls/profile.webp";
import img8 from "../images/exhibit-halls/main.jpg";
import img9 from "../images/exhibit-halls/content.jpg";
import img10 from "../images/exhibit-halls/interaction.webp";
import img11 from "../images/exhibit-halls/arts.webp";
import img12 from "../images/exhibit-halls/schedule.webp";
import img13 from "../images/exhibit-halls/room-capacity.webp";
import img14 from "../images/exhibit-halls/placement.webp";
import img15 from "../images/exhibit-halls/lets-talk.webp";
import img16 from "../images/exhibit-halls/sandbox.webp";

const ExhibitHalls = () => {
  return (
    <section className="">
      <Navbar title="exhibit halls" />
      <main className="bg-black text-white px-6">
        <section className=" max-w-screen-xl lg:px-10 mx-auto flex flex-col items-center lg:items-start justify-center py-32">
          <div className="pt-48 sm:pt-28 lg:  ">
            <h1 className="text-5xl  max-w-2xl mb-8  mx-auto">Exhibit Halls</h1>
            <p className="text-lg  w-full  mx-auto">
              Explore and showcase brands, projects, influencers, and more with
              virtual booths.
            </p>
          </div>
        </section>
        <section className="max-w-screen-xl lg:px-10 mx-auto  mb-48">
          <div className="flex flex-col sm:flex-row gap-x-6 lg:justify-between gap-y-20">
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none sm:mt-20 lg:w-6/12 lg:pr-2 ">
              <div className="">
                <img src={img1} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  GOLD
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  GOLD Booths are small and 3 can fit in a row. You must choose
                  between slides or video for display.
                </p>
              </div>
              <div className="">
                <img src={img2} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  brand
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  There are 8 available halls that can be branded with a room
                  icon and banner along the walls inside of the exhibit hall.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none lg:w-5/12 lg:pl-8 ">
              <div className="">
                <img src={img3} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  DIAMOND
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  DIAMOND Booths are medium-sized and 2 can fit in a row. You
                  must choose between slides or video for display.
                </p>
              </div>
              <div className="">
                <img src={img4} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  PLATINUM
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  PLATINUM Booths are the largest booths and one fits in an
                  entire row. You can choose BOTH slides and video display.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl lg:px-10 mx-auto mb-48">
          <div className="flex flex-col sm:flex-row gap-x-6 lg:justify-between gap-y-20 ">
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none lg:w-5/12 lg:pr-2 ">
              <div className="">
                <img src={img5} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  tables
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  Booth tables hold 4 links and additional links are listed in
                  the booth profile.
                </p>
              </div>
              <div className="">
                <img src={img6} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  chat area
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  When you are inside the booth, you are in an outlined chat
                  area where you can interact and not be distracted by booths
                  and people outside of your chat area.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none lg:w-6/12 lg:pl-8  sm:mt-10">
              <div className="">
                <img src={img7} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  profile
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  All booths have a profile that can be accessed by clicking on
                  the NPC (Non-Player Character) at the booth or by clicking on
                  the booth name from the Directory.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl lg:px-10 mx-auto flex justify-center ">
          <img src={img8} alt="welcome room" className="" />
        </section>
        <section className=" max-w-screen-xl lg:px-10 mx-auto flex flex-col items-center lg:items-start justify-center py-8 mb-40">
          <div className="">
            <h1 className="text-3xl mb-8  mx-auto text-left  w-full">
              Chat Experience
            </h1>
            <p className="text-lg  w-full  mx-auto">
              Your booth floor is free to use to interact with anyone inside
              with text, video, and screenshare. You can also set up private
              chats to talk to specific people.
            </p>
          </div>
        </section>
        <section className="max-w-screen-xl lg:px-10 mx-auto  mb-48 py-8">
          <div className="flex flex-col sm:flex-row gap-x-6 lg:justify-between gap-y-20">
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none sm:mt-20 lg:w-6/12 lg:pr-2 ">
              <div className="">
                <img src={img9} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  content
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  You can add sneak previews, QR codes, challenges, booth hours,
                  and more.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none lg:w-5/12 lg:pl-8 ">
              <div className="">
                <img src={img10} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  interaction
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  You don’t need to stay at your booth, but it is recommended to
                  interact with passerby guests. Send them emotes to get their
                  attention.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" mx-auto mb-48 ">
          <img src={img11} alt="welcome room" className="w-full mb-6" />
          <div className="">
            <h1 className="text-3xl mb-8  mx-auto text-left  w-full capitalize">
              cordination
            </h1>
            <p className="text-lg  w-full  mx-auto">
              Use the{" "}
              <a href="#h" className="text-red-700 hover:underline">
                DYGYCON Discord server
              </a>{" "}
              to coordinate with staff on where your booth is placed. You can
              also collaborate with other sponsors for events and activities
              throughout the event.
            </p>
          </div>
        </section>
        <section className="max-w-screen-xl lg:px-10 mx-auto  mb-48">
          <div className="flex flex-col sm:flex-row gap-x-6 lg:justify-between gap-y-20">
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none sm:mt-20 lg:w-6/12 lg:pr-2 ">
              <div className="">
                <img src={img12} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  schedule
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  Schedule events with the DYGYCON staff to add so that guests
                  are alerted inside when the time draws near.
                </p>
              </div>
              <div className="">
                <img src={img13} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  room capacity
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  When the room reaches 35 guests, a new instance opens up so
                  everyone still access the room. If you’d like to switch
                  instances when they’re free, click the Teleport button at the
                  top right when you’re inside the event.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none lg:w-5/12 lg:pl-8 ">
              <div className="">
                <img src={img14} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  placement
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  Placement of booths are organized on the back-end of Gamerjibe
                  by the event organizer. Sponsors can let us know where they’d
                  like to be situated by sending us the ROOM/HALL NAME and a
                  screenshot or description of where they would like to be
                  placed. NOTE: Some of the halls could be fully booked by a
                  sponsor. You may have to reach out to them through the DYGYCON
                  discord or directly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl lg:px-10 mx-auto ">
          <div className="flex flex-col sm:flex-row gap-x-6 lg:justify-between gap-y-20">
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none sm:mt-20 lg:w-6/12 lg:pr-2 ">
              <div className="">
                <img src={img16} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  logistics
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  There are 5 sets of rows for booths to be placed inside any of
                  the 8 Halls. Each set can hold 1 PLATINUM or 2 DIAMOND or 3
                  GOLD booths.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-20 flex-1 lg:flex-none lg:w-5/12 lg:pl-8 ">
              <div className="">
                <img src={img15} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-2xl lg:text-4xl uppercase">
                  let's talk
                </h5>
                <p className="w-full mb-6 text-lg leading-6">
                  Email sarah@splinterlands.com to learn more about booths!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ExhibitHalls;
