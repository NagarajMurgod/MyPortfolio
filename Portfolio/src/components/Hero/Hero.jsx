import React from "react"
import { getImageUrl } from "../../utils.js";
import styles from "./Hero.module.css";
import FileDownloadIcon from '@mui/icons-material/FileDownload';


export const Hero = () => {

    const opneUrl = (site) => {
        let url = ""
        if(site === "linkedin"){
            url = "https://www.linkedin.com/in/nagarajmurgod"
        }
        else if(site === "whatsapp"){
            url = "https://wa.me/+917353177719"
        }
        else if(site === "leetcode"){
            url = "https://leetcode.com/u/NagarajM/"
        }
        else if(site==="github"){
            url = "https://github.com/NagarajMurgod"
        }
        else{
            url = ""
        }
        window.open(url);return false;
    }
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Nagaraj</h1>
            <p className={styles.description}>A passionate Python developer who enjoys tackling challenges and delivering results. Aiming to grow as a software engineer by learning and adapting to new technologies.</p>
            <div className={styles.contacts}>
                <a href="#" onClick={opneUrl}>
                    <img src={getImageUrl("icons/linkdin.png")} onClick={()=>opneUrl("linkedin")} alt="" />
                </a>
                <a href="#">
                    <img src={getImageUrl("icons/leetcode.png")} onClick={()=>opneUrl("leetcode")}  alt="" />
                </a>
                <a href="#">
                    <img src={getImageUrl("icons/github.png")} onClick={()=>opneUrl("github")} alt="" />
                </a>
                <a href="#">
                    <img src={getImageUrl("icons/watsapp.png")} onClick={()=>opneUrl("whatsapp")} alt="" />
                </a>
                <a href="mailto:nagarajmurgod27oct@gmail.com">
                    <img src={getImageUrl("icons/gmail.png")} alt="" />
                </a>
                
            </div>

            <a className={styles.contactBtn} href={getImageUrl("hero/Resume.pdf")} download="myFile">
                <span>
                    <FileDownloadIcon/>
                </span>
                Resume
            </a>
        </div>
        <img className={styles.heroImg} src={ getImageUrl("hero/profile.png") } alt="profile pic" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}