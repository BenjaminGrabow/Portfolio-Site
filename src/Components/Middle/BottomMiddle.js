import React from 'react';
import styled from 'styled-components';

const StyledBottomMiddle = styled.div`
clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  text-align: center;
  background: white;
}

.column {
  width: 10%;
  height: 30%;
  margin: 0 2rem;
  transition: .8s;

  &:hover {
 margin-bottom: 4rem;
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
    <div className="text">
    {/* <img src={} alt="" /> */}
    <h4>Front End</h4>
    <p>HTML5</p>
    <p>CSS3 | SASS</p>
    <p>Javascript</p>
    <p>REACT | REDUX</p>
    </div>
  </div>
  <div
  className="column">
    <div className="text">
     {/* <img src={} alt="" /> */}
    <h4>SERVER</h4>
    <p>NodeJS</p>
    <p>Express</p>
    <p>Koa</p>
    <p>Python</p>
    </div>
  </div>
  <div
  className="column">
     <div className="text">
     {/* <img src={} alt="" /> */}
    <h4>DATABASE</h4>
    <p>PostgreSQL</p>
    <p>mySQL</p>
    <p>MongoDB</p>
    <p>Cassandra</p>
    </div>
  </div>
  <div
  className="column">
     <div className="text">
     {/* <img src={} alt="" /> */}
    <h4>Deployment</h4>
    <p>Systemic Design</p>
    <p>AWS ECS | SQS</p>
    <p>Docker</p>
    <p>Git</p>
    </div>
  </div>
</div>
    </StyledBottomMiddle>
   );
}
 
export default BottomMiddle;