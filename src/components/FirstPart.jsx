import React from "react";
import AnneeModele from "./AnneeModele";
import Kilométrage from "./Kilométrage";
import PuissanceFiscale from "./PuissanceFiscale";
import Marque from "./Marque";

const FirstPart = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div>
        <Marque />
        <AnneeModele />
      </div>
      <div>
        <Kilométrage />
        <PuissanceFiscale />
      </div>
    </div>
  );
};

export default FirstPart;
