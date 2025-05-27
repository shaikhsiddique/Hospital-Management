import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Sidebar() {
  return (
    <div className='w-full h-full rounded-l-4xl  relative bg-[#F6FAFF]'>
        <div className="header flex items-center absolute top-14 left-[20%] ">
            <h1 className='text-[#02DFEE] font-semibold text-xl'>Health</h1>
            <h1 className='text-[#292558] font-semibold text-xl'>Care.</h1>
        </div>
        <div className='links flex flex-col w-full items-center justify-center absolute top-[15%] left-[-5%]'>
          <p className='text-sm text-gray-500 opacity-65 mr-14'>General</p>
          <div className='flex flex-col items-center justify-center mt-5 gap-4'>
            <div className="links flex gap-3">
            <i className="ri-dashboard-fill"></i>
            <h3 className='text-[#231B57]'>Dashboard</h3>
          </div>
          <div className="links flex gap-3 items-start mr-7 opacity-45">
            <i class="ri-arrow-up-down-fill"></i>
            <h3 className='text-[#231B57]'>History</h3>
          </div>
          <div className="links flex gap-3 mr-4 opacity-45">
            <i className="ri-calendar-2-line"></i>
            <h3 className='text-[#231B57]'>Calendar</h3>
          </div>
          <div className="links flex gap-3 opacity-45 ml-5">
            <i className="ri-hospital-line"></i>
            <h3 className='text-[#231B57]'>Appointments</h3>
          </div>
           <div className="links flex gap-3 opacity-45 mr-5">
            <i className="ri-line-chart-line"></i>
            <h3 className='text-[#231B57]'>Statistics</h3>
          </div>
          </div>
        </div>

         <div className='links flex flex-col w-full items-center justify-center absolute top-[55%] left-[-5%]'>
          <p className='text-sm text-gray-500 opacity-65 mr-14'>Tools</p>
          <div className='flex flex-col items-center justify-center mt-5 gap-5 opacity-45'>
            <div className="links flex gap-3 mr-10">
            <i className="ri-wechat-2-line"></i>
            <h3 className='text-[#231B57]'>Chat</h3>
          </div>
          <div className="links flex gap-3 items-start mr-4">
            <i class="ri-phone-fill"></i>
            <h3 className='text-[#231B57]'>Support</h3>
          </div>
          
          </div>
        </div>
        <div className="links flex gap-3 items-start mr-4 absolute bottom-10 left-[20%] opacity-45">
            <i class="ri-settings-3-line"></i>
            <h3 className='text-[#231B57]'>Setting</h3>
          </div>
        
    </div>
  )
}

export default Sidebar