import styles from './Header.module.css';
import linkedinIcon from '../../assets/images/header/linkedin.svg';
import githubIcon from '../../assets/images/header/github.svg';
import emailIcon from '../../assets/images/header/email.svg';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import { useContext, useEffect, useRef, useState } from 'react';
import { LangContext } from '../../hoc/LangProvider/LangProvider';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = ({ scrollTo, aboutRef, skillsRef, projectsRef, connectRef }) => {
  const { t } = useContext(LangContext);
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef(null);

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  // обробляємо клік, якщо клік відбувається не по елементу сорт, то закриваємо попап
  useEffect(() => {
    const handleClose = (e) => {
      if (burgerRef.current && !e.composedPath().includes(burgerRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener('click', handleClose);

    // видаляємо прослухохувач при розмонтіровці елемента, якщо не видалити,
    //  то при наступному рендері цього компонента буде вже два прослуховувача і т.д.
    return () => {
      document.body.removeEventListener('click', handleClose);
    };
  }, []);

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
      <div className={styles.menu__burger} onClick={handleBurger} ref={burgerRef}>
        <RxHamburgerMenu />
        <ul
          className={
            isOpen ? `${styles.burger__popup} ${styles.active}` : `${styles.burger__popup}`
          }>
          <li onClick={() => scrollTo(aboutRef)}>{t('About')}</li>
          <li onClick={() => scrollTo(skillsRef)}>{t('Skills')}</li>
          <li onClick={() => scrollTo(projectsRef)}>{t('Projects')}</li>
          <li onClick={() => scrollTo(connectRef)}>{t('Connect')}</li>
        </ul>
      </div>
      <LangSwitcher />
    </header>
  );
};

export default Header;
