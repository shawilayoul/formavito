import { useState } from "react";
import Critere from "./components/firstpart/Critere";
import AnneeModele from "./components/firstpart/AnneeModele";
import Form from "./components/Form";
import FirstPart from "./components/firstpart/FirstPart";
function App() {
  return (
    <div>
      <FirstPart/>
      {/*<Critere/>*/}
      <Form/>
    </div>
  );
}

export default App;
