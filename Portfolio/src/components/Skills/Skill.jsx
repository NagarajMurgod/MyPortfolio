import React from "react";
import styles from "./Skills.module.css";
// import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import axios from "axios";
import { useState,useEffect } from "react";
export const Skills = () => {

  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
      try{
          const resp = await axios.get("https://raw.githubusercontent.com/NagarajMurgod/MyPortfolio/refs/heads/main/Portfolio/src/data/skills.json");
          setSkills(resp.data);
      }catch(error){
          console.log(error);
      }
  }
  useEffect(()=>{
      getSkills()
  },[])

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>TOOLS & TECHNOLOGIES</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};