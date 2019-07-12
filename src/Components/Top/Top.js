import React from 'react';
import water from './water.jpg';
import { connect } from 'react-redux';
import { showContact } from '../../store/actions';
import styled from 'styled-components';
import './Top.css';

const StyledTop = styled.div`
background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${water});
background-position: center;
background-repeat: no-repeat; 
background-size: cover;
height: 100vh;
color: white;

.header {
  display: flex;
justify-content: space-around;
align-items: center;
padding-bottom: 7rem;

h2 {
font-family: 'Permanent Marker', cursive;
font-size: 3rem;
}
}

.button {
  font-family: "eurostile",sans-serif;
  font-size: 1rem;
  text-decoration: none;
  border: .1rem solid white;
  border-radius: .5rem;
  height: 3.5rem;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  transition: .6s ease-in-out;

  &:hover {
    background: white;
    color: black;
  }
}

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


.column {
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
}

h1 {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

p {
  font-family: 'Montserrat', sans-serif;
}

`;

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  sendToSite = (e) => {
    console.log(e.target.name)
  };

  render() {
    return (

      <StyledTop>
        <div className="header">
          <h2>Benjamin</h2>
          <div className="icons">
      <div id="wrapper">
        <div 
        onClick={this.sendToSite}
        className="entypo-github box"
         id="github"/>
        <div 
        className="box" 
        id="twitter"
        onClick={this.sendToSite}
        >&#62217;</div>
        <div 
        className="entypo-chat box"
         id="message"
         onClick={this.props.showContact}></div>
        <div 
        className="box"
         id="linkedin"
         onClick={this.sendToSite}
         >&#62232;</div>
      </div>
      </div>
          <h2>Grabow</h2>
        </div>
        <div className="top">
          <div className="column">
            <h1>Full Stack</h1>
            <h1>Developer</h1>
          </div>
          <p>I design and code beautifully simple things, and I love what I do.</p>
          <a
            className="button"
            href="#projects">
            Projects
            </a>
        </div>
      </StyledTop>
    );
  }
}

export default connect(null, { showContact })(Top);