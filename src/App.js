import React from "react";
import "./App.css";
import Home from "./componantes/home/home";
import Header from "./componantes/header/header";
import NavBar from "./componantes/navBar/navBar";
import About from "./componantes/aboutMe/aboutMe";
import Portfolio from "./componantes/portfolio/portfolio";
import Footer from "./componantes/footer/footer";
import Contact from "./componantes/contact/contact";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
