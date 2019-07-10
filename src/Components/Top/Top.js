import React from 'react';
import code from './code.jpg'
import Header from '../Header/Header';
import avatar from './myAvatar.png';
import styled from 'styled-components';

const StyledTop = styled.div`
background-image: url(${code});
background-position: center;
background-repeat: no-repeat; 
background-size: cover;
height: 100vh;

.top{
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 3rem;
font-family: "eurostile",sans-serif;
}

.row {
  display: flex;
  width: 100%;
}

.image {
  width: 50%;
  display: flex;
  justify-content: center;
}

img {
  border-radius: 5rem;
  margin-bottom: 1rem;
  height: 15rem;
}

.column {
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
}

@keyframes blink {
        0%{
                opacity: 0;
        }
        100%{
                opacity: 1;
        }
}
.typing::after {
        content: "";
        position: absolute;
        width: .1rem;
        height: 7rem;
        border-right: .2rem solid black;
        animation: blink 0.5s infinite ease;
}

h1 {
  color: #293347;
  color: white;
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

  componentDidMount = () => {
    const texts = ['Front-end', 'Back-end', 'Full Stack'];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {

            if (count === texts.length) {
                    count = 0;
            }

            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            document.querySelector('.typing').textContent = letter;
            if (letter.length === currentText.length) {
                    count++;
                    index = 0;
            }
            setTimeout(type, 350);
    }());
};
  render() {
    return (
      <StyledTop>
        <Header/>
        <div className="top">
        <div className="row">
          <div className="image">
        <img src={avatar} alt="own avatar" />
        </div>
        <div className="column">
        <h1 className="typing">Front-end, Back-end, Full Stack</h1>
        <h1> Developer</h1>
        </div>
        </div>
        <p>I design and code beautifully simple things, and I love what I do.</p>
        <button
          className="startButton">PROJECTS</button>
          </div>
      </StyledTop>
    );
  }
}

export default Top;