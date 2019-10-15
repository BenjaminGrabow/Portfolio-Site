import React from "react";
import Card from "./Card";
import useTech from "./useTech.gif";
import workout from "./workout.gif";
import bookr from "./bookr.gif";
import styled from "styled-components";

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
          <div className="card">
            <Card
              header="Befit - Workout Tracker"
              gif={workout}
              code_link="https://github.com/labseu2-workout-tracker"
              project_link="www.befittracker.com"
              main_text=""
            />
          </div>
          <div className="card">
            <Card
              header="Bookr - Ebay for books"
              gif={bookr}
              code_link="https://github.com/BenjaminGrabow/Bookr"
              project_link="https://bookr-build-week.herokuapp.com/"
              main-text=""
            />
          </div>
          <div className="card">
            <Card
              header="Use My Tech Stuff"
              gif={useTech}
              code_link="https://github.com/BenjaminGrabow/Use-My-Tech-Stuff"
              project_link="https://dreamy-almeida-7517a0.netlify.com/"
              main-text=""
            />
          </div>
          <div className="card">
            <Card
              header="Algorithm Visualizer"
              gif={useTech}
              code_link="https://github.com/BenjaminGrabow/Visualize-Algorithms"
              project_link="https://bookr-build-week.herokuapp.com/"
              main-text=""
            />
          </div>
          <div className="card">
            <Card
              header="Top Nine Friends"
              gif={useTech}
              code-link=""
              project-link="https://hungry-kalam-7b7bce.netlify.com"
              main-text=""
            />
          </div>
        </div>
      </StyledProjects>
    );
  }
}

export default Projects;
