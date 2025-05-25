import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'

function Main() {
  return (
    <div className='w-full h-[55%] flex items-center justify-evenly'>
        <AnatomySection/>
        <div className="side h-full w-[35%] flex flex-col justify-evenly">
            <HealthStatusCards/>
            <HealthStatusCards/>
            <HealthStatusCards/>
        </div>
    </div>
  )
}

export default Main