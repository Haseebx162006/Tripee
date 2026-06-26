import React from 'react';

function About() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center p-8 mt-20">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 text-lg max-w-2xl">
        We are TripBuddy, your ultimate travel companion. We believe in creating unforgettable experiences and helping you discover the most beautiful places on Earth.
      </p>
    </div>
  );
}

export default About;