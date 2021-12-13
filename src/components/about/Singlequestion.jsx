import React,{useState,useEffect} from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Singlequestion = () => {

    const [text,setText]=useState(false)
const handleText=(e)=>{
   setText(!text)
  
}
    return (
        <article className={`${text?"bg-pink-400 text-black":""} mb-6 transition-all duration-1000`}>
         
          <div className={`question-title flex justify-between items-center p-2   ${text?"text-black":"border-8 border-pink-400 text-pink-400"}`}>
            <p className="text-xl font-bold">Duis aute irure dolor in reprehenderit?</p>
            <button type="button" className="question-btn">
              <span className="plus-icon">
                <FaPlus className={`${text?"hide":"show"}`} onClick={handleText} />
                <FaMinus className={`${text?"show":"hide"}`} onClick={handleText} />
              </span>
            
            </button>
          </div>
          {/* question text  */}
          <div className={` p-2   ${text?"show":"hide"}`}>
            <p>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
            </p>
          </div>
        </article>
    )
}

export default Singlequestion
