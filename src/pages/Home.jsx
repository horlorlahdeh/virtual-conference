import React from 'react';
import Hero from '../components/home/Hero';
import Topics from '../components/home/Topics';
import Date from '../components/home/Date';
import Navbar from '../components/Navbar';
import HeroHome from '../components/Hero';
import Speakers from '../components/Speakers';

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
            D9 Live Schedule & Activities
          </h1>
          <p className=' mt-3 lg:text-lg text-center text-white lg:w-12/12 '>
            Activities and events lined up by DYGYCON and sponsors Friday to
            Sunday, so be sure to stay in the space and check the event landing
            page tab for complete Official Schedule.
          </p>

          <p className='text-center text-white mt-4'>
            See our{' '}
            <a
              className='text-yellow-300 font-bold underline'
              href='https://twitter.com/dygycon'
              rel='noreferrer'
              target='_blank'
            >
              Twitter
            </a>{' '}
            &{' '}
            <a
              className='text-yellow-300 font-bold underline'
              href='https://peakd.com/@dygycon'
              target='_blank'
              rel='noreferrer'
            >
              Blog
            </a>{' '}
            for sneak peeks, info, and more! 😎
          </p>
        </div>
      </div>
      <Hero />
      <div className='w-full flex-1 py-3 bg-black'>
        <div className='md:mt-4 w-10/12 max-w-screen mx-auto'>
          <h1 className='z-10 text-home-yellow text-center text-4xl md:text-6xl lg:text-4xl lg:flex-1 font-bold mb-4'>
            D9 Live Schedule & Activities
          </h1>
          <img
            className='border-4 rounded-lg border-yellow-300 mt-16'
            src='https://dygycon.files.wordpress.com/2022/04/goldenhour.png?w=2048'
            alt=''
          />
        </div>
      </div>
      <Topics />
      <Speakers />

      <Date />
      <Container />
      <Register />
    </div>
  );
};

export default Home;
