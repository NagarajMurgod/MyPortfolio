import styles from "./Additional.module.css"
import React, { useRef } from "react";


export const Additional = () => {
    return (
        <section id="education" className={styles.container}>
            <h2 className={styles.title}>EDUCATION</h2>
            <div className={styles.innerContainer}>
                <ul>
                    <li>
                        <h3>KLE Technological University, Hubbli</h3>
                        <h4>Electrical and Electronics Engineering</h4>
                        <h4>2019-2022</h4>
                        <p>CGPA : 8.16</p>
                    </li>
                    <li>
                        <h3>Government Polytechnic Belagavi</h3>
                        <h4>Electrical and Electronics</h4>
                        <h4>2016-2019</h4>
                        <p>Percentage : 83.36%</p>
                    </li>
                    <li>
                        <h3>Bharati Vidyalaya High School</h3>
                        <h4>SSLC</h4>
                        <h4>2015-2016</h4>
                        <p>Percentage : 86.56%</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}