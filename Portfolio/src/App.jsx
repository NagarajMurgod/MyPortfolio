import styles from "./App.module.css"
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skill";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Certifications } from "./components/Certifications/Certification";

function App() {


  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <Experience/>
        <Skills/>
        <Projects />
        <Certifications/>
        <Contact />
      </div>
    </>
  )
}

export default App
