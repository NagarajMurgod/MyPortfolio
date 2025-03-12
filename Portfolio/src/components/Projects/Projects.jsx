import React, { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import axios from "axios";


export const Projects = () => {

  const Scrollref = useRef(null);
  const [projects, setProjects] = useState([]);


  const getProjects = async () => {

    try{
      const resp = await axios.get("https://raw.githubusercontent.com/NagarajMurgod/MyPortfolio/refs/heads/main/Portfolio/src/data/projects.json");
      setProjects(resp.data);
    }catch(error){
        console.log(error);
    }
  }

  useEffect(()=>{
    getProjects();
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
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div ref={Scrollref} className={styles.projects}>
        <KeyboardArrowLeftIcon onClick={LeftScroll} className={styles.arrows}/>
        <KeyboardArrowRightIcon onClick={RightScroll} className={styles.arrows}/>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} className={styles.projectCard} />;
        })}
      </div>
    </section>
  );
};