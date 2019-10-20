import React from 'react';
import Card from "./Card";
import workout from "../Projects/gifs/workout.gif"

const Cards = () => {
  return ( 
    <div className="projects">
    <Card
              header="Befit - Workout Tracker"
              img={workout}
              code_link="https://github.com/labseu2-workout-tracker"
              project_link="https://www.befittracker.com"
              text="Befit enables users to record and track their workout
               / exercise activities."
             sub_text_one="Contributed to developing the frontend and backend of the project using NodeJs, Express, React,
              Redux, Styled-Components, Postgres SQL, ANT Design"
              sub_text_two="login / register / create workout / pie charts and
              calendar which tracks sport visits /
              / user settings / exercise library / search exercises / 
              start workout / add workout to my workout list /"
            />
            </div>
   );
}
 
export default Cards;