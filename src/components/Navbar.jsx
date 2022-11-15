import React from 'react'
import {logo} from '../assets'

const Navbar = () => {
  return (
    
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
            <img src={logo} alt='logopage'/> hola
        </div>
      </div>
    </nav>
        
    
  )
}

export default Navbar