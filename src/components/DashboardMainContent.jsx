import React from 'react'
import DashboardOverview from './DashboardOverview'
import Appointment from './Appointment'

function DashboardMainContent() {
  return (
    <div className='w-[88%] h-full flex'>
        <div className='dashboard w-[50%] h-full'>
          <DashboardOverview/>
        </div>
        <div className='dashboard w-[50%] h-full'>
          <Appointment/>
        </div>
    </div>
  )
}

export default DashboardMainContent