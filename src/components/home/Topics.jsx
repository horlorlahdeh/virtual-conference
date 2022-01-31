import React from 'react';
// import img3 from "../images/home/img3.png"

const Topics = () => {
  return (
    <section className='bg-black text-white py-40 xs:py-20'>
      <h1 className='text-center text-3xl md:text-5xl lg:text-4xl font-semibold mb-20'>
        Higlights{' '}
      </h1>
      <div className='mx-auto w-10/12 lg:w-9/12 max-w-1000px flex flex-col lg:flex-row lg:gap-x-20 '>
        <div className='mb-12'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className=' w-12 lg:w-16 '>
              <img src='../images/home/img1.png' alt='img-home' />
            </div>
            <div className=''>
              <h5 className='text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold'>
                Trading
              </h5>
              <h1 className='text-lg md:text-xl lg:text-2xl capitalize font-semibold'>
                Auctions
              </h1>
            </div>
          </div>
          <p className='text-base md:text-base lg:text-lg'>
            Get to share and sell your products to a group of readily available
            buyers. Auction rooms are filled with eager and exited buys
          </p>
        </div>

        <div className='mb-12'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className=' w-12 lg:w-16 '>
              <img src='../images/home/img2.png' alt='img-home' />
            </div>
            <div className=''>
              <h5 className='text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold'>
                meeting
              </h5>
              <h1 className='text-lg md:text-xl lg:text-2xl capitalize font-semibold'>
                Connecting
              </h1>
            </div>
          </div>
          <p className='text-base md:text-base lg:text-lg'>
            Connect and synergize with individuals from all over the world at
            the compfort of your PC. Get a rare physical experience virtually.
          </p>
        </div>

        <div className='mb-12'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className=' w-12 lg:w-16 '>
              <img src='../images/home/img3.png' alt='img-home' />
            </div>
            <div className=''>
              <h5 className='text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold'>
                Showcasing
              </h5>
              <h1 className='text-lg md:text-xl lg:text-2xl capitalize font-semibold'>
                {' '}
                Presentations
              </h1>
            </div>
          </div>
          <p className='text-base md:text-base lg:text-lg'>
            Pitch your project to an existing market filled with enthusiasts and
            potential partners in the same virtual space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Topics;
