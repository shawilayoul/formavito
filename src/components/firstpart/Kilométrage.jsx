import React from "react";
import "./annééModel.css";
import { useState } from "react";
const Kilométrage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [years, setYears] = useState("Sélectionner");

  const yearsList = [
    "0-4 999",
    "5 000 - 9 999",
    "10 000 - 14 999",
    "15 000 - 19 999",
    "20 000 - 24 999",
    "25 000 - 29 999",
    "30 000 - 34 999",
    "35 000 - 39 999",
    "40 000 - 44 999",
    "450 000 - 499 999",
    "450 000 - 499 999",
    "plus de 500 000",
  ];
  return (
    <div className="modeleContainer">
      <h3>Kilométrage</h3>
      <div className="annee-select">
        <select onClick={() => setIsOpen(!isOpen)}>
          <option value="#">{years}</option>
        </select>
      </div>
      {/* the model start*/}
      {isOpen && (
        <div className="annéeModel">
          <div className="mode-head">
            <h3>Kilométrage</h3>
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

export default Kilométrage;
