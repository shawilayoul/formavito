import React from "react";
import "./annééModel.css";
import { useState } from "react";
const Marque = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [years, setYears] = useState("Sélectionner");

  const yearsList = [
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar",
    "Lifan",
    "Tata",
    "Changhe",
    "Chery",
    "GAz",
  ];
  return (
    <div className="modeleContainer">
      <h3>Marque</h3>
      <div className="annee-select">
        <select onClick={() => setIsOpen(!isOpen)}>
          <option value="#">{years}</option>
        </select>
      </div>
      {/* the model start*/}
      {isOpen && (
        <div className="annéeModel">
          <div className="mode-head">
            <h3>Marque</h3>
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

export default Marque;
