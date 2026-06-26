import React from 'react'

function Hero({ img }) {
  return (
     <div className='relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12'>
      
      {/* Background Image */}
      <img
        src={img}
        alt='Mountain'
        className='absolute inset-0 w-full h-full object-cover -z-10'
      />
      
      {/* Overlay to make text readable (optional but good practice) */}
      <div className='absolute inset-0 bg-black/30 -z-10'></div>

      {/* Content */}
      <div className='relative z-10 flex items-center justify-center flex-col w-full px-4'>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center drop-shadow-md'>
          Discover Your Next <span className='text-red-500'>Adventure</span>
        </h1>
        <h3 className='text-white text-center mt-6 text-lg md:text-xl drop-shadow-md max-w-2xl'>
          Explore breathtaking destinations and create unforgettable memories with Trip<span className='text-red-500'>Buddy</span>.
        </h3>
        <button className='mt-8 bg-red-500 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-600 transition shadow-lg'>
          Book Now
        </button>
     
        {/* Booking Bar */}
        <div className='bg-white rounded-xl flex flex-col md:flex-row items-center justify-between p-4 shadow-2xl w-full max-w-5xl mt-12 space-y-4 md:space-y-0 md:space-x-4'>
          
          <div className='flex flex-col w-full md:w-auto'>
            <div className='flex items-center text-sm font-semibold text-gray-700 mb-1'>
              Location
            </div>
            <select className='w-full md:w-32 lg:w-40 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500'>
              <option value='Pakistan'>Pakistan</option>
              <option value='Turkey'>Turkey</option>
              <option value='China'>China</option>
            </select>
          </div>

          <div className='flex flex-col w-full md:w-auto'>
            <div className='text-sm font-semibold text-gray-700 mb-1'>Check In</div>
            <input type='date' className='w-full md:w-36 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500' defaultValue="2024-12-10" />
          </div>

          <div className='flex flex-col w-full md:w-auto'>
            <div className='text-sm font-semibold text-gray-700 mb-1'>Check Out</div>
            <input type='date' className='w-full md:w-36 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500' defaultValue="2024-12-14" />
          </div>

          <div className='flex flex-col w-full md:w-auto'>
            <div className='flex items-center text-sm font-semibold text-gray-700 mb-1'>
              Guest
            </div>
            <select className='w-full md:w-48 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500'>
              <option value='2g1c'>2 Guest 1 children</option>
              <option value='1g'>1 Guest</option>
              <option value='2g'>2 Guest</option>
            </select>
          </div>

          <button className='w-full md:w-auto bg-red-500 text-white px-8 py-3 rounded-md font-bold hover:bg-red-600 transition shadow-md mt-4 md:mt-6'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero