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
  const pageNameList = ["Anasayfa", "Hakkımda", "Deneyimlerim", "İletişim"]
  const [scrollPosition, setScrollPosition] = useState(0)
  const [headerSticky, setHeaderSticky] = useState(false)
 
  const [borderBottom , setBorderBottom] = useState("")
 
  const handleScroll = () =>{
    setScrollPosition(window.scrollY)
  }

  useEffect(() =>{
    setHeaderSticky(false)

    window.addEventListener("scroll", handleScroll)
    return(() =>{
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])

  useEffect(() =>{
    if(scrollPosition >= 80){
      setHeaderSticky(true)
    }else{
      setHeaderSticky(false)
    }
  }, [scrollPosition])


  return (
      <div>
        <Navbar sticky={headerSticky} />
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
