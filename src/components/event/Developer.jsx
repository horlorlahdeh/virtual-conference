import React from 'react'

const Developer = () => {
    return (
        <section className="bg-black py-16">
            <div className="border-purple-800 py-8 w-10/12 mx-auto border-4 lg:border-8 max-w-screen ">
            <div className="text-white mt-12 lg:mt-0 flex flex-col items-center justify-center p-8">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Antonio french.jpg" alt="Antonio french" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">Developer</h1>
                    <h1 className=" text-xl lg:text-2xl md:text-2xl font-semibold mb-8">Antonio French</h1>
                    <p className="text-lg text-center lg:text-2xl">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligul</p>
                </div>
            </div>
        </section>
    )
}

export default Developer
