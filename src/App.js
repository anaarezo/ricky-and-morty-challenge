import React, { useEffect, useState } from "react";

import rickyAndMortyAPI from "./services/index";
import "./App.css";

const App = () => {
  const [character, setCharacter] = useState([]);

  console.log("character", character);

  useEffect(() => {
    rickyAndMortyAPI
      .get("/character/1,2,3,4,5")
      .then((response) => {
        setCharacter(response.data);
        console.log("data", response.data);
      })
      .catch((err) => {
        console.error("Ops!!! Something is wrong" + err);
      });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <p>Hola, mundo!</p>
      {/* </header> */}

      {character.map((item, index) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default App;
