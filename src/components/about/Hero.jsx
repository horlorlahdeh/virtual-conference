import React from 'react'

const Hero = () => {
    return (
        <section className="pt-14 py-20 bg-black text-white bg-shapesAbout bg-cover bg-center bg-no-repeat">
            <div className="flex  flex-col lg:flex-row items-start md:mt-14 w-10/12 max-w-screen mx-auto">
                <h1 className="z-10 text-4xl md:text-6xl lg:text-9xl lg:flex-1 font-bold mb-12">
                About the event
                </h1> 
                <div className="z-10 flex flex-col items-start lg:w-5/12 lg:pl-20   ">
                    <p className="z-10 mb-8 mt-2 lg:text-xl lg:w-12/12 ">Faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                    <button className="p-3 text-black bg-pink-300 z-10 capitalize">save your seat</button>
                </div>
            </div>
            {/* <div className="bg-yellow-200 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-yellow "></div>
            <div className="bg-purple-500 w-12 h-12  md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-full absolute about-rounded-purple "></div>
            <div className="bg-pink-500 w-8 h-8  absolute about-square-pink "></div>
            <div className="bg-pink-200 w-8 h-8 hidden lg:block absolute about-rounded-pink rounded-full "></div>
            <div className="bg-blue-500 w-8 h-8 hidden lg:block absolute about-square-blue "></div> */}
        </section>
    )
}

export default Hero
