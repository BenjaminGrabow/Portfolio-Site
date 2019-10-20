import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right-side {
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      margin: .5rem;
    }
  }
`;

const routes = [
  "befit",
  "bookr",
  "use_my_tech",
  "visualize_algorithm",
  "speedreader",
  "top_nine"
]; // array for navlinks and routes
// add to app.js as route and as link in card

// research in old projects about passing props
// pass all props from main component cards
//
// routes.map(project => <Route path={`/${project}`} component={(props) =>  <SingleCard {...props}
//  title={title} img={img} text={text} techstack={techstack} feature={feature} />} />);

const Footer = () => {
  return (
    <StyledFooter>
      <div className="left-side">
        <p>Copyright Benjamin Grabow</p>
        <p>2019</p>
      </div>

      <div className="right-side">
        <i class="fab fa-linkedin" />
        <i className="fa fa-twitter" />
        <i className="fa fa-envelope" />
        <i className="fa fa-github" id="box" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
