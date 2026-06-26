import React from 'react';

function ContactForm({ img, title = "Get in Touch with Us", subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible." }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 w-full">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Side: Image / Illustration */}
        <div className="md:w-1/2 h-80 md:h-auto relative bg-gray-100">
          <img 
            src={img} 
            alt="Contact Illustration" 
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-8 md:p-14 lg:p-20 flex flex-col justify-center bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-500 mb-10 text-sm md:text-base leading-relaxed">{subtitle}</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Enter your message here..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#ef4444] text-white font-bold text-lg py-4 rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30 hover:shadow-red-500/50 mt-4"
            >
              Send Message
            </button>
            
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default ContactForm;
