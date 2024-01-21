import React from 'react'
import style from "../style.module.css"
function About({scrollToSection}) {
  const pdfFilePath = process.env.PUBLIC_URL + '/assets/cv/Melike_Isik_CV.pdf';

  const openPDFViewer = () => {
    window.open(pdfFilePath, '_blank');
  };

  return (
    <div className={style.about} >
      <div className={style.pageTitle}>
        <span style={{fontSize:"35px"}}>Hakkımda</span>
      </div>
      <div className={style.seperate}>
            <div>-</div>
      </div>
      <div className={style.cv}>
        <div className={style.picture}>
          <img src='/assets/images/me.jpg' alt='Profile Picture' />
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
            <button onClick={openPDFViewer}  className={style.showCv}>
              CV'Mİ GÖRÜNTÜLE
            </button>
            <button  onClick={() => scrollToSection("iletisim")} className={style.contact}>İLETİŞİME GEÇELİM</button>
          </div>
        </div>
      </div>
      <div className={style.skillsContainer}>
          <h2>Yazılım</h2>
          <div className={style.skillsBox}>
            <span>REACT/HTML/CSS/JS</span>
            <div style={{width:"90%"}} className={style.skillsBar}>
              <div className={style.dataProgress}>90%</div>
            </div>
          </div>
          <div className={style.skillsBox}>
            <span>PYTHON</span>
            <div style={{width:"80%"}} className={style.skillsBar}>
              <div className={style.dataProgress}>80%</div>
            </div>
          </div>
          <div className={style.skillsBox}>
            <span>FLUTTER</span>
            <div style={{width:"60%"}} className={style.skillsBar}>
              <div className={style.dataProgress}>60%</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
