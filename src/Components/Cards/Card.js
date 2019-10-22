import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;

  .image {
    height: 220px;

    img {
      height: 220px;
      width: 70%;
      border: 0.4rem solid #73737d;
    }
  }

  .text {
    width: 50%;
    
    p {
      color: #73737d;
    }
  }
  
  .icons {
    display: flex;
    justify-content: center;
    i {
      color: black;
      font-size: 1.5rem;
      padding: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: black
  }
  `;

const Card = props => {
  const { img, header, text, code_link, project_link } = props;

  return (
    <StyledCard>
        <Link to={header.split(" ").join("_")} >
      <div className="image">
        <img src={img} alt={text} />
      </div>
        </Link>
      <div className="text">
        <Link to={`/${header.split(" ").join("_")}`}>
          <h2>{header}</h2>
        </Link>
        <p>{text}</p>
        <div className="icons">
          <a href={code_link}>
            <i className="fa fa-github" />
          </a>
          <a href={project_link}>
            <i className="fa fa-internet-explorer" />
          </a>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
