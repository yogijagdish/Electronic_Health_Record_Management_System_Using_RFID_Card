import React from "react";
import "./style.css";
const doctorcard = (props) => {
  return (
    <div className="dcard">
      <div class="card">
        <img src={props.picture} alt="Fissure in Sandstone" />
        <p>{props.name}</p>
      </div>
    </div>
      
  );
};

export default doctorcard;
