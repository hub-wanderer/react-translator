import axios from "axios";
import { useState } from "react";

export default function PredictAge() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data.age);
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="ryan"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <p>Predicted Age: {predictedAge}</p>
    </>
  );
}
