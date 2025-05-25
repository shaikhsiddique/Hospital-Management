import React from 'react'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
function Appointment() {
  return (
    <div className='bg-[#F6FAFF] w-full h-full flex flex-col items-center justify-center'>
        <header className='h-[7%] w-full flex items-center justify-end px-12 gap-4'>
            <div className='h-full w-12 bg-[#06D7EF] p-1 flex items-center justify-center rounded-lg'>
                <img className=' w-full' src="./face.png" alt="" />
            </div>
            <div className='h-full w-12 bg-[#3836A6] p-1 flex items-center justify-center rounded-lg'>
                <i class="ri-add-line text-white  text-xl"></i>
            </div>
        </header>
        <CalendarView/>
        <UpcomingSchedule/>
    </div>
  )
}

export default Appointment