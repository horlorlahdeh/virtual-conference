import React from 'react'
import EventOrganisers from '../components/about/EventOrganisers'
import Faq from '../components/about/Faq'
import Hero from '../components/about/Hero'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import Sponsors from '../components/about/Sponsors'
import Virtual from '../components/about/Virtual'
import VirtualBottom from '../components/about/VirtualBottom'

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
