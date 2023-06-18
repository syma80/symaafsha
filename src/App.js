

import React, { Component } from 'react';

import Home from './Home';
import About from "./About";



import {
  HashRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Research from './research';
import Publication from './publication';
import Contact from './contact';




export default class App extends Component {
  
  

  render() {


    return (
      <Router>


        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publication" element={<Publication />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>



      </Router>


    )

  }
}
