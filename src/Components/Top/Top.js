import React from "react";
import water from "./water.jpg";
import { connect } from "react-redux";
import { showContact } from "../../store/actions";
import styled from "styled-components";
import "./Top.css";

const StyledTop = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${water});
  background-position: center;
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  height: 100vh;
  color: white;
 
  clip-path: circle(50% at 50% 50%);
  
  a {
    text-decoration: none;
    color: white;
  }

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 7rem;
  }

  .button {
    font-family: "eurostile", sans-serif;
    font-size: 1rem;
    text-decoration: none;
    border: 0.1rem solid white;
    border-radius: 0.5rem;
    height: 3.5rem;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    transition: 0.6s ease-in-out;

    &:hover {
      background: white;
      color: black;
    }
  }

  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-family: "eurostile", sans-serif;
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
    font-family: "Montserrat", sans-serif;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
  }

  .fa-linkedin {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    color: white;
    font-size: 2.5rem;
  }
`;

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledTop>
        <div className="header">
          {/* <div className="icons">
      <div id="wrapper">
     <a href="https://github.com/BenjaminGrabow">
        <div 
        className="entypo-github box"
         id="github"/></a>
        <div 
        className="box" 
        id="twitter"
        >&#62217;</div>
        <div 
        className="entypo-chat box"
         id="message"
         onClick={this.props.showContact}></div>
       <a href="https://www.linkedin.com/in/benjamin-grabow-4a477118a/">
         <div 
        className="box"
         id="linkedin"
         >&#62232;</div>
         </a> 
      </div>
      </div> */}
          <i className="fa fa-linkedin" />
          <i
            style={{ color: "white", fontSize: "1.5rem" }}
            className="fa fa-twitter"
          />
          <i
            style={{ color: "white", fontSize: "1.5rem" }}
            className="fa fa-envelope"
          />
          <i
            style={{ color: "white", fontSize: "1.5rem" }}
            className="fa fa-github"
            id="box"
          />
        </div>
        <div className="top">
          <div className="column">
            <h1>Full Stack</h1>
            <h1>Developer</h1>
          </div>
          <p>
            I design and code beautifully simple things, and I love what I do.
          </p>
          <a className="button" href="#projects">
            Projects
          </a>
        </div>
      </StyledTop>
    );
  }
}

export default connect(
  null,
  { showContact }
)(Top);
