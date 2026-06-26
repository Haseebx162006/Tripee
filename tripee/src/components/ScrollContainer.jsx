import React, { useRef } from 'react'

function ScrollContainer({children}) {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -350,
            behavior: 'smooth'
        })
    }
    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 350,
            behavior: 'smooth'
        })
    }
 return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 group">
      
      <button
        onClick={scrollLeft}
        className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth py-4 px-4 -mx-4 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      
      <button
        onClick={scrollRight}
        className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollContainer;