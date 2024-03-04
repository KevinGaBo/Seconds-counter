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

let counter = 0;
setInterval(function() {

  const hours = Math.floor((counter/ 3600));
  const minutes = Math.floor((counter % 3600) / 60);
  const seconds = counter % 60;
  ReactDOM.render(
    <SecondsCounter 
      seconds={seconds} 
      secondsTwo={Math.floor(seconds/10)} 
      minutes={minutes} 
      minutesTwo={Math.floor(minutes/10)} 
      hours={hours}
    />,
    document.querySelector('#app')
  );
  counter++;
}, 1000);

export default SecondsCounter

