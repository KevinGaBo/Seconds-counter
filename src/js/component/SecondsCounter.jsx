import React from 'react'
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FcClock } from "react-icons/fc";




const SecondsCounter = (props) => {
  return (
    <div className='counterGeneral'>
      <div className='calendar'><FcClock /></div>
      <div className='hours'><p>{props.hours %10}</p></div>
      <div>
        <div className='minutesTwo'>{props.minutesTwo %10}</div>
        <div className='minutes'>{props.minutes %10}</div>
      </div>
      <div>
        <div className='secondsTwo'>{props.secondsTwo %10}</div>
        <div className='seconds'>{props.seconds %10}</div>
      </div>
    </div>
  )
};
SecondsCounter.propTypes = {
  hours: PropTypes.number,
  minutesTwo: PropTypes.number,
  minutes: PropTypes.number,
  secondsTwo: PropTypes.number,
  seconds: PropTypes.number,
}

export default SecondsCounter

