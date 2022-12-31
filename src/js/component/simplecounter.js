import React from "react";
import PropTypes  from "prop-types";



function SecondCounter(props){ 
	return (
		<div className="bigCounter">
				<div className="Clock">
				   <i className="fa-regular fa-clock"></i>
				</div>
				<div className="digit" id="four">{props.digitFour % 10}</div>
				<div className="digit" id="three">{props.digitThree % 10}</div>
				<div className="digit" id="two"> {props.digitTwo % 10}</div>
				<div className="digit" id="one">{props.digitOne % 10}</div>
				
		 </div>
		 );
  };



export default SecondCounter;

//<button onClick={handlePause}>pausa</button>
			//<button onClick={handleStart}>inicio</button>
