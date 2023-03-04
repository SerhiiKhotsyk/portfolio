import { useContext, useState } from 'react';
import { LangContext } from '../../../hoc/LangProvider/LangProvider';
import styles from './LangSwitcher.module.css';

const LangSwitcher = () => {
  const { langMode, setLangMode } = useContext(LangContext);

  const handleSwitch = () => {
    if (langMode === 'en') {
      setLangMode('ua');
      window.localStorage.setItem('language', 'ua');
    } else {
      setLangMode('en');
      window.localStorage.setItem('language', 'en');
    }
  };

  return (
    <div onClick={() => handleSwitch()} className={styles.language}>
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
