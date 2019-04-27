import React from "react";
import "../Title/style.css";

function Title(props) {
    return (
      <div>
          <h2 style={{ color: `white`, paddingTop: `150px`, fontSize: `3em` }}>Clicky Game!</h2>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    );
};

export default Title;
