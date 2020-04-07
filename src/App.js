import React from "react";
import Header from "./components/Header.js";
import axios from "axios";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
    </main>
  );
}

axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));


