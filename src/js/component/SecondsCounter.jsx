import React, { useState } from 'react'
import PropTypes from "prop-types";
import { FcClock } from "react-icons/fc";




const SecondsCounter = (props) => {
  const [seconds, setSeconds] = useState(props.seconds || 0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    setIntervalId(id);

  }
  return (
    <div>
    <div className='counterGeneral'>
      <div className='calendar'><FcClock /></div>
      <div className='hours'><p>{props.hours % 10}</p></div>
      <div className='separator'>:</div>
      <div className='minutesTwo'>{props.minutesTwo % 10}</div>
      <div className='minutes'>{props.minutes % 10}</div>
      <div className='separator'>:</div>
      <div className='secondsTwo'>{props.secondsTwo % 10}</div>
      <div className='seconds'>{props.seconds % 10}</div>   
    </div>
    <button className='continueButton'>Continue</button>
    <button className='pauseButton'>Pause</button>
    <button className='stopButton'>Stop</button>
    </div>
  );
};

SecondsCounter.propTypes = {
  hours: PropTypes.number.isRequired,
  minutesTwo: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  secondsTwo: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;

