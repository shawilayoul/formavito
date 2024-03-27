import React from "react";

const Etat = () => {
  return (
    <div>
      <h3>Etat</h3>
      <div>
        <button>Excellent</button>
        <button>Trés bon</button>
        <button>Bon</button>
        <button>Correct</button>
        <button>Endommagé</button>
        <button>Pour Piéces</button>
        <button>Neuf</button>
      </div>
      <h3>Orgine</h3>
      <div>
        <button>Dédouanée</button>
        <button>Pas encore dédouanée</button>
        <button>WWW au Maroc</button>
        <button>Importée neuve</button>
      </div>
      <h3>Nombre de portes</h3>
      <button>3</button>
      <button>5</button>
      <h3>Premiére main</h3>
      <div>
        <button>oui</button>
        <button>Non</button>
      </div>
    </div>
  );
};

export default Etat;
