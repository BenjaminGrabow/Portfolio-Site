import React from "react";
import Card from "./Card";
import useTech from "./gifs/useTech.gif";
import workout from "./gifs/workout.gif";
import bookr from "./gifs/bookr.gif";
import topnine from "./gifs/topnine.gif";
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
    display: flex;
    justify-content: center;
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
              project_link="https://www.befittracker.com"
              main_text="Befit aims to enables users to record and track their workout
               / exercise activities whether they are in the gym or just doing regular outdoor exercises."
             sub_text_one="Contributed to developing the frontend and backend of the project using NodeJs, Express, React,
              Redux, Styled-Components, Postgres SQL, ANT Design"
              sub_text_two="login / register / create workout / pie charts and
              calendar which tracks sport visits /
              / user settings / exercise library / search exercises / 
              start workout / add workout to my workout list /"
            />
          </div>
          <div className="card">
            <Card
              header="Bookr - Ebay for books"
              gif={bookr}
              code_link="https://github.com/BenjaminGrabow/Bookr"
              project_link="https://bookr-build-week.herokuapp.com/"
              main_text="Bookr aims to provide a safe, guaranteed,
              and efficient way to effortlessly sell and buy books."
             sub_text_one="Contributed to developing the frontend and backend of the project using  NodeJs, Express, React,
             Redux, Styled-Components."
              sub_text_two="login / register / rating system 
              / user settings / search article /
              update, delete, create new article / slider modus"
            />
          </div>
          <div className="card">
            <Card
              header="Use My Tech Stuff"
              gif={useTech}
              code_link="https://github.com/BenjaminGrabow/Use-My-Tech-Stuff"
              project_link="https://dreamy-almeida-7517a0.netlify.com/"
              main_text="Use My Tech Stuff aims to provide a safe, guaranteed,
               and efficient way to effortlessly share professional tech equipment."
              sub_text_one="Contributed to developing the frontend of the project using React,
               Redux, Styled-Components."
               sub_text_two="login / register / rating system 
               / user settings / drag and drop for articles / search article /
               update, delete, create new article / slider modus"
            />
          </div>
          <div className="card">
            <Card // TODOOOOOOOO
              header="Algorithm Visualizer"
              gif={useTech}
              code_link="https://github.com/BenjaminGrabow/Visualize-Algorithms"
              project_link="https://bookr-build-week.herokuapp.com/"
              main_text="Bookr aims to provide a safe, guaranteed,
              and efficient way to effortlessly share professional tech equipment."
             sub_text_one="Contributed to developing the frontend of the project using React,
              Redux, Styled-Components."
              sub_text_two="login / register / rating system 
              / user settings / drag and drop for articles / search article /
              update, delete, create new article / slider modus"
            />
          </div>

          <div className="card">
            <Card // TODOOOOOOOO
              header="SpeadReader"
              gif={useTech}
              code_link="https://github.com/BenjaminGrabow/Visualize-Algorithms"
              project_link="https://bookr-build-week.herokuapp.com/"
              main_text="Bookr aims to provide a safe, guaranteed,
              and efficient way to effortlessly share professional tech equipment."
             sub_text_one="Contributed to developing the frontend of the project using React,
              Redux, Styled-Components."
              sub_text_two="login / register / rating system 
              / user settings / drag and drop for articles / search article /
              update, delete, create new article / slider modus"
            />
          </div>

          <div className="card">
            <Card // TODOOOOOOOO
              header="Top Nine Friends"
              gif={topnine}
              code-link="https://github.com/BenjaminGrabow/Lambda-Build-Week"
              project-link="https://hungry-kalam-7b7bce.netlify.com"
              main_text="Bookr aims to provide a safe, guaranteed,
              and efficient way to effortlessly share professional tech equipment."
             sub_text_one="Contributed to developing the frontend of the project using React,
              Redux, Styled-Components."
              sub_text_two="login / register / rating system 
              / user settings / drag and drop for articles / search article /
              update, delete, create new article / slider modus"
            />
          </div>

        </div>
      </StyledProjects>
    );
  }
}

export default Projects;
