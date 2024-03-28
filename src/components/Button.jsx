import React from "react";
const Button = ({labels, children, style, onClick }) => {
  return (
    <button style={{padding:"8px", marginLeft:"6px"}} onClick={onClick}>
       {labels}
    </button>
  );
};

export default Button;
