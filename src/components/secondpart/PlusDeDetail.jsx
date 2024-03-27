import React from "react";
import './secondPart.css';
import ReusableButton from "./ResableButton";

const PlusDeDetail = () => {
  return (
    <div>
      <h3>Plus de détails</h3>
      <p>Ajouter des détails supplémentaires</p>
      <div>
        <ReusableButton style={{ backgroundColor: "green", color: "white" }}>Jantes aluinium</ReusableButton>
        <ReusableButton>Aribags</ReusableButton>
        <ReusableButton>Climtisation</ReusableButton>
        <ReusableButton>System de navi</ReusableButton>
        <ReusableButton>Toit ouvrant</ReusableButton>
        <ReusableButton style={{ backgroundColor: "blue", color: "white" }}>ABS</ReusableButton>
        <ReusableButton>ESP</ReusableButton>
        <ReusableButton>Vite elecron</ReusableButton>
        <ReusableButton>Caméra</ReusableButton>
        <ReusableButton style={{ backgroundColor: "red", color: "white" }}>Radar de recul</ReusableButton>
        <ReusableButton>Régulateur</ReusableButton>
        <ReusableButton>Verrouillage</ReusableButton>
      </div>
    </div>
  );
};

export default PlusDeDetail;
