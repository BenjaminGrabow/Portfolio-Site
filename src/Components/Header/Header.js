import React from 'react';
import logo from './logo.png';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

a {
  text-decoration: none;
  border: .1rem solid #293347;
  border-radius: 3rem;
  height: 3rem;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #293347;
  font-weight: 600;

  &:hover {
    background: #a6e3e9;
  }
}
`;


const Header = () => {
  return ( 
    <StyledHeader>
<img src={logo} alt="own logo" /> 
<a href="/contact">Contact Me</a>
    </StyledHeader>
   );
}
 
export default Header;