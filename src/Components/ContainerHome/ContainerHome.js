import React from "react";
// import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import CardContainer from "../Cards/CardContainer";
import Footer from "../Footer/Footer";

const ContainerHome = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <CardContainer/>
      <Footer/>
    </div>
  );
}

export default ContainerHome;