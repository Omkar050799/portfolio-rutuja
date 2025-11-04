import styles from "./HomeScreen.module.css"
import Poster from '../Poster/Poster'
import ContactMeBtn from '../ContactmeBtn/ContactMeBtn'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import GetInTouch from '../GetInTouch/GetInTouch'
import Footer from '../Footer/Footer'

const HomeScreen = () => {


  return (
    <div className={`${styles.main} bd5`}>
      <section id='home'>
        <div className={`${styles.content} bd1`}>
          <Poster />
          <div className={`${styles.title} bd2`}>
            <p className={`${styles.name}`}>Rutuja Dhanave</p>
            <p className={`${styles.profession}`}>Web Developer</p>
          </div>
          <div className={`${styles.introduction} bd4`}>
            <p>Motivated and detail-oriented <span className={`${styles.keyword}`}> Web Developer </span> with strong foundational knowledge in <span className={`${styles.keyword}`}> full-stack </span> development using PHP (CodeIgniter), JavaScript, TypeScript, MySQL, HTML, and CSS. Proficient in <span className={`${styles.keyword}`}> object-oriented programming </span> and version control systems like Git. Skilled in building <span className={`${styles.keyword}`}> secure, responsive, and scalable </span> web applications, and passionate about clean code, debugging, and technical documentation.</p>
          </div>
          <div className={`${styles.contact_me_btn_container} bd2`}>
            <ContactMeBtn />
          </div>


        </div>
      </section>

      <section id="projects" className={`${styles.page_section}`}>
        <p className='page-title' style={{ alignSelf: "center", justifySelf: 'center' }}>PROJECTS</p>
        <Projects />
      </section>

      <section id="experience" className={`${styles.page_section}`}>
        <p className='page-title' style={{ alignSelf: "center", justifySelf: 'center' }}>EXPERIENCE</p>
        <Experience />
      </section>



      <section id="about" className={`${styles.about_section} ${styles.page_section}`}>
        <About />
      </section>
      <section id="getInTouch">
        <p className='page-title' style={{ alignSelf: "center", justifySelf: 'center' }}>Get In Touch</p>
        <GetInTouch />
      </section>

      <section>
        <Footer />

      </section>

      <section id='resume' className={`${styles.page_section}`}>
        {/* <Resume /> */}
      </section>
    </div>
  )
}

export default HomeScreen