import React from 'react';
import styled from 'styled-components';

const StyledBottom = styled.div`
height: 100vh;

.row {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
  width: 18%;
}
`;

const Bottom = () => {
  return ( 
    <StyledBottom>
<h2>Project Portfolio</h2>
<div className="row">
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
  </div>
  <div
  className="column">
    
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
    
  </div>
  <div
  className="column">
    
  </div>
</div>
    </StyledBottom>
   );
}
 
export default Bottom;