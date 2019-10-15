import React from 'react';
import ContainerHome from './Components/ContainerHome/ContainerHome';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
     <Route exact path="/" component={ContainerHome} />
    </div>
  );
}

export default App;