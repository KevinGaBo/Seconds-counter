import React, { useEffect, useState } from 'react'
import { FcClock } from "react-icons/fc";




const SecondsCounter = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    setIntervalId(id);
    setIsPaused(false);
  };

  const pauseTimer = () => { 
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsPaused(true);
    }   
  };

  const continueTimer = () => {
    if (isPaused) {
      startTimer();
    }
  };
  
  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(0);
    setIsPaused(false);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className='counterGeneral'>
        <div className='calendar'><FcClock /></div>
        <div className='hours'><p>{Math.floor(seconds / 3600) % 10}</p></div>
        <div className='separator'>:</div>
        <div className='minutesTwo'>{Math.floor((seconds % 3600) / 600) % 10}</div>
        <div className='minutes'>{Math.floor((seconds % 3600) / 60) % 10}</div>
        <div className='separator'>:</div>
        <div className='secondsTwo'>{Math.floor(seconds % 60 / 10)}</div>
        <div className='seconds'>{seconds % 10}</div>
      </div>
      <button className='continueButton' onClick={continueTimer}>Continue</button>
      <button className='pauseButton' onClick={pauseTimer}>Pause</button>
      <button className='stopButton' onClick={stopTimer}>Stop</button>
      <button className='startButton' onClick={startTimer}>Start</button>
    </div>
  );
};

export default SecondsCounter;

