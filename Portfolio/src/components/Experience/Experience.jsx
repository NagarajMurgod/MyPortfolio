import React, { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
// import experience from "../../data/experience.json";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from "axios";


export const Experience = () => {

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  // const itemref = useRef(null);
  const [dot, setDot] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [experience, setExperience] = useState([]);

  
  const getExp = async () => {
      try{
          const resp = await axios.get("https://raw.githubusercontent.com/NagarajMurgod/MyPortfolio/refs/heads/main/Portfolio/src/data/experience.json");
          setExperience(resp.data);
          setCanScrollLeft(false);
          setCanScrollRight(true);
          // setExpLen(resp.data.length);
      }catch(error){
          console.log(error);
      }
  }

  useEffect(()=>{
    getExp();
  },[]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const divElement = entry.target;
            const divOffset = divElement.offsetLeft;
            const containerWidth = scrollRef.current.offsetWidth;
            const divWidth = divElement.offsetWidth;

            scrollRef.current.scrollTo({
              left: divOffset - (containerWidth - divWidth) / 2,
              behavior: "smooth", // Smooth scroll animation
            })
            setDot(entry.target.value)
            if(entry.target.value === 0){
              setCanScrollLeft(false);
            }
            else{
              setCanScrollLeft(true);
            }
            if(entry.target.value === experience.length){
              setCanScrollRight(false);
            }
            else{
              setCanScrollRight(true);
            }
            // Get the offset of the div within the container
          } else {
            
          }
        });
      },
      {
        root: scrollRef.current,
        rootMargin: '0px 20%',
        threshold: 0.3, // 20% visibility
      }
    );

    
    scrollRef.current.childNodes.forEach((div) => {
      if (div) observer.observe(div);
    });

    return () => {
      // Cleanup observer
      scrollRef.current.childNodes.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, [experience]);

  const prevSlide = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth + 50.5;
       // Adjust the scroll distance
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - containerWidth,
        behavior: 'smooth', 
      });
      if(dot > 0) setDot(prev => prev - 1);

    }
  }

  const nextSlide = () => {

    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth + 50.5;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + containerWidth,
        behavior: 'smooth', // Smooth scroll
      });
      if(dot < experience.length) setDot(prev => prev + 1);
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


  const scrollJobDesc = () => {
    let element = document.querySelector(`#exp${dot} ul`);
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      element.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    else{
      element.scrollBy({
        top: 50, // Scroll down by 100px vertically
        left: 0,  // No horizontal scroll
        behavior: 'smooth', // Enable smooth scrolling
      });
      console.log(element);
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <h2 className={styles.title} id="experience">Experience</h2>
        <section className={styles.container} >
          {canScrollLeft ? <KeyboardArrowLeftIcon 
            onClick={prevSlide} 
            className={`${styles.leftarrow} ${styles.arrows}`}
          />:""}
          {canScrollRight ?<KeyboardArrowRightIcon onClick={nextSlide} className={`${styles.rightarrow} ${styles.arrows}`}/>:""}
          
          <div className={styles.dots}>
            {experience.map((exp,id)=>{
              return (
                <div key={id} style={{backgroundColor: dot === id ? "grey" : "" }}>
                </div>
              )
            })}
            <div style={{backgroundColor: dot === experience.length ? "grey" : "" }}>
            </div>
          </div>
          <div className={styles.content}>
            <ul 
              className={styles.aboutItems}
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}

            >
              {experience.map((exp,idx) => {
                return (
                  <li value={idx} id={"exp"+idx} key={idx} className={styles.aboutItem}>
                    <img src={getImageUrl(exp.company)} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                      <h3>{exp.role}</h3>
                      <h4>{exp.startEndDate}</h4>
                      <ul className={styles.jobDescription}>
                        {exp.experience.map((resp,id)=>{
                          return (
                            <>
                              <li key={id}>
                                {resp}
                              </li>
                            </>
                        )})}
                      </ul>
                    </div>
                    <div className={styles.fadedText}></div>
                  </li>
                )})}
                <li key={experience.length} value={experience.length} className={styles.futureExp}>
                  <p>
                    "Looking forward to transforming this space into a showcase of my contributions to your team's ongoing success."
                  </p>
                </li>
            </ul>
          </div>
          <button onClick={scrollJobDesc} className={styles.readMoreBtn}>Read More</button>
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