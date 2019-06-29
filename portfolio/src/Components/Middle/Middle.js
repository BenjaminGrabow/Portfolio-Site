import React from 'react';
import js from './js.png';
import nodejs from './nodejs.png';
import react from './react.png';
import styled from 'styled-components';

const StyledMiddle = styled.div`

.js {
border-radius: 50%;
}

img {
        width: 8%;
        height: 8rem;
}
`;

const Middle = () => {
  return (
    <StyledMiddle>
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
    </StyledMiddle>
  );
}

export default Middle;