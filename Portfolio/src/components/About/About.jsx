import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import experience from "../../data/experience.json";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const About = () => {

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const itemref = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtonVisibility = () => {
    const container = scrollRef.current;
    if (container) {
      const isAtStart = container.scrollLeft <= 100 ;
      const isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth-100;

      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    console.log("re")
    if (container) {
      container.addEventListener('scroll', updateButtonVisibility);
    }
    // Clean up the event listener
    return () => {
      if (container) {
        container.removeEventListener('scroll', updateButtonVisibility);
      }
    };
  }, []);

  const prevSlide = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth + 50.5;
       // Adjust the scroll distance
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - containerWidth,
        behavior: 'smooth', 
      });
      

    }
  }

  const nextSlide = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth + 50.5;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + containerWidth,
        behavior: 'smooth', // Smooth scroll
      });
    }

  }

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = (e.pageX - startX);
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
          {canScrollLeft ? <KeyboardArrowLeftIcon 
            onClick={prevSlide} 
            className={`${styles.leftarrow} ${styles.arrows}`}
          />:""}

          {canScrollRight ?<KeyboardArrowRightIcon onClick={nextSlide} className={`${styles.rightarrow} ${styles.arrows}`}/>:""}

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
                  <li key={id} className={styles.aboutItem}>
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
                <li className={ false ? styles.futureExp : styles.hideSlide}>
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