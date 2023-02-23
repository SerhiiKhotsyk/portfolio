import { useRef } from 'react';
import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Connect from './components/connect/Connect';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProfileInfo from './components/profileInfo/ProfileInfo';
import Projects from './components/projects/Projects';
import ScrollUpButton from './components/scrollUpButton/ScrollUpButton';
import Skills from './components/skills/Skills';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Header
        scrollTo={scrollToSection}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        connectRef={connectRef}
      />
      <main>
        <ProfileInfo />
        <AboutMe ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Connect ref={connectRef} />
        <Footer />
        <ScrollUpButton />
      </main>
    </div>
  );
}

export default App;
