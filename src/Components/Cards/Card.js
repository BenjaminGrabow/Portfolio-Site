import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  /* width: 100%; */

  .image {
    /* width: 50%; */
    height: 220px;
    /* display: flex;
    justify-content: center;
    align-items: center; */

    img {
      height: 220px;
      width: 70%;
      border: .8rem solid black;
    }
  }

  .text {
    width: 50%;

    p {
      color: #73737D;
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
`;

const Card = props => {
  const { img, header, text, code_link, project_link } = props;

  return (
    <StyledCard>
      <div className="image">
        <img src={img} alt={text} />
      </div>
      <div className="text">
        <h2>{header}</h2>
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
