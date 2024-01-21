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
  const anasayfaRef = useRef(null);
  const hakkimdaRef = useRef(null);
  const deneyimRef = useRef(null);
  const iletisimRef = useRef(null);
  const pageNameList = ["Anasayfa", "Hakkımda", "Deneyimlerim", "İletişim"]
  const [scrollPosition, setScrollPosition] = useState(0)
  const [headerSticky, setHeaderSticky] = useState(false)
  const [page, setPage] = useState("")
  const [minPage , setMinPage] = useState(false)

  console.log(window.scrollY)
  const handleScroll = () =>{
    setScrollPosition(window.scrollY)
  }

  useEffect(() =>{
    setMinPage(false)
    window.innerWidth<800
        ? setMinPage(true)
        : setMinPage(false)
}, [])

  const scrollToSection = (section) =>{
    switch (section) {
      case 'anasayfa':
        anasayfaRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'hakkimda':
        hakkimdaRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case "deneyim":
        deneyimRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case "iletisim":
        iletisimRef.current.scrollIntoView({ behavior: 'smooth' });
        break
      default:
        break;
    }
  }
 
  useEffect(() =>{
    setHeaderSticky(false)
    setPage(pageNameList[0])
    window.addEventListener("scroll", handleScroll)
    return(() =>{
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])

  useEffect(() =>{
    setPage(pageNameList[0])
    if(minPage){
      switch (true) {
        case scrollPosition >=3000:
          setPage(pageNameList[3])
          break;
        case scrollPosition >= 2000:
          setPage(pageNameList[2]);
          break;
        case scrollPosition >= 100:
          setPage(pageNameList[1]);
          setHeaderSticky(true);
          break
        case scrollPosition >= 5:
          setHeaderSticky(true)
          setPage(pageNameList[0]);
          break;
        default:
          setHeaderSticky(false)
          break;
      }
    }else{
      switch (true) {
        case scrollPosition >=2200:
          setPage(pageNameList[3])
          break;
        case scrollPosition >= 1500:
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
    }

  }, [scrollPosition])


  return (
      <div>
        <Navbar scrollToSection={scrollToSection} sticky={headerSticky} page={page}/>
        <div>
          <div ref={anasayfaRef}>
            <Home scrollToSection={scrollToSection}/>
          </div>
          <div ref={hakkimdaRef}>
            <About scrollToSection={scrollToSection}/>
          </div>
          <div ref={deneyimRef}>
            <Experience/>
          </div>
          <div ref={iletisimRef}>
            <Contact/>
          </div>
          <div >
            <Footer/>
          </div>
        </div>
      </div>
  );
}

export default App;
