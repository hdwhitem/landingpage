import React from 'react'
import {logo} from '../assets'
import ButtonGetStarted from './ButtonGetStarted'

const Navbar = () => {
  return (
    
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
            <img src={logo} alt='logopage'/>
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
            <a href='#' className='hover:text-darkGrayishBlue'>Pricing</a>
            <a href='#' className='hover:text-darkGrayishBlue'>Product</a>
            <a href='#' className='hover:text-darkGrayishBlue'>About Us</a>
            <a href='#' className='hover:text-darkGrayishBlue'>Careers</a>
            <a href='#' className='hover:text-darkGrayishBlue'>Community</a>
        </div>
        {/* Button */}
        <div className='hidden md:block'>
            <ButtonGetStarted/>
        </div>
        
      </div>
    </nav>
        
    
  )
}

export default Navbar