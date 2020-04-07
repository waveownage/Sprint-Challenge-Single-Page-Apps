import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response);
      setCharacter(response.data.results)
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {character.map(arr => {
        return (
          <ul>
            <CharacterCard
              name={arr.name}
              status={arr.status}
              species={arr.species}
              gender={arr.gender}
            />
          </ul>
        );
      })}
    </div>
  );
}
