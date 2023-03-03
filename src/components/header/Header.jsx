import styles from './Header.module.css';
import linkedinIcon from '../../assets/images/header/linkedin.svg';
import githubIcon from '../../assets/images/header/github.svg';
import emailIcon from '../../assets/images/header/email.svg';

const Header = ({ scrollTo, aboutRef, skillsRef, projectsRef, connectRef }) => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <span className={styles.firstname}>S</span>
        <span className={styles.lastaname}>K</span>
      </a>
      <ul className={styles.menu}>
        <li onClick={() => scrollTo(aboutRef)}>About</li>
        <li onClick={() => scrollTo(skillsRef)}>Skills</li>
        <li onClick={() => scrollTo(projectsRef)}>Projects</li>
        <li onClick={() => scrollTo(connectRef)}>Connect</li>
      </ul>
      <ul className={styles.social}>
        <li>
          <a href="https://www.linkedin.com/in/serhii-khotsyk-643939218/" target="_blank">
            <img src={linkedinIcon} />
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/SerhiiKhotsyk" target="_blank">
            <img src={githubIcon} />
            Github
          </a>
        </li>
        <li>
          <a href="mailto: serhiikhotsyk@gmail.com">
            <img src={emailIcon} />
            Contact me
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
