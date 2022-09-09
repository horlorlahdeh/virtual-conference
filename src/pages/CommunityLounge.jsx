import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../images/community-lounge/bean-bag.png";
import img2 from "../images/community-lounge/room-capacity.png";
import img3 from "../images/community-lounge/seat.jpg";
import img4 from "../images/community-lounge/water-cooler.jpg";

const CommunityLounge = () => {
  return (
    <section className="">
      <Navbar title="  Community Lounge" />
      <main className="bg-black text-white px-6">
        <div className="grid place-items-center py-32 items-center justify-center ">
          <div className="">
            <h1 className="text-5xl  max-w-2xl mb-8  mx-auto">
              Community Lounge
            </h1>
            <p className="text-lg  w-full  mx-auto max-w-screen-lg">
              A fun networking area to get to know your friends in the crypto
              community with a select list of randomized questions.
            </p>
          </div>
        </div>
        <section className="max-w-screen-xl lg:px-10 mx-auto">
          <div className="flex flex-col sm:flex-row gap-x-6 lg:gap-x-64 gap-y-20">
            <div className="flex flex-col gap-y-20 flex-1 sm:mt-10">
              <div className="">
                <img src={img1} alt="Bean Bag" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">
                Bean Bag Circles
                </h5>
                <p className="w-full mb-6">
                There are 3 small bean bag circles on the left and right of the room, then 1 large bean bag circle in the middle.
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
                <img src={img3} alt="find a seat" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">find a seat</h5>
                <p className="w-full mb-6">
                When you sit on a bean bag chair, you are given the option on the bottom of the screen to pick a new seat in a different chat circle.
                </p>
              </div>
              <div className="">
                <img src={img4} alt="water cooler" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">water cooler</h5>
                <p className="w-full mb-6">
                Additional chat areas in the back of the room are available to chat in as well.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default CommunityLounge;
