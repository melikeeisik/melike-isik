import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    console.log("scrroll")
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log("add")
    return () => {
      console.log("remove")
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollPosition)

  return (
    <div>
      <Navbar/>
      {scrollPosition < 200 ? <Home /> : <About />}
    </div>
  );
}

export default App;
