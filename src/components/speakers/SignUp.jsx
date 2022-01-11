import React from 'react'
import Button from './Button/Button'

const SignUp = () => {
    return (
        <section className="pt-20 pb-12 mt-0 bg-black">
            <div className=" bg-speakersSignUp bg-po bg-cover bg-no-repeat bg-home bg-home-blue text-white w-10/12 mx-auto max-w-screen text-center pt-8 pb-8 lg:pb-12 px-8">
                <h1 className=" text-3xl md:text-4xl lg:text-7xl  mx-auto tracking-wide mb-10 max-w-screen-speakers">Sign up to become a speaker</h1>
                <p className="text-base md:text-base lg:text-lg mb-12 tracking-normal  max-w-screen-speakers mx-auto ">Donec sollicitudin molestie malesuada. 
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Cras ultricies
                 ligula sed magna dictum porta. Sed porttitor lectus nibh. </p>
                 <Button text="sign up"/>
            </div>
        </section>
    )
}

export default SignUp
