import React, { useState, useEffect, useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
function App() {



  return (
      <div>
        <Navbar />
        <div>
          <Home/>
          <About/>
        </div>
      </div>
  );
}

export default App;
