import React from 'react'
import style from "../style.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faInstagram, faLinkedinIn)
function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.socialMediaContainer}>
            <div style={{backgroundColor:"#000"}} className={style.socialMediaBox}>
                <a target='_self' href='https://github.com/melikeeisik'>
                    <FontAwesomeIcon style={{position:"absolute", top:"7px",left:"7px"}} color='#fff' icon="fa-brands fa-github" />
                </a>
            </div>
            <div style={{backgroundColor:"#d12f9a"}} className={style.socialMediaBox}>
                <a target='_self' href='https://www.instagram.com/melikee.isik/'>
                    <FontAwesomeIcon style={{position:"absolute", top:"7px",left:"8px"}} color='#fff' icon="fa-brands fa-instagram" />
                </a>
            </div>
            <div style={{backgroundColor:"#1275b1"}}  className={style.socialMediaBox}>
                <a target='_self' href='https://www.linkedin.com/in/melikeeisik/'>
                    <FontAwesomeIcon style={{position:"absolute", top:"7px",left:"8px"}} color='#fff' icon="fa-brands fa-linkedin-in" />
                </a>
            </div>
        </div>
        <div className={style.footerText}>
            Copyright © 2024 Melike Işık | Tüm Hakları Saklıdır.

        </div>
    </div>
  )
}

export default Footer
