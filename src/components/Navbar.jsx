import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo_dygycon_lg.png'

const Navbar = ({ title }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='bg-black'>
      <div className=' w-10/12 mx-auto py-6 lg:hidden'>
        <div className={`flex   items-center justify-between  `}>
          <div className='flex  items-center '>
            <h1 className='text-2xl font-semibold'>{title}</h1>
          </div>

          <div className='flex justify-end gap-x-4 mr-4'>
            {/* <i className='cursor-pointer '>
              <FaShoppingCart />
            </i> */}
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
          showMenu === true && 'show'
        } `}
      >
        <ul className='ul-nav flex flex-col capitalize  w-full font-medium p-4'>
          <li className='text-base border-b py-2 px-8 hover:text-red-500 cursor-pointer'>
            <Link to='/' className='text-white'>
              Home
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 hover:text-red-500 cursor-pointer'>
            <Link to='/participate' className='text-white'>
              Participate
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 hover:text-red-500 cursor-pointer'>
            <Link to='/about' className='text-white'>
              About
            </Link>
          </li>
          <li className='text-base border-b py-2 px-8 hover:text-red-500 cursor-pointer'>
            <Link to='/register' className='text-white'>
              Register
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
          <li className='text-base   hover:text-red-500 cursor-pointer'>
            <Link to='/' className='text-white'>
              Home
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/' className='text-white'>
              Participate
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/' className='text-white'>
              About
            </Link>
          </li>
          <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/' className='text-white'>
              Register
            </Link>
          </li>
          {/* <li className='text-base  hover:text-red-500 cursor-pointer'>
            <Link to='/' className='text-white'>
              <FaShoppingCart />
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
