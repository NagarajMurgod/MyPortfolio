
import React, { useRef } from "react";
import styles from "./Certification.module.css";
import certifications from "../../data/certification.json"
import { getImageUrl } from "../../utils";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export const Certifications = () => {
    const Scrollref = useRef(null);


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

    
    return <section className={styles.container}>
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