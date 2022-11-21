import { useState } from 'react'
import { Navbar, Hero, Business} from './components'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const App = ()=>(
  
  <div>
    <div className='relative container mx-auto sm:px-16 py-6 justify-center items-center'>
      <Navbar/>
      <Hero/>
      <Business/>
      <Testimonials/>
      
    </div>
    <CTA/>
    <Footer/>
  </div>
  

  
    
  
)
export default App
