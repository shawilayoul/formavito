import React from "react";

const Critere = () => {
  return (
    <div>
      <h2>Détails de l'annonce</h2>
      <p>
        Ajouter plus de détails sur votre annonce pour un maximum de visibilité
      </p>
      <form action="#">
        <div>
          <label htmlFor="marque">Marque</label>
          <input type="number" id="marque" />
        </div>
        <div>
          <label htmlFor="Année-Modèle">Année-Modèle</label>
          <input type="text" id="Année-Modèle" />
        </div>
        <div>
          <label htmlFor="Kilométrage">Kilomeétrage</label>
          <input type="textarea" id="Kilométrage" />
        </div>
        <div>
          <label htmlFor="Puissance fiscale">Puissance fiscale</label>
          <input type="textarea" id="Puissance fiscale" />
        </div>
      </form>
    </div>
  );
};

export default Critere;