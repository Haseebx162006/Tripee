import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Tour from './pages/Tour'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="grow flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={
            <div className="grow bg-gray-50 flex flex-col min-h-screen">
              <About />
            </div>
          } />

          <Route path="/tour" element={
            <div className="grow bg-gray-50 flex flex-col min-h-screen">
              <Tour />
            </div>
          } />

          
          
          <Route path="/contact" element={<ContactUs />} />

          <Route path="*" element={
            <div className="grow bg-gray-100 flex flex-col min-h-screen items-center justify-center text-center p-8 pt-32">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
              <p className="text-gray-600 text-lg">We are currently building out this page. Check back later.</p>
            </div>
          } />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
