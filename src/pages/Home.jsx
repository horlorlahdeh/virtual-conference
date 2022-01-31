import React from 'react';
import Hero from '../components/home/Hero';
import Topics from '../components/home/Topics';
import Date from '../components/home/Date';
import Navbar from '../components/Navbar';
import HeroHome from '../components/Hero';

import Container from '../components/home/Container';
import Register from '../components/Register';

const Home = () => {
  return (
    <div>
      <Navbar title='virtual conference home' />
      <HeroHome />

      <div className='w-full flex-1 py-3 bg-black'>
        <div className='md:mt-4 w-10/12 max-w-screen mx-auto'>
          <h1 className='z-10 text-home-yellow text-center text-4xl md:text-6xl lg:text-4xl lg:flex-1 font-bold mb-4'>
            What is DYGYCON?
          </h1>
          <p className=' mt-3 lg:text-lg text-center text-white lg:w-12/12 '>
            DYGYCON is a virtual event that takes place in the DYGYCON Expo
            virtual conference center. Mini-events and activities hosted by our
            sponsors and partners all month will lead up to the live event.
            DYGYCON is an ongoing event brought to you by the creators of
            Splinterlands, the hit blockchain trading card game in which players
            really own their cards and play for real money rewards. Thanks to
            our huge network of good friends, innovative partners and visionary
            communities found in the course of our years of success, DYGYCON is
            your chance to make your own life-changing connections.
            {/* <button className='p-3 mt-6 text-black font-semibold bg-yellow-900 hover:bg-yellow-300 ease-in duration-300 z-10 block capitalize text-center m-auto rounded'>
              RSVP to DYGYCON7
            </button> */}
          </p>
        </div>
      </div>

      <Hero />

      <Topics />
      <Date />
      <Container />
      <Register />
    </div>
  );
};

export default Home;
