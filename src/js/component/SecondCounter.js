import React from "react";
import PropTypes  from "prop-types";


function SimpleCounter(props){ 
	return (
		<div className="text-center">
			<div className ="bigCounter">
				<div className="Clock">
				   <i className="fa-regular fa-clock"></i>
				</div>
				<div className="digit" id="four">{props.digitFour} 1</div>
				<div className="digit" id="three">{props.digitThree} 2 </div>
				<div className="digit" id="two"> {props.digitTwo} 3 </div>
				<div className="digit" id="one">{props.digitOne} 4</div>
			</div>
		 </div>);
 }

 SimpleCounter.propTypes ={
	digitFour:PropTypes.number,
	digitThree:PropTypes.number,
	digitTwo:PropTypes.number,
	digitOne:PropTypes.number
 };




export default SimpleCounter;