import React,{useState, useEffect} from 'react'
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
                    <a target='_self' href='https://github.com/melikeeisik'>
                        <FontAwesomeIcon color='#fff' icon="fa-brands fa-github" />
                    </a>
                    <a target='_self' href='https://www.instagram.com/melikee.isik/'>
                        <FontAwesomeIcon color='#fff' icon="fa-brands fa-instagram" />
                    </a>
                    <a target='_self' href='https://www.linkedin.com/in/melikeeisik/'>
                        <FontAwesomeIcon color='#fff' icon="fa-brands fa-linkedin-in" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
