import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import experience from "../../data/experience.json";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const About = () => {


  const [slide, setSlide] = useState(0);
  const itemRef = useRef(null);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
        // Scroll to show the full div when 10% is visible, and mouse is released
        const element = entry.target;
        scrollRef.current.scrollTo({
          left: element.offsetLeft - (scrollRef.current.clientWidth - element.offsetWidth) / 2,
          behavior: 'smooth',
        });
        observer.unobserve(entry.target);  // Unobserve once action is complete
      }
    });
  };

  useEffect(() => {
    console.log("wroknng");
    const observer = new IntersectionObserver(handleIntersection, {
      root: scrollRef.current,
      threshold: 0.1, // 10% visibility
    });

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  },[isDragging]);

  const prevSlide = () => {
    if(slide > 0){
      setSlide(prev => prev - 1);
    }
  }

  const nextSlide = () => {
    if(slide < experience.length){
      setSlide(prev => prev + 1)
    }
  }

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = (e.pageX - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - x;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };



  return (
    <>
      <div className={styles.mainContainer}>
        <h2 className={styles.title}>Experience</h2>
        <section className={styles.container} id="about">
          <KeyboardArrowLeftIcon 
            onClick={prevSlide} 
            className={`${styles.leftarrow} ${styles.arrows}`}
            style={{display : (slide == 0) ? "none" : "" }}
          />
          <KeyboardArrowRightIcon onClick={nextSlide} className={`${styles.rightarrow} ${styles.arrows}`} style={{display : (slide == experience.length) ? "none" : "" }}/>

          <div className={styles.content}>
            <ul 
              className={styles.aboutItems}
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}

            >
              {experience.map((exp,id) => {
                return (
                  <li ref={itemRef} key={id} className={ slide === id || true ? styles.aboutItem : styles.hideSlide}>
                    <img src={getImageUrl(exp.company)} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                      <h3>{exp.role}</h3>
                      <h4>{exp.startEndDate}</h4>
                      <ul className={styles.jobDescription}>
                        {exp.experience.map((resp,id)=>{
                          return (
                            <li key={id}>
                              {resp}
                            </li>
                        )})}
                      </ul>
                    </div>
                  </li>
                )})}
                <li className={ slide >= experience.length ? styles.futureExp : styles.hideSlide}>
                  "Looking forward to transforming this space into a showcase of my contributions to your team's ongoing success."
                </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};




// Here are a few refined variations of your sentence:

//     "I’m excited to fill this space with impactful contributions that drive the continued success of your team."
//     "Looking forward to transforming this space into a showcase of my contributions to your team's ongoing success."
//     "Eager to contribute meaningfully and fill this space with efforts that fuel your team's success."
//     "Anticipating the opportunity to fill this space with contributions that propel your team's ongoing achievements."
//     "I can’t wait to bring my skills and passion here, contributing to the lasting success of your team."