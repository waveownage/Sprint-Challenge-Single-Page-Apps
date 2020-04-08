import React from "react";
import styled from "styled-components";

export default function SearchForm(props) {
  const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin-left: 30%;
    margin-right: 30%;
    font-size: 1.2rem;
  `;
  return (
    <StyledSection>
      Search Characters
      <input
        id="search-box"
        value={props.text}
        onChange={e => {
          console.log(e.target.value);
          props.onSearchUpdate(e.target.value);
        }}
      />
    </StyledSection>
  );
}
