
import React from 'react'
import Developer from '../components/event/Developer'
import Hero from '../components/event/Hero'
import Info from '../components/event/Info'
import Navbar from '../components/event/Navbar'
import Register from '../components/event/Register'

const  Event = () => {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <Developer/>
           <Info/>
           <Register/>
          
        </div>
    )
}

export default Event
