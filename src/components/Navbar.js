import React, { useEffect, useState , useRef} from 'react'
import style from "../style.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faBars} from '@fortawesome/free-solid-svg-icons'

library.add(faStar,faBars)

function Navbar({scrollToSection, sticky, page}) {
  const [screen, setScreen] = useState("")
  const list = document.getElementsByTagName("li")
  const [openMenu, setOpenMenu] = useState(false) 
  useEffect(() =>{
    const handleResize = () =>{
      setScreen(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  useEffect(() =>{
    [...list].forEach(element => {
      if(element.innerHTML==page){
        element.style.borderBottom ="1.5px solid #2196f3"
      }else{
        element.style.borderBottom="none"
      }
    });
      
  },[page])

  const handleMenu = () =>{
    setOpenMenu(true)
  }

  return (
    <div>
      <div className={sticky ? style.headerSticky : style.header}>
            <div className={style.headerIcon}>
                <FontAwesomeIcon icon="fa-solid fa-star" /> 
            </div>
            <div className={style.headerList}>
                <input type="checkbox" id='menu-toggle' className={style.menuToggle}/>
                <ul className={style.menu} style={{display:screen <800 && !openMenu  ? "none" :"flex" }} > 
                    <li onClick={() => scrollToSection("anasayfa")} >Anasayfa</li>
                    <li onClick={() => scrollToSection("hakkimda")} >Hakkımda</li>
                    <li onClick={() => scrollToSection("deneyim")} >Deneyimlerim</li>
                    <li onClick={() => scrollToSection("iletisim")} >İletişim</li>
                </ul>
                <label htmlFor='menu-toggle' onClick={handleMenu} className={style.mobileMenu}>
                  <FontAwesomeIcon icon="fa-solid fa-bars" /> 
                </label>
            </div>
        </div>
    </div>
  )
}

export default Navbar
