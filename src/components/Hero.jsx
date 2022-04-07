import React, { Fragment } from 'react';

const Hero = () => {
  return (
    <Fragment>
      <section className='bg-homeHeroBg text-white w-full'>
        <div className='w-full pt-20 bg-gradient-to-r from-black via-transparent to-black overlay-black'>
          <div className='top-overlay'></div>
          <div className='flex  flex-col lg:flex-col justify-center items-center md:mt-14 w-10/12 max-w-screen mx-auto'>
            <h1 className='z-10 text-home-yellow text-4xl md:text-6xl lg:text-9xl lg:flex-1 font-bold mb-12'>
              DYGYCON 7
            </h1>
            <h4 className='z-10 text-3xl md:text-4xl lg:text-6xl lg:flex-1 font-bold mb-10 text-center'>
              Friday to Sunday, May 27-29, 2022 <br />
              <span className='text-2xl lg:text-4xl text-home-yellow'>
                Livestream
              </span>{' '}
              <span className='text-2xl lg:text-4xl'>
                Saturday, May 28th at 2 PM EST / 7 PM UTC
              </span>
            </h4>
            <p className='z-10 mb-8 mt-2 lg:text-3xl text-center lg:w-12/12 '>
              DYGYCON is a metaverse convention featuring crypto projects,
              presentations, giveaways, and community networking! Hosted
              bi-monthly on Gamerjibe and organized by Splinterlands! 😎
            </p>
            <a
              href='https://tinyurl.com/dygycon9'
              rel='noreferrer'
              target='_blank'
              className='p-3 mt-6 text-black font-semibold bg-yellow-500 hover:bg-yellow-300 ease-in duration-300 z-10 block capitalize text-center m-auto rounded'
            >
              RSVP to DYGYCON7
            </a>
          </div>
          <div className='bg-yellow-200 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-yellow '></div>
          <div className='bg-purple-500 w-12 h-12  md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-purple '></div>
          <div className='bg-pink-500 w-8 h-8  absolute about-square-pink '></div>
          <div className='bg-pink-200 w-8 h-8 hidden lg:block absolute about-rounded-pink rounded-full '></div>
          <div className='bg-blue-500 w-8 h-8 hidden lg:block absolute about-square-blue '></div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='linear-gradient(180deg, transparent, rgb(0, 0, 0), rgba(0, 0, 0, 0.719)'
              fillOpacity='1'
              d='M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,138.7C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
            ></path>
          </svg>
          <div className='bottom-overlay'></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
