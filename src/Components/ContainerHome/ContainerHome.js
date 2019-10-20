import React from "react";
// import Top from "../Top/Top";
// import Middle from "../Middle/Middle";
// import Projects from "../Projects/Projects";
// import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";

const ContainerHome = () => {
  return (
    <div>
      {/* <Top />
      <Middle />
      <Projects />
      <Contact/>
    <Footer/> */}
      <Navbar/>
      <About/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default ContainerHome;