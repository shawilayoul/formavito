import React from "react";
import { useState } from "react";
const Form = () => {
  const [data, setData] = useState({
    prix: 0,
    titre: "",
    text: "",
  });
  /* function to handel changes*/ 
  const handelChange = (e) => {
  const {value , name} = e.target;
  setData({
    ...data,
    [name]:value
  })
  };
  const handelSubmit = (e)=>{
    e.preventDefault()
    const {prix,titre, text} = data
    console.log(prix);
    console.log(titre);
    console.log(text)
  }
  return (
    <div>
      <h3>Information de l'annonce</h3>
      <p>
        Une annonce avec un prix exacte et une description bien détaillé a 10
        fois plus de visibilité
      </p>
      <form action="#">
        <div>
          <div>
            <label htmlFor="prix">Prix</label>
          </div>
          <input
            type="number"
            name="prix"
            value={data.prix}
            onChange={handelChange}
            id="prix"
          />
        </div>
        <div>
          <div>
            <label htmlFor="titre">Titre de l'annonce</label>
          </div>
          <input
            type="text"
            name="titre"
            value={data.titre}
            onChange={handelChange}
            id="titre"
          />
        </div>
        <div>
          <div>
            <label htmlFor="area">Text de l'annonce</label>
          </div>
          <textarea
            name="text"
            value={data.text}
            onChange={handelChange}
            id="area"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button onClick={handelSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
