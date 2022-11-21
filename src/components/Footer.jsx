import { socialMedia, footerLinks } from "../constants"
import { logo } from "../assets"

const Footer = () => {
  return (
    <footer className='bg-veryDarkBlue'>
        {/* Flex container */}
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
            {/* Logo and social links container */}
            <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
               
               <div className='mx-auto my-6 text-center text-white md:hidden'>
                    <p>Copyright &copy; 2022, All rights Reserved</p>
               </div>
               
               {/* logo */}
               <div>
                <img src={logo} alt='' className='h-8'/>
               </div>
                {/* Social links */}
               <div className='flex justify-center space-x-4'>
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`h-8 object-contain cursor-pointer`}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
               </div>
            </div>
            {/* List Container */}
            <div className='flex justify-around -ml-8'>
                <div className='flex flex-row  text-white'>
                {footerLinks.map((footerlink, index) => (
                <div key={footerlink.title} className={`cursor-pointer ${index === 0 ? "ml-0" : "ml-6"}`}>
                <ul className="list-none mt-4 ml-10 space-y-2">
                    {footerlink.links.map((link) => (
                        <li key={link.name}>
                        {link.name}
                        </li>
                    ))}
                    </ul>
                    </div>
                ))}    
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer