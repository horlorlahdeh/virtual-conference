import React from 'react'

const EventOrganisers = () => {
    return (
        <section className="text-center bg-black text-white py-20 capitalize">
            <h1 className="text-3xl md:text-5xl md:font-bol lg:text-7xl lg:font-bold mb-20 font-semibold">Event Organizers</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4  gap-y-8 w-10/12 mx-auto max-w-screen">
                {/* single planner */}
                <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Antonio french.jpg" alt="Antonio french" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">event planner</h1>
                    <h1 className=" text-xl lg:text-2xl md:text-2xl font-semibold">Antonio French</h1>
                </div>
                {/* single planner */}
                <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Harry Mathis.jpg" alt="Antonio french" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">event planner</h1>
                    <h1 className=" text-xl lg:text-2xl font-semibold">Harry Mathis</h1>
                </div>
                {/* single planner */}
                <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Cornelia Evans.jpg" alt="Antonio french" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">event cordinator</h1>
                    <h1 className=" text-xl lg:text-2xl font-semibold">Cornelia Evans</h1>
                </div>
                {/* single planner */}
                <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Lauren Marren.jpg" alt="Lauren Marren" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">VOLUNTEER LEAD</h1>
                    <h1 className=" text-xl lg:text-2xl font-semibold">Lauren Marren</h1>
                </div>
                {/* single planner */}
                <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Jamie Adkins.jpg" alt="Antonio french" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">av productions</h1>
                    <h1 className=" text-xl lg:text-2xl font-semibold">Jamie Adkins</h1>
                </div>
                {/* single planner */}
                <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Lana Bennet.jpg" alt="Lana Bennett" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">accomodations</h1>
                    <h1 className=" text-xl lg:text-2xl font-semibold">Lana Bennett</h1>
                </div>
                {/* single planner */}
                <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Leonard Rudd.jpg" alt="Leonard Rudd" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">speaker liaison</h1>
                    <h1 className=" text-xl lg:text-2xl font-semibold">Leonard Rudd</h1>
                </div>
                {/* single planner */}
                <div className="flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 ">
                        <img src="../images/about/Shasha Berry.jpg" alt="Sasha Berry" className=" " />
                    </div>
                    <h1 className="text-yellow-300 uppercase mb-2 text-sm font-bold">activities</h1>
                    <h1 className=" text-xl lg:text-2xl font-semibold">Sasha Berry</h1>
                </div>
            </div>
        </section>
    )
}

export default EventOrganisers
