import styles from "../About/About.module.css"
import DownloadResume from '../DownloadResume/DownloadResume'
import WhatIdo from '../WhatIdo/WhatIdo'
const About = () => {
  return (
    <div className={` ${styles.main} bd1`}>
      <div className={`${styles.title_container} bd2`}>
        <p style={{ fontSize: '2rem', fontWeight: "800" }}>About Me</p>
        <p className={`${styles.keyword_know_me}`}>Get to Know me</p>
      </div>

      <div className={`${styles.introduction} bd4`}>
        <p style={{ color: "#E1E1E1" }}>Hi there! I'm Rutuja Dhanave, a web developer specializing in full-stack web application development. With strong foundational knowledge in PHP (CodeIgniter), JavaScript, TypeScript, MySQL, HTML, and CSS, I'm passionate about building secure, responsive, and scalable web solutions that solve real-world problems.

          I bring a blend of technical proficiency, hands-on project experience, and a commitment to clean, efficient code to every project. Whether it's designing interactive web interfaces, developing robust backend systems with CodeIgniter, or integrating REST APIs for seamless functionality, I'm dedicated to turning ideas into functional, high-quality software.

          Currently pursuing my Master's in Computer Applications and working as a Web Developer Intern, I'm eager to grow in a dynamic team by building solutions with modern engineering best practices. Let's collaborate to bring your vision to life and deliver applications that make an impact. Get in touch, and let's start building something amazing today!</p>
      </div>

      <div className="download_resume">
        <DownloadResume />
      </div>

      <section id="services">


        <div className={`${styles.what_i_do} bd2`}>
          <WhatIdo />
        </div>
      </section>

    </div>
  )
}

export default About