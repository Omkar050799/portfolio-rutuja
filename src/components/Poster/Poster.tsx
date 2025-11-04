import styles from "./Poster.module.css"
import poster from "../../assets/rutuja_profile.png"

const Poster = () => {
  return (
    <div className={`${styles.main} bd1`}>
      <img src={poster} alt="Rutuja Dhanave - Web Developer" />
    </div>
  )
}

export default Poster