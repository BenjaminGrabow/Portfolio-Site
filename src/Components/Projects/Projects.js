import React from "react";
import Card from "./Card";
import useTech from "./useTech.gif";
import styled from "styled-components";

const StyledProjects = styled.div`

.projects {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 1rem;
  width: 30%;
}
`;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledProjects>
        <h1>Projects</h1>
        <div className="projects">
          <Card
            className="card"
            header="Befit - Workout Tracker"
            gif={useTech}
            code_link="https://github.com/labseu2-workout-tracker"
            project_link="www.befittracker.com"
            main-text=""
          />
          <Card
            className="card"
            header="Bookr - Ebay for books"
            gif={useTech}
            code_link="https://github.com/labseu2-workout-tracker"
            project_link="www.befittracker.com"
            main-text=""
          />
          <Card
            className="card"
            header="Use My Tech Stuff"
            gif={useTech}
            code_link="https://github.com/BenjaminGrabow/Use-My-Tech-Stuff"
            project_link="https://dreamy-almeida-7517a0.netlify.com/"
            main-text=""
          />
          <Card
            className="card"
            header="Top Nine Friends"
            gif={useTech}
            code-link=""
            project-link="https://hungry-kalam-7b7bce.netlify.com"
            main-text=""
          />
        </div>
      </StyledProjects>
    );
  }
}

export default Projects;
