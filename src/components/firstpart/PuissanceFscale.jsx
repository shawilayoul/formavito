import React from "react";
import "./annééModel.css";
import { useState } from "react";
const PuissanceFscale = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [years, setYears] = useState("Sélectionner");

  const yearsList = [
    "4 Cv",
    "5 Cv",
    "6 Cv",
    "7 Cv",
    "8 Cv",
    "9 CV",
    "10 CV",
    "11 Cv",
    "12 Cv",
    "39 Cv",
    "41 Cv",
    "Plus de 41 Cv",
  ];
  return (
    <div className="modeleContainer">
      <h3>Puissance Fscale</h3>
      <div className="annee-select">
        <select onClick={() => setIsOpen(!isOpen)}>
          <option value="#">{years}</option>
        </select>
      </div>
      {/* the model start*/}
      {isOpen && (
        <div className="annéeModel">
          <div className="mode-head">
            <h3>Puissance Fscale</h3>
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
                    <button
                      style={{ padding: "8px", marginBottom: "5px" }}
                      key={index}
                      onClick={() => setYears(year)}
                    >
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

export default PuissanceFscale;
