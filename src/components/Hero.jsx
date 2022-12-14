import React from 'react'
import ButtonGetStarted from './ButtonGetStarted'
import { illustrationIntro } from '../assets'

const Hero = () => {
  return (
    <section id='hero'>
     <div className='flex flex-col-reverse items-center mx-auto mt-10 space-y-0 px-6 md:flex-row'>
        {/* Left item */}
        <div className='flex flex-col mb-10 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                Bring everyone together to build better products.
            </h1>
            <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the large team goals in view.
            </p>
            <div className='flex justify-center md:justify-start'>
                <ButtonGetStarted/>
            </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
            <img src={illustrationIntro} alt='' className='py-0'/>
        </div>
     </div>
    </section>
  )
}
export default Hero