import React from 'react'

function SimpleAppointmentCard({time}) {
  return (
    <div className="bg-[#DFE3F8] p-4 rounded-2xl inline-block">
  <header className="flex items-center justify-between gap-4 mb-2">
    <h3 className="text-[#3734A9] font-semibold text-lg whitespace-nowrap">Dentist</h3>
    <img className="h-6 w-6 object-contain" src="./teeth.png" alt="Teeth icon" />
  </header>
    {time ? <><p className="text-sm text-gray-600 mb-1">{time}</p></> : ''}
  
  <p className="text-sm text-gray-700 whitespace-nowrap">Lorem ipsum dolor sit amet.</p>
</div>

  )
}

export default SimpleAppointmentCard