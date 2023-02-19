import styles from './Header.module.css';
import linkedinIcon from '../../assets/images/header/linkedin.svg';
import githubIcon from '../../assets/images/header/github.svg';
import emailIcon from '../../assets/images/header/email.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.firstname}>S</span>
                <span className={styles.lastaname}>K</span>
            </div>
            <ul className={styles.menu}>
                <li><a>About</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
                <li><a>Connect</a></li>
            </ul>
            <ul className={styles.social}>
                <li><a href='https://www.linkedin.com/in/serhii-khotsyk-643939218/' target='_blank'><img src={linkedinIcon}/>Linkedin</a></li>
                <li><a href='https://github.com/SerhiiKhotsyk' target='_blank'><img src={githubIcon}/>Github</a></li>
                <li><a href="mailto: serhiikhotsyk@gmail.com"><img src={emailIcon}/>Contact me</a></li>
            </ul>
        </header>
    );
}

export default Header;