import React from 'react';
import Top from '../Top/Top';
import Middle from '../Middle/Middle';
// import BottomMiddle from '../Middle/BottomMiddle';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const ContainerHome = () => {
  return (
    <div>
      <Top />
      <Middle />
      {/* <BottomMiddle /> */}
      <Projects />
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default ContainerHome;