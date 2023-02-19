import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import Connect from './components/connect/Connect';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ProfileInfo from './components/profileInfo/ProfileInfo';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProfileInfo/>
        <AboutMe />
        <Skills/>
        <Projects />
        <Connect/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
