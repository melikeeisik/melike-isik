import React from 'react'
import style from "../style.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faPhone, faLocationDot, faEnvelope)
function Contact() {
  return (
    <div className={style.contactPage}>
        <div className={style.contactTitle}>
            <span>Bana Ulaşın!</span>
        </div>
        <div className={style.contactText}>
            Projen için ücret teklifi almak, aklına takılan bir soruyu sormak ya da "Merhaba!" demek için
            mail ve sosyal medya adreslerimden bana ulaşabilirsin :).
        </div>
        <div className={style.seperate}>
            <div>-</div>
        </div>
        <div className={style.contactPlatform}>
            <div className={style.platform}>
                <FontAwesomeIcon style={{fontSize:"23px", color:"#2196f3"}} icon="fa-solid fa-phone" />
                <span>-</span>
            </div>
            <div className={style.platform}>
                <FontAwesomeIcon style={{fontSize:"23px", color:"#2196f3"}} icon="fa-solid fa-location-dot" /> 
                <span>Etimesgut/Ankara</span>
            </div>
            <div className={style.platform}>
                <FontAwesomeIcon style={{fontSize:"23px", color:"#2196f3"}} icon="fa-solid fa-envelope" />
                <a href='mailto:melikeisik933@gmail.com'>melikeisik933@gmail.com</a>
            </div>
        </div>
        
    </div>
  )
}

export default Contact
