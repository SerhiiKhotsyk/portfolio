import styles from './Header.module.css';
import linkedinIcon from '../../assets/images/header/linkedin.svg';
import githubIcon from '../../assets/images/header/github.svg';
import emailIcon from '../../assets/images/header/email.svg';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

const Header = ({ scrollTo, aboutRef, skillsRef, projectsRef, connectRef }) => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <span className={styles.firstname}>{t('S')}</span>
        <span className={styles.lastaname}>{t('K')}</span>
      </a>
      <ul className={styles.menu}>
        <li onClick={() => scrollTo(aboutRef)}>{t('About')}</li>
        <li onClick={() => scrollTo(skillsRef)}>{t('Skills')}</li>
        <li onClick={() => scrollTo(projectsRef)}>{t('Projects')}</li>
        <li onClick={() => scrollTo(connectRef)}>{t('Connect')}</li>
      </ul>
      <ul className={styles.social}>
        <li>
          <a href="https://www.linkedin.com/in/serhii-khotsyk-643939218/" target="_blank">
            <img src={linkedinIcon} />
            {t('Linkedin')}
          </a>
        </li>
        <li>
          <a href="https://github.com/SerhiiKhotsyk" target="_blank">
            <img src={githubIcon} />
            {t('Github')}
          </a>
        </li>
        <li>
          <a href="mailto: serhiikhotsyk@gmail.com">
            <img src={emailIcon} />
            {t('Contact me')}
          </a>
        </li>
      </ul>
      <LangSwitcher />
    </header>
  );
};

export default Header;
