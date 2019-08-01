import React from 'react';
import ContainerHome from './Components/ContainerHome/ContainerHome';
// import Contact from './Components/Contact/Contact';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
  /* background: linear-gradient(to right, #bdc3c7, #2c3e50); */
  background-color: #01485B;
  /* background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%); */
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