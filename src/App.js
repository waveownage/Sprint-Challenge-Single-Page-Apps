import React from "react";
import axios from "axios";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  const StyledNav = styled.nav`
    display:flex;
    justify-content: center;
    justify-content: space-between;
    margin-left:30%;
    margin-right:30%;
    font-size: 1.5rem;
    margin-bottom: 5%;
    `;

  
  return (
    <main data-testid='app'>
      < Header/>
      <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/Characters">Characters</Link>
      </StyledNav>
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


