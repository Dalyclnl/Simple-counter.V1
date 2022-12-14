import React, { useState, useEffect } from "react";


function Card (props) {
    const [counter, setCounter ] = useState(0);

   useEffect(() => {
        clearTimeout(miTimeout)
        const miTimeout = setTimeout(() => {
            setCounter(counter + 1);
        }, 1000);
    }, [counter])

    return (
        <div className="card">
        <div className="card-body">

                <h5 className="card-title">{props.title}</h5>

                <p className="card-text">{counter}</p>

                <a href="#" onClick={() => setCounter(0)} className="btn btn-primary">Reset</a>

            </div>
        </div>
    )
};

export default Card;