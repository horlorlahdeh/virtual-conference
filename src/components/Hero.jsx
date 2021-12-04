import React from 'react'

const Hero = () => {
    return (
        <section className="pt-14 py-20 bg-black text-white">
            <div className="flex flex-col lg:flex-row items-start md:mt-14 w-10/12 max-w-screen mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-9xl lg:flex-1 font-bold mb-12">
                About the event
                </h1>
                <div className="flex flex-col items-start lg:w-5/12 lg:pl-20   ">
                    <p className="mb-8 mt-2 lg:text-xl lg:w-12/12 ">Faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                    <button className="p-3 text-black bg-pink-300 capitalize">save your seat</button>
                </div>
            </div>
            
        </section>
    )
}

export default Hero
