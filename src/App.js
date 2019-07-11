import React from 'react';
import ContainerHome from './Components/ContainerHome/ContainerHome';
// import Contact from './Components/Contact/Contact';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
background: linear-gradient(45deg, rgb(106, 120, 209), rgb(0, 164, 189));
color: white;

`;

function App() {
  return (
    <StyledApp>
     <Route exact path="/" component={ContainerHome} />
     {/* <Route path="/contact" component={Contact} /> */}
    </StyledApp>
  );
}

export default App;