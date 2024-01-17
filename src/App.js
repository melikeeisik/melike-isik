import React, { useState, useEffect, useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import './index.css'
import Experience from './components/Experience';
function App() {



  return (
      <div>
        <Navbar />
        <div>
          <Home/>
          <About/>
          <Experience/>
        </div>
      </div>
  );
}

export default App;
