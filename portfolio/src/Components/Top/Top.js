import React from 'react';
import coding from './coding.mp4';
import styled from 'styled-components';

const StyledTop = styled.div`
text-align: center;
clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
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
position: relative;

.bg-video {
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
z-index: -1;
opacity: .85;
overflow: hidden;
}

.bg-video__content {
height: 100%;
width: 100%;
-o-object-fit: cover;
object-fit: cover;
}

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
        <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
                        <source src={coding} type="video/mp4"/>
                        Your browser is not supported!
                    </video>
        </div>
        <h1>Benjamin Grabow</h1>
        <p>Full Stack Developer</p>
        <button
          className="startButton">SEE PROJECTS</button>
      </StyledTop>
    );
  }
}

export default Top;