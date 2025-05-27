import React,{ useEffect, useState } from 'react'
import Day_Chart from './Day-Chart'
import appointments from '../data/appointments';

function ActivityFeed() {

  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const [groupedList, setGroupedList] = useState([]);
  const [noOfAppointments, setNoOfAppointments] = useState(0)

  const groupedByDate = sortedAppointments.reduce((acc, appt) => {
    if (!acc[appt.date]) acc[appt.date] = { date: appt.date, times: [] };
    acc[appt.date].times.push(appt.time);
    return acc;
  }, {});

  useEffect(()=>{
    setGroupedList(Object.values(groupedByDate).slice(0, 7));
  },[])
  useEffect(()=>{
    let count =0;
    groupedList.forEach((e)=>{
      count += e.times.length
    })
    setNoOfAppointments(count)
  },[groupedList])
  return (
    <div className='w-full bg-[#F6FAFF] h-[24%] p-3 rounded-4xl'>
      <div className="header flex items-center justify-between w-full text-[#362CA7] ">
        <h4 className='text-2xl font-semibold'>Activity</h4>
        <p className='text-sm opacity-70 text-gray-600'>{noOfAppointments} appointment on this week</p>
      </div>
      <div className="chart flex justify-evenly">
          {groupedList.map((day,idx)=>{
            return <Day_Chart data={day} key={idx} index={idx}/>
          })}
      </div>
    </div>
  )
}

export default ActivityFeed