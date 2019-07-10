import React from 'react';
import ice from './ice.jpg';
import ContainerHome from './Components/ContainerHome/ContainerHome';
import Contact from './Components/Contact/Contact';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
/* background: #36D1DC; 
background: -webkit-linear-gradient(to left, #5B86E5, #36D1DC); 
background: linear-gradient(to left, #5B86E5, #36D1DC);  */
background-image: url(${ice});
`;

function App() {
  return (
    <StyledApp>
     <Route exact path="/" component={ContainerHome} />
     <Route path="/contact" component={Contact} />
    </StyledApp>
  );
}

export default App;
