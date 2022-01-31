import React,{useState} from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Singlequestion = ({qstn}) => {

    const [text,setText]=useState(false)
const handleText=(e)=>{
   setText(!text)
  
}
    return (
        <article className={`${text?"bg-home-yellow text-black":""} mb-2 lg:mb-8 transition-all duration-1000 w-full`}>
         
          <div className={`question-title flex justify-between items-center p-3   ${text?"text-black":"border-4 lg:border-8 border-home-yellow text-home-yellow"}`}>
            <p className="text-sm lg:text-xl font-bold p-2">{qstn}</p>
            <button type="button" className="question-btn bg-home-yellow h-4 w-4 text-black border-radius font-thin">
              <span className="plus-icon ">
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
