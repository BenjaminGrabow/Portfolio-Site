import React from 'react';
import styled from 'styled-components';

const StyledProjects = styled.div`
height: 100vh;

.row {
  display: flex;
  justify-content: space-around;
  margin: 1.5rem;
}

.column {
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 15rem;
  position: relative;
  margin: 1rem;
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
</div>
<div className="row">
  <div className="column">
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
  <div
  className="column">
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
  <div
  className="column">
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
</div>
    </StyledProjects>
   );
}
 
export default Projects;