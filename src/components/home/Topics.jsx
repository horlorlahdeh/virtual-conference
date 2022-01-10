import React from 'react'
// import img3 from "../images/home/img3.png" 


const Topics = () => {
    return (
        <section className="bg-black text-white py-40">
            <h1 className="text-center text-3xl md:text-5xl lg:text-8xl font-semibold mb-20">Topics </h1>
            <div className="mx-auto w-10/12 lg:w-9/12 max-w-1000px flex flex-col lg:flex-row lg:gap-x-20 ">
                <div className="mb-12">
                    <div className="flex items-center gap-x-4 mb-8">
                        <div className=" w-12 lg:w-16 ">
                            <img src="../images/home/img1.png"  alt="img-home" />
                        </div>
                        <div className="">
                            <h5 className="text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold">
                            development
                            </h5>
                            <h1 className="text-lg md:text-xl lg:text-2xl capitalize font-semibold"> code quality</h1>
                        </div>
                    </div>
                    <p className="text-base md:text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut. Enim ad minim veniam.</p>
                </div>

                
                <div className="mb-12">
                    <div className="flex items-center gap-x-4 mb-8">
                        <div className=" w-12 lg:w-16 ">
                            <img src="../images/home/img2.png"  alt="img-home" />
                        </div>
                        <div className="">
                            <h5 className="text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold">
                                development
                            </h5>
                            <h1 className="text-lg md:text-xl lg:text-2xl capitalize font-semibold"> accessibility</h1>
                        </div>
                    </div>
                    <p className="text-base md:text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut. Enim ad minim veniam.</p>
                </div>

                
                <div className="mb-12">
                    <div className="flex items-center gap-x-4 mb-8">
                        <div className=" w-12 lg:w-16 ">
                            <img src="../images/home/img3.png"  alt="img-home" />
                        </div>
                        <div className="">
                            <h5 className="text-yellow-500 text-base md:text-lg lg:text-xs tracking-widest uppercase mb-2 font-bold">
                                Design
                            </h5>
                            <h1 className="text-lg md:text-xl lg:text-2xl capitalize font-semibold"> wireframing</h1>
                        </div>
                    </div>
                    <p className="text-base md:text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut. Enim ad minim veniam.</p>
                </div>

                
            </div>
        </section>
    )
}

export default Topics
