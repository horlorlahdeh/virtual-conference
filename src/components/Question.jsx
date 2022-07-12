import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Question = ({qstn,ans}) => {
  const [text, setText] = useState(false);
  const handleText = (e) => {
    setText(!text);
  };
  return (
    <article
      className={`mb-6 transition-all duration-1000 ${
        text ? 'bg-pink-400 text-black' : ''
      } `}
    >
      {/* qstn */}
      <div
        className={`question-title flex justify-between items-center p-2   ${
          text ? 'text-black' : 'text-pink-400 border-8 border-pink-400 '
        }`}
      >
        <p className='text-xl font-bold'>
          {qstn}
        </p>
        <button type='button' className='question-btn'>
          <span className='plus-icon'>
            <FaPlus
              className={`${text ? 'hide' : 'show'}`}
              onClick={handleText}
            />
            <FaMinus
              className={`${text ? 'show' : 'hide'}`}
              onClick={handleText}
            />
          </span>
        </button>
      </div>
      {/* ans  */}
      <div className={` p-2   ${text ? 'show' : 'hide'}`}>
        <p>
          {ans}
        </p>
      </div>
    </article>
  );
};

export default Question;
