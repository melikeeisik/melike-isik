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
  const [page, setPage] = useState("")
  const handleScroll = () =>{
    setScrollPosition(window.scrollY)
  }

  useEffect(() =>{
    setHeaderSticky(false)
    setPage(pageNameList[0])
    window.addEventListener("scroll", handleScroll)
    return(() =>{
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])

  console.log(scrollPosition)
  console.log("page",page)
  useEffect(() =>{
    setPage(pageNameList[0])
    switch (true) {
      case scrollPosition >=2500:
        setPage(pageNameList[3])
        break;
      case scrollPosition >= 1700:
        setPage(pageNameList[2]);
        break;
      case scrollPosition >= 600:
        setPage(pageNameList[1]);
        setHeaderSticky(true);
        break
      case scrollPosition >= 80:
        setHeaderSticky(true)
        setPage(pageNameList[0]);
        break;
      default:
        setHeaderSticky(false)
        break;
    }
  }, [scrollPosition])


  return (
      <div>
        <Navbar sticky={headerSticky} page={page}/>
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
