import React from "react";

const ReusableButton = ({ children, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
       {children}
    </button>
  );
};

export default ReusableButton;
