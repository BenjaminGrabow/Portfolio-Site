import React from 'react';
import useTech from './useTech.gif';
import styled from 'styled-components';

const StyledProjects = styled.div`
/* height: 100vh; */

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
  width: 90%;
  height: 35rem;
  position: relative;
  margin: 1rem;

&:hover {
  transform: rotateY(180deg);
}
}

.front {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
 background-blend-mode: multiply,multiply;
    color: white;
}

.left {
width: 35%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
}

.right {
width: 65%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

img {
  /* align-self: flex-end; */
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
      <h2>Project Portfolio</h2>
      <div
        id="projects"
        className="row">
          <div className="card">
            <div className="front">
              <div className="row">
              <div 
              className="left">
              <h3>Use My Tech Stuff</h3>
              </div>
                <div className="right">
              <p>React</p>
              <p>Redux</p>
              <p>React Router</p>
              <p>API</p>
              </div>
              </div>
              <img
                src={useTech}
                alt="Use My Tech Stuff gif" />
            </div>
            <div className="back" >
          </div>
        </div>
       
          <div className="card">
            <div className="front">
              <div 
              className="left">
              <h3>Use My Tech Stuff</h3>
              </div>
              <p>React</p>
              <p>Redux</p>
              <p>React Router</p>
              <p>API</p>
            </div>
            <div className="back" >
          </div>
        </div>

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

      <div className="row">
       
          <div className="card">
            <div className="front">
              <h3>Top Nine</h3>
              <p>Javascript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>LESS</p>
            </div>
            <div className="back">
            </div>
        </div>
       
          <div className="card">
            <div className="front">
              <h3>Top Nine</h3>
              <p>Javascript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>LESS</p>
            </div>
            <div className="back">
          </div>
        </div>
        
          <div className="card">
            <div className="front">
              <h3>Top Nine</h3>
              <p>Javascript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>LESS</p>
            </div>
            <div className="back">

            
          </div>
        </div>
      </div>
    </StyledProjects>
  );
}

export default Projects;