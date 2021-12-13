import React from "react";

const VirtualBottom = () => {
  return (
    <section className="bg-black text-white  py-24 ">
      <div className="w-10/12 mx-auto max-w-screen flex flex-col lg:flex-row lg:gap-x-20">
        <div className="flex-1">
          <h1 className="text-base md:text-xl lg:text-3xl  mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h1>
        </div>
        <div className="flex-1">
            <p className="text-base md:text-lg lg:text-xl mb-6">Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.</p>
            <p className="text-base md:text-lg lg:text-xl ">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.</p>
        </div>
      </div>
    </section>
  );
};

export default VirtualBottom;
