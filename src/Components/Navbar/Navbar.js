import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 2.5rem;

.links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
}

a {
  text-decoration: none;
  /* margin-left: 1rem; */
  color: black;
}

.logo {
  text-align: center;
  background-color: black;
  color: white;
  width: 2rem;
  font-size: 2rem;
  font-weight: bold; 
}

i {
  font-size: 1.5rem;
}
`;

const Navbar = () => {
  return ( 
     <StyledNavbar>
              <div className="links">
         <div className="logo">
      <NavLink className="logo" to="/">B</NavLink>
           </div>               
      <NavLink to="/">PORTFOLIO</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
       </div>
       <div>
       <i className="fas fa-moon" />
       </div>
     </StyledNavbar>
   );
}

export default Navbar