import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;

  .image {
    width: 50%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 220px;
    }
  }

  .text {
    width: 50%;
  }

  .icons {
    i {
      color: "white";
      font-size: "1.5rem";
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
