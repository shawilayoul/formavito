import React from "react";
import CarCriteria from "./CarCriteria";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";

const Form = () => {
  const detailsCriterias = {
    fuel: {
      classIcon: <BsFillFuelPumpDieselFill />,
      heading: "Type de Carburant",
      labels: ["Diesel", "Essence", "Electrique", "GPL", "Hybride"],
    },
    gearBox: {
      classIcon: <TbManualGearbox />,
      heading: "Boite de vitesses",
      labels: ["Automatique", "Mannuelle"],
    },
    State: {
      classIcon: <TbManualGearbox />,
      heading: "Etat",
      labels: ["Excellent", "Trés bon", "Bon", "Endommagé", "Pour pièces"],
    },
    origin: {
      classIcon: <TbManualGearbox />,
      heading: "Origine",
      labels: [
        "Dédouanéee",
        "Pas encore dédouanéee",
        "WW au Maroc",
        "Importéee neuve",
      ],
    },
    NumberOfdoors: {
      classIcon: <TbManualGearbox />,
      heading: "Numbre de portes",
      labels: [1, 2],
    },
    FirstHand: {
      classIcon: <TbManualGearbox />,
      heading: "Première  main",
      labels: ["Oui", "Non"],
    },
  };
  return (
    <div>
      <CarCriteria {...detailsCriterias.fuel} />
      <CarCriteria {...detailsCriterias.gearBox} />
      <CarCriteria {...detailsCriterias.State} />
      <CarCriteria {...detailsCriterias.origin} />
      <CarCriteria {...detailsCriterias.NumberOfdoors} />
      <CarCriteria {...detailsCriterias.FirstHand} />
      <div>
        <h3>Information de l'annonce</h3>
        <p>
          Une annonce avec un prix exacte et une description bien détaillé a 10
          fois plus de visibilité
        </p>
        <div>
          <label>Prix</label>
          <input type="number" />
        </div>
        <div>
          <label>Titre de l'annonce</label>
          <input type="text" />
        </div>
        <div>
          <label>Texte de l'annonce</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Form;
