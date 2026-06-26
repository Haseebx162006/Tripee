import React from 'react'

function ServiceCard({ title, description, id }) {
  return (
    <div className="bg-[#fcf5f5] rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-[17px] font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed px-2">{description}</p>
    </div>
  )
}

export default ServiceCard