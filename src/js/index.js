//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "bootstrap";
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let counter = 0;
setInterval(function() {
    
    const hours = Math.floor((counter/ 3600));
    const minutes = Math.floor((counter % 3600) / 60);
    const seconds = counter % 60;
    counter++;
    ReactDOM.render(<SecondsCounter 
        seconds={seconds} 
        secondsTwo={Math.floor(seconds/10)} 
        minutes={minutes} 
        minutesTwo={Math.floor(minutes/10)} 
        hours={hours}
      />, document.querySelector("#app"));
}, 1000);
