import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";


function Card({className, title, to, image}) {
  // se viene cliccata la card si viene reindirizzato su to
  const navigate = useNavigate();
  const handleClick = () =>{
      if(to){
        navigate(to);
      }
  }

  return (
    <>
    {/* passa l'url dell'immagine come prop, se c'è metti l'immagine altrimenti non mettere nnt */}
      <div  className={`card ${className}`} onClick={handleClick} style={image ? { backgroundImage: `url(${image})` } : {}}>
        <div className="title-c">
            <h1>{title}</h1>
        </div>
        </div>  
    </>
  );
}

export default Card;
