import React from "react";
import Card from "./Card";
import cardInfo from "./cardInfo";
import styled from "styled-components";

const StyledCards = styled.div`
     

`;

const Cards = () => {
  return (
    <StyledCards>
      {cardInfo.map((project, index) => {
        return (<div key={index} className="card">
        <Card
          img={project.img}
          header={project.header}
          text={project.text}
          project_link={project.project_link}
          code_link={project.code_link}
        />
      </div>)
      } )}
    </StyledCards>
  );
};

export default Cards;
