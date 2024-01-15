import React,{useState, useEffect} from 'react'
import style from "../style.module.css"
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faInstagram, faLinkedinIn, faStar)
function Home() {
    const [myName, setMyName] = useState("")
    const [index,setIndex] = useState(0)
    const name = " Melike Işık"
   
    useEffect(() =>{
        function writeMyName() {
            setMyName((prev) => prev + name[index])
            setIndex((prev) => prev + 1 )       
        }
        if(index < name.length ){
            let addChar = setInterval(writeMyName, 300);
            return () => clearInterval(addChar)
        }
    },[myName])
;
  return (
    <div>
        <div className={style.header}>
            <div className={style.headerIcon}>
                <FontAwesomeIcon icon="fa-solid fa-star" />
            </div>
            <div className={style.headerList}>
                <ul>
                    <li>
                        <Link style={{textDecoration:"none", color:"#fff"}}>Anasayfa</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none", color:"#fff"}}>Hakkımda</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none", color:"#fff"}}>Deneyimlerim</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none", color:"#fff"}}>İletişim</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={style.home}>
            <div className={style.homeBackground}></div>
            <div className={style.homeContainer}>
                <p>{myName}</p>
                <div className={style.socialMediaContainer}>
                    <div>
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
