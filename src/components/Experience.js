import React from 'react'
import style from "../style.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircle } from '@fortawesome/free-solid-svg-icons'
library.add( faCircle)
function Experience() {
  return (
    <div className={style.experince}>
      <div className={style.pageTitle}>
        <span>Deneyimlerim</span>
      </div>
      <div className={style.seperate}>
            <div>-</div>
        </div>
      <div className={style.experinceContainer}>
        <div className={style.experinceBox}>
            <div className={style.companyBox}>
                <h2 >DamaSistem Ltd. Şti.</h2>
                <a target='_blank' href='https://www.damasistem.com/'>www.damasistem.com</a>
            </div>
            <div className={style.experinceSeperate}>
                <div style={{position:"relative"}}>
                    <FontAwesomeIcon style={{color:"#2196f3", position:"absolute", top:"20px",fontSize:"20px"}} icon="fa-circle" />
                    <div style={{position:"absolute", backgroundColor:"#fff",width:"15px", height:"15px", borderRadius:"999px",top:"22.5px", left:"3px"}}></div>
                    <div style={{backgroundColor:"#2196f3",width:"0.5px" , height:"100px", position:"absolute",left:"10px",top:"40px"}}/>
                </div>
            </div>
            <div className={style.positionBox}>
                <div className={style.positionName}>
                    <h2 >Intern</h2>
                    <span style={style.positionClock}>
                        Flutter ve Dart dilini kullanarak uygulama geliştirme alanında çalışmalarda bulunulmuştur. 
                    </span>
                </div>
            </div>
        </div>
        <div className={style.experinceBox}>
            <div className={style.companyBox}>
                <h2 >ISSD Bilişim Elektronik AŞ.</h2>
                <a target='_blank' href='https://www.issd.com.tr/'>www.issd.com.tr</a>
            </div>
            <div className={style.experinceSeperate}>
                <div style={{position:"relative"}}>
                    <FontAwesomeIcon style={{color:"#2196f3", position:"absolute",top:"20px", fontSize:"20px"}} icon="fa-circle" />
                    <div style={{position:"absolute", backgroundColor:"#fff",width:"15px", height:"15px", borderRadius:"999px",top:"22.5px", left:"3px"}}></div>
                    <div style={{backgroundColor:"#2196f3",width:"0.5px" , height:"100px", position:"absolute",left:"10px",top:"40px"}}/>
                </div>
            </div>
            <div className={style.positionBox}>
                <div className={style.positionName}>
                    <h2 >Intern</h2>
                    <span style={style.positionClock}>
                        JavaScript dili kullnarak MQTT haberleşme protokolü geliştirilmiştir. 
                    </span>
                </div>
            </div>
        </div>
        <div className={style.experinceBox}>
            <div className={style.companyBox}>
                <h2 >Tübitak Uzay Teknolojileri Araştırma Ensitüsü</h2>
                <a target='_blank' href='https://uzay.tubitak.gov.tr/'>uzay.tubitak.gov.tr</a>
            </div>
            <div className={style.experinceSeperate}>
                <div style={{position:"relative"}}>
                <FontAwesomeIcon style={{color:"#2196f3", position:"absolute", top:"20px",fontSize:"20px"}} icon="fa-circle" />
                    <div style={{position:"absolute", backgroundColor:"#fff",width:"15px", height:"15px", borderRadius:"999px",top:"22.5px", left:"3px"}}></div>
                    <div style={{backgroundColor:"#2196f3",width:"0.5px" , height:"120px", position:"absolute",left:"10px",top:"40px"}}/>
                </div>
            </div>
            <div className={style.positionBox}>
                <div className={style.positionName}>
                    <h2 >Intern</h2>
                    <span style={style.positionClock}>
                        Python dili kullnarak Tübitak Uzay’ın “Balistika Projeleri” alanında yapay zeka, veri madenciliği 
                        ve görüntü işleme alanlarında çalışmalarda bulunulmuştur.
                    </span>
                </div>
            </div>
        </div>
        <div className={style.experinceBox}>
            <div className={style.companyBox}>
                <h2 >Tübitak Uzay Teknolojileri Araştırma Ensitüsü</h2>
                <a target='_blank' href='https://uzay.tubitak.gov.tr/'>uzay.tubitak.gov.tr</a>
            </div>
            <div className={style.experinceSeperate}>
                <div style={{position:"relative"}}>
                    <FontAwesomeIcon style={{color:"#2196f3", position:"absolute", top:"18px",fontSize:"20px"}} icon="fa-circle" />
                    <div style={{position:"absolute", backgroundColor:"#fff",width:"15px", height:"15px", borderRadius:"999px",top:"20.5px", left:"3px"}}></div>
                    <div style={{backgroundColor:"#2196f3",width:"0.5px" , position:"absolute",left:"10px",top:"40px"}}/>
                </div>
            </div>
            <div className={style.positionBox}>
                <div className={style.positionName}>
                    <h2 >Scholarship Holder</h2>
                    <span style={style.positionClock}>
                        Python dili kullnarak Tübitak Uzay’ın “Balistika Projeleri” alanında yapay zeka, veri madenciliği 
                        ve görüntü işleme alanlarında çalışmalarda bulunulmuştur.
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
