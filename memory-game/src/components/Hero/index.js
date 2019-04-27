import React from "react";
import Title from "./Title/index";
import "./style.css";


function Hero(props) {
    return (
      <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
        <Title />
      </div>
    );
};

export default Hero;
