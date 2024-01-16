import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './About'
import style from "../style.module.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faInstagram, faLinkedinIn)
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
