import React from 'react';
import FeatureCard from '../components/FeatureCard';
import tour1 from '../assets/Hero2.jpg';
import tour2 from '../assets/Hero3.jpg';
import tour3 from '../assets/Hero4.jpg';
import tour4 from '../assets/Hero5.jpg';
import tour5 from '../assets/Hero1.jpg';
import tour6 from '../assets/Space.jpg';

function Tour() {
  const toursData = [
    {
      id: 1,
      img: tour1,
      title: "Neelam Valley Expedition",
      description: "Explore the stunning natural beauty, lush green landscapes, and picturesque views of Azad Kashmir."
    },
    {
      id: 2,
      img: tour2,
      title: "Alpine Adventure",
      description: "Experience the thrill of mountain climbing and explore breathtaking alpine landscapes with our expert guides."
    },
    {
      id: 3,
      img: tour3,
      title: "Tropical Paradise",
      description: "Relax on pristine beaches and swim in crystal-clear waters on this unforgettable island retreat."
    },
    {
      id: 4,
      img: tour4,
      title: "Turkish Delights",
      description: "Discover the rich history, diverse culture, and stunning landscapes at the crossroads of Europe and Asia."
    },
    {
      id: 5,
      img: tour5,
      title: "City Explorer",
      description: "Dive into the vibrant culture, food, and architecture of the world's most bustling metropolitan cities."
    },
    {
      id: 6,
      img: tour6,
      title: "SpaceX Mars Journey",
      description: "Embark on an unforgettable out-of-this-world adventure and discover what lies beyond the stars."
    }
  ];

  return (
    <div className="flex-grow flex flex-col bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 mt-8">
          <h4 className="text-red-500 font-bold tracking-wider uppercase text-sm mb-3">Find Your Next Adventure</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Fantastic Tours</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Browse our curated selection of breathtaking tours across the globe. Whether you're seeking a relaxing beach retreat, a thrilling mountain expedition, or an out-of-this-world adventure, we have the perfect journey waiting for you.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {toursData.map(tour => (
            <div key={tour.id} className="flex justify-center w-full">
              <FeatureCard 
                img={tour.img} 
                title={tour.title} 
                description={tour.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tour;
