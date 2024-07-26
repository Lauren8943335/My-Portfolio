import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";
import Navbar from "./Components/Navbar.js";
import "./Components/App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


class App extends Component {
    render() {
      return (
        <Router ClassName="header">
          <Navbar />
          <Routes>
            <Route exact path="/" element ={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
      );
    }
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.createRoot(rootElement).render(<App />);