import React from 'react';
import blocks from './blocks.jpg';
import styled from 'styled-components';

const StyledBottomMiddle = styled.div`
clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
background-image: url(${blocks});
}

.column {
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  background: white;
  margin: 1rem;
  transition: .8s;

&:hover {
 width: 30%;
}
}

p {
  margin: 0%;
}
`;

const BottomMiddle = () => {
  return ( 
    <StyledBottomMiddle>
<div 
className="row">
  <div 
  className="column">
    {/* <img src={} alt="" /> */}
    <h4>Front End</h4>
    <p>HTML5</p>
    <p>CSS3 | SASS</p>
    <p>Javascript</p>
    <p>REACT | REDUX</p>
  </div>
  <div
  className="column">
     {/* <img src={} alt="" /> */}
    <h4>SERVER</h4>
    <p>NodeJS</p>
    <p>Express</p>
    <p>Koa</p>
    <p>Python</p>
  </div>
  <div
  className="column">
     {/* <img src={} alt="" /> */}
    <h4>DATABASE</h4>
    <p>PostgreSQL</p>
    <p>mySQL</p>
    <p>MongoDB</p>
    <p>Cassandra</p>
  </div>
  <div
  className="column">
     {/* <img src={} alt="" /> */}
    <h4>Deployment</h4>
    <p>Systemic Design</p>
    <p>AWS ECS | SQS</p>
    <p>Docker</p>
    <p>Git</p>
  </div>
</div>
    </StyledBottomMiddle>
   );
}
 
export default BottomMiddle;