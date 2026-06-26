import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between'>
          
            <h1 className='text-2xl font-bold text-white z-50'>Trip<span className='text-red-500 font-bold'>Buddy</span></h1>
            
        
            <ul className='hidden md:flex items-center space-x-6 text-white font-semibold'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/tour'>Tour</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <button className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600 transition">Book Now</button>
            </ul>

            <button 
              className='md:hidden text-white text-3xl z-50 focus:outline-none' 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </button>
            
            {isOpen && (
              <div className='absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center space-y-8 text-white font-semibold text-2xl md:hidden'>
                  <NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
                  <NavLink to='/about' onClick={() => setIsOpen(false)}>About</NavLink>
                  <NavLink to='/tour' onClick={() => setIsOpen(false)}>Tour</NavLink>
                  <NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact</NavLink>
                  <button className="bg-red-500 px-8 py-3 rounded-md text-white hover:bg-red-600 transition mt-4" onClick={() => setIsOpen(false)}>Book Now</button>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar