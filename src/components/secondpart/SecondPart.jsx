import React from "react";
import "./secondPart.css";
import Etat from "./Etat";
import Form from "./Form";
import PlusDeDetail from "./PlusDeDetail";
const SecondPart = () => {
  return (
    <div className="container">
      <Etat />
      <Form/>
      <PlusDeDetail/>
    </div>
  );
};

export default SecondPart;
