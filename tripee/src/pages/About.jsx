import React from 'react';
import bannerImg from '../assets/Hero3.jpg';
import sideImg from '../assets/Hero2.jpg';
import ScrollContainer from '../components/ScrollContainer';
import FeatureCard from '../components/FeatureCard';
import cardImg1 from '../assets/Space.jpg';
import cardImg2 from '../assets/Hero3.jpg';
import cardImg3 from '../assets/Hero4.jpg';
import cardImg4 from '../assets/Hero1.jpg';

function About() {
  const aboutFeatures = [
    {
      id: 1,
      title: "50+ Destination",
      description: "We offer the best travel experiences with personalized services and unbeatable prices."
    },
    {
      id: 2,
      title: "Best Price",
      description: "We offer the best travel experiences with personalized services and unbeatable prices."
    },
    {
      id: 3,
      title: "Super Fast Booking",
      description: "We offer the best travel experiences with personalized services and unbeatable prices."
    }
  ];

  const cardData = [
    {
      id: 1,
      img: cardImg1,
      title: "Space Exploration",
      description: "Discover new places and embark on unforgettable adventures beyond the stars."
    },
    {
      id: 2,
      img: cardImg2,
      title: "Mountain Retreat",
      description: "Experience the thrill of mountain climbing and explore breathtaking alpine landscapes."
    },
    {
      id: 3,
      img: cardImg3,
      title: "Forest Trails",
      description: "Hike through lush green forests and discover hidden waterfalls and wildlife."
    },
    {
      id: 4,
      img: cardImg4,
      title: "City Tours",
      description: "Explore the most vibrant cities in the world with our expert local guides."
    }
  ];

  return (
    <div className="grow flex flex-col bg-white">
      {/* Top Banner */}
      {/* Added pt-20 to push it below the absolutely positioned navbar */}
      <div className="relative h-64 md:h-[350px] w-full pt-20 bg-gray-900">
        <img src={bannerImg} alt="About Us Banner" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider shadow-sm">About Us</h1>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 w-full flex flex-col md:flex-row gap-12 items-center overflow-hidden">
        
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/2 pr-0 md:pr-8">
          <img src={sideImg} alt="Travel Boat" className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-md" />
        </div>

        {/* Right Side: Features List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 pt-10 md:pt-0">
          {aboutFeatures.map(feature => (
            <div key={feature.id} className="flex flex-col justify-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 pb-24 w-full">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Popular Destinations</h2>
        <ScrollContainer>
          {cardData.map(card => (
            <FeatureCard
              key={card.id}
              img={card.img}
              title={card.title}
              description={card.description}
            />
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}

export default About;