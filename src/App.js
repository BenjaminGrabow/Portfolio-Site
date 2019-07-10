import React from 'react';
import Header from './Components/Header/Header';
import Top from './Components/Top/Top';
import TopMiddle from './Components/Middle/TopMiddle';
import BottomMiddle from './Components/Middle/BottomMiddle';
import Bottom from './Components/Bottom/Bottom';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
background: #f4f6f6;
`;

function App() {
  return (
    <StyledApp>
      <Header/>
     <Top/>
     <TopMiddle/>
     <BottomMiddle/>
     <Bottom />
    </StyledApp>
  );
}

export default App;
