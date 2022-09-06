import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../images/welcome-room/welcome-room.jpg";
import img2 from "../images/welcome-room/fishing-pond.webp";
import img3 from "../images/welcome-room/patio.webp";
import img4 from "../images/welcome-room/splinterland-booth.jpg";
import img5 from "../images/welcome-room/community-lounge.jpg";
import img6 from "../images/welcome-room/tailgate.jpg";
import img7 from "../images/welcome-room/chat-areas.jpg";
import img8 from "../images/welcome-room/photo-booth.webp";
import img9 from "../images/welcome-room/exhibit-halls.webp";
import img10 from "../images/welcome-room/swag-booth.webp";
import img11 from "../images/welcome-room/presentation-room.jpg";

const WelcomeRoom = () => {
  return (
    <section className="">
      <Navbar title="welcome room" />
      <main className="bg-black text-white px-6">
        <div className="grid place-items-center py-32 items-center justify-center ">
          <div className="">
            <h1 className="text-5xl  max-w-2xl mb-8  mx-auto">
              Spawning into the Welcome Room!
            </h1>
            <p className="text-lg  w-full  mx-auto">
              The Welcome Room is your landing point into the DYGYCON virtual
              event venue powered by Inverse.
            </p>
          </div>
        </div>
        <section className="max-w-screen-xl lg:px-10 mx-auto">
          <div className="flex flex-col sm:flex-row gap-x-6 lg:gap-x-64 gap-y-20">
            <div className="flex flex-col gap-y-20 flex-1 sm:mt-10">
              <div className="">
                <img src={img1} alt="welcome room" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">welcome room</h5>
                <p className="w-full mb-6">
                  This area is the first place everyone enters (or ‘spawns
                  into’) once they click on the button from the landing page to
                  the browser-based metaverse experience.
                </p>
                <p className="w-full mb-6">
                  When the room reaches 35 guests, a new instance opens up so
                  everyone still access the room. If you’d like to switch
                  instances when they’re free, click the Teleport button at the
                  top right when you’re inside the event.
                </p>
              </div>
              <div className="">
                <img src={img2} alt="fishing pond" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">Fishing Pond</h5>
                <p className="w-full mb-6">
                  When you enter the Welcome Room, behind you will be a fishing
                  pond area. Try moving your avatar there and click the water to
                  start fishing! You’ll see a white button appear when you can
                  catch a fish! There’s a leaderboard refreshed daily to show
                  who has been catching the largest fish. DYGYCON also provides
                  an NFT Achievement Badge if you caught the biggest fish over
                  the weekend. (Redeemed on the Hive blockchain)
                </p>
              </div>
              <div className="">
                <img src={img3} alt="patio" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">patio</h5>
                <p className="w-full mb-6">
                  When you enter the Welcome Room, to your right, is the patio
                  area where there are fireside chat areas and an additional
                  fishing pond! Click on the fire to roast marshmallows.
                </p>
              </div>
              <div className="">
                <img src={img4} alt="fishing pond" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">
                  Splinterlands Booth
                </h5>
                <p className="w-full mb-6">
                  Our event host, Splinterlands has a large booth in the section
                  past the Photo Booth and Exhibit Halls. You may find some
                  goodies hidden in the booth!
                </p>
              </div>
              <div className="">
                <img src={img5} alt="community lounge" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">
                  community lounge, party room and auction room
                </h5>
                <p className="w-full mb-6">
                  The community lounge is a place to network, chill, and answer
                  some icebreaker questions on beanbag chairs.
                </p>
                <p className="w-full mb-6">
                  Pick up concession drinks, lounge in chat areas, and dance on
                  the main stage in the Party Room.
                </p>
                <p className="w-full mb-6">
                  Explore exclusive goodies sold by individuals and sponsored
                  projects in the NFT Auction Room.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-20 flex-1">
              <div className="">
                <img src={img7} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">chat areas</h5>
                <p className="w-full mb-6">
                  You’ll see highlighted blue and green lines on the floor that
                  surround each chat area to use your mics and video so you can
                  interact with others. BLUE lines mean you can enter that area
                  to chat. GREEN lines mean you’re in that chat area.
                </p>
              </div>
              <div className="">
                <img src={img6} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">tailgate</h5>
                <p className="w-full mb-6">
                  When you enter the Welcome room, to your left is a door that
                  leads to the tailgate area for a variety of games and
                  activities.
                </p>
              </div>
              <div className="">
                <img src={img8} alt="photo booth" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">photo booth</h5>
                <p className="w-full mb-6">
                Select sponsors that confirm PLATINUM booths or purchase a logo slot will get displayed on a photo backdrop area with red carpet.
                </p>
              </div>
              <div className="">
                <img src={img9} alt="chat areas" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">exhibit halls</h5>
                <p className="w-full mb-6">
                To the left and right sides of the Photo Booth are the halls that contain sponsors and vendors with booths to check out and explore.
                </p>
              </div>
              <div className="">
                <img src={img10} alt="SWAG Booth" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">SWAG Booth</h5>
                <p className="w-full mb-6">
                This is everyone’s favorite spot to see what kind of SWAG sponsors are giving out and what you’ll need in order to be eligible to win! If you’re interested in winning, read the rules on the second slide carefully! Part 1:
                 Sign up with the link on the booth table. Part 2: Wait for an email to come in within a week after the event.                </p>
              </div>
              <div className="">
                <img src={img11} alt="presentation room" className="mb-7" />
                <h5 className="mb-7 w-full text-xl capitalize">presentation room</h5>
                <p className="w-full mb-6">
                This is a special room that presentations are held either by sponsors, influencers, or other groups. 
                There are movie theater-styled seats and a stage for speakers.              </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default WelcomeRoom;
