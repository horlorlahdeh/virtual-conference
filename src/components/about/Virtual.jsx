import React from 'react'
const Virtual = () => {
    return (
        <section className="bg-black text-white py-4 md:py-8">
            <div className=" w-10/12 max-w-screen mx-auto flex flex-col lg:flex-row   ">
                <div  className="border-purple-600 virtual bg-dots bg-repeat-round border-4 md:border-8 p-6 md:p-12 mb-8 lg:w-6/12 lg: lg:m-0 virtual ">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl w-10/12 font-bold  mb-8">
                    A virtual web developer conference 
                    </h1>
                    <button className="border-yellow-200 text-yellow-200 border-2  py-3 px-4 bg-transparent  capitalize">view schedule</button>
                </div>
                <div className="bg-purple-600 lg:flex-1 pt-8">
                    <img src="../images/about/virtual web developer.png" alt="virtual web developer" />
                </div>
            </div>
        </section>
    )
}

export default Virtual
