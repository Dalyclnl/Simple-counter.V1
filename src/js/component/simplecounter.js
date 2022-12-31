import React from "react";
import PropTypes  from "prop-types";



function SecondCounter(props){ 
	return (
		<div className="bigCounter">
				<div className="Clock">
				   <i className="fa-regular fa-clock"></i>
				</div>
				<div className="digit" id="four">{props.digitFour}</div>
				<div className="digit" id="three">{props.digitThree}</div>
				<div className="digit" id="two"> {props.digitTwo}</div>
				<div className="digit" id="one">{props.digitOne}</div>
		 </div>);
  };



export default SecondCounter;