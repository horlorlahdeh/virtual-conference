import React from 'react';
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Register = () => {
  return (
    <section
      className='bg-purple-main bg-shapesRegisterMain bg-center bg-no-repeat'
      id='register'
    >
      <div className='py-20 bg-gradient-to-r from-black via-transparent to-black overlay-black'>
        <div className='top-overlay'></div>
        <div className='flex   flex-col lg:flex-row lg:gap-x-12 lg:items-start w-10/12  mx-auto max-w-screen'>
          <div className='  text-white flex flex-1 flex-col w-10/12 md:w-full items-center justify-center'>
            <div className='bg-black hover:text-black hover:bg-pink-400 transition-all   px-4 py-8 md:p-8 w-full '>
              <div className=' '>
                <h1 className='text-center text-4xl md:text-8xl  '>
                  Register today
                  <FaChevronRight className='inline ' />
                </h1>
              </div>
            </div>
            <div className='bg-transparent  w-full '>
              <h1 className=' mb-4 mt-6 text-xl capitalize font-semibold'>
                follow
              </h1>
              <div className='flex gap-x-12 my-12 text-3xl'>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className='flex-1 pt-48 pb-20 px-12 bg-yellow-500 bg-shapesRegisterSmc bg-no-repeat bg-right-top z-10'>
            <h1 className='text-black font-semibold text-lg md:text-3xl lg:text-5xl lg:w-10/12 mb-8 z-20 lg:font-normal'>
              Join our newsletter
            </h1>
            <div className='flex border-b-2 overflow-hidden border-black mb-4'>
              <form action='' className=' w-full'>
                <input
                  placeholder='Email'
                  type='text'
                  className='flex-1 bg-none z-10 p-4 font-bold text-black focus:outline-none focus-visible:outline-none w-full'
                />
              </form>
            </div>
            <button className='bg-black text-white w-full py-4 capitalize text-lg'>
              subscribe
            </button>
          </div>
        </div>
        {/* <div className="flex-1 pt-48 pb-20 px-12 bg-white bg-shapesRegisterSm bg-no-repeat bg-right-top z-10">
          <h1 className="text-black font-semibold text-lg md:text-3xl lg:text-5xl lg:w-10/12 mb-8 z-20 lg:font-normal tracking-widest">
            Join our newsletter
          </h1>
          <div className="flex border-b-2 overflow-hidden border-black mb-4">
            <form action="" className=" w-full">

            <input placeholder="Email" type="text" className="flex-1 ml-4 bg-none z-10 p-4 font-bold text-black focus:border-none w-full" />
            </form>
          </div>
          <button className="bg-black text-white w-full py-4 capitalize text-lg">subscribe</button>
        
        </div> */}
      </div>
    </section>
  );
};

export default Register;
