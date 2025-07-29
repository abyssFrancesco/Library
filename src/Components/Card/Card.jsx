import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";


function Card({className, title, to}) {
  // se viene cliccata la card si viene reindirizzato su to
  const navigate = useNavigate();
  const handleClick = () =>{
      if(to){
        navigate(to);
      }
  }

  return (
    <>
      <div  className={`card ${className}`} onClick={handleClick}>
        <div className="title-c">
            <h1>{title}</h1>
        </div>
        </div>  
    </>
  );
}

export default Card;
