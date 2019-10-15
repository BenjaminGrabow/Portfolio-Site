import React from 'react';
import Top from '../Top/Top';
import Middle from '../Middle/Middle';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const ContainerHome = () => {
  return (
    <div>
      <Top />
      <Middle />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default ContainerHome;