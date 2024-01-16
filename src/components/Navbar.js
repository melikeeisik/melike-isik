import React from 'react'
import style from "../style.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

library.add(faStar)
function Navbar() {
  return (
    <div>
      <div className={style.header}>
            <div className={style.headerIcon}>
                <FontAwesomeIcon icon="fa-solid fa-star" />
            </div>
            <div className={style.headerList}>
                <ul>
                    <li>
                        <Link to="/" element={<Home/>} style={{textDecoration:"none", color:"#fff"}}>Anasayfa</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none", color:"#fff"}}>Hakkımda</Link>
                    </li>
                    <li>
                        <Link to="/about"  style={{textDecoration:"none", color:"#fff"}}>Deneyimlerim</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none", color:"#fff"}}>İletişim</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
