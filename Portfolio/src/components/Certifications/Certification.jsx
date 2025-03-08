
import React, { useEffect, useRef, useState } from "react";
import styles from "./Certification.module.css";
// import certifications from "../../data/certification.json"
import { getImageUrl } from "../../utils";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from "axios"

// axios.defaults.withCredentials = true;

export const Certifications = () => {
    const Scrollref = useRef(null);
    const [certifications, setCertifications] = useState([]);

    const getCerts = async () => {
        try{
            const resp = await axios.get("https://raw.githubusercontent.com/NagarajMurgod/MyPortfolio/refs/heads/main/Portfolio/src/data/certification.json");
            console.log(resp.data);
            setCertifications(resp.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getCerts()
    },[])

    const RightScroll = () =>{
        let element =  Scrollref.current

        element.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    }
    const LeftScroll = () =>{

        let element =  Scrollref.current
        element.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    }

    
    return <section id="certifications" className={styles.container}>
        <h2 className={styles.title}>CERTIFICATION</h2>
        
        <div ref={Scrollref} className={styles.certContainer}>
            <KeyboardArrowLeftIcon onClick={LeftScroll} className={styles.arrows}/>
            <KeyboardArrowRightIcon onClick={RightScroll} className={styles.arrows}/>
            {certifications.map((cert,idx) => {
                return (
                    <div className={styles.certDiv} key={idx}>
                        <img src={getImageUrl(cert)} alt="" />
                    </div>
                )
            })}
        </div>

    </section>
}