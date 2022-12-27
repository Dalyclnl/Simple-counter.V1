import React, { useState, useEffect } from "react";


function Counter (props) {

    const [time, setTime ] = useState({m:0, s:0, ms:0});
    //const [interv, setInterv ] =useState ();

    const start =() => { console.log(start)
        TimeOn( );
        setInterval(setInterval(TimeOn,10));
        };  

     var  timecounterM = time_m  ,timecounterS = time_s ,timecounterMS = time_ms;

        const TimeOn = ( )=>{
        if (timecounterM === 59){
            timecounterM(timecounterM +1);
            return
            }
        
        if(timecounterS === 60){
            timecounterM++;
            timecounterS = 0;
            }
        }
        if(timecounterMS === 100){
            timecounterS++;
            timecounterMS = 0;
            }
            timecounterMS++
            return setTime ({timecounterM:0, timecounterS:0, timecounterMS:0});
            
            console.log(TimeOn)
    
    };    

export default Counter;