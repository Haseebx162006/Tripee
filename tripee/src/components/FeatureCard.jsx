import React from 'react'

function FeatureCard(props) {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden w-80 md:w-96 shrink-0 flex flex-col mb-8 transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer'>
        <img src={props.img} alt={props.title} className='w-full h-56 object-cover' />
        <div className='p-6 flex-grow flex flex-col'>
            <h3 className='text-2xl font-bold mb-2 text-gray-800'>{props.title}</h3>
            <p className='text-gray-600 mb-6 flex-grow line-clamp-3'>{props.description}</p>
            <div className='flex justify-between items-center mt-auto pt-4 border-t border-gray-100'>
                <button className='bg-red-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-600 transition shadow-sm hover:shadow-md'>
                    Book Now
                </button>
                <button className='bg-gray-800 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-900 transition shadow-sm hover:shadow-md'>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default FeatureCard