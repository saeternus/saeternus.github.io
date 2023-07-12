import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "August, 07, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='counterbox'>
    <div className='timelefttext'>Time Left</div>
    <div className="timer">
        <div className='timercomp'>{days} Days</div>
        <div className='timercomp'>{hours} Hours</div>
        <div className='timercomp'>{minutes} Min</div>
    </div>
    </div>
  );
};

export default Timer;