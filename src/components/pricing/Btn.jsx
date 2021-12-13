import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Btn = ({ text, hoverBg, hoverText, borderSize, borderColor }) => {
  const [showArrow, setShowArrow] = useState(false);
  const [time, setTime] = useState(0);
  const setTimeInt=()=>{
    if(showArrow===true){
      setTimeout(() => {
        setTime(2);
      }, 200);
    }
    if(showArrow===false){
      setTimeout(() => {
        setTime(0)
      }, 10);
    }
  
  }
  
  setShowArrow && setTimeInt()
  const mx2Fixed = "absolute rem right-2";
  if (time === 2) {
  }
  return (
    <div
      onMouseEnter={() => setShowArrow(true)} 
      onMouseLeave={() => setShowArrow(false)}
      className={`relative flex bg-pink-300 text-black w-28 items-center hover:bg-${hoverBg} hover:text-${hoverText} border-${borderSize} border-${borderColor}`}
    >
      <button
        className={`  py-3 ${
          showArrow && `pl-2`
        }  font-semibold text-lg bg-transparent
              cursor-pointer  p-4 pr-0  transform-all duration-200`}
      >
        {text}
      </button>
      <span className={`${time&&mx2Fixed}`}>
      <FaChevronRight
        className={`${showArrow ? "flex translate-x" : "hidden ml-0"}  text-base transform-all duration-200 ${hoverText}` }
      />

      </span>
    </div>
  );
};

export default Btn;
