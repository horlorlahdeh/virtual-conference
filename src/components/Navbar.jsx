import React, { useState } from 'react';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo_dygycon_lg.png';

const Navbar = ({ title }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={`bg-white ${showMenu?`mb-20`:``} lg:bg-black text-black z-50 lg:fixed lg:top-0 lg:right-0 lg:left-0`}>
      <div className={` ${showMenu?`fixed top-0 left-0 right-0 bg-white w-full mx-auto`:``} w-10/12 mx-auto py-6 lg:hidden`}>
        <div className={`flex   items-center justify-between ${showMenu?`w-10/12 mx-auto`:``} `}>
          <div className='flex  items-center '>
            <h1 className='text-2xl font-semibold capitalize'>{title}</h1>
          </div>

          <div className='flex justify-end gap-x-4 mr-4'>
            <i className='cursor-pointer '>
              <FaShoppingCart />
            </i>
            <i
              className='cursor-pointer text-xl font-light text-blue-300'
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaBars />
            </i>
          </div>
        </div>
      </div>

      <div
        className={`hide lg:hidden w-10/12 mx-auto justify-between border-t  ${
          showMenu === true && 'show z-50 bg-white text-black fixed  top-0 left-0 right-0 mt-20 '
        } `}
      >
        <ul className='text-black  ul-nav flex flex-col capitalize  w-full font-medium p-4'>
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50 cursor-pointer'>
            <Link to='/about' className=''>
              About
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/' className=''>
              Home
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/landing' className=''>
              Landing
            </Link>
          </li>
          {/* <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/participate' className=''>
              Participate
            </Link>
          </li> */}
          {/* <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/register' className=''>
              Register
            </Link>
          </li> */}
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/event' className=''>
              Event
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/speakers' className=''>
              Speakers
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/schedule' className=''>
              Schedule
            </Link>
          </li>
          
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/pricing' className=''>
              Pricing
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/blog' className=''>
            Blog
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
            <Link to='/contact' className=''>
            Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className='hidden lg:flex items-center justify-between mx-12 py-6 '>
        <div className='flex items-center flex-1 '>
          <Link to='/'>
            <img className='flex-nowrap w-36' alt='logo' src={logo} />
          </Link>
        </div>
        <ul className='ul-nav flex items-center capitalize  font-normal justify-self-end gap-x-8 '>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/about' className='text-white'>
              About
            </Link>
          </li>
          <li className='text-base   hover:text-red-500 cursor-pointer'>
            <Link to='/' className='text-white'>
              Home
            </Link>
          </li>
          <li className='text-base   hover:text-red-500 cursor-pointer'>
            <Link to='/landing' className='text-white'>
              Landing
            </Link>
          </li>
          
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/event' className='text-white'>
              Event
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/speakers' className='text-white'>
            Speakers
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/schedule' className='text-white'>
              Schedule
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/pricing' className='text-white'>
            Pricing
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/blog' className='text-white'>
            Blog
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/contact' className='text-white'>
              Contact
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/' className='text-white'>
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
