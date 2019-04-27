import React from "react";
import "./style.css";


function RandomCards(props) {
   
  return (
    <div className="container">
      <div className="row">
      <div className="col-lg-3">
         <div className="card">
            <div className="img-container">
               <img alt={props.name} src={props.image}  />
            </div>
        </div>
      </div>
      <div className="col-lg-3">
         <div className="card">
            <div className="img-container">
               <img alt={props.name} src={props.image} />
            </div>
        </div>
      </div>
      <div className="col-lg-3">
         <div className="card">
            <div className="img-container">
               <img alt={props.name} src={props.image} />
            </div>
        </div>
      </div>
      <div className="col-lg-3">
         <div className="card">
            <div className="img-container">
               <img alt={props.name} src={props.image} />
            </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default RandomCards;
