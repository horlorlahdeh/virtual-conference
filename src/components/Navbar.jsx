import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo_dygycon_lg.png';
import axios from '../utils/axios';

const Navbar = ({ title }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [linksContainerHeight, setLinksContainerHeight] = useState(0);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [routes, setRoutes] = useState([]);
  const container = useRef(null);
  const linksContainer = useRef(null);

  useEffect(() => {
    const linksContainerHeight =
      linksContainer.current.getBoundingClientRect().height;

    setLinksContainerHeight(linksContainerHeight);

    if (scrollHeight >= 20) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
    const checkScroll = () => {
      const webScrollHeight = window.pageYOffset;
      // console.log(webScrollHeight);
      setScrollHeight(webScrollHeight);
    };
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [scrollHeight, linksContainerHeight]);
  useEffect(() => {
    axios.get('/routes').then((res) => {
      setRoutes(res.data.data);
    });
  }, []);
  return (
    <nav
      ref={container}
      className={`${
        isNavbarFixed
          ? ' lg:fixed lg:top-0 lg:left-0 lg:right-0 bg-white z-50 transit '
          : ' relative bg-white transit'
      } p-4`}
    >
      <div
        className={`${
          isNavbarFixed
            ? 'py-4  w-10/12 lg:w-11/12 mx-auto  flex items-center justify-between'
            : 'py-4  w-10/12 lg:w-11/12 mx-auto  flex items-center justify-between'
        }`}
      >
        <h1 className='text-2xl font-semibold capitalize lg:hidden'>{title}</h1>
        <div className='flex items-center gap-8 lg:hidden mr-4'>
          <i className='cursor-pointer '>
            <FaShoppingCart />
          </i>
          <i
            className='cursor-pointer text-xl font-light text-blue-300'
            onClick={() => setIsShowMenu(!isShowMenu)}
          >
            <FaBars />
          </i>
        </div>
        <div
          className={`${
            isNavbarFixed
              ? 'hidden lg:block bg-black'
              : 'hidden lg:block bg-black'
          }`}
        >
          <Link to='/'>
            <img className='flex-nowrap w-36' alt='logo' src={logo} />
          </Link>
        </div>
        <ul className='hidden text-black lg:flex   items-center capitalize  font-semibold justify-self-end gap-x-8 '>
          <li className='text-base    cursor-pointer'>
            <Link to='/' className=' '>
              Home
            </Link>
          </li>
          <li className='text-base   cursor-pointer'>
            <Link to='/about' className=''>
              About
            </Link>
          </li>
          {/* <li className='text-base    cursor-pointer'>
            <Link to='/landing' className=''>
              Landing
            </Link>
          </li> */}

          <li className='text-base   cursor-pointer'>
            <Link to='/event' className=''>
              Event
            </Link>
          </li>
          <li className='text-base  cursor-pointer'>
            <Link to='/speakers' className=''>
              Speakers
            </Link>
          </li>

          <li className='text-base   cursor-pointer'>
            <Link to='/contact' className=''>
              Contact
            </Link>
          </li>
          <li className='text-base   cursor-pointer'>
            <Link to='/error' className=''>
              Error
            </Link>
          </li>
          <li className='text-base   cursor-pointer'>
            <Link to='/welcome-room' className=''>
              Welcome Room
            </Link>
          </li>
          {routes.map((route, index) => {
            const { name, path } = route;
            return (
              <li className='text-base   cursor-pointer' key={index}>
                <Link to={path} className=''>
                  {name}
                </Link>
              </li>
            ); 
          })}
          {/* <li className='text-base   cursor-pointer'>
            <Link to='/schedule' className=''>
              Schedule
            </Link>
          </li> */}

          {/* <li className='text-base   cursor-pointer'>
            <Link to='/pricing' className=''>
              Pricing
            </Link>
          </li> */}
          {/* <li className='text-base   cursor-pointer'>
            <Link to='/blog' className=''>
              Blog
            </Link>
          </li> */}
          {/* <li className='text-base   cursor-pointer'>
            <Link to='/' className=''>
              <FaShoppingCart />
            </Link>
          </li> */}
        </ul>
      </div>
      <div className='relative bg-white z-50 w-10/12 mx-auto max-w-screen lg:hidden '>
        <div
          className={`${
            isShowMenu
              ? 'border-t-nav  absolute top-0 left-0 right-0 links-height overflow-hidden transit '
              : ' absolute top-0 left-0 right-0 h-0 overflow-hidden transit'
          }`}
        >
          <ul
            ref={linksContainer}
            className=' text-black bg-white  flex flex-col capitalize  w-full font-medium p-4'
          >
            <li className='flex text-base border-b  transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/' className='w-full py-2 pl-8 '>
                Home
              </Link>
            </li>
            <li className='flex text-base border-b  transition-all duration-600 hover:bg-gray-50 cursor-pointer'>
              <Link to='/about' className='w-full py-2 pl-8  '>
                About
              </Link>
            </li>
            {/* <li className=' flex text-base border-b transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/landing' className=' w-full py-2 pl-8 '>
                Landing
              </Link>
            </li> */}
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
            <li className='text-base border-b flex transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/event' className='py-2 pl-8  w-full'>
                Event
              </Link>
            </li>
            <li className='text-base border-b flex transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/speakers' className='py-2 pl-8  w-full'>
                Speakers
              </Link>
            </li>
            {/* <li className='text-base border-b flex transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/schedule' className='py-2 pl-8  w-full'>
                Schedule
              </Link>
            </li> */}

            {/* <li className='text-base border-b flex transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/pricing' className='py-2 pl-8  w-full'>
                Pricing
              </Link>
            </li> */}
            {/* <li className='text-base border-b flex transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/blog' className='py-2 pl-8  w-full'>
                Blog
              </Link>
            </li> */}
            <li className='text-base border-b flex transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/contact' className='py-2 pl-8  w-full'>
                Contact
              </Link>
            </li>
            <li className='text-base border-b flex transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/error' className='py-2 pl-8  w-full'>
                Error
              </Link>
            </li>
            <li className='text-base border-b flex transition-all duration-600 hover:bg-gray-50  cursor-pointer'>
              <Link to='/welcome-room' className='py-2 pl-8  w-full'>
                Welcome room
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
