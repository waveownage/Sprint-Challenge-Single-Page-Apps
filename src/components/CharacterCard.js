import React from "react";

const CharacterCard = props => {
  const character = props.character
  return (
  <li>
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin.name}</p>
  </li>
  );
};

export default CharacterCard;
