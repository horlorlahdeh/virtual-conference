import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Developers = ({speakers}) => {
  return (
    <div className='bg-black pt-12 '>
      {speakers.map((speaker, id) => (
        <section className='py-4 mb-8  text-white' key={id}>
          <div className='w-10/12 mx-auto max-w-screen'>
            <div className='flex flex-col lg:flex-row gap-x-28'>
              <div className='flex flex-row items-start gap-x-4 mb-12 lg:w-3/12'>
                <div className='w-12 h-12 lg:w-16 lg:h-16 border-radius overflow-hidden'>
                  <img
                    src={speaker?.avatar}
                    alt={speaker?.name}
                    className=''
                  />
                </div>
                <div className=''>
                  <h5 className='uppercase text-home-yellow text-sm md:text-base lg:text-xs font-semibold  tracking-widest mb-3'>
                    {speaker?.position}
                  </h5>
                  <h5 className='capitalize  text-lg md:text-lg lg:text-2xl font-normal  tracking-widest mb-7'>
                    {speaker?.name}
                  </h5>
                  <div className='flex gap-x-5 font-bold'>
                    <button>
                      <FaTwitter />
                    </button>
                    <button>
                      <FaInstagram />
                    </button>
                  </div>
                </div>
              </div>
              <p className='text-base md:text-lg lg:text-xl lg:flex-1 lg:tracking-wide'>
                {speaker?.bio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam'}
              </p>
            </div>
          </div>
        </section>
      ))}

      
    </div>
  );
};

export default Developers;
