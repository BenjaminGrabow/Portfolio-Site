import React from "react";
import Card from "./Card";
import workout from "../Projects/gifs/workout.gif";
import useTech from "../Projects/gifs/useTech.gif";
import bookr from "../Projects/gifs/bookr.gif";
import topnine from "../Projects/gifs/topnine.gif";

const Cards = () => {
  return (
    <div className="projects">
      <div className="card">
        <Card
          img={workout}
          header="Befit - Workout Tracker"
          project_link="https://www.befittracker.com"
          text="Befit enables users to record and track their workout
               / exercise activities."
          code_link="https://github.com/labseu2-workout-tracker"
          //  sub_text_one="Contributed to developing the frontend and backend of the project using NodeJs, Express, React,
          //   Redux, Styled-Components, Postgres SQL, ANT Design"
          //   sub_text_two="login / register / create workout / pie charts and
          //   calendar which tracks sport visits /
          //   / user settings / exercise library / search exercises /
          //   start workout / add workout to my workout list /"
        />
      </div>

      <div className="card">
        <Card
          header="Bookr - Ebay for books"
          img={bookr}
          code_link="https://github.com/BenjaminGrabow/Bookr"
          project_link="https://bookr-build-week.herokuapp.com/"
          text="Bookr aims to provide a safe, guaranteed,
              and efficient way to effortlessly sell and buy books."
          // sub_text_one="Contributed to developing the frontend and backend of the project using  NodeJs, Express, React,
          //    Redux, Styled-Components."
          // sub_text_two="login / register / rating system 
          //     / user settings / search article /
          //     update, delete, create new article / slider modus"
        />
      </div>
      <div className="card">
        <Card
          header="Use My Tech Stuff"
          img={useTech}
          code_link="https://github.com/BenjaminGrabow/Use-My-Tech-Stuff"
          project_link="https://dreamy-almeida-7517a0.netlify.com/"
          text="Use My Tech Stuff aims to provide a safe, guaranteed,
               and efficient way to effortlessly share professional tech equipment."
          // sub_text_one="Contributed to developing the frontend of the project using React,
          //      Redux, Styled-Components."
          // sub_text_two="login / register / rating system 
          //      / user settings / drag and drop for articles / search article /
          //      update, delete, create new article / slider modus"
        />
      </div>
      <div className="card">
        <Card // TODOOOOOOOO
          header="Algorithm Visualizer"
          img={useTech}
          code_link="https://github.com/BenjaminGrabow/Visualize-Algorithms"
          project_link="https://bookr-build-week.herokuapp.com/"
          text="Bookr aims to provide a safe, guaranteed,
              and efficient way to effortlessly share professional tech equipment."
          // sub_text_one="Contributed to developing the frontend of the project using React,
          //     Redux, Styled-Components."
          // sub_text_two="login / register / rating system 
          //     / user settings / drag and drop for articles / search article /
          //     update, delete, create new article / slider modus"
        />
      </div>

      <div className="card">
        <Card // TODOOOOOOOO
          header="SpeadReader"
          img={useTech}
          code_link="https://github.com/BenjaminGrabow/Visualize-Algorithms"
          project_link="https://bookr-build-week.herokuapp.com/"
          text="Bookr aims to provide a safe, guaranteed,
              and efficient way to effortlessly share professional tech equipment."
          // sub_text_one="Contributed to developing the frontend of the project using React,
          //     Redux, Styled-Components."
          // sub_text_two="login / register / rating system 
          //     / user settings / drag and drop for articles / search article /
          //     update, delete, create new article / slider modus"
        />
      </div>

      <div className="card">
        <Card // TODOOOOOOOO
          header="Top Nine Friends"
          img={topnine}
          code-link="https://github.com/BenjaminGrabow/Lambda-Build-Week"
          project-link="https://hungry-kalam-7b7bce.netlify.com"
          text="Bookr aims to provide a safe, guaranteed,
              and efficient way to effortlessly share professional tech equipment."
          // sub_text_one="Contributed to developing the frontend of the project using React,
          //     Redux, Styled-Components."
          // sub_text_two="login / register / rating system 
          //     / user settings / drag and drop for articles / search article /
          //     update, delete, create new article / slider modus"
        />
      </div>
    </div>
  );
};

export default Cards;
