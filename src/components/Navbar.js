import React, { useEffect, useState } from 'react'
import style from "../style.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

function Navbar({sticky, page}) {
  const list = document.getElementsByTagName("li")
  console.log(page)
  useEffect(() =>{
    [...list].forEach(element => {
      if(element.innerHTML==page){
        element.style.borderBottom ="1.5px solid #2196f3"
      }else{
        element.style.borderBottom="none"
      }
    });
      
  },[page])


  return (
    <div>
      <div className={sticky ? style.headerSticky : style.header}>
            <div className={style.headerIcon}>
                <FontAwesomeIcon icon="fa-solid fa-star" />
            </div>
            <div className={style.headerList}>
                <ul>
                    <li >Anasayfa</li>
                    <li >Hakkımda</li>
                    <li >Deneyimlerim</li>
                    <li >İletişim</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
