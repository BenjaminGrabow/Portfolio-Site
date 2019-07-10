import React from 'react';
import avatar from './myAvatar.png';
import styled from 'styled-components';

const StyledTop = styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 3rem;
font-family: "eurostile",sans-serif;

h1 {
  color: #293347;
  margin: 0;
}

img {
  border-radius: 5rem;
  margin-bottom: 1rem;
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
    const texts = ['websites', 'illustration', 'hello'];
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
            setTimeout(type, 400);
    }());
};
  render() {
    return (
      <StyledTop>
        <h1 className="typing">Front-end and Back-end Developer</h1>
        <p>I design and code beautifully simple things, and I love what I do.</p>
        <img src={avatar} alt="own avatar" />
        <button
          className="startButton">PROJECTS</button>
      </StyledTop>
    );
  }
}

export default Top;