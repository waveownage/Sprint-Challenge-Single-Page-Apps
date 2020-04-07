import React from "react";
import axios from "axios";
import CharacterList from "./components/CharacterList"

export default function App() {
  return (
    <main data-testid='app'>
      <CharacterList />
    </main>
  );
}

axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));


