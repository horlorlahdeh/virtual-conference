import React,{useState} from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Form = () => {
    const [showArrow,setShowArrow]=useState(false)

    return (
        <section className="pb-20 ">
            <div className="w-10/12 mx-auto max-w-screen">
                <form action="">
                    <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row gap-x-8 lg:mb-8">
                        <input type="text" placeholder="Name" className="bg-transparent border border-contact-gray p-4 text-contact-gray focus:text-white focus:border-gray-700 w-full mb-4" />
                        <input type="text" placeholder="Email Address" className="bg-transparent border border-contact-gray p-4 text-contact-gray focus:text-white w-full mb-4" />
                    </div>
                    <input type="textarea" placeholder="" className="w-full h-40 bg-transparent border border-contact-gray  text-contact-gray focus:text-white p-4 pt-0 mb-4" />
                    <button onMouseEnter={()=>setShowArrow(true)} onMouseLeave={()=>setShowArrow(false)}  className={`bg-yellow-300 text-black self-end  py-3 px-7 ${showArrow&&"pl-5 "} w-32 font-semibold text-lg bg-transparent cursor-pointer  flex items-center gap-x-1 hover:bg-yellow-300 hover:text-black  transform-all duration-500`}>submit <FaChevronRight className={`${showArrow?"flex ml-2":"hidden"} text-xs`}/> </button>  

                    </div>

                </form>
            </div>
        </section>
    )
}

export default Form
