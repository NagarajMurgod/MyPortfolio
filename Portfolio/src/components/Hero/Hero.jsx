import React from "react"
import { getImageUrl } from "../../utils.js";
import styles from "./Hero.module.css";

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
        else{
            url = "https://github.com/NagarajMurgod"
        }
        window.open(url);return false;
    }
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Nagaraj</h1>
            <p className={styles.description}>I'm a passionate python developer with 2.3 years of experience.</p>
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
            </div>
            <a className={styles.contactBtn} href="mailto:nagarajmurgod27oct@gmail.com">
                <span>
                    <img className={styles.gmailIcon} src={getImageUrl("icons/gmail.png")} alt="" />
                </span>
                Contact Me
            </a>
        </div>
        <img className={styles.heroImg} src={ getImageUrl("hero/profile.png") } alt="profile pic" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}