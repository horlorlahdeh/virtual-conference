import React from 'react'
import Faq from './Faq'
import Registration from './Registration'

const Container = () => {
    return (
        <section className="bg-black py-20 ">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-x-16 gap-y-4 max-w-screen mx-auto">
            <Faq/>
            <Registration/>

            </div>
        </section>
    )
}

export default Container
