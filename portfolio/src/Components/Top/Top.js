import React from 'react';
import styled from 'styled-components';

const StyledTop = styled.div`
  text-align: center;
  background: url('https://media.giphy.com/media/1yMexMx6i6mtHBJoVr/giphy.gif');
  background-size:30%;
  clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
    /* background-repeat: none; */
    /* background-attachment: fixed; */
    height:100vh;
    width:100%;
    padding:0;
    margin:0;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;


.startButton {
border-radius: 2rem;
background: white;
width: 10%;
height: 3rem;
font-weight: 600;
}
`;

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <StyledTop>
        <h1>Benjamin Grabow</h1>
        <p>Full Stack Developer</p>
        <button
          className="startButton">SEE PROJECTS</button>
      </StyledTop>
    );
  }
}

export default Top;