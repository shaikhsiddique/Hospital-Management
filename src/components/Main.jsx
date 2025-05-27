import React, { useEffect, useState } from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import healthCheck from '../data/healthData'


function Main() {

  const [healthData, setHealthData] = useState([]);
  useEffect(()=>{
    setHealthData(healthCheck);
  },[])
  return (
    <div className='w-full h-[55%] flex items-center justify-evenly'>
        <AnatomySection/>
        <div className="side h-full w-[35%] flex flex-col justify-evenly">
          {healthData.map((item, index) => (
          <HealthStatusCards key={index} data={item} />
        ))}
        </div>
    </div>
  )
}

export default Main