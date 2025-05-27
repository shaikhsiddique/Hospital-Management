import React, { useState } from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import appointments from '../data/appointments';

function UpcomingSchedule() {
  const [appointmentData] = useState(
    [...appointments].sort((a, b) => new Date(a.date) - new Date(b.date))
  );

  const currentAppointments = appointmentData.slice(0, 2);
  const nextAppointments = appointmentData.slice(2, 6);

  return (
    <div className='w-full flex-col px-12 '>
      <div className="current flex justify-start items-center">
        <div>
          <SimpleAppointmentCard
            time={currentAppointments[0]?.time}
            data={currentAppointments[0]}
          />
        </div>
        <div className='mx-20'>
          <SimpleAppointmentCard
            time={currentAppointments[1]?.time}
            data={currentAppointments[1]}
          />
        </div>
      </div>

      <h4 className='text-xl font-bold text-[#3734A9] py-4'>The Upcoming Schedule</h4>

      <h6 className='text-sm font-bold text-gray-500 opacity-80 py-1'>Friday</h6>
      <div className="upcoming flex justify-start items-center">
        <div>
          <SimpleAppointmentCard data={nextAppointments[0]} />
        </div>
        <div className='mx-20'>
          <SimpleAppointmentCard data={nextAppointments[1]} />
        </div>
      </div>

      <h6 className='text-sm font-bold text-gray-500 opacity-80 py-2'>Saturday</h6>
      <div className="upcoming flex justify-start items-center">
        <div>
          <SimpleAppointmentCard data={nextAppointments[2]} />
        </div>
        <div className='mx-20'>
          <SimpleAppointmentCard data={nextAppointments[3]} />
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
