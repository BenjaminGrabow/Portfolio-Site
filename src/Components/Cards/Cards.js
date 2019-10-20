import React from "react";
import Card from "./Card";
import cardInfo from "./cardInfo";

const Cards = () => {
  return (
    <div className="projects">
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
    </div>
  );
};

export default Cards;
