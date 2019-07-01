import React from 'react';
import styled from 'styled-components';

const StyledBottom = styled.div`
height: 100vh;

.row {
  display: flex;
  justify-content: space-around;
}

.column {
  display: flex;
  flex-direction: column;
  width: 18%;
  position: relative;
}

.card {
  position: absolute;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  background: yellow;
  width: 100%;
  height: 100%;

&:hover {
  transform: rotateY(180deg);
}
}

.front {
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background: yellow;
  color: white;
}

.front {
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: yellow;
  color: white;
}
`;

const Bottom = () => {
  return ( 
    <StyledBottom>
<h2>Project Portfolio</h2>
<div className="row">
  <div
  className="column">
    <div className="card">
      <div className="front">
<h3>Use My Tech Stuff</h3>
<p>React</p>
<p>Redux</p>
<p>React Router</p>
<p>API</p>
  </div>
  <div className="back" >


  </div>
  </div>
  </div>
  <div
  className="column">
    <h3>Use My Tech Stuff</h3>
<p>React</p>
<p>Redux</p>
<p>React Router</p>
<p>API</p>
  </div>
  <div
  className="column">
    <h3>Use My Tech Stuff</h3>
<p>React</p>
<p>Redux</p>
<p>React Router</p>
<p>API</p>
  </div>
</div>
<div className="row">
  <div
  className="column">
<h3>Top Nine</h3>
<p>Javascript</p>
<p>HTML</p>
<p>CSS</p>
<p>LESS</p>
  </div>
  <div
  className="column">
    <h3>Top Nine</h3>
<p>Javascript</p>
<p>HTML</p>
<p>CSS</p>
<p>LESS</p>
  </div>
  <div
  className="column">
    <h3>Top Nine</h3>
<p>Javascript</p>
<p>HTML</p>
<p>CSS</p>
<p>LESS</p>
  </div>
</div>
    </StyledBottom>
   );
}
 
export default Bottom;