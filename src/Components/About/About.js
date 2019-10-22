import React from "react";
import me from "./me.jpg";
import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  
  .img-text-container {
    display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 50%;
  }

  .img-me {
    border-radius: 50%;
    border: 0.05rem solid black;
    width: 6.5rem;
    height: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
    }
  }

  .text {
    width: 60%;
     padding-left: 1rem;

     color: #73737D;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    /* justify-self: flex-end; */
    width: 15%;
    i {
      color: black;
      font-size: 1.5rem;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="img-text-container">
      <div className="img-me">
        <img className="me" src={me} alt="me" />
      </div>

      <div className="text">
        <p>
          Hey I’m Ben, Fullstack Software Engineer. Passionate about Artificial intelligence 🤔 Blockchain 🛠. I
          love coding 🥳, learning 😎, and sharing. I write as I learn 🤓. I 
          learn as a write ✍🏼.
        </p>
      </div>
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
