import React from 'react';
import dayjs from 'dayjs';

// import assets
import OnlineDot from '../assets/OnlineDot.png'
import OfflineDot from '../assets/OfflineDot.png'


function generateMonthDays(date) {
  const startOfMonth = dayjs(date).startOf('month');
  const endOfMonth = dayjs(date).endOf('month');
  const days = [];

  let currentDay = startOfMonth;
  while (currentDay.isBefore(endOfMonth) || currentDay.isSame(endOfMonth)) {
    days.push(currentDay);
    currentDay = currentDay.add(1, 'day');
  }

  return days;
}

function Calendar() {
  const currentDate = dayjs();
  const monthDays = generateMonthDays(currentDate);

  return (
    <div className="p-4 w-[323px] mx-auto bg-white rounded-[20px]">
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {monthDays.map((day) => (
          <div key={day} className="text-center">
            {day.format('D')}
          </div>
        ))}
      </div>
      <div className='flex flex-row gap-x-2 pl-3'>
          <div className='flex flex-row items-center justify-center align-center'>
            <img className='h-[10px] w-[10px] mx-2' src={OnlineDot} alt="" />
            <p>Online</p>
          </div>  
          <div className='flex flex-row items-center justify-center align-center'>
            <img className='h-[10px] w-[10px] mx-2' src={OfflineDot} alt="" />
            <p>Offline</p>
          </div>  
      </div>
    </div>
  );
}

export default Calendar;
