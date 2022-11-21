import { features } from "../constants"

const FeatureCard = ({label, title, content, index}) => (
    <div className={`flex flex-col space-y-3 ${index !== features.length - 1 ? "mb-6" : "mb-0"} md:space-y-0 md:space-x-6 md:flex-row`}>
        <div className='rounded-full bg-brightRedSupLight md:bg-transparent'>
            <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                    {label}
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                    {title}
                </h3>
            </div>
        </div>  
        <div>
            <h3 className='hidden mb-4 text-lg font-bold md:block'>
                {title}
            </h3>
            <p className='text-darkGrayishBlue'>
                {content}
            </p>
        </div>
            
    </div>
)

const Business = () => {
  return (
    <div className='container flex flex-col mx-auto mt-2 space-y-12 px-6 md:space-y-0 md:flex-row'>
        <div className='flex flex-col space-y-12 md:w-1/2'>
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
                What's different about Manage?
            </h2>
            <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
            </p>
        </div>
        
        <div className="flex flex-col md:w-1/2">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
      
    </div>
  )
}

export default Business