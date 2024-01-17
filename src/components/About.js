import React from 'react'
import style from "../style.module.css"

function About() {
  return (
    <div className={style.about} >
      <div className={style.aboutTitle}>
        <span>Hakkımda</span>
        <div className={style.seperate}>-</div>
      </div>
      <div className={style.cv}>
        <div className={style.picture}>
          <img src='https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs' alt='Profile Picture' />
        </div>
        <div className={style.cvText}>
          <div className={style.cvTitle}>Bilgisayar Mühendisi</div>
          <div className={style.cvSubtitle}>
            28 Mart 2001'de Ankara ilinde doğdum.İlköğretim dönemimi burada tamamlamamın ardından Fatih Anadolu Lisesini kazanarak lise hayatıma başladım.
            Lise dönemi ardından Selçuk Üniversitesi Bilgisayar Mühendisliği bölümüne girmeye hak kazandım. 2019 yılında Elektrik-Elektronik Mühendisliğine de başvurarak çift anadal öğrencisi oldum. 2023 ağustos ayı itibariyle üniversite eğitimimi tamamladım.
            Mezuniyetimin hemen ardından Selçuk Üniversitesi'nde Bilgisayar Mühendisliği için yüksek lisans'a başladım ve şuan eğitimime devam etmekteyim. Aynı zamanda Tübitak Uzay Teknojileri ve Araştırma Ensitüsünde bursiyer olarak çalışmaktayım. 
            Özel olarak web, mobil uygulama geliştirme (flutter), yapay zeka ve görüntü işleme çalışmalarıyla ilgileniyorum.
          </div>
          <div className={style.buttonContainer}>
            <button className={style.showCv}>
              <a target='_blank' >CV'Mİ GÖRÜNTÜLE</a>
            </button>
            <button className={style.contact}>İLETİŞME GEÇELİM</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
