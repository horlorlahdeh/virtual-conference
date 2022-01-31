import React from "react";

const News = () => {
  return (
    <section className="section pb-20 lg:mt-40 bg-black">
      <div className="w-10/12 max-w-screen mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-7xl mb-16 tracking-wide">News & Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-20">
          {/* single item */}
          <div className="">
              <h1 className=" text-2xl  mb-3">Nunc Volutpat Venenatis</h1>
              <h1 className="text-gray-600 text-sm  uppercase mb-3 font-bold tracking-widest">category</h1>
              <p className="text-sm  md:text-base ">Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et...</p>
          </div>

          
          {/* single item */}
          <div className="">
              <h1 className=" text-2xl  mb-3">Proin Eu Augue Efficitur</h1>
              <h1 className="text-gray-600 text-sm  uppercase mb-3 font-bold tracking-widest">category</h1>
              <p className="text-sm  md:text-base ">Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et...</p>
          </div>

          
          {/* single item */}
          <div className="">
              <h1 className=" text-2xl  mb-3">Vestibulum Nisl Felis</h1>
              <h1 className="text-gray-600 text-sm  uppercase mb-3 font-bold tracking-widest">category</h1>
              <p className="text-sm  md:text-base ">Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et...</p>
          </div>

          
      </div>
      </div>
    </section>
  );
};

export default News;
