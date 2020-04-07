import React from "react";

const CharacterCard = props => {
  return (
  <li>
      <p>Name: {props.name}</p>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
  </li>
  );
};

export default CharacterCard;
