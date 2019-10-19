import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`

`;

const Navbar = () => {
  return ( 
     <StyledNavbar>
              <div>
      <NavLink to="/contact">B</NavLink>
      <NavLink to="/contact">PORTFOLIO</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
       </div>
       <div>
      <i class="fa fa-moon"/>
       </div>
     </StyledNavbar>
   );
}

export default Navbar