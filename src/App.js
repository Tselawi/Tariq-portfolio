import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Home />
      <Header />
      <About />
      <Contact />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
