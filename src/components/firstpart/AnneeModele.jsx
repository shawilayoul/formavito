import React from "react";
import "./annééModel.css";
import { useState } from "react";
import ReusableButton from "../Button";
const AnneeModele = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [years, setYears] = useState("Sélectionner");

  const yearsList = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "1980 ou plus ancien",
  ];
  return (
    <div className="modeleContainer">
      <h3>Année-Modéle</h3>
      <div className="annee-select">
        <select onClick={() => setIsOpen(!isOpen)}>
          <option value="#">{years}</option>
        </select>
      </div>
      {/* the model start*/}
      {isOpen && (
        <div className="annéeModel">
          <div className="mode-head">
            <h3>Annéee-Modéle</h3>
            <div className="close-btn" onClick={() => setIsOpen(!isOpen)}>
              X
            </div>
          </div>
          <div className="search-bar">
            <input placeholder="Rechercher" />
          </div>
          <div className="years">
            <ul>
              {yearsList.map((year, index) => {
                return (
                  <div className="year-items">
                    <button  style={{padding:"8px", marginBottom:"5px"}}key={index} onClick={() => setYears(year)}>
                      {year}
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      {/* the model end*/}
    </div>
  );
};

export default AnneeModele;
