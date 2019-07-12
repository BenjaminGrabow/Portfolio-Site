import React from 'react';
import useTech from './useTech.gif';
import styled from 'styled-components';

const StyledProjects = styled.div`
text-align: center;

.row {
  display: flex;
  justify-content: space-around;
  margin: 1.5rem;
}

.card {
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 100%;
  height: 100%;
  width: 70%;
  height: 30rem;
  position: relative;
  margin: 1rem;

&:hover {
  transform: rotateY(180deg);
}
}

.front {
display: flex;
justify-content: space-between;
position: absolute;
backface-visibility: hidden;
width: 100%; 
height: 100%;
/* background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
background-blend-mode: multiply,multiply;
color: white; */
box-shadow: 5px 5px 4px 5px white;
}

.left {
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
}

.middle {
 width: 60%;
 display: flex;
 align-items: center;
}


h3 {
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
}

.right {
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

img {
width: 100%;
height: 20rem;
}

.back {
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
  background: yellow;
  color: white;
  width: 100%;
  height: 100%;
}
`;

const Projects = () => {
  return (
    <StyledProjects>
      <h1>Project Portfolio</h1>
      <div
        id="projects"
        className="row">
        <div className="card">
          <div className="front">
            <div
              className="left">
              <h3>Use My Tech Stuff</h3>
            </div>
            <div
              className="middle">
              <img
                src={useTech}
                alt="Use My Tech Stuff gif" />
            </div>
            <div className="right">
              <p>React</p>
              <p>Redux</p>
              <p>React Router</p>
              <p>API</p>
            </div>
          </div>
          <div className="back" >
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <div className="front">
            <div
              className="left">
              <h3>Use My Tech Stuff</h3>
            </div>
            <div
              className="middle">
              <img
                src={useTech}
                alt="Use My Tech Stuff gif" />
            </div>
            <div className="right">
              <p>React</p>
              <p>Redux</p>
              <p>React Router</p>
              <p>API</p>
            </div>
          </div>
          <div className="back" >
          </div>
        </div>
      </div>
    </StyledProjects>
  );
}

export default Projects;