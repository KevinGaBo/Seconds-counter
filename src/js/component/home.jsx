import React from "react";
import ReactDOM from "react-dom";

import SecondsCounter from "./SecondsCounter";
import ButtonRestart from "./ButtonRestart";


//create your first component
const Home = () => {
	return (
		<div className="textCenter">
			<SecondsCounter/>
			<div>
			<ButtonRestart/>
			</div>
		</div>
	);
};

export default Home;
