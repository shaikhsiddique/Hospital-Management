import React from 'react'
import Day_Chart from './Day-Chart'

function ActivityFeed() {
  return (
    <div className='w-full bg-[#F6FAFF] h-[24%] p-3 rounded-4xl'>
      <div className="header flex items-center justify-between w-full text-[#362CA7] ">
        <h4 className='text-2xl font-semibold'>Activity</h4>
        <p className='text-sm opacity-70 text-gray-600'>3 appointment on this week</p>
      </div>
      <div className="chart flex justify-evenly">
          <Day_Chart/>
          <Day_Chart/>
          <Day_Chart/>
          <Day_Chart/>
          <Day_Chart/>
          <Day_Chart/>
          <Day_Chart/>
      </div>
    </div>
  )
}

export default ActivityFeed