import React from "react";
import "./annééModel.css";
import { useState } from "react";

const AnneeModele = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="modeleContainer">
      <h3>Année-Modéle</h3>
      <div className="annee-select">
        <select onClick={() => setIsOpen(!isOpen)}>
          <option value="#">Sélectionner</option>
        </select>
      </div>
      {/* the model start*/}
      {isOpen && (
        <div className="annéeModel">
          <div className="mode-head">
            <h3>Annéee-Modéle</h3>
            <div className="close-btn" onClick={()=> setIsOpen(!isOpen)}>X</div>
          </div>
          <div className="search-bar">
            <input placeholder="Rechercher" />
          </div>
          <div className="years">
            <div>
              <span>2024</span>
            </div>
            <div>
              <span>2023</span>
            </div>
            <div>
              <span>2022</span>
            </div>
            <div>
              <span>2021</span>
            </div>
            <div>
              <span>2020</span>
            </div>
            <div>
              <span>2019</span>
            </div>
            <div>
              <span>2018</span>
            </div>
            <div>
              <span>2017</span>
            </div>
            <div>
              <span>2016</span>
            </div>
            <div>
              <span>2015</span>
            </div>
            <div>
              <span>2014</span>
            </div>
            <div>
              <span>2013</span>
            </div>
            <div>
              <span>2012</span>
            </div>
            <div>
              <span>2011</span>
            </div>
            <div>
              <span>2010</span>
            </div>
            <div>
              <span>2009</span>
            </div>
            <div>
              <span>1980 ou plus ancien</span>
            </div>
          </div>
        </div>
      )}
      {/* the model end*/}
    </div>
  );
};

export default AnneeModele;
