import React, { Fragment } from 'react';

const Hero = () => {
  return (
    <Fragment>
      <section className='pt-14 py-20 bg-homeHeroBg text-white w-full'>
        <div className='flex  flex-col lg:flex-col justify-center items-center md:mt-14 w-10/12 max-w-screen mx-auto'>
          <h1 className='z-10 text-4xl md:text-6xl lg:text-9xl lg:flex-1 font-bold mb-12'>
            DYGYCON 7.0
          </h1>
          <h4 className='z-10 text-3xl md:text-4xl lg:text-6xl lg:flex-1 font-bold mb-10 text-center'>
            Friday to Saturday, January 21-23, 2022 Livestream January 22nd, 2
            PM EST / 6 PM UTC
          </h4>
          <p className='z-10 mb-8 mt-2 lg:text-3xl text-center lg:w-12/12 '>
            DYGYCON is your gateway to crypto projects, talks, giveaways, and
            community networking!
          </p>
          <button className='p-3 text-white font-semibold bg-purple-500 z-10 capitalize rounded-full'>
            RSVP to DYGYCON7
          </button>
        </div>
        <div className='bg-yellow-200 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-yellow '></div>
        <div className='bg-purple-500 w-12 h-12  md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-purple '></div>
        <div className='bg-pink-500 w-8 h-8  absolute about-square-pink '></div>
        <div className='bg-pink-200 w-8 h-8 hidden lg:block absolute about-rounded-pink rounded-full '></div>
        <div className='bg-blue-500 w-8 h-8 hidden lg:block absolute about-square-blue '></div>
      </section>
    </Fragment>
  );
};

export default Hero;
