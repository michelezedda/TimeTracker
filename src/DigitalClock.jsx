import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [format, setFormat] = useState('12'); // default format is 12-hour

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => {
      clearInterval(intervalId);
    }

  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let formattedHours = hours;

    if (format === '12') {
      const meridiem = hours >= 12 ? 'PM' : 'AM';
      formattedHours = hours % 12 || 12;
      return `${padZero(formattedHours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    } else {
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }
  }

  function padZero(num) {
    return num.toString().padStart(2, '0');
  }

  function changeFormat() {
    setFormat(format === '12' ? '24' : '12');
  }

  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>TimeTracker<br/>
        {formatTime()}</span>
      </div>
      <div className='button-container'>
        <button className='format-btn' onClick={changeFormat}>Change Format</button>
      </div>
    </div>
  )
}

export default DigitalClock;