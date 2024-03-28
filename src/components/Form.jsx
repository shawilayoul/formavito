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
      labels: ["Dédouanéee", "Pas encore dédouanéee", "WW au Maroc", "Importéee neuve"],
    },
    NumberOfdoors:{
      classIcon: <TbManualGearbox />,
      heading: "Numbre de portes",
      labels: [1,2],
    },
    FirstHand:{
      classIcon: <TbManualGearbox />,
      heading: "Première  main",
      labels: ['Oui','Non'],
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
      
    </div>
  );
};

export default Form;
