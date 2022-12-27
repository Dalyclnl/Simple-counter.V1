import React from "react";
import Counter from "./SecondCounter";
import PropTypes from 'prop-types';


//create your first component
const Home = () => {
	    return (
			<div className="container">
			   <div className="card body">
					<span>{props.time_m}</span> 
					<span>{props.time_s}</span> 
					<span>{props.time_ms}</span> 
				</div>	
			</div>
	);
 };

export default Home;


Counter.propTypes = {
	time_m: PropTypes.number,
	time_s: PropTypes.number,
	time_ms: PropTypes.number,
};