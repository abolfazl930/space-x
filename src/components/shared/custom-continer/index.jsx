import React from "react";
import "./styles.css";

function CustomContainer(props) {
  return (
    <div className={`custom-container ${props.className}`}>
      {props.children}
    </div>
  );
}

export default CustomContainer;
