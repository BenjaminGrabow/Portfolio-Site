import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSingleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  .img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .techstack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    img {
      width: 12%;
      height: 5rem;
    }
  }

  .img {
    height: 10rem;
    border: 1rem solid black;
    width: 30%;
    margin: 5rem 0;
    img {
      height: 10rem;
    }
  }

  p {
    color: #73737d;
  }

  .laptop {
    width: 50rem;
    position: relative;
    &:before {
      background: #222;
      display: block;
      content: "";
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      top: 0.7rem;
      left: 24.5rem;
      z-index: 1000;
    }
    &:after {
      display: block;
      content: "";
      position: absolute;
      width: 95%;
      margin-left: 2.5%;
      height: 0.75rem;
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
      border-radius: 5rem;
    }
  }
  .upper-laptop {
    width: 40rem;
    height: 23rem;
    border: 2px solid #eaeaea;
    border-bottom: none;
    border-radius: 1.5rem 1.5rem 0 0;
    margin-left: 5rem;
    box-shadow: inset 0 0 2px 2px #222;
    position: relative;
  }

  .lower-laptop {
    width: 50rem;
    height: 2rem;
    background: #eaeaea;
    border-radius: 2px;
    position: relative;
    &:before {
      display: block;
      content: "";
      position: absolute;
      width: 10rem;
      height: 0.8rem;
      background: #a1a1a1;
      left: 20rem;
      top: 0;
      border-radius: 0 0 0.25rem 0.25rem;
    }
    &:after {
      display: block;
      content: "";
      position: absolute;
      width: 100%;
      height: 0.75rem;
      background: #bababa;
      top: 2rem;
      border-bottom-right-radius: 7.5rem 2.5rem;
      border-bottom-left-radius: 7.5rem 2.5rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const SingleCard = props => {
  const {
    img,
    header,
    text,
    techstack,
    features,
    code_link,
    project_link,
    techArray
  } = props;
  return (
    <StyledSingleCard>
      <div className="img-container">
        <div className="laptop">
          <div
            className="upper-laptop"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="lower-laptop"></div>
        </div>

        <div className="techstack">
          {techArray.map(img => (
            <img src={img} alt="tech" />
          ))}
        </div>
      </div>
      <div className="text">
        <h1>{header}</h1>
        <p>{text}</p>
        <p>{techstack}</p>
        <p>{features}</p>
        <div className="icons">
          <a href={code_link}>
            <i className="fa fa-github" />
          </a>
          <a href={project_link}>
            <i className="fa fa-internet-explorer" />
          </a>
        </div>
      </div>
      <Link to="/">Back</Link>
    </StyledSingleCard>
  );
};

export default SingleCard;
