import React from "react";
import ReusableButton from "./ResableButton";

const Etat = () => {
  const handleClick = () => {
    console.log('Button was clicked!');
  };
  return (
    <div className="bg-green-200">
      <h3>* Type de carburant</h3>
      <div>
        <ReusableButton onClick={handleClick} style={{ backgroundColor: "blue", color: "white" }}>
          Excellent
        </ReusableButton>
        <ReusableButton>Diesel</ReusableButton>
        <ReusableButton style={{ backgroundColor: "green", color: "red" }}>Electrique</ReusableButton>
        <ReusableButton>LPG</ReusableButton>
        <ReusableButton>Hybride</ReusableButton>
      </div>
      <h3>Boite de vitesses</h3>
      <div>
        <ReusableButton>Excellent</ReusableButton>
        <ReusableButton style={{ backgroundColor: "yellow", color: "green" }}>Automatique</ReusableButton>
        <ReusableButton>Manuelle</ReusableButton>
      </div>
      <h3 className="bg-red-500">Etat</h3>
      <div>
        <ReusableButton>Trés bon</ReusableButton>
        <ReusableButton>Bon</ReusableButton>
        <ReusableButton>Correct</ReusableButton>
        <ReusableButton>Endommagé</ReusableButton>
        <ReusableButton>Pour Piéces</ReusableButton>
        <ReusableButton style={{ backgroundColor: "brown", color: "white" }}>Neuf</ReusableButton>
      </div>
      <h3>Orgine</h3>
      <div>
        <ReusableButton>Dédouanée</ReusableButton>
        <ReusableButton>Pas encore dédouanée</ReusableButton>
        <ReusableButton>WWW au Maroc</ReusableButton>
        <ReusableButton>Importée neuve</ReusableButton>
      </div>
      <h3>Nombre de portes</h3>
      <ReusableButton>3</ReusableButton>
      <ReusableButton>5</ReusableButton>
      <h3>Premiére main</h3>
      <div>
        <ReusableButton style={{ backgroundColor: "green", color: "white" }}>oui</ReusableButton>
        <ReusableButton style={{ backgroundColor: "red", color: "white" }}>Non</ReusableButton>
      </div>
    </div>
  );
};

export default Etat;
