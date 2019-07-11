import React from 'react';
import js from './js.png';
import nodejs from './nodejs.png';
import react from './react.png';
import styled from 'styled-components';

const Middle = styled.div`
  display: flex;
  width: 100%;
  /* padding: 1rem; */


.text {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

h3 {
  font-size: 2rem;
}

p { 
  font-size: 1.5rem;
  width: 75%;
}

.images {
  padding: 0 1rem;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.js {
border-radius: 50%;
}

img {
        width: 25%;
        height: 12rem;
        transition: .8s ease-in-out;

        &:hover {
          width: 35%;
          height: 17rem;
        }
}
`;

const TopMiddle = () => {
  return (
    <Middle>
          <div className="text">
          <h3>MOTIVATED TO PRODUCE RESULTS</h3>
          <p>As a tencious self-thaught-programmer,
            I use continous iteration to produce results
            quickly and continously improve products.
          </p>
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
          <div className="text">
          <h3>AN AGILE COLLABORATOR</h3>
          <p>I have contributed to open source projects, worked on
          engineering teams, and always stay attuned to the newest frameworks.
          </p>
          </div>
    </Middle>
  );
}

export default TopMiddle;