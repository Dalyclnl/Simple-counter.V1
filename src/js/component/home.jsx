import React from "react";
import Card from "./Card.js"

//create your first component
const Home = () => {
	return (
			<div className="container">
				<div className="card">
					<span>{props.time.m} </span> xx:xx
					<span>{props.time.s} </span> xx:xx
					<span>{props.time.ms} </span> xx:xx
				</div>
			</div>
	);
 };

export default Home;
