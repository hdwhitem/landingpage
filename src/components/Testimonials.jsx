import React from 'react'
import { feedback } from '../constants'

const FeedbackCard = ({ content, name, img, index}) => (
    <div className={`flex flex-col sm:mb-10 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3`}>
        <img src={img} alt={name} className="w-16 -mt-14" />
        <h5 className='text-lg font-bold'>
            {name}
        </h5>
        <p className='text-sm text-darkGrayishBlue'>
            {content}
        </p>
    </div>
  )

const Testimonials = () => {
  return (
    <section id="testimonials">
        {/* Container to heading and testm blocks */}
        <div className='max-w-6xl px-5 mx-auto mt-20 text-center'>
            {/* Heading */}
            <h2 className='text-4xl font-bold text-center'>
                What's Different About Manage?
            </h2>
            {/* Testimonials Container */}

            <div className="flex flex-col mt-24 md:flex-row md:space-x-6 sm:justify-start justify-center">
                {feedback.map((card, index) => <FeedbackCard key={card.id} {...card} index={index} />)}
            </div>

        </div>

    </section>
  )
}

export default Testimonials