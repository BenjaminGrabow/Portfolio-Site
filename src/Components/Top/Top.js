import React from 'react';
import avatar from './myAvatar.png';
import styled from 'styled-components';

const StyledTop = styled.div`
height:100vh;
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 3rem;

h1 {
  margin: 0;
}

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
        <img src={avatar} alt="own avatar" />
        <h1>Benjamin Grabow</h1>
        <p>Full Stack Developer</p>
        <button
          className="startButton">SEE PROJECTS</button>
      </StyledTop>
    );
  }
}

export default Top;