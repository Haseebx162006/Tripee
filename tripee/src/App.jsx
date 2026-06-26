import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import mountainImg from './assets/Hero4.jpg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import cardImg1 from './assets/space.jpg'
import cardImg2 from './assets/Hero2.jpg'
import cardImg3 from './assets/Hero5.jpg'
import cardImg4 from './assets/Hero3.jpg'
import ScrollContainer from './components/ScrollContainer'
import ServiceCard from './components/ServiceCard'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  const cardData = [
    {
      id: 1,
      img: cardImg1,
      title: "SpaceX Mars",
      description: "Discover new places and embark on unforgettable adventures with TripBuddy."
    },
    {
      id: 2,
      img: cardImg2,
      title: "Neelam Valley",
      description: "Neelam Valley is a beautiful valley located in the Azad Kashmir region of Pakistan. It is known for its stunning natural beauty, lush green landscapes, and picturesque views of the surrounding mountains. The valley is named after the Neelam River, which flows through it, and is a popular destination for tourists seeking tranquility and adventure. Visitors can enjoy activities such as hiking, camping, and exploring the local culture and cuisine."
    },
    {
      id: 3,
      img: cardImg3,
      title: "Turkey",
      description: "Turkey is a country located at the crossroads of Europe and Asia, known for its rich history, diverse culture, and stunning landscapes. It offers a unique blend of ancient ruins, vibrant cities, and beautiful coastlines along the Mediterranean and Aegean Seas. Popular destinations include Istanbul, with its iconic Hagia Sophia and Blue Mosque; Cappadocia, famous for its fairy-tale-like rock formations and hot air balloon rides; and the coastal resorts of Antalya and Bodrum. Turkey is also renowned for its delicious cuisine, including dishes like kebabs, baklava, and Turkish tea."
    },
    {
      id: 4,
      img: cardImg4,
      title: "Mountain Adventures",
      description: "Experience the thrill of mountain climbing and explore breathtaking alpine landscapes with our expert-guided tours."
    }
  ];

  const serviceCardData=[
    {
      id:1,
      title:"Exclusive flight deals",
      description:"Get the best deals on flights to your dream destinations."
    },
    {
      id:2,
      title:"24/7 Customer Support",
      description:"Our dedicated support team is available around the clock to assist you."
    },
    {
      id:3,
      title:"Tailored Travel Packages",
      description:"Customize your travel experience with our flexible and personalized packages."
    },
    {
      id:4,
      title:"Secure Booking",
      description:"Book with confidence knowing that your travel plans are protected."
    },
    {
      id:5,
      title:"Local Guides",
      description:"Explore destinations with the help of knowledgeable local guides."
    },
    {
      id:6,
      title:"Travel Insurance",
      description:"Ensure peace of mind with our comprehensive travel insurance options."
    }
  ]

  return (
    <>
    <Hero img={mountainImg}/>
    
    <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 text-center">
      <h4 className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2">Featured Tours</h4>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
        Discover New Places
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Embark on unforgettable adventures and explore the world's most breathtaking destinations with Trip<span className='text-red-500 font-bold'>Buddy</span>.
      </p>
    </div>
    <ScrollContainer>
      {
        cardData.map(card => (
          <FeatureCard
            key={card.id}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))
      }
    </ScrollContainer>

        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Choose Our Travel Services
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the unique features that make your journey with us extraordinary
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCardData.map(card => (
              <ServiceCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        
        <Footer />
     </>
  )
}

export default App
