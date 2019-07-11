import React from 'react';
import Top from '../Top/Top';
import Middle from '../Middle/Middle';
// import BottomMiddle from '../Middle/BottomMiddle';
import Projects from '../Projects/Projects';

const ContainerHome = () => {
  return (
    <div>
      <Top />
      <Middle />
      {/* <BottomMiddle /> */}
      <Projects />
    
    </div>
  );
}

export default ContainerHome;