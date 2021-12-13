import React from 'react'

const Info = () => {
    return (
     <section className="py-16 bg-black">
         <div className=" text-white w-10/12 mx-auto flex flex-col lg:flex-row lg:gap-x-20 max-w-screen">
             <div className="flex-1 mb-12 ">
                <h1 className="text-2xl md:text-4xl lg:text-7xl lg:w-9/12 leading-4 lg:tracking-wider mb-8 ">Dynamic, Flexible, Usable Data</h1>
                <h1 className="text-base md:text-xl lg:text-3xl lg:tracking-wider lg:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h1>
             </div>
             <div className="lg:w-4/12">
                 <p className="mb-6 md:text-lg lg:text-xl font-light tracking-wide">Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.</p>
                <p className="md:text-lg lg:text-xl font-light tracking-wide">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.</p>
             </div>
         </div>
     </section>
    )
}

export default Info
