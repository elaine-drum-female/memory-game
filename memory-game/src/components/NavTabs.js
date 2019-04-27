import React from "react";
import "./style.css";


function NavTabs(props) {
  return (
    <div className="container-fluid bluepurpleBackground">
        <div className="row">
            <div className="col-lg-4">
                <h2>Clicky Game</h2>
            </div>
            <div className="col-lg-4">
                <h2><span>{props.displayMessage}</span></h2>
            </div>
            <div className="col-lg-4">
               <h2>Score : {props.score} | TopScore: {props.topScore}</h2>
            </div>
        </div>
    </div>
  );
}

export default NavTabs;
