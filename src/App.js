import React from "react";
import ContainerHome from "./Components/ContainerHome/ContainerHome";
import cardInfo from "./Components/Cards/cardInfo";
import { Route } from "react-router-dom";
import "./App.css";
import SingleCard from "./Components/Cards/SingleCard/SingleCard";

function App() {
  return (
    <div>
      <Route exact path="/" component={ContainerHome} />
      {cardInfo.map((project, index) => (
        <Route
        key={index}
          path={`/${project.header.split(" ").join("_")}`}
          render={() => (
            <SingleCard
              img={project.img}
              header={project.header}
              text={project.text}
              techstack={project.techstack}
              features={project.features}
            />
          )}
        />
      ))}
    </div>
  );
}

export default App;
