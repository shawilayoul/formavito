import { useState } from "react";
import Critere from "./components/firstpart/Critere";
import AnneeModele from "./components/firstpart/AnneeModele";
import Form from "./components/Form";
function App() {
  return (
    <div>
      <AnneeModele />
      {/*<Critere/>*/}
      <Form/>
    </div>
  );
}

export default App;
