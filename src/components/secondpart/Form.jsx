import React from "react";

const Form = () => {
  return (
    <div>
      <h3>Information de l'annonce</h3>
      <p>
        Une annonce avec un prix exacte et une description bien détaillé a 10
        fois plus de visibilité
      </p>
      <form action="#">
        <div>
          <label htmlFor="prix">Prix</label>
          <input type="number" id="prix" />
        </div>
        <div>
          <label htmlFor="prix">Titre de l'annonce</label>
          <input type="text" id="prix" />
        </div>
        <div>
          <label htmlFor="prix">Text de l'annonce</label>
          <input type="textarea" id="prix" />
        </div>
      </form>
    </div>
  );
};

export default Form;
