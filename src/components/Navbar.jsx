import { useState } from "react"
import { close, logo2, menu } from '../assets'
import ButtonGetStarted from './ButtonGetStarted'
import { navLinks } from '../constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    
    <nav>
      <div className="flex items-center justify-between px-6">
        {/* Logo */}
        <div>
            <img src={logo2} alt='logopage' className="h-[80px]"/>
        </div>
        {/* Menu Items */}
        <div className='hidden lg:space-x-6 md:space-x-3 md:flex'>
          <ul className="list-none md:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          )
          )}
          </ul>
        </div>
        {/* Button */}
        <div className='hidden md:block'>
            <ButtonGetStarted/>
        </div>
        <div className="justify-end items-center pt-2 md:hidden">
          <img 
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev )}
          />
          <div className={`${ toggle ? 'flex' : 'hidden'} p-6 bg-brightRed absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
            )
            )}
            </ul>
          </div>

        </div>
        
      </div>
    </nav>
        
  )
}

export default Navbar