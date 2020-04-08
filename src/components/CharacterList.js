import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log("Server Error", error);
        });
    };

    getCharacters();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  const filtered = characters.filter(
    c => c.name.toLowerCase().indexOf(searchText) > -1
  );
  return (
    <section className="character-list">
      <SearchForm
        text={searchText}
        onSearchUpdate={text => setSearchText(text.toLowerCase())}
      />
      {filtered.map(character => {
        return (
          <CharacterCard
            key={character.id}
            character={character}
          ></CharacterCard>
        );
      })}
    </section>
  );
}
