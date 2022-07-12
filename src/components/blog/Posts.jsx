import React from "react";

const Posts = () => {
  return (
    <section className="pt-20 py-28 bg-black text-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-y-8  gap-x-16 lg:gap-x-12 w-11/12 mx-auto max-w-screen">
        {/* single item */}
        <div className="flex flex-col">
          <div className=" w-full h-full mx-auto object-cover mb-6 ">
            <img
              src="../../images/blog/blog-img-1.jpg"
              alt="blog-1"
              className="  w-full h-full "
            />
          </div> 
          <div className="p-4 md:pt-2">
            <h1 className=" capitalize mb-3 text-lg font-normal tracking-widest ">
              Nunc Volutpat Venenatis
            </h1>
            <h1 className="text-home-yellow mb-3 text-xs  font-bold tracking-widest">
              CATEGORY
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.
            </p>
          </div>
        </div>
        {/* end of single item */}

        
        {/* single item */}
        <div className="flex flex-col">
          <div className=" w-full h-full mx-auto object-cover mb-6 ">
            <img
              src="../../images/blog/blog-img-2.jpg"
              alt="blog-1"
              className="  w-full h-full "
            />
          </div>
          <div className="p-4 md:pt-2">
            <h1 className=" capitalize mb-3 text-lg font-normal tracking-widest ">
            Vestibulum Nisl Felis
            </h1>
            <h1 className="text-home-yellow mb-3 text-xs  font-bold tracking-widest">
              CATEGORY
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh 
            venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.
            </p>
          </div>
        </div>
        {/* end of single item */}

        
        {/* single item */}
        <div className="flex flex-col">
          <div className=" w-full h-full mx-auto object-cover mb-6 ">
            <img
              src="../../images/blog/blog-img-3.jpg"
              alt="blog-1"
              className="  w-full h-full "
            />
          </div>
          <div className="p-4 md:pt-2">
            <h1 className=" capitalize mb-3 text-lg font-normal tracking-widest ">
            Proin Eu Augue Efficitur
            </h1>
            <h1 className="text-home-yellow mb-3 text-xs  font-bold tracking-widest">
              CATEGORY
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.            </p>
          </div>
        </div>
        {/* end of single item */}

        
        {/* single item */}
        <div className="flex flex-col">
          <div className=" w-full h-full mx-auto object-cover mb-6 ">
            <img
              src="../../images/blog/blog-img-4.jpg"
              alt="blog-1"
              className="  w-full h-full "
            />
          </div>
          <div className="p-4 md:pt-2">
            <h1 className=" capitalize mb-3 text-lg font-normal tracking-widest ">
            Nam Vulputate Tempus
            </h1>
            <h1 className="text-home-yellow mb-3 text-xs  font-bold tracking-widest">
              CATEGORY
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.            </p>
          </div>
        </div>
        {/* end of single item */}

        
        {/* single item */}
        <div className="flex flex-col">
          <div className=" w-full h-full mx-auto object-cover mb-6 ">
            <img
              src="../../images/blog/blog-img-5.jpg"
              alt="blog-1"
              className="  w-full h-full "
            />
          </div>
          <div className="p-4 md:pt-2">
            <h1 className=" capitalize mb-3 text-lg font-normal tracking-widest ">
            Donec Sit Amet Nibh
            </h1>
            <h1 className="text-home-yellow mb-3 text-xs  font-bold tracking-widest">
              CATEGORY
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.            </p>
          </div>
        </div>
        {/* end of single item */}

        
        {/* single item */}
        <div className="flex flex-col">
          <div className=" w-full h-full mx-auto object-cover mb-6 ">
            <img
              src="../../images/blog/blog-img-6.jpg"
              alt="blog-1"
              className="  w-full h-full "
            />
          </div>
          <div className="p-4 md:pt-2">
            <h1 className=" capitalize mb-3 text-lg font-normal tracking-widest ">
            Maecenas Fringilla Augue
            </h1>
            <h1 className="text-home-yellow mb-3 text-xs  font-bold tracking-widest">
              CATEGORY
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.            </p>
          </div>
        </div>
        {/* end of single item */}

        
        
      </div>
    </section>
  );
};

export default Posts;
