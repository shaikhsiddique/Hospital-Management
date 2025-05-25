import React from 'react'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'


function App() {
  return (
    <div className='bg-[#E3E9F7] rounded-2xl h-screen w-full p-6'>
      <div className="main bg-white h-full w-full rounded-4xl flex">
        <div className="navbar  w-[14%] h-full">
          <Sidebar/>
        </div>
        <DashboardMainContent/>
      </div>
    </div>
  )
}

export default App