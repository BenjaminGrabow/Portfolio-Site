import React from "react";
import me from "./me.jpg";
import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  
  .img-me {
    border-radius: 50%;
    border: 0.1rem solid black;
    width: 7.5rem;
    height: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 50%;
      width: 7rem;
      height: 7rem;
    }
  }

  .icons {
    i {
      color: black;
      font-size: 1.5rem;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="img-me">
        <img className="me" src={me} alt="me" />
      </div>

      <div className="text">
        <p>
          I’m Haja, Fullstack web developper. Ex-Dreamer 🤔 turned Builder 🛠. I
          code for fun 🥳, living 😎, and sharing. I write as I learn 🤓. I
          learn as a write ✍🏼.
        </p>
      </div>

      <div className="icons">
        <i className="fab fa-linkedin"/>
        <i className="fa fa-twitter" />
        <i className="fa fa-envelope" />
        <i className="fa fa-github" id="box" />
      </div>
    </StyledAbout>
  );
};

export default About;
