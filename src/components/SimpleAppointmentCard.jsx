import React from 'react'

function SimpleAppointmentCard({data,time}) {
  
  return (
   <div className="bg-[#DFE3F8] p-4 rounded-2xl inline-block max-w-full">
  <header className="flex items-center justify-between gap-4 mb-2 whitespace-nowrap">
    <h3 className="text-[#3734A9] font-semibold text-lg">{data.name}</h3>
    <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
      <img
        className="w-full h-full object-cover"
        src={`./${data.organ}.png`}
        alt="Organ icon"
      />
    </div>
  </header>
  {time ? (
    <p className="text-sm text-gray-600 mb-1">{data.time}</p>
  ) : null}
  <p className="text-sm text-gray-700">{data.doctor}</p>
</div>


  )
}

export default SimpleAppointmentCard