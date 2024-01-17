import React from 'react'
import style from "../style.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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
                    <li>Anasayfa</li>
                    <li>Hakkımda</li>
                    <li>Deneyimlerim</li>
                    <li>İletişim</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
