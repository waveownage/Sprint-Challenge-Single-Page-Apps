import React from "react";
import axios from "axios";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import { Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main data-testid='app'>
      < Header/>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/Characters">Characters</Link>
      </nav>
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/Characters" component={CharacterList}/>
    </main>
  );
}

axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));


