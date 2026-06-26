import React from 'react';
import ContactForm from '../components/ContactForm';
import contactImg from '../assets/Hero1.jpg';

function ContactUs() {
  return (
    <div className="grow bg-gray-50 flex flex-col min-h-screen pt-24 pb-12 items-center justify-center">
      <ContactForm img={contactImg} />
    </div>
  );
}

export default ContactUs;
