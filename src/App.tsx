import "./index.css";
import { useState } from "react";
import GetJoke from "./components/GetJoke";
import PredictAge from "./components/GetPregictAge";
import GetTranslation from "./components/GetTranslation";

function App() {
  const [joke, setJoke] = useState("");

  return (
    <div className="wrapper">
      {/* <GetJoke joke={joke} onSetJoke={setJoke} />
      <PredictAge /> */}
      <GetTranslation />
    </div>
  );
}

export default App;
