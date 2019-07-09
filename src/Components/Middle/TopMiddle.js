import React from 'react';
import js from './js.png';
import nodejs from './nodejs.png';
import react from './react.png';
import styled from 'styled-components';

const StyledTopMiddle = styled.div`


.row {
  display: flex;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
  width: 100%;
}

.text {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

p { 
  width: 50%;
}

.images {
  /* padding-left: 3rem; */
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.js {
border-radius: 50%;
}

img {
        width: 20%;
        height: 8rem;
}
`;

const TopMiddle = () => {
  return (
    <StyledTopMiddle>
      <div
      className="row">
        <div
        className="column">
          <div className="text">
          <h3>MOTIVATED TO PRODUCE RESULTS</h3>
          <p>As a tencious self-thaught-programmer,
            I use continous iteration to produce results
            quickly and continously improve products.
          </p>
          <h3>AN AGILE COLLABORATOR</h3>
          <p>I have contributed to open source projects, worked on
          engineering teams, and always stay attuned to the newest frameworks.
          </p>
          </div>
        </div>
        <div
        className="images">
      <img
      className="js"
        src={js}
        alt="js" />
      <img
        src={nodejs}
        alt={nodejs} />
      <img
        src={react}
        alt="react" />
        </div>
        </div>
    </StyledTopMiddle>
  );
}

export default TopMiddle;