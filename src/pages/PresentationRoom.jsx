import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../images/presentation-room/theater.webp";
import img2 from "../images/presentation-room/room capacity.webp";
import img3 from "../images/presentation-room/speaker-role.webp";
import img4 from "../images/presentation-room/seat.webp";
const PresentationRoom = () => {
  return (
    <section className="">
      <Navbar title="Presentation Room" />
      <main className="bg-black text-white px-6">
        <div className="grid place-items-center py-32 items-center justify-center ">
          <div className="">
            <h1 className="text-5xl  max-w-2xl mb-8  mx-auto">
              Presentation Room
            </h1>
            <p className="text-lg  w-full  mx-auto max-w-screen-lg">
              The Presentation Room is perfect for scheduled events from speaker
              panels, workshops, and AMAs to launch parties and movie or game
              screenings.
            </p>
          </div>
        </div>
        <section className="max-w-screen-xl lg:px-10 mx-auto">
          <div className="flex flex-col sm:flex-row gap-x-6 lg:gap-x-64 gap-y-20">
            <div className="flex flex-col gap-y-20 flex-1 sm:mt-10">
              <div className="">
                <img src={img1} alt="theater style" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">
                  theater style
                </h5>
                <p className="w-full mb-6">
                  Individual seats are lined in rows to provide comfort to view
                  the presentation slides and speakers on the stage. There are 2
                  presentation rooms, however one is reserved for the NFT
                  Auction Room.
                </p>
              </div>
              <div className="">
                <img src={img2} alt="room capacity" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">
                  room capacity
                </h5>
                <p className="w-full mb-6">
                  When the room reaches 35 guests, a new instance opens up so
                  everyone still access the room. If you’d like to switch
                  instances when they’re free, click the Teleport button at the
                  top right when you’re inside the event.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-20 flex-1">
              <div className="">
                <img src={img3} alt="speaker role" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">speaker role</h5>
                <p className="w-full mb-6">
                  Those with the speaker role are allowed to walk their avatars
                  onto the stage.
                </p>
              </div>
              <div className="">
                <img src={img4} alt="take a seat" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">take a seat</h5>
                <p className="w-full mb-6">
                  Sit down on these chairs to get comfy and chill in this
                  theater. Click on the center red button to get up from your
                  seat!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default PresentationRoom;
