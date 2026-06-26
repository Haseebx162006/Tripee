import React from 'react'

function Navbar() {
  return (
    <div className='absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-8 py-5 flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-white'>My App</h1>
            <span className='text-red-500'>Menu</span>
            <ul className='flex space-x-4 text-white'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/Tour'>Tour</NavLink>

                </li>
                <li>
                    <NavLink to='/Gallery'>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to='/Contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar