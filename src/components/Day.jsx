import React, { useEffect, useState } from 'react'

function Day({ index, times = [], date }) {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [dayDate, setDayDate] = useState('');
  const [convertedTimes, setConvertedTimes] = useState([])

  function to24Hour(t) {
    let [time, meridian] = t.split(' ');
    let [h, m] = time.split(':');
    h = meridian === 'PM' && h !== '12' ? +h + 12 : meridian === 'AM' && h === '12' ? 0 : +h;
    return `${h.toString().padStart(2, '0')}:${m}`;
  }

  useEffect(() => {
    setDayDate(new Date(date).getDate());
  }, [date]);

  useEffect(() => {
    let timeArr = times.map(to24Hour);
    let count =timeArr.length;
    while(count < 3){
      timeArr.push('-')
      count++;
    }
   

    setConvertedTimes(timeArr);
  }, [times]);

  return (
    <div className="day flex flex-col gap-2 py-2 rounded-2xl p-3 items-center font-semibold">
      <h2 className='text-sm px-3'>{dayNames[index]}</h2>
      <h3 className='text-lg px-3'>{dayDate}</h3>
      <div className="time flex flex-col items-center text-sm">
        {convertedTimes.map((time, idx) => (
          <p key={idx} className='w-full px-3 py-[2px] rounded-lg hover:bg-[#3635A1] hover:text-white text-center'>
            {time}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Day
