import styles from "../DownloadResume/DownloadResume.module.css"

const DownloadResume = () => {

  const handleDownload=()=>{
    const link=document.createElement("a");
    link.href="/files/Rutuja_MCA_Resume.pdf";
    link.download="Rutuja_Dhanave_Resume.pdf"
    link.click();
  }

  return (
    <div className={`${styles.main}`} onClick={handleDownload}>
        <p>Download Resume</p>
    </div>
  )
}

export default DownloadResume