import React, { useState } from "react";
import './Card.css'

const Card = () => {

  const[minVal , setMinVal] = useState(0);
  const[maxVal , setMaxVal] = useState(10); 
  const[random , setRandom] = useState(5);  

  const randomHandler = () => {
    setRandom(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="container">

      <div className="randomnumber">
        <p>
          Random Number : <span>{random}</span>
        </p>
      </div>


      <div className="newContainer">


        <div  className="min">
          <p>MIN</p>
          <input type="number" value={minVal} onChange={ e => setMinVal(+e.target.value)} />
        </div>


        <div className="min">
          <p>MAX</p>
          <input type="number" value={maxVal} onChange={ e => setMaxVal(+e.target.value)} />
        </div>
      </div>

      <button onClick={randomHandler}>GET NUMBER</button>
    </div>
  );
};

export default Card;
