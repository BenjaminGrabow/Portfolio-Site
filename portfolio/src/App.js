import React from 'react';
import Top from './Components/Top/Top';
import TopMiddle from './Components/Middle/TopMiddle';
import BottomMiddle from './Components/Middle/BottomMiddle';
import './App.css';

function App() {
  return (
    <div className="App">
     <Top/>
     <TopMiddle/>
     <BottomMiddle/>
    </div>
  );
}

export default App;
