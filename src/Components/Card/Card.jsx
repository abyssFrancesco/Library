import React from "react";
import "./Card.css";


function Card({className}) {
  

  return (
    <>
      <div  className={`card ${className}`}>
        <div className="title-c">
            <h1>Books</h1>
        </div>
        </div>  
    </>
  );
}

export default Card;
