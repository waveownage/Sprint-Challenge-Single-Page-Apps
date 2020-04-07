import React from "react";
import styled from "styled-components";

const CharacterCard = props => {
  const character = props.character;
  const StyledLi = styled.li`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 10%;
  `;
  return (
    <StyledLi>
      <div>
        <p>Name: {character.name}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
        <p>Origin: {character.origin.name}</p>
      </div>
      <img src={character.image} />
    </StyledLi>
  );
};

export default CharacterCard;
