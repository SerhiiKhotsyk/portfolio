import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.css';

const LangSwitcher = () => {
  const [langMode, setLangMode] = useState(window.localStorage.getItem('language') || 'en');
  const { i18n } = useTranslation();

  const handleSwitch = () => {
    if (langMode === 'en') {
      setLangMode('ua');
      i18n.changeLanguage('ua');
      window.localStorage.setItem('language', 'ua');
    } else {
      setLangMode('en');
      i18n.changeLanguage('en');
      window.localStorage.setItem('language', 'en');
    }
  };
  console.log(langMode);

  return (
    <div onClick={handleSwitch} className={styles.language}>
      <p
        className={
          langMode === 'en'
            ? `${styles.language__mode} ${styles.en}`
            : `${styles.language__mode} ${styles.ua}`
        }>
        <span>{langMode}</span>
      </p>
    </div>
  );
};

export default LangSwitcher;
