import React from 'react';
import ice from './ice.jpg';
import Top from './Components/Top/Top';
import TopMiddle from './Components/Middle/TopMiddle';
import BottomMiddle from './Components/Middle/BottomMiddle';
import Bottom from './Components/Bottom/Bottom';
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
     <Top/>
     <TopMiddle/>
     <BottomMiddle/>
     <Bottom />
     <Route path="/contact" component={Contact} />
    </StyledApp>
  );
}

export default App;
