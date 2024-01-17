import React, { useState, useEffect, useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import './index.css'
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {



  return (
      <div>
        <Navbar />
        <div>
          <Home/>
          <About/>
          <Experience/>
          <Contact/>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
