import React from "react";
import AnneeModele from "./AnneeModele";
import Kilométrage from "./Kilométrage";
import PuissanceFscale from "./PuissanceFscale";

const FirstPart = () => {
  return (
    <div style={{display:"flex", gap:"10px"}}>
      <div>
        <AnneeModele />
      </div>
      <div>
        <Kilométrage />
        <PuissanceFscale />
      </div>
    </div>
  );
};

export default FirstPart;
