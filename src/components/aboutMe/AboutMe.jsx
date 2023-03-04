import styles from './AboutMe.module.css';
import braces from '../../assets/images/aboutMe/braces.svg';
import teg from '../../assets/images/aboutMe/teg.svg';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

const AboutMe = forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.aboutMe}>
        <div className={styles.textBlock}>
          <h5>
            aboutMe
            <span>()</span>
          </h5>
          <p>{t('aboutMetext1')}</p>
          <p>{t('aboutMetext2')}</p>
          <p>{t('aboutMetext3')}</p>
        </div>
        <div className={styles.spesificInfo}>
          <a href="#" className={styles.spesificInfo__elem}>
            <div>
              <h6>{t('Lates project')}</h6>
              <p>{t('Click here!')}</p>
            </div>
            <img src={teg} alt="teg" />
          </a>
          <a href="#" className={styles.spesificInfo__elem}>
            <div>
              <h6>{t('Hardest project')}</h6>
              <p>{t('Find here!')}</p>
            </div>
            <img src={braces} alt="braces" />
          </a>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
