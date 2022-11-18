import { useState } from 'react'
import { Navbar, Hero, Business} from './components'
import Testimonials from './components/Testimonials'

const App = ()=>(
  <div className='relative container mx-auto sm:px-6 py-6 justify-center items-center'>
      <Navbar/>
      <Hero/>
      <Business/>
      <Testimonials/>
    </div>

  
    
  
)
export default App
