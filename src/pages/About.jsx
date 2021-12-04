import React from 'react'
import EventOrganisers from '../components/EventOrganisers'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import Sponsors from '../components/Sponsors'
import Virtual from '../components/Virtual'
import VirtualBottom from '../components/VirtualBottom'

const About = () => {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <Virtual/> 
           <VirtualBottom/>
           <EventOrganisers/>
           <Faq/>
           <Sponsors/>
           <Register/>
        </div>
    )
}

export default About
