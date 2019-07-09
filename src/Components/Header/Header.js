import React from 'react';
import logo from './logo.png';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
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