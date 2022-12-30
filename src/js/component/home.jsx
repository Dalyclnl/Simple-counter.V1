import React from "react";
import SimpleCounter from "./SecondCounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className ="bigCounter">
			 <SimpleCounter/>
			</div>
		</div>);
   }


 let counter = 0;
 setInterval(function(){
	   const four= Math.floor(counter/10000);
	   const three= Math.floor(counter/1000);
	   const two= Math.floor(counter/100);
	   const one= Math.floor(counter/10);
	   
	   console.log (four,three,two,one);
	   counter ++;	},1000);




export default Home;
