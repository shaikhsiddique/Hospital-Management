import React from 'react'
import Day from './Day'
function CalendarView() {
  return (
    <div className=' w-full px-8'>
        <header className='flex items-center justify-between'>
            <h3 className='current-date text-xl text-[#3734A9] font-bold'>Octomber 2021</h3>
            <div className='flex items-center justify-center gap-2 text-[#3734A9]'>
                <i class="ri-arrow-left-fill text-lg"></i>
                <i class="ri-arrow-right-fill text-lg"></i>
            </div>
        </header>
        <div className="week flex text-[#3734A9] mt-2">
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
        </div>
    </div>
  )
}

export default CalendarView