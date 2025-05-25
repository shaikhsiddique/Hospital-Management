import React from 'react'

function Day() {
  return (
   <div className="day flex flex-col gap-2 py-2 rounded-2xl p-3 items-center font-semibold">
              <h2 className='text-sm px-3'>Mon</h2>
              <h3 className='text-lg px-3'>25</h3>
              <div className="time flex flex-col items-center  text-sm ">
                <p  className=' w-full px-3 py-[2px] rounded-lg'>10:00</p>
                <p className='bg-[#3635A1] text-white w-full px-4 py-[2px] rounded-lg'>11:00</p>
                <p  className=' w-full px-3 py-[2px] rounded-lg'>12:00</p>
              </div>
          </div>
  )
}

export default Day