import React from 'react'

function Day_Chart({data,index}) {
   const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="day-chart flex flex-col items-center justify-center">
            <div className="lines flex gap-3 items-center">
              <div className="line rounded-sm h-20 w-1 bg-gray-400 "></div>
              <div className="line rounded-sm h-10 w-1 bg-gray-400"></div>
              <div className='flex flex-col gap-1 mt-5'>
                <div className="line rounded-sm h-4 w-1 bg-gray-400"></div>
                <div className="line rounded-sm h-4 w-1 bg-gray-400"></div>
              </div>
              <div className="line rounded-sm h-5 w-1 mt-12 bg-gray-400"></div>
            </div>
            <h3 className='text-sm text-gray-400 opacity-70'>{dayNames[index]}</h3>
          </div>
  )
}

export default Day_Chart