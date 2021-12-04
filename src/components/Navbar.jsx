import React, { useState } from "react";
import { FaBars,  FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <nav className=" "> 
      <div className=" w-10/12 mx-auto py-6 lg:hidden">
        <div className={`flex   items-center justify-between  `}>
          <div className="flex  items-center ">
            <h1 className="text-2xl font-semibold">Virtual Conference About</h1>
          </div>

          <div className="flex justify-end gap-x-4 mr-4">
            <i className="cursor-pointer ">
              <FaShoppingCart />
            </i>
            <i
              className="cursor-pointer text-xl font-light text-blue-300"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaBars />
            </i>
          </div>
        </div>
      </div>

      <div
        className={`hide lg:hidden w-10/12 mx-auto justify-between border-t  ${
          showMenu === true && "show"
        } `}
      >
        <ul className="ul-nav flex flex-col capitalize  w-full font-medium p-4">
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              About
            </a>
          </li>
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Home
            </a>
          </li>
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Landing
            </a>
          </li>
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Event
            </a>
          </li>
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Speakers
            </a>
          </li>
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Schedule
            </a>
          </li>
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Pricing
            </a>
          </li>
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Blog
            </a>
          </li>
          <li className="text-base border-b py-2 px-8 hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex items-center justify-between mx-12 py-6 ">
        <div className="flex items-center flex-1 ">
          <h1 className="text-2xl font-semibold  flex-nowrap flex-1">Virtual Conference About</h1>
         
        </div>
        <ul className="ul-nav flex items-center capitalize  font-normal justify-self-end gap-x-8 ">
          <li className="text-base   hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              About
            </a>
          </li>
          <li className="text-base  hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Home
            </a>
          </li>
          <li className="text-base  hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Landing
            </a>
          </li>
          <li className="text-base  hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Event
            </a>
          </li>
          <li className="text-base hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Speakers
            </a>
          </li>
          <li className="text-base  hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Schedule
            </a>
          </li>
          <li className="text-base  hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Pricing
            </a>
          </li>
          <li className="text-base  hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Blog
            </a>
          </li>
          <li className="text-base  hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              Contact
            </a>
          </li>
          <li className="text-base  hover:bg-gray-100 cursor-pointer">
            <a href="#" className="">
              <FaShoppingCart/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
