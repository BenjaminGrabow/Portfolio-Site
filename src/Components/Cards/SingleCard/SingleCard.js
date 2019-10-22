import React from "react";
import styled from "styled-components";

const StyledSingleCard = styled.div``;

const SingleCard = props => {
  const {
    img,
    header,
    text,
    techstack,
    features,
    code_link,
    project_link
  } = props;
  return (
    <StyledSingleCard>
      <div className="img">
        <img src={img} alt={header} />
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
    </StyledSingleCard>
  );
};

export default SingleCard;
