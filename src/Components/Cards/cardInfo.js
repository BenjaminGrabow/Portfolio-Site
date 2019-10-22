import workout from ".//gifs/workout.gif";
import useTech from "./gifs/useTech.gif";
import bookr from "./gifs/bookr.gif";
import topnine from "./gifs/topnine.gif";
import js from "./images/js.png";
import ant from "./images/ant.svg";
import nodejs from "./images/nodejs.png";
import python from "./images/python.png";
import react from "./images/react.png";
import styled from "./images/styled_components.png";
import postgress from "./images/postgress.png";
import html5 from "./images/html5.png";
import css from "./images/css.png";

const cardInfo = [
  {
    header: "Befit",
    img: workout,
    code_link: "https://github.com/labseu2-workout-tracker",
    project_link: "https://www.befittracker.com",
    text: `Befit enables users to record and track their workout
   / exercise activities.`,
    techstack: `Contributed to developing the frontend and backend of the project using NodeJs, Express, React,
  Redux, Styled-Components, Postgres SQL, ANT Design`,
    features: `login / register / create workout / pie charts and
  calendar which tracks sport visits /
  / user settings / exercise library / search exercises / 
  start workout / add workout to my workout list /`,
    techArray: [js, python, react, nodejs, postgress, styled, ant, html5]
  },
  {
    header: "Bookr",
    img: bookr,
    code_link: "https://github.com/BenjaminGrabow/Bookr",
    project_link: "https://bookr-build-week.herokuapp.com/",
    text: `Bookr aims to provide a safe, guaranteed,
      and efficient way to effortlessly sell and buy books.`,
    techstack: `Contributed to developing the frontend and backend of the project using  NodeJs, Express, React,
     Redux, Styled-Components.`,
    features: `login / register / rating system 
      / user settings / search article /
      update, delete, create new article / slider modus`,
    techArray: [js, react, nodejs, styled, html5]
  },

  {
    header: "Use My Tech Stuff",
    img: useTech,
    code_link: "https://github.com/BenjaminGrabow/Use-My-Tech-Stuff",
    project_link: "https://dreamy-almeida-7517a0.netlify.com/",
    text: `Use My Tech Stuff aims to provide a safe, guaranteed,
       and efficient way to effortlessly share professional tech equipment.`,
    techstack: `Contributed to developing the frontend of the project using React,
       Redux, Styled-Components.`,
    features: `login / register / rating system 
       / user settings / drag and drop for articles / search article /
       update, delete, create new article / slider modus`,
    techArray: [js, react, styled, html5]
  },

  {
    header: "Algorithm Visualizer",
    img: useTech,
    code_link: "https://github.com/BenjaminGrabow/Visualize-Algorithms",
    project_link: "https://bookr-build-week.herokuapp.com/",
    text: `Bookr aims to provide a safe, guaranteed,
      and efficient way to effortlessly share professional tech equipment.`,
    techstack: `Contributed to developing the frontend of the project using React,
      Redux, Styled-Components.`,
    features: `login / register / rating system 
      / user settings / drag and drop for articles / search article /
      update, delete, create new article / slider modus`,
    techArray: [js, react, nodejs, styled, html5]
  },

  {
    header: "SpeadReader",
    img: useTech,
    code_link: "https://github.com/BenjaminGrabow/Visualize-Algorithms",
    project_link: "https://bookr-build-week.herokuapp.com/",
    text: `Bookr aims to provide a safe, guaranteed,
      and efficient way to effortlessly share professional tech equipment.`,
    techstack: `Contributed to developing the frontend of the project using React,
      Redux, Styled-Components.`,
    features: `login / register / rating system 
      / user settings / drag and drop for articles / search article /
      update, delete, create new article / slider modus`,
    techArray: [js, react, nodejs, styled, html5]
  },

  {
    header: "Top Nine Friends",
    img: topnine,
    code_link: "https://github.com/BenjaminGrabow/Lambda-Build-Week",
    project_link: "https://hungry-kalam-7b7bce.netlify.com",
    text: `Bookr aims to provide a safe, guaranteed,
      and efficient way to effortlessly share professional tech equipment.`,
    techstack: `Contributed to developing the frontend of the project using React,
      Redux, Styled-Components.`,
    features: `login / register / rating system 
      / user settings / drag and drop for articles / search article /
      update, delete, create new article / slider modus`,
    techArray: [js, html5, css]
  }
];

export default cardInfo;
