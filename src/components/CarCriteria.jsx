import React from "react";
import Button from "./Button";

const CarCriteria = ({ classIcon, heading, labels }) => {
  return (
    <div>
      <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
        <span>{classIcon}</span>
        <h3>{heading}</h3>
      </div>
      {labels.map((label) => (
        <Button labels={label} />
      ))}
    </div>
  );
};

export default CarCriteria;
