import React, { useEffect, useState } from 'react';
import Day from './Day';
import appointments from '../data/appointments';

function CalendarView() {
  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const [groupedList, setGroupedList] = useState([]);

  const groupedByDate = sortedAppointments.reduce((acc, appt) => {
    if (!acc[appt.date]) acc[appt.date] = { date: appt.date, times: [] };
    acc[appt.date].times.push(appt.time);
    return acc;
  }, {});

  useEffect(()=>{
    setGroupedList(Object.values(groupedByDate).slice(0, 7));
  },[])
 

  return (
    <div className='w-full px-8'>
      <header className='flex items-center justify-between'>
        <h3 className='current-date text-xl text-[#3734A9] font-bold'>July 2025</h3>
        <div className='flex items-center justify-center gap-2 text-[#3734A9]'>
          <i className="ri-arrow-left-fill text-lg"></i>
          <i className="ri-arrow-right-fill text-lg"></i>
        </div>
      </header>
      <div className="week flex text-[#3734A9] mt-2">
        {Array.from({ length: 7 }).map((_, i) => {
          const dayData = groupedList[i] || { date: '', times: [] };
          return <Day key={i} date={dayData.date} times={dayData.times} index={i} />;
        })}
      </div>
    </div>
  );
}

export default CalendarView;
