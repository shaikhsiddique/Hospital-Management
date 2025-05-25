import React from 'react'
import SimpleAppointmentCard from './SimpleAppointmentCard'

function UpcomingSchedule() {
  return (
    <div className='w-full  flex-col px-12 '>
          <div className="current flex justify-start items-center  ">
            <div>
              <SimpleAppointmentCard time={"10:00 - 12:00"}/>
            </div>
             <div className='mx-20'>
              <SimpleAppointmentCard time={"10:00 - 12:00"}/>
            </div>
          </div>
          <h4 className='text-xl font-bold text-[#3734A9] py-4'>The Upcomming Schedule</h4>
          <h6 className='text-sm font-bold text-gray-500 opacity-80 py-1'>Friday</h6>
          <div className="upcomming flex justify-start items-center  ">
            <div>
              <SimpleAppointmentCard time={null}/>
            </div>
             <div className='mx-20'>
              <SimpleAppointmentCard time={null}/>
            </div>
          </div>
          <h6 className='text-sm font-bold text-gray-500 opacity-80 py-2'>Saturday</h6>
          <div className="upcomming flex justify-start items-center  ">
            <div>
              <SimpleAppointmentCard time={null}/>
            </div>
             <div className='mx-20'>
              <SimpleAppointmentCard time={null}/>
            </div>
          </div>
        </div>
  )
}

export default UpcomingSchedule